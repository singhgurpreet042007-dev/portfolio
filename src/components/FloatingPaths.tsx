"use client";

import { useMemo } from "react";

export interface FloatingPathsProps {
  position?: number;
  pathCount?: number;
  className?: string;
}

export function FloatingPaths({
  position = 1,
  pathCount = 6,
  className = "",
}: FloatingPathsProps) {
  const paths = useMemo(() => {
    return Array.from({ length: pathCount }, (_, i) => {
      const p = position;
      return {
        id: i,
        d: `M-${380 - i * 18 * p} -${189 + i * 20}C-${
          380 - i * 18 * p
        } -${189 + i * 20} -${312 - i * 18 * p} ${216 - i * 20} ${
          152 - i * 18 * p
        } ${343 - i * 20}C${616 - i * 18 * p} ${470 - i * 20} ${
          684 - i * 18 * p
        } ${875 - i * 20} ${684 - i * 18 * p} ${875 - i * 20}`,
        width: 0.8 + i * 0.08,
        opacity: 0.12 + (i / pathCount) * 0.22,
        duration: 16 + (i % 4) * 4,
      };
    });
  }, [position, pathCount]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="w-full h-full text-white/40 dark:text-white/40"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            style={{
              opacity: path.opacity,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/**
 * Composite FloatingPaths container: renders lightweight dual opposing paths
 * with zero JS thread overhead.
 */
export function FloatingPathsHeroBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 [mask-image:radial-gradient(ellipse_75%_80%_at_50%_45%,#000_40%,transparent_100%)] ${className}`}
      style={{ transform: "translateZ(0)" }}
    >
      <FloatingPaths position={1} pathCount={6} />
      <FloatingPaths position={-1} pathCount={6} />
    </div>
  );
}

export default FloatingPaths;
