"use client";

import React, { useRef, useEffect, useState } from 'react';

import { useMediaQuery } from '../hooks/useMediaQuery';

const storySegments = [
  "So here I am, building things that started as simple ideas and somehow turned into entire projects.",
  "It usually begins with one question: can I actually build this?",
  "Then comes the research, the late nights, and way too many browser tabs.",
  "I started with the basics. Code, errors, debugging, and learning why nothing works the first time.",
  "Then I started building real things instead of just following tutorials.",
  "Some projects worked perfectly. Some broke in ways I didn't even know were possible.",
  "I learned that writing code is only half the job. Understanding the problem is where everything really starts.",
  "From frontend interfaces to APIs, databases, authentication, and AI, every project added something new.",
  "There were plenty of bugs, unfinished ideas, and moments where starting over felt easier than fixing everything.",
  "But every time something finally worked, the next idea became a little bigger.",
  "Now I build projects to learn, experiment, solve problems, and turn ideas into something people can actually use.",
  "I'm still learning. Still breaking things. Still building. And honestly, that's the part I enjoy most.",
  "This is only the beginning."
];

interface StoryParagraphProps {
  segmentWords: string[];
  segmentStartIndex: number;
  revealedWordCount: number;
}

const StoryParagraph: React.FC<StoryParagraphProps> = React.memo(
  ({ segmentWords, segmentStartIndex, revealedWordCount }) => {
    return (
      <p
        className="text-lg sm:text-2xl md:text-3xl lg:text-[34px] leading-relaxed break-words"
        style={{
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          fontWeight: 600,
        }}
      >
        {segmentWords.map((word, i) => {
          const currentWordIndex = segmentStartIndex + i;
          const isRevealed = currentWordIndex < revealedWordCount;
          return (
            <span
              key={i}
              className={isRevealed ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-600'}
              style={{
                transition: 'opacity 0.2s ease-out, color 0.2s ease-out',
                opacity: isRevealed ? 1 : 0.35,
              }}
            >
              {word}{' '}
            </span>
          );
        })}
      </p>
    );
  },
  (prevProps, nextProps) => {
    const prevCount = prevProps.revealedWordCount;
    const nextCount = nextProps.revealedWordCount;
    if (prevCount === nextCount) return true;

    const start = prevProps.segmentStartIndex;
    const end = start + prevProps.segmentWords.length;

    // Both are completely before this paragraph (all unrevealed)
    if (prevCount <= start && nextCount <= start) return true;
    // Both are completely after this paragraph (all revealed)
    if (prevCount >= end && nextCount >= end) return true;

    // Words within this specific paragraph are changing
    return false;
  }
);

StoryParagraph.displayName = 'StoryParagraph';

export const StorySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealedWordCount, setRevealedWordCount] = useState(0);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const lastRevealedRef = useRef<number>(0);
  const isIntersectingRef = useRef<boolean>(true);

  const segmentWordLists = React.useMemo(() => storySegments.map(s => s.split(' ')), []);
  const allWords = React.useMemo(() => storySegments.flatMap(segment => segment.split(' ')), []);
  const totalWords = allWords.length;

  const segmentStartIndices = React.useMemo(() => {
    let running = 0;
    return segmentWordLists.map(words => {
      const idx = running;
      running += words.length;
      return idx;
    });
  }, [segmentWordLists]);

  useEffect(() => {
    let rafId: number | null = null;
    let targetProgress = 0;
    let currentProgress = 0;
    let scrollThrottled = false;

    const updateWords = (count: number) => {
      if (count !== lastRevealedRef.current) {
        lastRevealedRef.current = count;
        setRevealedWordCount(count);
      }
    };

    const smoothScroll = () => {
      const difference = targetProgress - currentProgress;
      currentProgress += difference * 0.12;

      if (Math.abs(targetProgress - currentProgress) > 0.001) {
        const wordsToReveal = Math.floor(currentProgress * totalWords);
        updateWords(wordsToReveal);
        rafId = requestAnimationFrame(smoothScroll);
      } else {
        updateWords(Math.floor(targetProgress * totalWords));
        rafId = null;
      }
    };

    const computeProgress = () => {
      scrollThrottled = false;
      if (!isIntersectingRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Early exit if section is off-screen to prevent scroll jank
      if (rect.bottom < -200 || rect.top > windowHeight + 200) return;

      const eyeLevel = windowHeight * 0.62;
      const animationStart = rect.top + window.scrollY - eyeLevel;
      const animationEnd = rect.top + window.scrollY + rect.height - eyeLevel;
      const scrollDistance = animationEnd - animationStart;
      const currentScroll = window.scrollY;

      let progress = (currentScroll - animationStart) / scrollDistance;
      const nextProgress = Math.max(0, Math.min(1, progress));
      
      if (Math.abs(nextProgress - targetProgress) < 0.005) return;
      targetProgress = nextProgress;

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(smoothScroll);
    };

    const handleScroll = () => {
      if (scrollThrottled || !isIntersectingRef.current) return;
      scrollThrottled = true;
      requestAnimationFrame(computeProgress);
    };

    // IntersectionObserver to avoid getBoundingClientRect when far from viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          handleScroll();
        }
      },
      { rootMargin: '300px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    const timer = setTimeout(handleScroll, 120);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(timer);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [totalWords]);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-black dark:via-black dark:to-black transition-colors duration-500 w-full overflow-hidden">
      {/* Content */}
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto px-6 sm:px-8 pt-12 sm:pt-20 pb-12 sm:pb-20"
        style={{ minHeight: isMobile ? '160vh' : '200vh' }}
      >
        <div className="space-y-6 sm:space-y-10">
          {storySegments.map((_segment, segmentIndex) => {
            const segmentWords = segmentWordLists[segmentIndex];
            const segmentStartIndex = segmentStartIndices[segmentIndex];

            return (
              <StoryParagraph
                key={segmentIndex}
                segmentWords={segmentWords}
                segmentStartIndex={segmentStartIndex}
                revealedWordCount={revealedWordCount}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
