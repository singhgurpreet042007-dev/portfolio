"use client";

import React, { useEffect, useRef } from "react";
import ContributionSkyline from "../components/ContributionSkyline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ContributionSkylineSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const glow = glowRef.current;
    if (!section || !container) return;

    const ctx = gsap.context(() => {
      // Fluid scroll-driven reveal: the card zooms forward dynamically as user scrolls
      // Completely unpinned - no scroll freeze or pause, flows naturally!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "center 48%",
          scrub: 0.5,
        },
      });

      // Card zooms forward into view ("aage aati hui")
      tl.fromTo(
        container,
        {
          scale: 0.86,
          y: 45,
          opacity: 0.45,
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "power2.out",
        }
      );

      if (glow) {
        tl.fromTo(
          glow,
          { scale: 0.6, opacity: 0.2 },
          { scale: 1.15, opacity: 0.85, ease: "power2.out" },
          0
        );
      }
    }, section);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contributions"
      className="relative w-full py-12 sm:py-16 md:py-20 bg-[#000000] text-white flex flex-col items-center justify-center overflow-hidden border-t border-white/[0.06]"
    >
      {/* Subtle ambient emerald glow behind the card */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-emerald-500/[0.07] blur-[130px] rounded-full will-change-transform"
        aria-hidden="true"
      />

      <div
        ref={containerRef}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10 will-change-transform"
      >
        {/* Clean 3D GitHub Isometric Rotating Skyline Card - exactly matching the user reference */}
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
