import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { StackLoader } from './components/StackLoader';
import { IntroPage } from './sections/IntroPage';
import { DirectoryPage } from './sections/DirectoryPage';
import { MainPortfolio } from './sections/MainPortfolio';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize luxury smooth, controlled slow-glide Lenis scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, // Luxurious, slow smooth deceleration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.72, // Reduced wheel speed gives animations ample time to play smoothly
      touchMultiplier: 1.2,
      infinite: false,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Lock scroll during initial stack loader so intro starts at top
  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    };
  }, [isLoading]);

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

      {/* ━━━ 1. INTRO PAGE (INTACT & LOCKED) ━━━ */}
      <IntroPage ready={!isLoading} />

      {/* ━━━ 2. DIRECTORY / NAVIGATION PAGE (PURE TEXTROLL ANIMATION) ━━━ */}
      <DirectoryPage />

      {/* ━━━ 3. MAIN PORTFOLIO SECTIONS ━━━ */}
      <MainPortfolio />
    </div>
  );
};

export default App;
