"use client";

import React from "react";
import { ScrollBurnText } from "../components/ScrollBurnText";

const STORY_BURN_SECTIONS = [
  "Then I started building real things instead of just following tutorials.",
  "Some broke in ways I didn't even know were theoretically possible.",
  "Writing code is only half the job. Understanding the core problem is where everything begins.",
  "Every breakthrough started as a persistent bug that refused to stay broken.",
  "Still learning. Still breaking things. Still building with obsessive craft.",
];

const styles = `
.story-scroll-story {
  max-width: 100vw;
  overflow-x: clip;
  position: relative;
  background-color: #000000;
}

.story-scroll-story,
.story-scroll-story * {
  box-sizing: border-box;
}

/* --- 1. Intro Section (Dark Minimalist) --- */
.story-scroll-story .intro {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60vh;
  padding: 5rem 1.5rem 4rem 1.5rem;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
}

.story-scroll-story .intro__tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background-color: rgba(255, 255, 255, 0.04);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #a1a1aa;
  margin-bottom: 1.5rem;
}

.story-scroll-story .intro__heading {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  line-height: 1.15;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.03em;
  max-width: 44rem;
  color: #ffffff;
}

.story-scroll-story .intro__sub {
  margin-top: 1.25rem;
  font-size: clamp(0.95rem, 1.6vw, 1.15rem);
  color: #71717a;
  max-width: 32rem;
  line-height: 1.6;
}

/* --- 2. Chapter 1 & Chapter 2 Content (Cream Paper #F5F2EB) --- */
.story-scroll-story .content {
  background-color: #F5F2EB;
  color: #171717;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 5rem 1.5rem;
}

.story-scroll-story .content--after-hero {
  padding: 5rem 1.5rem 7rem 1.5rem;
  background-color: #F5F2EB;
  color: #171717;
}

.story-scroll-story .article {
  max-width: 38rem;
  width: 100%;
  padding: 0 1rem;
}

.story-scroll-story .article__tag-row {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}

.story-scroll-story .article__chapter {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #71717a;
  font-weight: 600;
}

.story-scroll-story .article h2 {
  font-family: "Aribau Rounded", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: clamp(1.85rem, 3.8vw, 2.75rem);
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 1.75rem;
  letter-spacing: -0.025em;
  color: #0a0a0a;
}

.story-scroll-story .article p {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: clamp(1.025rem, 1.4vw, 1.15rem);
  line-height: 1.85;
  margin-bottom: 1.5rem;
  color: #27272a;
}
`;

export const StorySection: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <section className="story-scroll-story">
        {/* ─── 1. INTRO HEADER (DARK MINIMALIST) ─── */}
        <div className="intro">
          <div className="intro__tag">
            <span className="inline-block size-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span>The Genesis · Personal Log</span>
          </div>
          <h1 className="intro__heading">
            The Story Behind The Code
          </h1>
          <p className="intro__sub">
            How late nights, broken builds, and simple curiosities turned into full-scale systems.
          </p>
        </div>

        {/* ─── 2. CHAPTER 1: THE ORIGIN (CREAM PAPER #F5F2EB) ─── */}
        <div className="content">
          <article className="article">
            <div className="article__tag-row">
              <span className="inline-block size-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="article__chapter">Chapter 01 · The Curiosity</span>
            </div>
            <h2>Where everything begins</h2>
            <p>
              So here I am, building things that started as simple ideas and somehow turned into entire projects.
              It usually begins with one single question: <em>can I actually build this?</em>
            </p>
            <p>
              Then comes the research, the late nights, and way too many open browser tabs.
              I started with the absolute basics. Raw code, terminal errors, debugging, and learning why nothing works the first time.
            </p>
          </article>
        </div>

        {/* ─── 3. THE OPTICAL SCROLL BURN TEXT SEQUENCE (REPLACES BROKEN DEEP DIVE) ─── */}
        <ScrollBurnText
          sections={STORY_BURN_SECTIONS}
          runway="160vh"
        />

        {/* ─── 4. CHAPTER 2: TODAY & BEYOND (CREAM PAPER #F5F2EB) ─── */}
        <div className="content content--after-hero">
          <article className="article">
            <div className="article__tag-row">
              <span className="inline-block size-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="article__chapter">Chapter 02 · Today &amp; Beyond</span>
            </div>
            <h2>Building with conviction</h2>
            <p>
              Now I build projects to learn, experiment, solve problems, and turn ideas into something people can actually use.
              I&apos;m still learning. Still breaking things. Still building. And honestly, that relentless craft is the part I enjoy most.
            </p>
            <p className="font-semibold text-neutral-900 text-lg sm:text-xl pt-2">
              This is only the beginning.
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default StorySection;
