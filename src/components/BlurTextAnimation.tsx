"use client";

import { useEffect, useRef, useState, useMemo } from "react";

export interface WordData {
  text: string;
  duration: number;
  delay: number;
  blur: number;
  scale?: number;
}

export interface BlurTextAnimationProps {
  text?: string;
  words?: WordData[];
  className?: string;
  fontSize?: string;
  fontFamily?: string;
  textColor?: string;
  animationDelay?: number;
  onComplete?: () => void;
  loop?: boolean;
}

export function BlurTextAnimation({
  text = "Hard work pays off. Built with relentless discipline, focus, and obsessive craft.",
  words,
  className = "",
  fontSize = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  fontFamily = "font-['Aribau_Rounded',_'Avenir_Next',_'Avenir',_system-ui,_sans-serif]",
  textColor = "text-white",
  animationDelay = 4000,
  onComplete,
  loop = false,
}: BlurTextAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCompleteCalledRef = useRef(false);

  const textWords = useMemo(() => {
    if (words) return words;

    const splitWords = text.split(" ");
    const totalWords = splitWords.length;

    return splitWords.map((word, index) => {
      const progress = index / totalWords;
      const exponentialDelay = Math.pow(progress, 0.8) * 0.45;
      const baseDelay = index * 0.055;
      const microVariation = (Math.random() - 0.5) * 0.04;

      return {
        text: word,
        duration: 1.5 + Math.cos(index * 0.3) * 0.25,
        delay: Math.max(0, baseDelay + exponentialDelay + microVariation),
        blur: 10 + Math.floor(Math.random() * 8),
        scale: 0.92 + Math.sin(index * 0.2) * 0.05,
      };
    });
  }, [text, words]);

  useEffect(() => {
    onCompleteCalledRef.current = false;

    const startAnimation = () => {
      const tStart = setTimeout(() => {
        setIsAnimating(true);
      }, 120);

      let maxTime = 0;
      textWords.forEach((word) => {
        const totalTime = word.delay + word.duration;
        maxTime = Math.max(maxTime, totalTime);
      });

      // Total display time = time for last word to resolve + hold duration
      const holdDuration = 1.0; // 1 second to read the resolved message
      const totalCycleMs = (maxTime + holdDuration) * 1000;

      animationTimeoutRef.current = setTimeout(() => {
        if (!onCompleteCalledRef.current && onComplete) {
          onCompleteCalledRef.current = true;
          onComplete();
        }

        if (loop) {
          setIsAnimating(false);
          resetTimeoutRef.current = setTimeout(() => {
            startAnimation();
          }, animationDelay);
        }
      }, totalCycleMs);

      return () => clearTimeout(tStart);
    };

    const cleanup = startAnimation();

    return () => {
      if (cleanup) cleanup();
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [textWords, animationDelay, loop, onComplete]);

  return (
    <div className={`flex items-center justify-center w-full h-full bg-black select-none ${className}`}>
      <div className="text-center max-w-4xl px-6 sm:px-10">
        <p className={`${textColor} ${fontSize} ${fontFamily} font-light leading-relaxed tracking-wide`}>
          {textWords.map((word, index) => (
            <span
              key={index}
              className={`inline-block transition-all ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transitionDuration: `${word.duration}s`,
                transitionDelay: `${word.delay}s`,
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: isAnimating
                  ? 'blur(0px) brightness(1)'
                  : `blur(${word.blur}px) brightness(0.55)`,
                transform: isAnimating
                  ? 'translateY(0) scale(1) rotateX(0deg)'
                  : `translateY(22px) scale(${word.scale || 1}) rotateX(-15deg)`,
                marginRight: '0.32em',
                willChange: 'filter, transform, opacity',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                textShadow: isAnimating
                  ? '0 2px 14px rgba(255,255,255,0.18)'
                  : '0 0 36px rgba(255,255,255,0.4)',
              }}
            >
              {word.text}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default BlurTextAnimation;
