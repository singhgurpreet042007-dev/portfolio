import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Shield,
  Layers,
  Terminal,
  FileCode2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Building2,
  Maximize2,
  Lock
} from 'lucide-react';
import { Project } from '../data/projects';
import { DotPattern } from './DotPattern';

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartXRef = React.useRef<number | null>(null);
  const touchStartYRef = React.useRef<number | null>(null);

  // Reset to first slide and close lightbox when a new project opens
  useEffect(() => {
    if (project) {
      setActiveSlide(0);
      setIsLightboxOpen(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsLightboxOpen(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Keyboard navigation: Escape to close (or close lightbox), Arrow keys to navigate slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      } else if (!isLightboxOpen && e.key === 'ArrowRight') {
        setActiveSlide((prev) => Math.min(prev + 1, (project.caseStudySlides?.length || 4) - 1));
      } else if (!isLightboxOpen && e.key === 'ArrowLeft') {
        setActiveSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, isLightboxOpen]);

  if (!project) return null;

  const slides = project.caseStudySlides || [];
  const currentSlideData = slides[activeSlide] || slides[0];
  const totalSlides = slides.length || 4;

  const handleNext = () => {
    if (activeSlide < totalSlides - 1) {
      setActiveSlide((prev) => prev + 1);
    } else if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const getCategoryIcon = () => {
    switch (project.category) {
      case 'Security & AI':
        return <Shield size={16} className="text-amber-400" />;
      case 'Full Stack SaaS':
        return <Layers size={16} className="text-accent" />;
      case 'Developer Tools':
        return <Terminal size={16} className="text-emerald-400" />;
      case 'Cafe & Hospitality':
        return <FileCode2 size={16} className="text-rose-400" />;
      case 'Campus Tech & Smart Utilities':
        return <Building2 size={16} className="text-emerald-400" />;
      default:
        return <Sparkles size={16} className="text-accent" />;
    }
  };

  const getSimulatedUrl = () => {
    const tabSlug = currentSlideData.tabLabel
      ? currentSlideData.tabLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      : `page-${currentSlideData.pageNumber}`;

    if (project.id === 'fluxora') {
      return `fluxora-hazel-nine.vercel.app/${tabSlug}`;
    }
    if (project.id === 'aegis-ai') {
      return `aegis-frontend-sigma.vercel.app/${tabSlug}`;
    }
    if (project.id === 'deployflow') {
      return `marketplace.visualstudio.com/deployflow/${tabSlug}`;
    }
    if (project.id === 'smart-campus') {
      return `readynest-task-2-ten.vercel.app/${tabSlug}`;
    }
    return `${project.id}.dev/${tabSlug}`;
  };

  const currentImage = currentSlideData.imageBanner || project.image;

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 lg:p-8 overflow-y-auto">
          {/* Backdrop with pure black deep glass blur & exploration dot pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/92 backdrop-blur-xl cursor-pointer overflow-hidden"
          >
            <DotPattern
              width={24}
              height={24}
              cx={1}
              cy={1}
              cr={1}
              className="pointer-events-none absolute inset-0 h-full w-full fill-white/[0.08] [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_85%)]"
            />
          </motion.div>

          {/* Modal Container: Studio Grade Pure Black Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ type: 'spring', damping: 30, stiffness: 350 }}
            className="relative w-full max-w-6xl xl:max-w-7xl bg-black rounded-2xl sm:rounded-3xl shadow-[0_25px_80px_-15px_rgba(0,0,0,1)] border border-white/[0.14] z-10 flex flex-col max-h-[94vh] overflow-hidden my-auto"
          >
            {/* Pure Black Dot Pattern — active strictly when exploring project showcase */}
            <DotPattern
              width={20}
              height={20}
              cx={1}
              cy={1}
              cr={1}
              className="pointer-events-none absolute inset-0 h-full w-full fill-white/[0.12] [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_95%)]"
            />

            {/* Top Bar Header: Executive Studio Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-3.5 border-b border-white/[0.08] bg-black/80 backdrop-blur-md shrink-0 relative z-10">
              {/* Project Identity */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                  {getCategoryIcon()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm sm:text-base font-rounded font-bold text-white tracking-tight">
                      {project.title}
                    </h2>
                    <span className="text-[11px] font-mono text-accent/90 hidden sm:inline-block">
                      / {project.category}
                    </span>
                    <span className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      CASE STUDY
                    </span>
                  </div>
                </div>
              </div>

              {/* Labeled Editorial Slide Tabs */}
              <div className="hidden md:flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/[0.06]">
                {slides.map((s, idx) => {
                  const isActive = activeSlide === idx;
                  const label = s.tabLabel || `Slide 0${s.pageNumber}`;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'text-white bg-white/[0.1] shadow-xs'
                          : 'text-text-secondary hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      <span className={isActive ? 'text-accent font-bold' : 'text-white/40'}>
                        0{s.pageNumber}
                      </span>
                      <span className="font-rounded">{label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeModalTab"
                          className="absolute inset-0 rounded-lg border border-accent/40 pointer-events-none"
                          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action Controls & Close */}
              <div className="flex items-center gap-2 sm:gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent text-xs font-mono font-medium transition-colors"
                  >
                    <span>Live App</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-text-secondary hover:text-white text-xs font-mono transition-colors"
                    title="View Source on GitHub"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
                {/* Close Button */}
                <button
                  onClick={onClose}
                  aria-label="Close Case Study"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-colors cursor-pointer group"
                >
                  <X size={15} className="group-hover:rotate-90 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Mobile Tab Scroller */}
            <div className="flex md:hidden items-center gap-1.5 px-4 py-2 border-b border-white/[0.06] bg-black/30 overflow-x-auto scrollbar-none">
              {slides.map((s, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-accent/20 text-accent font-bold border border-accent/30'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    0{s.pageNumber} · {s.tabLabel || `Page ${s.pageNumber}`}
                  </button>
                );
              })}
            </div>

            {/* Content Body with Touch Swipe Gestures */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1 overscroll-contain relative z-10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
                >
                  {/* Left Column: Deep Architectural Narrative (5 cols on desktop) */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      {/* Section Badge */}
                      <div className="inline-flex items-center gap-2 text-[10.5px] font-mono text-accent uppercase tracking-wider mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span>{currentSlideData.badge}</span>
                      </div>

                      {/* Main Slide Title & Subtitle */}
                      <h3 className="text-xl sm:text-2xl lg:text-[26px] font-rounded font-bold text-white tracking-tight leading-snug mb-1.5">
                        {currentSlideData.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-rounded font-medium text-accent/90 mb-4 leading-relaxed">
                        {currentSlideData.subtitle}
                      </p>

                      {/* Summary Paragraph */}
                      <p className="text-xs sm:text-[13px] font-rounded font-light text-text-secondary leading-relaxed mb-5">
                        {currentSlideData.summary}
                      </p>

                      {/* Key Capabilities Checklist */}
                      <div className="space-y-2.5 mb-6">
                        {currentSlideData.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-rounded font-light text-white/90">
                            <CheckCircle2 size={15} className="text-accent mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Architecture Highlights (Clean Line, No Card Container) */}
                      {currentSlideData.architectureHighlights && (
                        <div className="mb-6 space-y-2 border-l-2 border-accent/40 pl-3.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary block mb-1 font-semibold">
                            System Architecture
                          </span>
                          {currentSlideData.architectureHighlights.map((arch, aIdx) => (
                            <div key={aIdx} className="text-xs leading-relaxed">
                              <span className="font-rounded font-bold text-white">{arch.title}: </span>
                              <span className="font-rounded font-light text-neutral-400">{arch.desc}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Executive Metrics Row */}
                      {currentSlideData.metrics && (
                        <div className="flex flex-wrap items-baseline gap-6 sm:gap-8 pt-4 border-t border-white/[0.08]">
                          {currentSlideData.metrics.map((m, mIdx) => (
                            <div key={mIdx}>
                              <span className="text-[10px] font-mono text-text-secondary block uppercase tracking-wider">
                                {m.label}
                              </span>
                              <span className="text-base sm:text-lg font-rounded font-bold text-white mt-0.5 block">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Studio macOS Browser Frame Showcase (7 cols on desktop) */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    {/* The Studio Browser Frame */}
                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.14] bg-black shadow-[0_15px_50px_rgba(0,0,0,1)] group">
                      {/* Browser Chrome Header */}
                      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0d0d0d] border-b border-white/[0.08]">
                        {/* macOS Traffic Lights */}
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]/50" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 border border-[#1aab29]/50" />
                        </div>

                        {/* Centered Address Pill */}
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-md bg-black/60 border border-white/[0.06] text-[10.5px] sm:text-[11px] font-mono text-neutral-300 max-w-[130px] xs:max-w-[200px] sm:max-w-[360px] truncate">
                          <Lock size={10} className="text-emerald-400 shrink-0" />
                          <span className="truncate">{getSimulatedUrl()}</span>
                        </div>

                        {/* 8K Badge & Lightbox Trigger */}
                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9.5px] font-mono font-bold bg-accent/15 border border-accent/30 text-accent">
                            8K UHD
                          </span>
                          <button
                            onClick={() => setIsLightboxOpen(true)}
                            title="Inspect in 8K Fullscreen"
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
                          >
                            <Maximize2 size={12} />
                          </button>
                        </div>
                      </div>

                      {/* Frame Viewport with Screenshot */}
                      <div
                        onClick={() => setIsLightboxOpen(true)}
                        className="relative bg-black overflow-hidden cursor-zoom-in group/img aspect-[16/9] flex items-center justify-center"
                      >
                        <img
                          src={currentImage}
                          alt={`${project.title} - ${currentSlideData.title}`}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-[1.015]"
                          loading="eager"
                        />

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white shadow-xl">
                            <Maximize2 size={12} className="text-accent" />
                            <span>Click to inspect 8K full resolution</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Clean Typographic Tech Stack (No Cards) */}
                    <div className="pt-2 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-white/80">
                        <span className="text-[10.5px] uppercase tracking-wider text-accent font-semibold mr-1">
                          Stack /
                        </span>
                        {project.tags.map((tag, idx) => (
                          <React.Fragment key={tag}>
                            <span className="hover:text-accent transition-colors cursor-default">
                              {tag}
                            </span>
                            {idx < project.tags.length - 1 && (
                              <span className="text-white/20 select-none">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      {/* Quick Outbound Links */}
                      <div className="flex items-center gap-3 ml-auto">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:text-white transition-colors"
                          >
                            <span>Live App</span>
                            <ArrowUpRight size={12} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-white transition-colors"
                          >
                            <span>GitHub</span>
                            <ArrowUpRight size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modal Footer Navigation */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-t border-white/[0.08] bg-black/80 backdrop-blur-md shrink-0 relative z-10">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                disabled={activeSlide === 0}
                className={`inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full font-rounded font-medium transition-colors cursor-pointer ${
                  activeSlide === 0
                    ? 'opacity-30 cursor-not-allowed text-text-secondary'
                    : 'text-white hover:bg-white/10 border border-white/15 bg-white/5 shadow-xs'
                }`}
              >
                <ChevronLeft size={13} />
                <span>Previous</span>
              </button>

              {/* Progress & Pagination */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1.5">
                  {slides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveSlide(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activeSlide === dotIdx
                          ? 'w-7 bg-accent'
                          : 'w-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-text-secondary ml-2">
                  0{activeSlide + 1} / 0{totalSlides}
                </span>
                <span className="hidden lg:inline-block text-[10px] font-mono text-white/30 ml-3">
                  [← / → Navigate · ESC Exit]
                </span>
              </div>

              {/* Next / Finish Button */}
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 text-xs px-4 py-1.5 rounded-full font-rounded font-medium bg-accent text-white hover:bg-accent-hover transition-colors shadow-xs cursor-pointer"
              >
                <span>
                  {activeSlide === totalSlides - 1
                    ? project.liveUrl
                      ? 'Launch Live App'
                      : 'Done Exploring'
                    : 'Next Slide'}
                </span>
                {activeSlide === totalSlides - 1 && project.liveUrl ? (
                  <ExternalLink size={13} />
                ) : (
                  <ChevronRight size={13} />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Fullscreen 8K Lightbox Overlay */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 overflow-hidden"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Pure Black Dot Pattern in Fullscreen Lightbox */}
            <DotPattern
              width={24}
              height={24}
              cx={1}
              cy={1}
              cr={1}
              className="pointer-events-none absolute inset-0 h-full w-full fill-white/[0.08]"
            />

            {/* Top Lightbox Bar */}
            <div
              className="flex items-center justify-between text-white pb-3 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-accent/20 border border-accent/40 text-accent">
                  8K ULTRA RESOLUTION
                </span>
                <span className="text-sm font-rounded font-bold text-white">
                  {project.title} · {currentSlideData.title}
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors cursor-pointer"
              >
                <span>Close [ESC]</span>
                <X size={14} />
              </button>
            </div>

            {/* Lightbox High-Resolution Display Stage */}
            <div
              className="flex-1 flex items-center justify-center p-2 sm:p-4 overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage}
                alt={`${project.title} 8K View`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Bottom Lightbox Caption */}
            <div
              className="text-center text-xs font-mono text-neutral-400 pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <span>{currentSlideData.subtitle}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;
