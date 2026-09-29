"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "../lib/utils";

interface CharacterProps {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
}

export const CharacterV1: React.FC<CharacterProps> = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.8], [distanceFromCenter * 65, 0]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.8],
    [(index % 2 === 0 ? -30 : 30) + Math.sin(index * 1.5) * 18, 0]
  );
  const rotateX = useTransform(scrollYProgress, [0, 0.8], [distanceFromCenter * 55, 0]);
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.8],
    [(index % 2 === 0 ? -32 : 32) + distanceFromCenter * 12, 0]
  );
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.8],
    [(index % 2 === 0 ? -20 : 20) + distanceFromCenter * 8, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.65, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0.2, 0.85, 1]);

  return (
    <motion.span
      className={cn("inline-block text-orange-500 will-change-transform", isSpace && "w-3 sm:w-5")}
      style={{ x, y, rotateX, rotateY, rotateZ, scale, opacity, transformStyle: "preserve-3d" }}
    >
      {char}
    </motion.span>
  );
};

export const CharacterV2: React.FC<CharacterProps> = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.8], [distanceFromCenter * 40, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 0.8], [Math.abs(distanceFromCenter) * 40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.8], [0.35, 0.85, 1]);

  return (
    <motion.div
      className="size-14 sm:size-16 p-2.5 rounded-2xl bg-white border border-neutral-300/80 shadow-md flex items-center justify-center shrink-0 will-change-transform"
      style={{ x, scale, y, opacity, transformOrigin: "center" }}
    >
      <img
        src={char}
        alt=""
        className="size-8 sm:size-9 object-contain select-none pointer-events-none"
      />
    </motion.div>
  );
};

export const CharacterV3: React.FC<CharacterProps> = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.8], [distanceFromCenter * 70, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [distanceFromCenter * 40, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [-Math.abs(distanceFromCenter) * 18, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.75, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.8], [0.35, 0.85, 1]);

  return (
    <motion.div
      className="size-14 sm:size-16 p-2.5 rounded-2xl bg-white border border-neutral-300/80 shadow-md flex items-center justify-center shrink-0 will-change-transform"
      style={{ x, rotate, y, scale, opacity, transformOrigin: "center" }}
    >
      <img
        src={char}
        alt=""
        className="size-8 sm:size-9 object-contain select-none pointer-events-none"
      />
    </motion.div>
  );
};

export const Bracket = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
};

// Stage 2: Creative & workflow design tools
const workflowIcons = [
  "/assets/icons/figma.svg",
  "/assets/icons/framer.svg",
  "/assets/icons/github.svg",
  "/assets/icons/notion.svg",
  "/assets/icons/discord.svg",
  "/assets/icons/mongodb.svg",
];

// Stage 3: Core production engineering frameworks
const coreIcons = [
  "/tech-icons/nextjs.svg",
  "/tech-icons/react.svg",
  "/tech-icons/typescript.png",
  "/tech-icons/javascript.png",
  "/tech-icons/html.png",
  "/tech-icons/css.png",
];

export const TechScatterSection: React.FC = () => {
  const targetRef1 = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef1,
    offset: ["start 90%", "center 60%"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2,
    offset: ["start 90%", "center 60%"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3,
    offset: ["start 90%", "center 60%"],
  });

  const text = "see more from ";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);
  const workflowCenter = Math.floor(workflowIcons.length / 2);
  const coreCenter = Math.floor(coreIcons.length / 2);

  return (
    <section className="relative w-full bg-[#f5f4f3] text-neutral-900 overflow-hidden select-none py-8 sm:py-12">
      {/* ─── STAGE 1: 3D SCATTER TEXT ASSEMBLY + "GS" SHORT-FORM MONOGRAM ─── */}
      <div
        ref={targetRef1}
        className="relative box-border flex flex-col items-center justify-center px-6 pt-8 pb-4 overflow-hidden"
      >
        <div
          className="w-full max-w-4xl text-center text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-neutral-950 z-10"
          style={{ perspective: "1000px" }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress1}
            />
          ))}
        </div>

        {/* ─── BOLD "GS" MONOGRAM IN LIGHT OPACITY GRAY WITH BREATHING GAP ─── */}
        <div className="relative mt-8 sm:mt-12 mb-4 sm:mb-6 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[120px] sm:text-[180px] md:text-[230px] lg:text-[270px] font-black tracking-tighter text-neutral-900/[0.08] leading-none uppercase">
            GS
          </span>
        </div>
      </div>

      {/* ─── STAGE 2: PARABOLIC ICON CONVERGENCE (WORKFLOW TOOLS) ─── */}
      <div
        ref={targetRef2}
        className="relative box-border flex flex-col items-center justify-center gap-5 sm:gap-7 px-6 pt-6 pb-12 sm:pt-8 sm:pb-16 overflow-hidden"
      >
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-950">
          <Bracket className="h-7 sm:h-10 text-neutral-900" />
          <span className="font-mono font-medium tracking-tight">
            designed with modern developer tools
          </span>
          <Bracket className="h-7 sm:h-10 scale-x-[-1] text-neutral-900" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-2xl mx-auto">
          {workflowIcons.map((char, index) => (
            <CharacterV2
              key={index}
              char={char}
              index={index}
              centerIndex={workflowCenter}
              scrollYProgress={scrollYProgress2}
            />
          ))}
        </div>
      </div>

      {/* ─── STAGE 3: 3D ROTATION CONVERGENCE (PRODUCTION FRAMEWORKS) ─── */}
      <div
        ref={targetRef3}
        className="relative box-border flex flex-col items-center justify-center gap-5 sm:gap-7 px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden"
      >
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-950">
          <Bracket className="h-7 sm:h-10 text-neutral-900" />
          <span className="font-mono font-medium tracking-tight">
            powered by production frameworks
          </span>
          <Bracket className="h-7 sm:h-10 scale-x-[-1] text-neutral-900" />
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-2xl mx-auto"
          style={{ perspective: "600px" }}
        >
          {coreIcons.map((char, index) => (
            <CharacterV3
              key={index}
              char={char}
              index={index}
              centerIndex={coreCenter}
              scrollYProgress={scrollYProgress3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechScatterSection;
