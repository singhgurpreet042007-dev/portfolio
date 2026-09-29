import React from "react";
import TextBlockAnimation from "../components/TextBlockAnimation";

export const StatementSection: React.FC = () => {
  return (
    <section
      id="statement"
      className="relative w-full min-h-[85vh] flex flex-col justify-center py-20 sm:py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-[#050507] text-white overflow-hidden select-none"
      style={{
        background:
          "radial-gradient(ellipse 70% 400px at 50% 30%, rgba(255, 255, 255, 0.04), transparent), #050507",
      }}
    >

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-start text-left">
        {/* ─── Top Opening Hero ─── */}
        <div className="flex flex-col items-start mb-10 sm:mb-14 md:mb-16 text-left">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-sans"
            style={{ letterSpacing: "-0.03em" }}
          >
            Don&apos;t just inform.
          </h1>

          <div className="mt-2 sm:mt-3">
            <span
              className="inline-block bg-white text-black font-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight shadow-xl leading-none font-sans"
              style={{ letterSpacing: "-0.025em" }}
            >
              Captivate.
            </span>
          </div>

          <div className="flex items-center gap-2 mt-4 sm:mt-5 text-neutral-400">
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.25em] uppercase text-neutral-400">
              SCROLL TO REVEAL
            </span>
            <span className="text-xs sm:text-sm font-mono text-neutral-400 animate-bounce">↓</span>
          </div>
        </div>

        {/* ─── Main Animated Sections with Proportional Sizing ─── */}
        <div className="w-full flex flex-col gap-8 sm:gap-11 md:gap-14 text-left">
          {/* 1. Green / Emerald Strip: This is what I do. */}
          <TextBlockAnimation
            blockColor="#00c776"
            duration={0.65}
            stagger={0.1}
            delay={0.05}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans"
              style={{ letterSpacing: "-0.025em" }}
            >
              This is what I do.
            </h2>
          </TextBlockAnimation>

          {/* 2. Vibrant Amber / Orange Strip: Paragraph & Quote */}
          <TextBlockAnimation
            blockColor="#f59e0b"
            duration={0.65}
            stagger={0.1}
            delay={0.1}
          >
            <div className="space-y-4">
              <p
                className="text-base sm:text-lg md:text-xl lg:text-[22px] font-normal text-white leading-relaxed tracking-tight font-sans max-w-2xl"
                style={{ letterSpacing: "-0.015em" }}
              >
                You stopped scrolling because the motion caught your eye. That&apos;s the power of{" "}
                <strong className="font-bold text-white">GSAP</strong> and{" "}
                <strong className="font-bold text-white">React</strong> properly combined. I build bespoke animations like this for clients who aren&apos;t satisfied with &ldquo;standard.&rdquo;
              </p>

              <div className="border-l-2 border-indigo-400/90 pl-3.5 py-0.5 mt-3">
                <p className="text-sm sm:text-base italic text-neutral-300 font-light">
                  &ldquo;If you want your website to feel alive, we should talk.&rdquo;
                </p>
              </div>
            </div>
          </TextBlockAnimation>

          {/* 3. Crimson / Coral Red Strip: Let's Build It. */}
          <TextBlockAnimation
            blockColor="#ef4444"
            duration={0.65}
            stagger={0.1}
            delay={0.15}
          >
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none font-sans"
              style={{ letterSpacing: "-0.035em" }}
            >
              Let&apos;s Build It.
            </h2>
          </TextBlockAnimation>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
