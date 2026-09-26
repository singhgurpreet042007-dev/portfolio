"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

export interface LayeredTextLine {
  top: string;
  bottom: string;
}

export interface LayeredTextProps {
  lines?: LayeredTextLine[];
  className?: string;
  onStateChange?: (isOpen: boolean) => void;
}

const DEFAULT_LINES: LayeredTextLine[] = [
  { top: "\u00A0", bottom: "INFINITE" },
  { top: "INFINITE", bottom: "PROGRESS" },
  { top: "PROGRESS", bottom: "INNOVATION" },
  { top: "INNOVATION", bottom: "FUTURE" },
  { top: "FUTURE", bottom: "DREAMS" },
  { top: "DREAMS", bottom: "ACHIEVEMENT" },
  { top: "ACHIEVEMENT", bottom: "\u00A0" },
];

export const LayeredText: React.FC<LayeredTextProps> = ({
  lines = DEFAULT_LINES,
  className = "",
  onStateChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Responsive dimensions calculated for clean containment across all screen widths
  const [dimensions, setDimensions] = useState(() => {
    if (typeof window === "undefined") {
      return { fontSize: 68, lineHeight: 58, baseOffset: 34 };
    }
    const w = window.innerWidth;
    if (w >= 1024) return { fontSize: 68, lineHeight: 58, baseOffset: 34 };
    if (w >= 640) return { fontSize: 44, lineHeight: 40, baseOffset: 22 };
    if (w >= 380) return { fontSize: 27, lineHeight: 28, baseOffset: 13 };
    return { fontSize: 21, lineHeight: 23, baseOffset: 9 };
  });

  const resizeRaf = useRef<number | null>(null);

  const handleResize = useCallback(() => {
    if (resizeRaf.current) return;
    resizeRaf.current = requestAnimationFrame(() => {
      resizeRaf.current = null;
      const w = window.innerWidth;
      setDimensions((prev) => {
        let next;
        if (w >= 1024) next = { fontSize: 68, lineHeight: 58, baseOffset: 34 };
        else if (w >= 640) next = { fontSize: 44, lineHeight: 40, baseOffset: 22 };
        else if (w >= 380) next = { fontSize: 27, lineHeight: 28, baseOffset: 13 };
        else next = { fontSize: 21, lineHeight: 23, baseOffset: 9 };

        if (
          prev.fontSize === next.fontSize &&
          prev.lineHeight === next.lineHeight &&
          prev.baseOffset === next.baseOffset
        ) {
          return prev;
        }
        return next;
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeRaf.current) cancelAnimationFrame(resizeRaf.current);
    };
  }, [handleResize]);

  // Setup GSAP animation timeline
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const paragraphs = container.querySelectorAll("p");

    // Kill existing timeline before creating a new one
    timelineRef.current?.kill();

    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        setIsOpen(true);
        onStateChange?.(true);
      },
      onReverseComplete: () => {
        setIsOpen(false);
        onStateChange?.(false);
      },
    });

    tl.to(paragraphs, {
      y: -dimensions.lineHeight,
      duration: 0.85,
      ease: "power2.out",
      stagger: 0.08,
    });

    timelineRef.current = tl;

    const handleMouseEnter = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.reverse();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      tl.kill();
    };
  }, [dimensions.lineHeight, lines, onStateChange]);

  // Mobile Tap / Click toggle support
  const handleToggle = () => {
    if (!timelineRef.current) return;
    if (timelineRef.current.progress() > 0.5) {
      timelineRef.current.reverse();
    } else {
      timelineRef.current.play();
    }
  };

  const centerIndex = Math.floor(lines.length / 2);

  return (
    <div
      ref={containerRef}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      data-state={isOpen ? "open" : "closed"}
      aria-label="Interactive 3D Layered Typography. Click or hover to reveal values."
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
      className={`relative mx-auto select-none font-sans font-black tracking-[-1px] sm:tracking-[-2px] uppercase antialiased cursor-pointer transition-all duration-300 ${className}`}
      style={{
        fontSize: `${dimensions.fontSize}px`,
        maxWidth: "100%",
      }}
    >
      <ul className="list-none p-0 m-0 flex flex-col items-center">
        {lines.map((line, index) => {
          const isEven = index % 2 === 0;
          const translateX = (index - centerIndex) * dimensions.baseOffset;
          const skewStyle = isEven
            ? "skew(60deg, -30deg) scaleY(0.66667)"
            : "skew(0deg, -30deg) scaleY(1.33333)";

          return (
            <li
              key={index}
              className="overflow-hidden relative block will-change-transform"
              style={{
                height: `${dimensions.lineHeight}px`,
                transform: `translateX(${translateX}px) ${skewStyle}`,
                transformOrigin: "center center",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              {/* Top Text Item */}
              <p
                className={`px-3 sm:px-4 align-top whitespace-nowrap m-0 transition-colors duration-300 ${
                  isEven ? "text-neutral-200" : "text-neutral-400"
                }`}
                style={{
                  height: `${dimensions.lineHeight}px`,
                  lineHeight: `${dimensions.lineHeight - 2}px`,
                }}
              >
                {line.top}
              </p>

              {/* Bottom Revealed Text Item */}
              <p
                className={`px-3 sm:px-4 align-top whitespace-nowrap m-0 transition-colors duration-300 ${
                  isEven
                    ? "text-orange-400 drop-shadow-[0_0_16px_rgba(251,146,60,0.45)]"
                    : "text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                }`}
                style={{
                  height: `${dimensions.lineHeight}px`,
                  lineHeight: `${dimensions.lineHeight - 2}px`,
                }}
              >
                {line.bottom}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LayeredText;
