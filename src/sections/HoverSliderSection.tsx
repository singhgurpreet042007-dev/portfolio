"use client";

import React from "react";
import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  HoverSliderImage,
} from "../components/HoverSlider";

interface ShowcaseItem {
  id: string;
  title: string;
  imageUrl: string;
}

const ITEMS: ShowcaseItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    imageUrl: "/assets/showcase/web-dev-hero.jpg",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    imageUrl: "/assets/showcase/ui-ux-showcase.jpg",
  },
  {
    id: "full-stack",
    title: "Full-Stack Systems",
    imageUrl: "/assets/showcase/cloud-infra.jpg",
  },
  {
    id: "ai-intelligence",
    title: "AI & Intelligence",
    imageUrl: "/assets/showcase/ai-intelligence.jpg",
  },
];

export const HoverSliderSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 md:py-28 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#F5F2EB] text-neutral-900 border-y border-neutral-300/80 overflow-hidden select-none">
      <div className="relative max-w-7xl mx-auto">
        {/* ─── PURE HOVER SLIDER ANIMATION STAGE (NO FILLER HEADINGS, NO EXTRA LABELS) ─── */}
        <HoverSlider className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Staggered Text Items */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-neutral-300/80">
            {ITEMS.map((item, idx) => (
              <TextStaggerHover
                key={item.id}
                text={item.title}
                index={idx}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-black uppercase tracking-tight text-neutral-900 border-neutral-300/80 hover:text-neutral-950 whitespace-nowrap"
              />
            ))}
          </div>

          {/* Right Column: Clear, High-Visibility Image Stage */}
          <div className="lg:col-span-6 relative w-full aspect-[16/11] sm:aspect-[16/11] max-w-2xl mx-auto">
            <HoverSliderImageWrap className="size-full rounded-2xl md:rounded-3xl border border-neutral-300/90 shadow-2xl bg-neutral-200 overflow-hidden">
              {ITEMS.map((item, idx) => (
                <HoverSliderImage
                  key={item.id}
                  index={idx}
                  imageUrl={item.imageUrl}
                  alt={item.title}
                  className="size-full object-cover"
                />
              ))}
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>
      </div>
    </section>
  );
};

export default HoverSliderSection;
