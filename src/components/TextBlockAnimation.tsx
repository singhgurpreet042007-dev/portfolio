import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

// Ensure plugins are registered
gsap.registerPlugin(SplitText, ScrollTrigger);

export interface TextBlockAnimationProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  blockColors?: string[];
  stagger?: number;
  duration?: number;
  className?: string;
}

export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  blockColors,
  stagger = 0.1, // Reduced for smoother flow
  duration = 0.6, // Slightly faster for snappiness
  className,
}: TextBlockAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // 1. Setup SplitText
      const split = new SplitText(containerRef.current, {
        type: "lines",
        linesClass: "block-line-parent",
      });

      // 2. Wrap lines and inject the block revealer manually
      const lines = split.lines;
      const blocks: HTMLDivElement[] = [];

      lines.forEach((lineEl, idx: number) => {
        const line = lineEl as HTMLElement;
        // Create the wrapper
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "block";
        wrapper.style.overflow = "hidden"; // Ensures text doesn't show outside

        // Resolve line block color (supports array of colors or single color)
        const activeColor =
          blockColors && blockColors.length > 0
            ? blockColors[idx % blockColors.length]
            : blockColor;

        // Create the Revealer Block
        const block = document.createElement("div");
        block.style.position = "absolute";
        block.style.top = "0";
        block.style.left = "0";
        block.style.width = "100%";
        block.style.height = "100%";
        block.style.backgroundColor = activeColor;
        block.style.zIndex = "2";
        block.style.transform = "scaleX(0)";
        block.style.transformOrigin = "left center";

        // Insert wrapper and move line inside
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
        wrapper.appendChild(block);

        // Set initial state of line to invisible
        gsap.set(line, { opacity: 0 });

        blocks.push(block);
      });

      // 3. Create the Master Timeline
      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        scrollTrigger: animateOnScroll
          ? {
              trigger: containerRef.current,
              start: "top 85%", // Triggers when top of element hits 85% viewport height
              toggleActions: "play none none reverse", // Replays cleanly if you scroll back up
            }
          : null,
        delay: delay,
      });

      // 4. Build the Animation Sequence
      // Step A: Scale Block 0 -> 1 (Left to Right)
      tl.to(blocks, {
        scaleX: 1,
        duration: duration,
        stagger: stagger,
        transformOrigin: "left center",
      })
        // Step B: Reveal Text (Instant)
        .set(
          lines,
          {
            opacity: 1,
            stagger: stagger,
          },
          `<${duration / 2}`
        )
        // Step C: Scale Block 1 -> 0 (Left to Right)
        .to(
          blocks,
          {
            scaleX: 0,
            duration: duration,
            stagger: stagger,
            transformOrigin: "right center",
          },
          `<${duration * 0.4}`
        );

      return () => {
        try {
          split.revert();
        } catch {
          // safe cleanup
        }
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay, blockColor, blockColors, stagger, duration],
    }
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ position: "relative" }}
    >
      {children}
    </div>
  );
}
