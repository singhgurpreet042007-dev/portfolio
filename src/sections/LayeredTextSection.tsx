"use client";

import React from "react";
import { LayeredText } from "../components/LayeredText";
import { Layers } from "lucide-react";

export const LayeredTextSection: React.FC = () => {

  return (
    <section
      id="philosophy"
      className="relative w-full py-14 sm:py-20 md:py-24 bg-surface text-text-primary overflow-hidden select-none"
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
        <div className="relative py-6 sm:py-12 mt-6 sm:mt-10 flex justify-center items-center overflow-visible w-full max-w-full">
          <LayeredText className="my-2" />
        </div>


      </div>
    </section>
  );
};

export default LayeredTextSection;
