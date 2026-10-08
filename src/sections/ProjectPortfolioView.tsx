"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight, X, ChevronUp, ChevronDown } from 'lucide-react';
import { ProjectData } from '../data/projectsData';
import { GradientBackground } from '../components/GradientBackground';

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ProjectPortfolioViewProps {
  project: ProjectData;
  onClose: () => void;
}

export const ProjectPortfolioView: React.FC<ProjectPortfolioViewProps> = ({
  project,
  onClose,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Extract the project's images (minimum 4 photos)
  const images = project.images && project.images.length > 0
    ? project.images
    : [{ src: project.src, alt: project.title }];

  const img0 = images[0]?.src || project.src;
  const img1 = images[1]?.src || img0;
  const img2 = images[2]?.src || img0;
  const img3 = images[3]?.src || img0;

  // 4 alternating opposing-slide pages incorporating project photos and descriptions
  const pages = [
    // ─── 01. OVERVIEW & SCOPE ───
    {
      leftBgImage: img0,
      rightBgImage: null,
      leftContent: null,
      rightContent: {
        tag: `PROJECT ${project.number} // ${project.category}`,
        heading: project.title,
        subtitle: project.subtitle,
        description: project.architectureOverview || project.description,
      },
    },
    // ─── 02. CORE CHALLENGE & VULNERABILITY ───
    {
      leftBgImage: null,
      rightBgImage: img1,
      leftContent: {
        tag: '02 // THE CORE CHALLENGE',
        heading: 'PROBLEM MECHANICS',
        description: project.problemStatement,
      },
      rightContent: null,
    },
    // ─── 03. ENGINEERING EXECUTION & ARCHITECTURE ───
    {
      leftBgImage: img2,
      rightBgImage: null,
      leftContent: null,
      rightContent: {
        tag: '03 // SYSTEM EXECUTION',
        heading: 'ENGINEERING STRATEGY',
        description: project.solutionOverview || project.description,
      },
    },
    // ─── 04. SPECIFICATIONS & TECH ECOSYSTEM (FINALE) ───
    {
      leftBgImage: null,
      rightBgImage: img3,
      leftContent: {
        tag: '04 // SYSTEM SPECIFICATIONS',
        heading: 'ARCHITECTURE & STACK',
        description: project.keyHighlights?.[0] || 'High-performance architecture engineered for production scale.',
        isFinale: true,
      },
      rightContent: null,
    },
  ];

  const numOfPages = pages.length;
  const isLockedRef = useRef(false);
  const lastScrollTimeRef = useRef(0);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigateUp = React.useCallback(() => {
    setCurrentPage((p) => Math.max(1, p - 1));
  }, []);

  const navigateDown = React.useCallback(() => {
    setCurrentPage((p) => Math.min(numOfPages, p + 1));
  }, [numOfPages]);

  // Ultra-responsive single-page scroll listener: instant trigger on gesture, strict 1-page advance
  useEffect(() => {
    const ANIM_DURATION = 380; // Snappy 380ms transition

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // 1. Filter out micro-scroll trackpad drift noise (< 4px)
      if (Math.abs(e.deltaY) < 4) return;

      const now = Date.now();

      // 2. If already animating or lock active, absorb trailing inertia until gesture ends
      if (isLockedRef.current) {
        if (silenceTimerRef.current) {
          clearTimeout(silenceTimerRef.current);
        }
        const elapsed = now - lastScrollTimeRef.current;
        const remaining = Math.max(0, ANIM_DURATION - elapsed);
        const delay = Math.max(remaining, 70);
        silenceTimerRef.current = setTimeout(() => {
          isLockedRef.current = false;
        }, delay);
        return;
      }

      // 3. FRESH SCROLL GESTURE: Trigger NEXT PAGE INSTANTLY with zero delay!
      isLockedRef.current = true;
      lastScrollTimeRef.current = now;

      if (e.deltaY > 0) {
        navigateDown();
      } else {
        navigateUp();
      }

      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
      }
      silenceTimerRef.current = setTimeout(() => {
        isLockedRef.current = false;
      }, ANIM_DURATION);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      const now = Date.now();
      if (isLockedRef.current || now - lastScrollTimeRef.current < 320) return;

      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        isLockedRef.current = true;
        lastScrollTimeRef.current = now;
        navigateUp();
        setTimeout(() => {
          isLockedRef.current = false;
        }, 340);
      } else if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        isLockedRef.current = true;
        lastScrollTimeRef.current = now;
        navigateDown();
        setTimeout(() => {
          isLockedRef.current = false;
        }, 340);
      }
    };

    // Mobile touch swipe gestures
    let touchStartY: number | null = null;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY === null) return;
      const now = Date.now();
      if (isLockedRef.current || now - lastScrollTimeRef.current < 320) {
        touchStartY = null;
        return;
      }

      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 30) {
        isLockedRef.current = true;
        lastScrollTimeRef.current = now;
        if (diff > 0) {
          navigateDown();
        } else {
          navigateUp();
        }
        setTimeout(() => {
          isLockedRef.current = false;
        }, 340);
      }
      touchStartY = null;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigateDown, navigateUp, onClose]);

  // Map each project to its distinct faded theme:
  // Aegis -> Burgundy | Fluxora -> Blue | DeployFlow -> Yellow | Smart Campus -> Lavender
  const projectTheme: 'burgundy' | 'blue' | 'yellow' | 'lavender' = (() => {
    const id = (project.id || project.title || '').toLowerCase();
    if (id.includes('aegis')) return 'burgundy';
    if (id.includes('deploy')) return 'yellow';
    if (id.includes('smart') || id.includes('campus')) return 'lavender';
    return 'blue';
  })();

  // Render photo half with theme gradient (burgundy, blue, yellow, lavender)
  const renderImageHalf = (imgUrl: string, altText: string) => (
    <GradientBackground theme={projectTheme} className="p-6 sm:p-10 md:p-12 lg:p-16 select-none">
      {/* Perfectly adjusted, non-cropped high-res screenshot */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <img
          src={imgUrl}
          alt={altText}
          className="max-w-full max-h-[75vh] md:max-h-[82vh] w-auto h-auto object-contain rounded-xl sm:rounded-2xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.08)]"
          loading="eager"
          decoding="async"
        />
      </div>
    </GradientBackground>
  );

  // Render editorial text half matching the requested clean uppercase font hierarchy
  const renderContentHalf = (content: any) => (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-white px-6 sm:px-10 md:px-14 lg:px-20 py-10 bg-black select-text overflow-y-auto">
      <div className="w-full max-w-xl flex flex-col items-center text-center my-auto">
        {content.tag && (
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#A1CD8E] mb-3">
            {content.tag}
          </span>
        )}

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold uppercase mb-4 text-center tracking-tight text-white leading-[1.1]">
          {content.heading}
        </h2>

        {content.subtitle && (
          <p className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-wider mb-4">
            {content.subtitle}
          </p>
        )}

        {content.description && (
          <p className="text-sm sm:text-base md:text-lg text-center text-neutral-300 font-light leading-relaxed mb-6">
            {content.description}
          </p>
        )}

        {/* Finale actions on slide 4 */}
        {content.isFinale && (
          <div className="flex flex-col items-center gap-4 w-full mt-2">
            {project.keyHighlights && project.keyHighlights.length > 0 && (
              <div className="flex flex-col gap-2 max-w-md w-full mb-3 text-left">
                {project.keyHighlights.slice(0, 3).map((highlight, idx) => (
                  <div
                    key={idx}
                    className="text-xs font-mono text-neutral-300 bg-white/[0.04] border border-white/10 px-3 py-2 rounded-lg"
                  >
                    <span className="text-[#A1CD8E] mr-1.5">▸</span>
                    {highlight}
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 border border-white/20 transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-transparent text-neutral-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden h-screen w-full bg-black select-none">
      {/* ─── STICKY COMMAND BAR HEADER ─── */}
      <header className="absolute top-0 left-0 right-0 z-40 w-full px-6 sm:px-8 py-5 flex items-center justify-between pointer-events-auto bg-gradient-to-b from-black/80 to-transparent">
        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs font-mono uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-neutral-400" />
          <span className="font-semibold text-white tracking-tight">Portfolio</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-300 font-mono text-[11px]">{project.title}</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase">
            <span className="text-white font-bold">0{currentPage}</span>
            <span className="text-neutral-600"> / </span>
            <span>0{numOfPages}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project view"
            className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ─── SPLIT-SCREEN OPPOSING VERTICAL SLIDE PANELS ─── */}
      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = 'translateY(-100%)';
        const downOff = 'translateY(100%)';
        const leftTrans = isActive ? 'translateY(0)' : downOff;
        const rightTrans = isActive ? 'translateY(0)' : upOff;

        return (
          <div
            key={idx}
            className={`absolute inset-0 ${
              isActive ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
            style={{ zIndex: isActive ? 20 : (Math.abs(currentPage - idx) === 1 ? 10 : 5) }}
          >
            {/* Left Half (Desktop) / Top Half (Mobile) */}
            <div
              className="absolute top-0 left-0 w-full h-1/2 md:w-1/2 md:h-full transition-transform duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
              style={{ transform: leftTrans }}
            >
              {page.leftBgImage && renderImageHalf(page.leftBgImage, `${project.title} image ${idx}`)}
              {page.leftContent && renderContentHalf(page.leftContent)}
            </div>

            {/* Right Half (Desktop) / Bottom Half (Mobile) */}
            <div
              className="absolute top-1/2 left-0 w-full h-1/2 md:top-0 md:left-1/2 md:w-1/2 md:h-full transition-transform duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
              style={{ transform: rightTrans }}
            >
              {page.rightBgImage && renderImageHalf(page.rightBgImage, `${project.title} image ${idx}`)}
              {page.rightContent && renderContentHalf(page.rightContent)}
            </div>
          </div>
        );
      })}

      {/* ─── BOTTOM DOT INDICATORS ─── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 pointer-events-auto">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentPage === i + 1
                ? 'w-6 bg-white'
                : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* ─── DESKTOP RIGHT CHEVRONS ─── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2 pointer-events-auto">
        <button
          onClick={navigateUp}
          disabled={currentPage === 1}
          aria-label="Previous slide"
          className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
            currentPage === 1
              ? 'border-white/10 text-white/20 cursor-not-allowed'
              : 'border-white/20 text-white hover:bg-white/10'
          }`}
        >
          <ChevronUp className="w-4 h-4" />
        </button>
        <button
          onClick={navigateDown}
          disabled={currentPage === numOfPages}
          aria-label="Next slide"
          className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
            currentPage === numOfPages
              ? 'border-white/10 text-white/20 cursor-not-allowed'
              : 'border-white/20 text-white hover:bg-white/10'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProjectPortfolioView;
