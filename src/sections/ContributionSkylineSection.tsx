"use client";

import React from "react";
import ContributionSkyline from "../components/ContributionSkyline";

export const ContributionSkylineSection: React.FC = () => {
  return (
    <section
      id="contributions"
      className="relative w-full py-10 sm:py-14 bg-[#000000] text-white flex flex-col items-center justify-center overflow-hidden border-t border-white/[0.06]"
    >
      {/* Subtle ambient emerald glow behind the card */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/[0.07] blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Clean 3D GitHub Isometric Rotating Skyline Card - zero scroll trap or stop */}
        <ContributionSkyline
          defaultView="3d"
          palette="github"
          orbit={true}
          autoRotate={true}
          heightScale={1.15}
          showStats={true}
          showLegend={false}
          showToggle={true}
          footer={null}
          className="border-white/[0.08] bg-[#050507]/95 shadow-[0_0_50px_rgba(0,0,0,0.85)]"
        />
      </div>
    </section>
  );
};

export default ContributionSkylineSection;
