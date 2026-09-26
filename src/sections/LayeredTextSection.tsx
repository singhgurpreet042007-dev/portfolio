"use client";

import React from "react";
import { LayeredText } from "../components/LayeredText";
import { Layers } from "lucide-react";

export const LayeredTextSection: React.FC = () => {

  return (
    <section
      id="philosophy"
      className="relative w-full py-14 sm:py-20 md:py-24 bg-surface text-text-primary overflow-hidden border-t border-b border-white/[0.06] select-none"
    >
      {/* Ambient Radial Spotlight Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="h-[360px] w-[520px] max-w-full rounded-full bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-transparent blur-[90px]" />
      </div>

      {/* Subtle Matrix Grid Accent Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-3 shadow-sm">
          <Layers className="size-3 text-orange-400" aria-hidden="true" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-300 font-medium">
            理念 · <span className="text-orange-400">Core Principles</span>
          </span>
        </div>

        {/* Section Heading */}
        <h2
          style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-white tracking-tight"
        >
          The Kinetic Mindset
        </h2>

        {/* Section Description */}
        <p
          style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
          className="mt-2.5 text-xs sm:text-[13.5px] text-neutral-400 max-w-lg mx-auto font-light leading-relaxed"
        >
          Seven tenets governing architectural depth, execution speed, and relentless technical curiosity.
        </p>

        {/* 3D Isometric LayeredText Component Stage */}
        <div className="relative py-4 sm:py-8 mt-6 sm:mt-10 flex justify-center items-center overflow-hidden w-full max-w-full">
          <LayeredText className="my-2" />
        </div>

        {/* Bottom Micro Footer Quote */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-white/[0.05] max-w-md mx-auto">
          <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            ENGINEERING SYSTEMS · BUILT TO LAST
          </p>
        </div>
      </div>
    </section>
  );
};

export default LayeredTextSection;
