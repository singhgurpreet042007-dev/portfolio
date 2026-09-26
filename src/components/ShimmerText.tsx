"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ShimmerVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "purple"
  | "pink"
  | "orange"
  | "cyan"
  | "indigo"
  | "violet"
  | "rose"
  | "amber"
  | "lime"
  | "emerald"
  | "sky"
  | "slate"
  | "fuchsia";

export interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: ShimmerVariant;
  duration?: number;
  delay?: number;
  spread?: number;
}

const variantMap: Record<ShimmerVariant, string> = {
  default: "text-white",
  secondary: "text-neutral-400",
  destructive: "text-red-500",
  red: "text-red-500",
  blue: "text-[#2997ff]",
  green: "text-emerald-400",
  yellow: "text-yellow-400",
  purple: "text-purple-400",
  pink: "text-pink-400",
  orange: "text-orange-500",
  cyan: "text-cyan-400",
  indigo: "text-indigo-400",
  violet: "text-violet-400",
  rose: "text-rose-400",
  amber: "text-amber-400",
  lime: "text-lime-400",
  emerald: "text-emerald-400",
  sky: "text-sky-400",
  slate: "text-slate-400",
  fuchsia: "text-fuchsia-400",
};

export function ShimmerText({
  children,
  className,
  variant = "default",
  duration = 2,
  delay = 0.5,
}: ShimmerTextProps) {
  return (
    <div className="group inline-block overflow-hidden">
      <div>
        <motion.div
          className={cn(
            "inline-block [--shimmer-contrast:rgba(255,255,255,0.85)]",
            variantMap[variant],
            className
          )}
          style={{
            color: "transparent",
            WebkitTextFillColor: "transparent",
            backgroundImage:
              "linear-gradient(90deg, currentColor 0%, var(--shimmer-contrast, rgba(255,255,255,0.95)) 45%, var(--shimmer-contrast, rgba(255,255,255,0.95)) 55%, currentColor 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            backgroundRepeat: "no-repeat",
            backgroundSize: "200% 100%",
          } as React.CSSProperties}
          initial={{
            backgroundPosition: "200% 0",
          }}
          animate={{
            backgroundPosition: ["-100% 0", "200% 0"],
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "linear",
          }}
        >
          <span>{children}</span>
        </motion.div>
      </div>
    </div>
  );
}

export default ShimmerText;
