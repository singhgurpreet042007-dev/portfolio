'use client';

import React, { useState, memo } from 'react';
import { Project } from '../data/projects';
import { ProjectModal } from '../components/ProjectModal';
import { ColorChangeCards } from '../components/work/ColorChangeCards';

/**
 * Work Section
 * ----------------------------------------------------
 * High-performance, zero-lag architectural showcase featuring
 * 21st.dev Color Change Cards:
 * - Grayscale to full saturate image scale-up on hover
 * - Staggered rolling letter title animation
 * - 45° rotating directional arrow
 * - Deep 4-page interactive case study modal
 */
export const Work: React.FC = memo(() => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      style={{
        background: 'linear-gradient(180deg, rgba(161, 205, 142, 0.08) 0%, rgba(161, 205, 142, 0.02) 15%, #0b0b0b 35%, #080808 100%)',
      }}
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-full mx-auto select-none overflow-hidden"
    >
      {/* Technical blueprint accent */}
      <div
        aria-hidden="true"
        className="absolute top-4 left-6 sm:left-10 text-[9.5px] font-mono text-[#A1CD8E]/40 select-none tracking-widest z-10 pointer-events-none hidden sm:block"
      >
        + [ SYS_STAGE_01 // SELECTED_ARCHITECTURES ]
      </div>

      {/* Navigation Anchor */}
      <div id="projects" className="absolute -top-16 left-0 pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto mb-8 sm:mb-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-2 h-2 rounded-full bg-[#A1CD8E] shadow-[0_0_8px_#A1CD8E]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-white/70">
            Selected Systems · 2024–2026
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Selected Architectures
        </h2>
        <p className="text-xs sm:text-sm font-mono text-neutral-300 mt-1.5 max-w-xl">
          Zero-trust security engines, collaborative real-time SaaS platforms, and distributed cloud developer tools.
        </p>
      </div>

      {/* 2x2 High-Velocity Color Change Project Cards */}
      <div className="relative z-10 w-full">
        <ColorChangeCards onSelectProject={(project) => setSelectedProject(project)} />
      </div>

      {/* 4-Page Deep Architectural Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
});

Work.displayName = 'Work';

export default Work;
