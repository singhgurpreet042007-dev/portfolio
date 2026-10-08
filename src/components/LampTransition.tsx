"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export interface LampTransitionProps {
  title: string;
  subtitle?: string;
  tag?: string;
  theme?: "burgundy" | "lavender" | "cyan";
  onComplete?: () => void;
  className?: string;
}

export function LampTransition({
  title,
  subtitle,
  tag,
  theme = "burgundy",
  onComplete,
  className = "",
}: LampTransitionProps) {
  useEffect(() => {
    // Hold the illuminated lamp for 2.4 seconds, then transition cleanly
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Color configurations matching project aesthetics
  const config = {
    burgundy: {
      leftConic: "conic-gradient(from 70deg at center top, #e11d48 0%, transparent 45%, transparent 100%)",
      rightConic: "conic-gradient(from 290deg at center top, transparent 0%, transparent 55%, #e11d48 100%)",
      glowBg: "bg-rose-600",
      centerGlow: "bg-rose-500",
      lineBg: "bg-rose-400",
      textGradient: "from-white via-rose-100 to-rose-400",
      tagColor: "text-rose-400/90",
    },
    lavender: {
      leftConic: "conic-gradient(from 70deg at center top, #8b5cf6 0%, transparent 45%, transparent 100%)",
      rightConic: "conic-gradient(from 290deg at center top, transparent 0%, transparent 55%, #8b5cf6 100%)",
      glowBg: "bg-violet-600",
      centerGlow: "bg-violet-500",
      lineBg: "bg-violet-400",
      textGradient: "from-white via-purple-100 to-violet-300",
      tagColor: "text-violet-400/90",
    },
    cyan: {
      leftConic: "conic-gradient(from 70deg at center top, #06b6d4 0%, transparent 45%, transparent 100%)",
      rightConic: "conic-gradient(from 290deg at center top, transparent 0%, transparent 55%, #06b6d4 100%)",
      glowBg: "bg-cyan-600",
      centerGlow: "bg-cyan-500",
      lineBg: "bg-cyan-400",
      textGradient: "from-white via-cyan-100 to-cyan-300",
      tagColor: "text-cyan-400/90",
    },
  }[theme];

  return (
    <div
      onClick={onComplete}
      className={cn(
        "relative flex h-full min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black select-none cursor-pointer",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left Conic Light Beam */}
        <motion.div
          initial={{ opacity: 0.3, width: "15rem" }}
          animate={{ opacity: 1, width: "32rem" }}
          transition={{
            delay: 0.1,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: config.leftConic,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[32rem] text-white"
        >
          <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Conic Light Beam */}
        <motion.div
          initial={{ opacity: 0.3, width: "15rem" }}
          animate={{ opacity: 1, width: "32rem" }}
          transition={{
            delay: 0.1,
            duration: 0.9,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: config.rightConic,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[32rem] text-white"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Atmospheric Backdrops */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Center Radiant Halo */}
        <div
          className={cn(
            "absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl",
            config.glowBg
          )}
        />

        {/* Core Light Source */}
        <motion.div
          initial={{ width: "8rem", opacity: 0.5 }}
          animate={{ width: "18rem", opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.9,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-30 h-36 w-72 -translate-y-[6rem] rounded-full blur-2xl",
            config.centerGlow
          )}
        />

        {/* Crisp Horizontal Light Horizon */}
        <motion.div
          initial={{ width: "15rem", opacity: 0.4 }}
          animate={{ width: "32rem", opacity: 1 }}
          transition={{
            delay: 0.15,
            duration: 0.9,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute inset-auto z-50 h-0.5 w-[32rem] -translate-y-[7rem] shadow-[0_0_20px_rgba(255,255,255,0.8)]",
            config.lineBg
          )}
        />

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black" />
      </div>

      {/* Illuminating Project Title & Content */}
      <div className="relative z-50 flex -translate-y-64 flex-col items-center px-6 text-center">
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            className={cn(
              "font-mono text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-3",
              config.tagColor
            )}
          >
            {tag}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut",
          }}
          className={cn(
            "bg-gradient-to-b py-2 bg-clip-text text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-transparent leading-[1.05]",
            config.textGradient
          )}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mt-3 text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.2em] text-neutral-400 max-w-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default LampTransition;
