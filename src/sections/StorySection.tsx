"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const styles = `
.story-scroll-story {
  max-width: 100vw;
  overflow-x: hidden;
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
  min-height: 75vh;
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

/* --- 3. Hero Reveal (The Pinned Split Vault Stage) --- */
.story-scroll-story .hero-reveal {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000000;
}

.story-scroll-story .hero-reveal__stage {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000000;
}

/* Vault Overlay: Giant Split Heading on top */
.story-scroll-story .hero-reveal__vault {
  position: absolute;
  inset: 0;
  z-index: 20;
  pointer-events: none;
}

.story-scroll-story .hero-reveal__vault-half {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.story-scroll-story .hero-reveal__vault-half--top {
  clip-path: inset(0 0 50% 0);
  -webkit-clip-path: inset(0 0 50% 0);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.story-scroll-story .hero-reveal__vault-half--bottom {
  clip-path: inset(50% 0 0 0);
  -webkit-clip-path: inset(50% 0 0 0);
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.story-scroll-story .hero-reveal__vault-text {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: clamp(3.5rem, 12vw, 10.5rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  user-select: none;
}

/* Void Layer underneath */
.story-scroll-story .hero-reveal__void {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.story-scroll-story .hero-reveal__content {
  position: relative;
  z-index: 2;
  max-width: 38rem;
  width: 100%;
  padding: 0 1.5rem;
  text-align: left;
  will-change: transform;
}

.story-scroll-story .hero-reveal__content p {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: clamp(1.025rem, 1.4vw, 1.18rem);
  line-height: 1.85;
  margin-bottom: 1.75rem;
  color: rgba(255, 255, 255, 0.92);
}

/* Parallax floating illustrations in the void */
.story-scroll-story .hero-reveal__parallax {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.story-scroll-story .hero-reveal__parallax img {
  position: absolute;
  max-width: none;
  pointer-events: none;
  user-select: none;
  will-change: transform;
}

.story-scroll-story .hero-reveal__parallax-clock {
  width: 140px;
  height: 156px;
  left: 10%;
  top: 15%;
}

.story-scroll-story .hero-reveal__parallax-book {
  width: 105px;
  height: 98px;
  left: 6%;
  top: 55%;
}

.story-scroll-story .hero-reveal__parallax-alice {
  width: 480px;
  height: 390px;
  left: 45%;
  top: 12%;
  opacity: 0.9;
}

.story-scroll-story .hero-reveal__parallax-kattle {
  width: 55px;
  height: 45px;
  right: 12%;
  top: 25%;
  filter: blur(1.5px);
}

.story-scroll-story .hero-reveal__parallax-card {
  width: 280px;
  height: 288px;
  right: 8%;
  top: 45%;
  filter: blur(1.5px);
}

@media (max-width: 1024px) {
  .story-scroll-story .hero-reveal__parallax-alice {
    width: 360px;
    height: 292px;
    left: 40%;
    opacity: 0.75;
  }
  .story-scroll-story .hero-reveal__parallax-card {
    width: 220px;
    height: 226px;
    right: 4%;
  }
}

@media (max-width: 768px) {
  .story-scroll-story .hero-reveal__vault-text {
    font-size: clamp(2.6rem, 13vw, 5.5rem);
  }
  .story-scroll-story .hero-reveal__parallax-alice {
    width: 260px;
    height: 211px;
    left: 20%;
    opacity: 0.55;
  }
  .story-scroll-story .hero-reveal__parallax-clock {
    width: 80px;
    height: 89px;
    left: 5%;
    top: 10%;
    opacity: 0.6;
  }
  .story-scroll-story .hero-reveal__parallax-book {
    width: 65px;
    height: 61px;
    left: 4%;
    top: 60%;
    opacity: 0.6;
  }
  .story-scroll-story .hero-reveal__parallax-card {
    width: 160px;
    height: 165px;
    right: 4%;
    top: 50%;
    opacity: 0.55;
  }
  .story-scroll-story .hero-reveal__parallax-kattle {
    display: none;
  }
}
`;

export const StorySection: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRevealRef = useRef<HTMLDivElement>(null);
  const splitTopRef = useRef<HTMLDivElement>(null);
  const splitBottomRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLImageElement>(null);
  const bookRef = useRef<HTMLImageElement>(null);
  const aliceRef = useRef<HTMLImageElement>(null);
  const kettleRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const heroReveal = heroRevealRef.current;
    const splitTop = splitTopRef.current;
    const splitBottom = splitBottomRef.current;
    const content = contentRef.current;

    if (!root || !heroReveal || !splitTop || !splitBottom || !content) return;

    const ctx = gsap.context(() => {
      // Calibrated scroll distance (+=1150) and scrub (0.45):
      // Fast, snappy, responsive scroll speed inside so the text and floating doll flow briskly.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroReveal,
          start: "top top",
          end: "+=1150",
          pin: true,
          pinSpacing: true,
          scrub: 0.45,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. HOLD/FREEZE PHASE (0 to 0.18):
      // Keep splitTop and splitBottom fully closed at 0 so "DEEP DIVE" is 100% fully seen at rest first!
      tl.set(splitTop, { yPercent: 0 }, 0);
      tl.set(splitBottom, { yPercent: 0 }, 0);

      // 2. CRISP VAULT CUT PHASE (0.18 to 0.48):
      // Cuts cleanly and decisively, sliding all the way off screen (-105% & +105%)
      tl.to(
        splitTop,
        {
          yPercent: -105,
          ease: "power2.inOut",
          duration: 0.3,
        },
        0.18
      );

      tl.to(
        splitBottom,
        {
          yPercent: 105,
          ease: "power2.inOut",
          duration: 0.3,
        },
        0.18
      );

      // 3. FAST INNER CONTENT FLOW (0.32 to 1.0):
      // Core Story Content smoothly rises through the revealed vault at a brisk, comfortable pace
      tl.fromTo(
        content,
        { y: 160, opacity: 0.75 },
        { y: -160, opacity: 1, ease: "none", duration: 0.65 },
        0.32
      );

      // 4. Parallax Floating Elements (Alice doll, clock, book, kettle, card)
      if (clockRef.current) {
        tl.to(clockRef.current, { y: -160, ease: "none", duration: 0.68 }, 0.28);
      }
      if (bookRef.current) {
        tl.to(bookRef.current, { y: -210, ease: "none", duration: 0.68 }, 0.28);
      }
      if (aliceRef.current) {
        tl.to(aliceRef.current, { y: -120, ease: "none", duration: 0.68 }, 0.28);
      }
      if (kettleRef.current) {
        tl.to(kettleRef.current, { y: -240, ease: "none", duration: 0.68 }, 0.28);
      }
      if (cardRef.current) {
        tl.to(cardRef.current, { y: -140, ease: "none", duration: 0.68 }, 0.28);
      }
    }, root);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <style>{styles}</style>

      <section ref={rootRef} className="story-scroll-story">
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

        {/* ─── 3. THE SPLIT HERO VAULT REVEAL (PROFESSIONAL AESTHETIC "DEEP DIVE") ─── */}
        <div ref={heroRevealRef} className="hero-reveal">
          <div className="hero-reveal__stage">
            {/* Dark Void Layer (Underneath) */}
            <div className="hero-reveal__void">
              {/* Parallax Floating Assets */}
              <div className="hero-reveal__parallax">
                <img
                  src="https://cdn.21st.dev/assets/mirror/9b/9bc8918f9a205f2b72edf3d4e9d7e2b0c3fcfba2ab80962eba6ad1fb4b89cb33.png"
                  alt="Alice"
                  ref={aliceRef}
                  className="hero-reveal__parallax-alice"
                />
                <img
                  width="140"
                  height="156"
                  src="https://cdn.21st.dev/assets/mirror/d9/d910502e2c6fa3f6f5e9c63cd498a005d1ec7a974f2286850859589b597a8aa1.png"
                  alt="Clock"
                  ref={clockRef}
                  className="hero-reveal__parallax-clock"
                />
                <img
                  width="105"
                  height="98"
                  src="https://cdn.21st.dev/assets/mirror/9e/9eb45f5186ffc7f60c3c085907211d5157bced180e6b1d0a15c0aab0150b7636.png"
                  alt="Book"
                  ref={bookRef}
                  className="hero-reveal__parallax-book"
                />
                <img
                  width="55"
                  height="45"
                  src="https://cdn.21st.dev/assets/mirror/d3/d3f44d54a86e918c2050ef8fa67d6bbc66cb272f42a4da04b1fd002faf5e915a.png"
                  alt="Kettle"
                  ref={kettleRef}
                  className="hero-reveal__parallax-kattle"
                />
                <img
                  width="280"
                  height="288"
                  src="https://cdn.21st.dev/assets/mirror/4d/4da8755595b497e15b45fcebdcd9d7c83b1700535e0bb4a3305fbdbb8e9324a2.png"
                  alt="Card"
                  ref={cardRef}
                  className="hero-reveal__parallax-card"
                />
              </div>

              {/* Core Journey Revelations */}
              <div ref={contentRef} className="hero-reveal__content">
                <p>
                  Then I started building real things instead of just following tutorials. Some projects worked perfectly.
                  Some broke in ways I didn't even know were theoretically possible.
                </p>
                <p>
                  I quickly learned that writing code is only half the job. Understanding the core problem is where everything really starts.
                  From frontend interfaces to APIs, databases, authentication, and AI, every project added something new to the stack.
                </p>
                <p>
                  There were plenty of bugs, unfinished ideas, and moments where starting over felt easier than fixing everything.
                  But every time something finally compiled and worked, the ambition behind the next idea became a little bigger.
                </p>
              </div>
            </div>

            {/* Split Vault Overlay (On top: opens horizontally in half with "DEEP DIVE") */}
            <div className="hero-reveal__vault">
              <div
                ref={splitTopRef}
                className="hero-reveal__vault-half hero-reveal__vault-half--top"
              >
                <span className="hero-reveal__vault-text">DEEP DIVE</span>
              </div>
              <div
                ref={splitBottomRef}
                className="hero-reveal__vault-half hero-reveal__vault-half--bottom"
                aria-hidden="true"
              >
                <span className="hero-reveal__vault-text" aria-hidden="true">
                  DEEP DIVE
                </span>
              </div>
            </div>
          </div>
        </div>

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
