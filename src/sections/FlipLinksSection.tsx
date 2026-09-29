"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { ShimmerText } from "../components/ShimmerText";

interface ChannelItem {
  id: string;
  number: string;
  name: string;
  tag: string;
  handle: string;
  url: string;
}

const CHANNELS: ChannelItem[] = [
  {
    id: "github",
    number: "01",
    name: "GITHUB",
    tag: "Open Source · 15+ Repositories",
    handle: "@singhgurpreet042007-dev",
    url: "https://github.com/singhgurpreet042007-dev",
  },
  {
    id: "linkedin",
    number: "02",
    name: "LINKEDIN",
    tag: "Career & Engineering Network",
    handle: "in/gurpreet-singh",
    url: "https://linkedin.com/in/gurpreet-singh-0891a1337",
  },
  {
    id: "instagram",
    number: "03",
    name: "INSTAGRAM",
    tag: "Visual Log & Engineering Life",
    handle: "@04_gurpreet_",
    url: "https://www.instagram.com/04_gurpreet_/?hl=en",
  },
  {
    id: "gmail",
    number: "04",
    name: "GMAIL",
    tag: "Direct Inbox & Fast Ping",
    handle: "singh.gurpreet042007@gmail.com",
    url: "mailto:singh.gurpreet042007@gmail.com",
  },
];

interface FlipTextProps {
  text: string;
  isFlipped: boolean;
}

const FlipText: React.FC<FlipTextProps> = React.memo(({ text, isFlipped }) => {
  return (
    <div
      className="relative block overflow-hidden whitespace-nowrap text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight"
      style={{ lineHeight: 0.88 }}
    >
      {/* Top Default Text (slides up on hover) */}
      <div
        className={`flex text-neutral-400 group-hover:text-white transition-colors duration-300 ${
          isFlipped ? "text-white" : ""
        }`}
      >
        {text.split("").map((letter, i) => {
          const char = letter === " " ? "\u00A0" : letter;
          return (
            <span
              key={i}
              className={`inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[115%] ${
                isFlipped ? "-translate-y-[115%]" : ""
              }`}
              style={{
                transitionDelay: `${i * 20}ms`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Bottom Revealed Text (slides in on hover) */}
      <div className="absolute inset-0 flex text-accent group-hover:text-accent transition-colors duration-300">
        {text.split("").map((letter, i) => {
          const char = letter === " " ? "\u00A0" : letter;
          return (
            <span
              key={i}
              className={`inline-block translate-y-[115%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${
                isFlipped ? "translate-y-0" : ""
              }`}
              style={{
                transitionDelay: `${i * 20}ms`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
});

FlipText.displayName = "FlipText";

export const FlipLinksSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeAutoFlip, setActiveAutoFlip] = useState<number | null>(null);
  const isInViewRef = useRef(false);

  // Subtle auto-flip demonstration wave on touch devices using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    let timer: NodeJS.Timeout | null = null;
    let step = 0;
    const interval = setInterval(() => {
      if (!isInViewRef.current) return;
      setActiveAutoFlip(step % CHANNELS.length);
      timer = setTimeout(() => {
        setActiveAutoFlip(null);
      }, 1200);
      step++;
    }, 3500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="socials"
      className="relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-8 bg-surface text-text-primary overflow-hidden select-none border-t border-white/[0.06]"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <h2
              style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
              className="text-2xl sm:text-3xl md:text-4xl font-aribau font-bold text-white tracking-tight"
            >
              Connect Across Digital Hubs
            </h2>
          </div>


        </div>

        {/* Channels List */}
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {CHANNELS.map((channel, index) => {
            const isFlipped = hoveredId === channel.id || activeAutoFlip === index;

            return (
              <a
                key={channel.id}
                href={channel.url}
                target={channel.id === "gmail" ? undefined : "_blank"}
                rel={channel.id === "gmail" ? undefined : "noopener noreferrer"}
                onMouseEnter={() => setHoveredId(channel.id)}
                onMouseLeave={() => setHoveredId(null)}
                onTouchStart={() => setHoveredId(channel.id)}
                onTouchEnd={() => setTimeout(() => setHoveredId(null), 900)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-6 sm:py-8 px-2 sm:px-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
              >
                {/* Left: Index Number & Channel Name */}
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-mono text-neutral-500 group-hover:text-accent transition-colors shrink-0">
                    {channel.number}
                  </span>
                  <FlipText text={channel.name} isFlipped={isFlipped} />
                </div>

                {/* Right: Metadata tag & Handle */}
                <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 mt-3 md:mt-0 pl-8 md:pl-0">
                  <div className="flex flex-col md:text-right">
                    <span className="text-[11px] font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors">
                      {channel.tag}
                    </span>
                    <span className="text-[12px] font-mono text-neutral-500 group-hover:text-accent transition-colors font-medium">
                      {channel.handle}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight
                      size={15}
                      className="text-neutral-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlipLinksSection;
