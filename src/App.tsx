import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StackLoader } from './components/StackLoader';
import { IntroPage } from './sections/IntroPage';
import { DirectoryPage } from './sections/DirectoryPage';
import { MainPortfolio } from './sections/MainPortfolio';
import { ShaderTransitionOverlay } from './components/ShaderTransitionOverlay';
import { ProjectPortfolioView } from './sections/ProjectPortfolioView';
import { PROJECTS } from './data/projectsData';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTargetId, setTransitionTargetId] = useState<string | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const lastOpenedProjectIdRef = useRef<string | null>(null);
  const savedScrollYRef = useRef<number>(0);

  // Initialize luxury smooth, constant, and controlled slow-glide Lenis scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15, // Buttery smooth glide duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential decay: instant responsive start, silky glide to stop
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0, // Natural 1:1 wheel velocity proportional to user scrolling
      touchMultiplier: 1.5,
      syncTouch: false, // Native 120Hz touch feel without artificial emulation lag
      infinite: false,
      autoResize: true,
    });
    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    // Connect Lenis directly to GSAP ScrollTrigger for zero-lag lockstep updates
    lenis.on('scroll', ScrollTrigger.update);

    const onRefresh = () => {
      lenis.resize();
    };
    ScrollTrigger.addEventListener('refresh', onRefresh);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.removeEventListener('refresh', onRefresh);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      lenisRef.current = null;
      (window as any).lenis = null;
    };
  }, []);

  // Lock scroll during initial stack loader so intro starts at top
  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      lenisRef.current?.stop();
    } else if (!selectedProjectId) {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    };
  }, [isLoading, selectedProjectId]);

  // Open project with hypnotic Shader + Cosmic Spiral transition sequence
  const handleOpenProject = (projectId: string) => {
    const target = PROJECTS.find((p) => p.id === projectId);
    if (!target) return;

    // Save exact scroll position and clicked project ID
    savedScrollYRef.current = window.scrollY || window.pageYOffset || 0;
    lastOpenedProjectIdRef.current = projectId;
    setTransitionTargetId(projectId);
    setIsTransitioning(true);

    // Stop Lenis while transitioning so background doesn't move
    lenisRef.current?.stop();

    // Push browser history state for Back button support without leaving a persistent hash on reload
    try {
      window.history.pushState({ isProjectView: true, projectId }, '', window.location.pathname);
    } catch {
      // fallback safe
    }
  };

  // Called when the 2-stage Shader -> Spiral ENTER animation completes
  const handleTransitionComplete = React.useCallback(() => {
    if (transitionTargetId) {
      setSelectedProjectId(transitionTargetId);
      window.scrollTo(0, 0);
      lenisRef.current?.scrollTo(0, { immediate: true });
      lenisRef.current?.resize();
      lenisRef.current?.start();

      // Keep transition target active during smooth reveal crossfade, then clear
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionTargetId(null);
      }, 750);
    }
  }, [transitionTargetId]);

  // Synchronously position the window BEFORE the browser paints frame 1 on return
  useLayoutEffect(() => {
    if (!selectedProjectId && lastOpenedProjectIdRef.current) {
      const targetId = lastOpenedProjectIdRef.current;
      const cardEl = document.getElementById(`project-card-${targetId}`);
      const savedY = savedScrollYRef.current;

      lenisRef.current?.resize();
      if (cardEl) {
        const rect = cardEl.getBoundingClientRect();
        const targetOffset = Math.max(0, rect.top + window.scrollY - 80);
        window.scrollTo(0, targetOffset);
        if (lenisRef.current) {
          lenisRef.current.scrollTo(targetOffset, { immediate: true });
        }
      } else if (savedY > 0) {
        window.scrollTo(0, savedY);
        if (lenisRef.current) {
          lenisRef.current.scrollTo(savedY, { immediate: true });
        }
      }
    }
  }, [selectedProjectId]);

  // Scroll directly back to the EXACT project card with zero visual flash
  const scrollToOriginProject = () => {
    const targetId = lastOpenedProjectIdRef.current;
    const savedY = savedScrollYRef.current;

    let attempts = 0;
    const attemptScroll = () => {
      attempts++;
      const cardEl = targetId ? document.getElementById(`project-card-${targetId}`) : null;
      if (cardEl) {
        const rect = cardEl.getBoundingClientRect();
        const targetOffset = Math.max(0, rect.top + window.scrollY - 80);
        window.scrollTo(0, targetOffset);
        lenisRef.current?.scrollTo(targetOffset, { immediate: true });
      } else if (savedY > 0) {
        window.scrollTo(0, savedY);
        lenisRef.current?.scrollTo(savedY, { immediate: true });
      }

      if (attempts < 6) {
        requestAnimationFrame(attemptScroll);
      }
    };

    requestAnimationFrame(attemptScroll);
  };

  // Close dedicated project view cleanly and return directly to main portfolio at the exact project
  const handleCloseProject = () => {
    setSelectedProjectId(null);
    setIsTransitioning(false);
    setTransitionTargetId(null);

    // Clean browser history so state does not loop or re-trigger project window
    try {
      window.history.replaceState(null, '', window.location.pathname);
    } catch {
      // safe fallback
    }

    // Ensure Lenis scroll is active and body overflow restored
    document.body.style.overflow = '';
    lenisRef.current?.start();

    // Scroll directly to the EXACT project clicked
    scrollToOriginProject();
  };

  // On page mount / browser refresh: ALWAYS start from the beginning of the portfolio
  useEffect(() => {
    // If there was any residual project hash or state, reset it completely
    if (window.location.hash.startsWith('#project-')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    setSelectedProjectId(null);
    setIsTransitioning(false);
    setTransitionTargetId(null);
    window.scrollTo(0, 0);
  }, []);

  // Handle browser Back / Forward navigation: pressing Back returns directly to the exact project card
  useEffect(() => {
    const handlePopState = () => {
      if (selectedProjectId || isTransitioning) {
        handleCloseProject();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedProjectId, isTransitioning]);

  const activeProject = PROJECTS.find((p) => p.id === selectedProjectId);
  const transitionProject = PROJECTS.find((p) => p.id === transitionTargetId);

  return (
    <div className="relative w-full bg-surface min-h-screen">
      {/* ━━━ 0. INITIAL STACK OVERLOAD LOADER ━━━ */}
      {isLoading && (
        <StackLoader
          onComplete={() => setIsLoading(false)}
          duration={1}
          fadeOutDuration={0.7}
          backgroundColor="#000000"
        />
      )}

      {/* ━━━ TWO-STAGE SHADER + SPIRAL COSMIC WARP GATEWAY OVERLAY ━━━ */}
      <ShaderTransitionOverlay
        active={isTransitioning}
        projectTitle={transitionProject?.title}
        projectNumber={transitionProject?.number}
        transitionQuote={transitionProject?.transitionQuote}
        onTransitionComplete={handleTransitionComplete}
      />

      {/* ━━━ DEDICATED PROJECT DETAILS VIEW (ONLY PROJECT DETAILS, NO PORTFOLIO) ━━━ */}
      {activeProject ? (
        <ProjectPortfolioView
          project={activeProject}
          onClose={handleCloseProject}
        />
      ) : (
        <>
          {/* ━━━ 1. INTRO PAGE (INTACT & LOCKED) ━━━ */}
          <IntroPage ready={!isLoading} />

          {/* ━━━ 2. DIRECTORY / NAVIGATION PAGE (PURE TEXTROLL ANIMATION) ━━━ */}
          <DirectoryPage />

          {/* ━━━ 3. MAIN PORTFOLIO SECTIONS ━━━ */}
          <MainPortfolio onSelectProject={handleOpenProject} />
        </>
      )}
    </div>
  );
};

export default App;
