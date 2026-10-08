"use client";

import React, { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, Mail } from "lucide-react";

const GithubIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.3a1.64 1.64 0 0 0-1.66 1.64 1.64 1.64 0 0 0 1.66 1.63 1.63 1.63 0 0 0 1.64-1.63A1.64 1.64 0 0 0 7.86 6.3z" />
  </svg>
);

const InstagramIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={`stroke-current fill-none ${className}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function AboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  const scrollToContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:singh.gurpreet042007@gmail.com";
    }
  };

  return (
    <section
      id="about-section"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-[#FAF7F2] text-neutral-900 border-t border-neutral-300/80 relative z-10"
      ref={heroRef}
    >
      <div id="about" className="absolute -top-16 left-0 pointer-events-none" />
      <div id="story" className="absolute -top-16 left-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-8 w-[92%] sm:w-[88%] absolute lg:top-4 md:top-2 sm:top-0 -top-2 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-red-500 animate-spin font-mono">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] font-semibold text-neutral-700"
              >
                WHO I AM
              </TimelineContent>
            </div>

            {/* Gurpreet's Real Social Channels */}
            <div className="flex gap-2.5 sm:gap-3">
              <TimelineContent
                as="a"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://github.com/singhgurpreet042007-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-7 h-7 sm:w-8 sm:h-8 border border-neutral-300 bg-white/90 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 rounded-lg flex items-center justify-center transition-colors cursor-pointer text-neutral-700 shadow-sm"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://linkedin.com/in/gurpreet-singh-0891a1337"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-7 h-7 sm:w-8 sm:h-8 border border-neutral-300 bg-white/90 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] rounded-lg flex items-center justify-center transition-colors cursor-pointer text-neutral-700 shadow-sm"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.instagram.com/04_gurpreet_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-7 h-7 sm:w-8 sm:h-8 border border-neutral-300 bg-white/90 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] rounded-lg flex items-center justify-center transition-colors cursor-pointer text-neutral-700 shadow-sm"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="mailto:singh.gurpreet042007@gmail.com"
                aria-label="Send Direct Email"
                className="w-7 h-7 sm:w-8 sm:h-8 border border-neutral-300 bg-white/90 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer text-neutral-700 shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
              </TimelineContent>
            </div>
          </div>

          {/* Inverted Geometric SVG Banner Cutout */}
          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group pt-6 sm:pt-4"
          >
            <svg
              className="w-full drop-shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath
                  id="clip-inverted-about"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted-about)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                href="https://cdn.21st.dev/assets/mirror/26/265e57e9ecac16be739b6bb56df7d13b1cddfb0be4d59958c534a03d95b48bb3.jpg"
                xlinkHref="https://cdn.21st.dev/assets/mirror/26/265e57e9ecac16be739b6bb56df7d13b1cddfb0be4d59958c534a03d95b48bb3.jpg"
              />
            </svg>
          </TimelineContent>

          {/* Stats Bar */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-5 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex flex-wrap gap-4 sm:gap-6 font-mono"
            >
              <div className="flex items-center gap-2 sm:text-base text-xs">
                <span className="text-red-500 font-bold">15+</span>
                <span className="text-neutral-600">Production Repos</span>
                <span className="text-neutral-300">|</span>
              </div>
              <div className="flex items-center gap-2 sm:text-base text-xs">
                <span className="text-red-500 font-bold">4</span>
                <span className="text-neutral-600">Full-Scale Systems</span>
              </div>
            </TimelineContent>

            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4 font-mono">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="text-red-500 font-semibold">&lt; 80ms</span>
                <span className="text-neutral-600 uppercase text-xs sm:text-sm">Inference</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 sm:text-base text-xs"
              >
                <span className="text-red-500 font-bold">99.9%</span>
                <span className="text-neutral-600">Uptime Reliability</span>
                <span className="text-neutral-300 lg:hidden block">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mt-2 sm:mt-6">
          <div className="md:col-span-2">
            <h2 className="sm:text-4xl md:text-5xl text-2xl !leading-[115%] font-extrabold text-neutral-950 mb-8 tracking-tight">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.06}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 26,
                  delay: 0.2,
                }}
              >
                The Story Behind The Code: Built With Conviction.
              </VerticalCutReveal>
            </h2>

            <TimelineContent
              as="div"
              animationNum={8}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-neutral-600"
            >
              <div className="text-sm sm:text-base leading-relaxed">
                <p>
                  It usually begins with a single question: <em className="text-neutral-800 font-medium">can I actually build this?</em> My journey started with late nights, broken builds, and diving straight into raw code and terminal errors to understand why nothing works the first time. Moving past tutorials to build real systems taught me that writing code is only the execution — deeply understanding the problem is where true engineering begins.
                </p>
              </div>
              <div className="text-sm sm:text-base leading-relaxed">
                <p>
                  From autonomous zero-trust identity protection (Aegis-AI) to sub-100ms collaborative workspaces (Fluxora) and containerized cloud devtools (DeployFlow) — every project pushed me past tutorials into real production challenges. I build to experiment, solve bottlenecks, and turn ideas into reliable systems people can actually use. Still breaking things, still refining the craft, still building with conviction.
                </p>
              </div>
            </TimelineContent>
          </div>

          {/* Profile Identity & Action Column */}
          <div className="md:col-span-1 flex flex-col md:items-end justify-between text-left md:text-right pt-2 md:pt-0">
            <div>
              <TimelineContent
                as="div"
                animationNum={9}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-red-500 text-2xl sm:text-3xl font-black uppercase tracking-tight mb-1"
              >
                GURPREET SINGH
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-neutral-500 font-mono text-xs sm:text-sm uppercase tracking-wider mb-6"
              >
                Software Engineer · Full-Stack & Systems
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6 max-w-xs md:ml-auto"
              >
                <p className="text-neutral-800 text-sm font-medium leading-relaxed">
                  Ready to engineer high-velocity systems and turn ideas into production-scale realities?
                </p>
              </TimelineContent>
            </div>

            <TimelineContent
              as="button"
              animationNum={12}
              timelineRef={heroRef}
              customVariants={revealVariants}
              onClick={scrollToContact}
              className="bg-neutral-900 hover:bg-neutral-950 active:scale-95 shadow-lg shadow-neutral-900/20 border border-neutral-800 flex items-center md:ml-auto gap-2 hover:gap-3 transition-all duration-300 ease-out text-white px-5 py-3 rounded-xl cursor-pointer font-mono text-xs uppercase tracking-wider font-semibold"
            >
              <span>LET&apos;S COLLABORATE</span>
              <ArrowRight className="w-4 h-4 text-neutral-300" />
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
