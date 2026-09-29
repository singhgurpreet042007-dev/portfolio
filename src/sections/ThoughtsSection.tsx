'use client';

import React, { useState, useEffect } from 'react';
import { Quote, Compass } from 'lucide-react';
import { cn } from '../lib/utils';
import { Reveal } from '../components/Reveal';

const SQRT_5000 = Math.sqrt(5000);

interface ThoughtItem {
  tempId: number;
  thought: string;
  category: string;
  author: string;
  imgSrc: string;
}

/**
 * Curated Thoughts, Operating Rules & Life Principles
 * A balanced blend of deep focus, craft, extreme ownership, compounding, and equilibrium.
 */
const THOUGHTS_DATA: ThoughtItem[] = [
  {
    tempId: 0,
    thought: "Clarity comes from aggressive execution, not passive overthinking. Protect your focus like your most valuable currency.",
    category: "FOCUS & ATTENTION",
    author: "Rule 01 · Deep Execution",
    imgSrc: "https://cdn.21st.dev/assets/mirror/f0/f02fed36023656a5b5df6f247c83c96c53bfa9db5b98085cdee93ffc938a5f37.jpg",
  },
  {
    tempId: 1,
    thought: "Small, daily disciplines compound into unfair advantages over a decade. Show up and do the work, even when motivation is absent.",
    category: "CONSISTENCY",
    author: "Rule 02 · Compound Advantage",
    imgSrc: "https://cdn.21st.dev/assets/mirror/5b/5b5b2f3487692d40f629010ea6448d150907f780d8c262c4ca194b7386115c2d.jpg",
  },
  {
    tempId: 2,
    thought: "Blame is a passive state. Extreme ownership turns every setback, bug, or friction point into actionable engineering leverage.",
    category: "OWNERSHIP",
    author: "Rule 03 · Extreme Agency",
    imgSrc: "https://cdn.21st.dev/assets/mirror/10/10e2bfa5446e5c116e269b649b5f5e0106d96643f0a903048f3a056e40c35cd8.jpg",
  },
  {
    tempId: 3,
    thought: "Simple is harder than complex. You have to work twice as hard to get your thinking clean enough to make things simple.",
    category: "CRAFT & SIMPLICITY",
    author: "Rule 04 · The Art of Simplicity",
    imgSrc: "https://cdn.21st.dev/assets/mirror/fa/fae47bb0faba45d1e0696b6557ca36c551a738c7d6e3950e82bb69dd2f963a72.jpg",
  },
  {
    tempId: 4,
    thought: "You don't rise to the level of your goals; you fall to the level of your systems. Build systems that make good decisions the default.",
    category: "SYSTEMS THINKING",
    author: "Rule 05 · Resilient Systems",
    imgSrc: "https://cdn.21st.dev/assets/mirror/4f/4fb45af36b546e069b72527fdf4d904855a2b11b301fa738c8bc4d235595c4df.jpg",
  },
  {
    tempId: 5,
    thought: "Iteration beats rumination every single time. Ship early, measure reality, gather feedback, and calibrate with velocity.",
    category: "VELOCITY & SHIPPING",
    author: "Rule 06 · Velocity over Perfection",
    imgSrc: "https://cdn.21st.dev/assets/mirror/a4/a4dd47498f54944edb9cd8095fb751847193faac01d922bae494e68d0cf90f4f.jpg",
  },
  {
    tempId: 6,
    thought: "A calm mind produces high-conviction decisions. Energy management matters far more than time management.",
    category: "EQUILIBRIUM",
    author: "Rule 07 · Mental Equilibrium",
    imgSrc: "https://cdn.21st.dev/assets/mirror/b2/b2cd3e4ad761fd9954c265df5f86090c4f17c388c07f78332e75edfd7420f66a.jpg",
  },
  {
    tempId: 7,
    thought: "Stay relentlessly curious. The exact moment you believe you have fully figured things out, your growth permanently stops.",
    category: "LIFELONG GROWTH",
    author: "Rule 08 · Relentless Curiosity",
    imgSrc: "https://cdn.21st.dev/assets/mirror/9a/9a3f3f88dac2ceb807e98d4cbe99acc9813da6d0ce2859b1cf026747727e1667.jpg",
  },
];

interface ThoughtCardProps {
  position: number;
  item: ThoughtItem;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const ThoughtCard: React.FC<ThoughtCardProps> = React.memo(({
  position,
  item,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-6 sm:p-8 transition-all duration-500 ease-out select-none",
        isCenter
          ? "z-20 bg-neutral-950 text-white border-neutral-800 shadow-2xl scale-100"
          : "z-10 bg-neutral-100/90 text-neutral-800 border-neutral-300/80 hover:border-neutral-500 hover:bg-white"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(45px 0%, calc(100% - 45px) 0%, 100% 45px, 100% 100%, calc(100% - 45px) 100%, 45px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.45) * position}px)
          translateY(${isCenter ? -55 : position % 2 ? 18 : -18}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 0, 0, 0.2)"
          : "0 4px 12px rgba(0, 0, 0, 0.04)",
      }}
    >
      {/* Diagonal Chamfer Slash Line */}
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-white/20" : "bg-neutral-300"
        )}
        style={{
          right: -2,
          top: 43,
          width: SQRT_5000,
          height: 2,
        }}
      />

      {/* Header with Avatar & Category Badge */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <img
          src={item.imgSrc}
          alt={item.author}
          loading="lazy"
          decoding="async"
          className="h-12 w-11 sm:h-13 sm:w-12 rounded-xs bg-neutral-200 object-cover object-top border border-neutral-400/20"
          style={{
            boxShadow: isCenter ? "3px 3px 0px rgba(255,255,255,0.15)" : "3px 3px 0px rgba(0,0,0,0.1)",
          }}
        />

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9.5px] font-mono font-semibold tracking-wider uppercase border border-neutral-500/20">
          <Compass size={10} className={isCenter ? "text-emerald-400" : "text-neutral-500"} />
          <span className={isCenter ? "text-neutral-300" : "text-neutral-600"}>{item.category}</span>
        </div>
      </div>

      {/* Thought Content */}
      <div className="relative">
        <Quote
          size={18}
          className={cn(
            "mb-1.5 opacity-40",
            isCenter ? "text-emerald-400" : "text-neutral-400"
          )}
        />
        <h3
          className={cn(
            "text-sm sm:text-base md:text-[17px] font-medium leading-snug line-clamp-4",
            isCenter ? "text-white" : "text-neutral-900"
          )}
        >
          "{item.thought}"
        </h3>
      </div>

      {/* Author / Rule Label */}
      <p
        className={cn(
          "absolute bottom-6 left-6 sm:bottom-7 sm:left-8 right-6 text-xs font-mono font-medium tracking-wide",
          isCenter ? "text-neutral-400" : "text-neutral-500"
        )}
      >
        — {item.author}
      </p>
    </div>
  );
});

ThoughtCard.displayName = 'ThoughtCard';

export const ThoughtsSection: React.FC = () => {
  const [cardSize, setCardSize] = useState(360);
  const [thoughtsList, setThoughtsList] = useState(THOUGHTS_DATA);

  const handleMove = React.useCallback((steps: number) => {
    setThoughtsList((prevList) => {
      const newList = [...prevList];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) return prevList;
          newList.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) return prevList;
          newList.unshift({ ...item, tempId: Math.random() });
        }
      }
      return newList;
    });
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 640px)");
    const updateSize = (e: MediaQueryListEvent | MediaQueryList) => {
      setCardSize(e.matches ? 360 : 285);
    };

    updateSize(mql);
    mql.addEventListener("change", updateSize);
    return () => mql.removeEventListener("change", updateSize);
  }, []);

  return (
    <section id="thoughts" className="relative py-12 sm:py-16 md:py-20 select-none overflow-hidden">
      {/* ─── SECTION HEADER ─── */}
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <p className="text-[10px] sm:text-[10.5px] font-mono text-neutral-500 uppercase tracking-[0.2em] font-medium mb-1.5">
            PHILOSOPHY // OPERATING PRINCIPLES
          </p>
          <h2
            style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
            className="text-3xl sm:text-4xl md:text-5xl font-aribau font-bold tracking-tight text-neutral-950"
          >
            Thoughts &amp; Core Principles
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-aribau text-neutral-600 max-w-md mx-auto">
            Operating rules on focus, compounding, craftsmanship, and extreme agency.
          </p>
        </div>
      </Reveal>

      {/* ─── STAGGERED THOUGHT CARDS CAROUSEL ─── */}
      <div className="relative w-full h-[500px] sm:h-[550px] overflow-hidden">
        {thoughtsList.map((item, index) => {
          const position =
            thoughtsList.length % 2
              ? index - (thoughtsList.length + 1) / 2
              : index - thoughtsList.length / 2;

          return (
            <ThoughtCard
              key={item.tempId}
              item={item}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ThoughtsSection;
