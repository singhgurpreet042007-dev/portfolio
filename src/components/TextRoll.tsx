"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const STAGGER = 0.035;

export interface TextRollProps {
  children: string;
  className?: string;
  center?: boolean;
}

export function TextRoll({
  children,
  className,
  center = false,
}: TextRollProps) {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative inline-block overflow-hidden text-white/90 select-none",
        className
      )}
      style={{
        lineHeight: 0.88,
        transform: "translateZ(0)",
      }}
    >
      {/* Top Text (Slides up) */}
      <span className="flex" style={{ transform: "translateZ(0)" }}>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          const char = l === " " ? "\u00A0" : l;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: 0.32,
                ease: [0.33, 1, 0.68, 1],
                delay,
              }}
              className="inline-block"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
              key={i}
            >
              {char}
            </motion.span>
          );
        })}
      </span>

      {/* Bottom Text (Slides in from bottom) */}
      <span className="absolute inset-0 flex" style={{ transform: "translateZ(0)" }}>
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          const char = l === " " ? "\u00A0" : l;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: 0.32,
                ease: [0.33, 1, 0.68, 1],
                delay,
              }}
              className="inline-block text-accent"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
              key={i}
            >
              {char}
            </motion.span>
          );
        })}
      </span>
    </motion.span>
  );
}

export default TextRoll;
