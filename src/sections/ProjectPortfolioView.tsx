"use client";

import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, X } from 'lucide-react';
import { ProjectData } from '../data/projectsData';
import { SilkBackground } from '../components/SilkBackground';

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
  const [isRevealed, setIsRevealed] = useState(false);

  // Ensure view resets to top on mount and triggers smooth entrance reveal
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const r = requestAnimationFrame(() => {
      setIsRevealed(true);
    });
    return () => cancelAnimationFrame(r);
  }, [project.id]);

  // Keyboard escape listener to close view directly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const images = project.images && project.images.length > 0
    ? project.images
    : [{ src: project.src, alt: project.title }];

  // 1. FIRST HALF: CREAM (#F5F2EB) — Architecture Scope & Core Challenge
  const creamSequenceItems = [
    {
      index: '01',
      tag: 'SYSTEM ARCHITECTURE & PIPELINE',
      title: 'Technical Scope & Engine Topology',
      description: project.architectureOverview || project.description,
      image: images[0] || { src: project.src, alt: project.title },
    },
    {
      index: '02',
      tag: 'THE CORE CHALLENGE & VULNERABILITY',
      title: 'Problem Mechanics & Vulnerability Surface',
      description: project.problemStatement,
      image: images[1] || images[0],
    },
  ];

  // 2. SECOND HALF: SOFT MIXED GRAPHITE (#141518) — Execution, Highlights & Stack
  const darkSequenceItems = [
    {
      index: '03',
      tag: 'ENGINEERING EXECUTION',
      title: 'Algorithmic Strategy & System Defense',
      description: project.solutionOverview,
      image: images[2] || images[0],
    },
    {
      index: '04',
      tag: 'SYSTEM SPECIFICATIONS & TECH ECOSYSTEM',
      title: 'Core Architecture Highlights & Stack Inventory',
      description: null,
      highlights: project.keyHighlights,
      stack: project.techStack,
      image: images[3] || images[0],
    },
  ];

  return (
    <div
      className={`relative min-h-screen w-full select-text font-['Plus_Jakarta_Sans',_'Inter',_sans-serif] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isRevealed
          ? 'opacity-100 translate-y-0 scale-100 filter-none'
          : 'opacity-0 translate-y-3 scale-[0.985] blur-[3px]'
      }`}
    >
      {/* ─── STICKY HEADER (CLEAN EDITORIAL COMMAND BAR ON CREAM) ─── */}
      <header className="sticky top-0 z-50 w-full bg-[#F5F2EB]/95 backdrop-blur-md border-b border-neutral-300/80 text-neutral-900 transition-colors">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 h-14 sm:h-15 flex items-center justify-between">
          {/* Direct Back to Projects Link */}
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer text-xs font-mono uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-neutral-700" />
            <span className="font-semibold text-neutral-950 tracking-tight">Projects</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-600 font-mono text-[11px]">{project.title}</span>
          </button>

          {/* Direct Close Button */}
          <button
            onClick={onClose}
            aria-label="Close project view"
            className="w-8 h-8 rounded-full border border-neutral-300 hover:border-neutral-500 flex items-center justify-center text-neutral-600 hover:text-neutral-950 transition-all cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          FIRST HALF: SIGNATURE LUXURY CREAM (#F5F2EB)
          Includes Hero + Sequence 01 + Sequence 02
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#F5F2EB] text-neutral-900 selection:bg-orange-500/20 selection:text-neutral-950 overflow-hidden">
        {/* Animated Silk Background in Cream Half */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <SilkBackground theme="cream" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pb-14 sm:pb-20">
          {/* ─── COMPACT HERO (NO BOXES, NO CARDS) ─── */}
          <div className="pt-8 sm:pt-12 pb-10 sm:pb-12 border-b border-neutral-300/80">
            <div className="flex flex-wrap items-center gap-2.5 mb-2.5 text-[11px] font-mono text-neutral-500">
              <span className="text-orange-600 font-semibold uppercase tracking-wider">
                PROJECT {project.number}
              </span>
              <span>·</span>
              <span className="uppercase tracking-wider text-neutral-700">{project.category}</span>
              <span>·</span>
              <span>{project.timeline}</span>
              {project.id === 'deployflow' && (
                <>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 font-mono text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    35+ Downloads on VS Code
                  </span>
                </>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight leading-tight mb-2">
              {project.title}
            </h1>

            <p className="text-xs sm:text-[13.5px] text-neutral-600 font-normal leading-relaxed max-w-2xl mb-5">
              {project.subtitle}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-2.5 mb-7">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-mono font-medium transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <span>{project.id === 'deployflow' ? 'VS Code Marketplace' : 'Live Site'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 hover:border-neutral-500 text-neutral-800 text-xs font-mono font-medium transition-all active:scale-95 cursor-pointer"
                >
                  <GithubIcon className="w-3 h-3" />
                  <span>Source Code</span>
                </a>
              )}
            </div>

            {/* Horizontal Metrics Bar (Unboxed Flat List) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-5 border-t border-neutral-300/80">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-0.5">
                      {metric.label}
                    </span>
                    <span className="block text-sm sm:text-base font-bold text-neutral-950 tracking-tight">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ─── SEQUENCE 01 & 02 (CREAM HALF, HIGH-FIDELITY WINDOW FRAME BESIDE TEXT) ─── */}
          <div className="flex flex-col divide-y divide-neutral-300/80">
            {creamSequenceItems.map((item, idx) => (
              <div key={item.index} className="py-10 sm:py-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* Clean High-Definition Image Showcase (No duplicate title bars) */}
                  <div className={`md:col-span-6 flex justify-center ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="w-full max-w-[540px] rounded-2xl overflow-hidden border border-neutral-300/80 bg-neutral-900 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.18)]">
                      <img
                        src={item.image.src}
                        alt={item.image.alt || item.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.015]"
                      />
                    </div>
                  </div>

                  {/* Direct Corresponding Text */}
                  <div className={`md:col-span-6 flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="flex items-center gap-1.5 mb-2 text-[10px] font-mono text-orange-600 uppercase tracking-widest font-semibold">
                      <span>{item.index}</span>
                      <span>/</span>
                      <span>{item.tag}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight mb-2.5">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-xs sm:text-[13.5px] text-neutral-700 font-normal leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECOND HALF: SOFT MIXED GRAPHITE/CHARCOAL (#141518, NOT Z-BLACK)
          Includes Sequence 03 + Sequence 04 + Direct Return Bar
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#141518] text-neutral-200 border-t border-neutral-700/40 selection:bg-orange-500/20 selection:text-white overflow-hidden">
        {/* Animated Silk Background in Dark Half */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <SilkBackground theme="dark" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 pt-10 sm:pt-14 pb-20 sm:pb-28">
          {/* ─── SEQUENCE 03 & 04 (DARK HALF, HIGH-FIDELITY WINDOW FRAME BESIDE TEXT) ─── */}
          <div className="flex flex-col divide-y divide-neutral-800/80">
            {darkSequenceItems.map((item, idx) => (
              <div key={item.index} className="py-10 sm:py-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  {/* Clean High-Definition Image Showcase (No duplicate title bars) */}
                  <div className={`md:col-span-6 flex justify-center ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="w-full max-w-[540px] rounded-2xl overflow-hidden border border-neutral-700/60 bg-[#16181d] shadow-[0_8px_32px_-6px_rgba(0,0,0,0.45)] transition-all duration-300 hover:shadow-[0_16px_44px_-8px_rgba(0,0,0,0.6)]">
                      <img
                        src={item.image.src}
                        alt={item.image.alt || item.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.015]"
                      />
                    </div>
                  </div>

                  {/* Direct Corresponding Text */}
                  <div className={`md:col-span-6 flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="flex items-center gap-1.5 mb-2 text-[10px] font-mono text-orange-400 uppercase tracking-widest font-semibold">
                      <span>{item.index}</span>
                      <span>/</span>
                      <span>{item.tag}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2.5">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-xs sm:text-[13.5px] text-neutral-300 font-normal leading-relaxed mb-3">
                        {item.description}
                      </p>
                    )}

                    {/* Highlights if present */}
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-1.5 mb-3">
                        {item.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-neutral-300 font-normal leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Technology Stack Tags if present */}
                    {item.stack && item.stack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.stack.flatMap((g) => g.items).map((tech) => (
                          <span
                            key={tech}
                            className="text-[9.5px] font-mono px-2 py-0.5 rounded border border-neutral-700/70 text-neutral-300 bg-white/[0.04]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ─── DIRECT RETURN ACTION BAR (CLEAN, MINIMAL, NO CARDS) ─── */}
          <div className="pt-10 sm:pt-14 mt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-mono font-medium transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </button>

            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
              {project.title} · Technical Breakdown
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPortfolioView;
