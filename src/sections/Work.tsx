'use client';

import React, { memo } from 'react';
import { PROJECTS } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export const Work: React.FC = memo(() => {
  return (
    <section
      id="work"
      className="relative w-full bg-[#F5F2EB] text-neutral-900 pt-16 sm:pt-24 pb-24 sm:pb-36 select-none overflow-hidden"
    >
      <div id="projects" className="absolute -top-16 left-0 pointer-events-none" />

      {/* Hero Heading — Bold & Impactful */}
      <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10 mb-16 sm:mb-24 lg:mb-32">
        <Reveal>
          <div className="max-w-3xl">
            <h2
              style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.04em] text-neutral-950 leading-[0.92]"
            >
              Projects I've<br />
              <span className="text-neutral-400">Shipped.</span>
            </h2>
            <p
              style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
              className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-xl"
            >
              Real platforms built from scratch — security systems, SaaS products, developer tools, and infrastructure.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Alternating Project Showcase (No Cards, Vertical Flow, Side-by-Side Left/Right) */}
      <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
        <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <Reveal key={project.id} delay={0.05}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
                  {/* Image Presentation — Sleek frame, no card wrapper */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-200/60 shadow-lg hover:shadow-2xl transition-all duration-700">
                      <a
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative aspect-[16/10] overflow-hidden"
                      >
                        <img
                          src={project.src}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-neutral-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Number Badge */}
                        <span className="absolute top-4 left-4 text-xs font-mono font-bold text-neutral-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                          {project.number}
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Description Column — Beside the image, alternating left/right */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-neutral-400">
                        /{project.number}
                      </span>
                      <span className="h-px w-6 bg-neutral-300" />
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                        {project.subtitle}
                      </span>
                    </div>

                    <h3
                      style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight leading-[1.08] mb-4"
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
                      className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed mb-6"
                    >
                      {project.description}
                    </p>

                    {/* Action Links */}
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs sm:text-sm font-mono font-semibold transition-all active:scale-95 shadow-sm"
                        >
                          <span>Live</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950/5 text-neutral-900 text-xs sm:text-sm font-mono font-semibold transition-all active:scale-95"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Work.displayName = 'Work';

export default Work;
