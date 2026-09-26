"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
} from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(SplitText);

const INTRO_EASE = "cubic-bezier(0.25, 1, 0.5, 1)";
const IMAGE_ENTRY_Y_PERCENT = 450;
const TEXT_ROTATE_X_START = 90;
const TEXT_TRANSFORM_PERSPECTIVE = 1000;
const IMAGE_Z_INDEX_DURATION = 0.15;
const IMAGE_Z_INDEX_STAGGER = 0.22;
const TEXT_STAGGER = 0.08;
const STACK_SCALE_STEP = 0.09;
const STACK_Y_PERCENT_STEP = 16;

const STACK_IMAGE_SOURCES = [
  "https://cdn.21st.dev/assets/mirror/54/54954611e11f8afe47c25bff036f8887022cb5b8389e45568564d88aebdba1fc.jpg",
  "https://cdn.21st.dev/assets/mirror/e9/e9e44c95f07aa428be0904d841dd9ce4ee2f0a6621d13883751ef98252522b00.jpg",
  "https://cdn.21st.dev/assets/mirror/1e/1ec8e016065447841ac87da12d70153f41b8642f91cdc85f8f10b89442275d96.jpg",
  "https://cdn.21st.dev/assets/mirror/51/51466e6ce688f80db22ca04e7f2e4e9e918fcc40c94119dfeba606b7aa8e1dde.jpg",
  "https://cdn.21st.dev/assets/mirror/ff/ff5a0eafbbe32250367b699e5513dfd2debd0c2fd945d2f1206a63b512e7e1cf.jpg",
  "https://cdn.21st.dev/assets/mirror/dc/dcadf7b1c44e483bd4cfd379244ec0a1f763cf335dda3961637665e5cc1f8f5d.jpg",
  "https://cdn.21st.dev/assets/mirror/5b/5b133dad10568c8eea843378e31ae00b709a562b39b3abf76a51bd110a34d06e.jpg",
];

function clampNumber(value: unknown, min: number, max: number, fallback: number) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, numericValue));
}

interface StackToSpreadIntroProps {
  imageSize?: number;
  duration?: number;
  fadeOutDuration?: number;
  backgroundColor?: string;
  onComplete?: () => void;
}

const StackToSpreadIntro = forwardRef<HTMLElement, StackToSpreadIntroProps>(
  function StackToSpreadIntro(
    {
      imageSize = 1,
      duration = 1,
      fadeOutDuration = 0.8,
      backgroundColor = "#000000",
      onComplete,
    },
    ref
  ) {
    const uid = useId().replace(/:/g, "");
    const loaderWrapperId = `loader-wrapper-${uid}`;
    const imgsWrapperId = `imgs-wrapper-${uid}`;
    const rootRef = useRef<HTMLElement | null>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
    const text1Ref = useRef<HTMLParagraphElement | null>(null);
    const text2Ref = useRef<HTMLParagraphElement | null>(null);
    const onCompleteRef = useRef(onComplete);

    const safeImageSize = clampNumber(imageSize, 0.5, 2.5, 1);
    const safeDuration = clampNumber(duration, 0.25, 3, 1);
    const safeFadeOutDuration = clampNumber(fadeOutDuration, 0.1, 3, 0.8);

    useEffect(() => {
      onCompleteRef.current = onComplete;
    }, [onComplete]);

    useLayoutEffect(() => {
      const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      // Reduced-motion: simple opacity in/out
      if (reduceMotion) {
        const ctx = gsap.context(() => {
          const imageElements = imagesRef.current.filter(Boolean);
          const sideText = [text1Ref.current, text2Ref.current].filter(Boolean);

          gsap.set(`#${imgsWrapperId}`, { yPercent: 0, opacity: 1 });
          gsap.set(imageElements, {
            opacity: 0,
            scale: (index: number) => 1 + index * 0.05,
            zIndex: (index: number) => index,
            yPercent: 0,
          });
          gsap.set(sideText, { opacity: 0, rotateX: 0 });

          const tl = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            onComplete: () => {
              gsap.set(rootRef.current, { display: "none" });
              onCompleteRef.current?.();
            },
          });
          tl.timeScale(1 / safeDuration);

          tl.to(imageElements, {
            opacity: 1,
            duration: 0.8,
            stagger: { each: 0.05, from: "center" },
          });

          tl.to(sideText, { opacity: 1, duration: 0.6 }, "-=0.3");
          tl.to(sideText, { opacity: 0, duration: 0.5 }, "+=1.0");
          tl.to(
            imageElements,
            {
              opacity: 0,
              duration: safeFadeOutDuration,
              stagger: { each: 0.04, from: "end" },
            },
            "-=0.1"
          );
          tl.to(rootRef.current, { opacity: 0, duration: safeFadeOutDuration }, "-=0.2");
        }, rootRef);

        return () => ctx.revert();
      }

      const ctx = gsap.context(() => {
        const imageElements = imagesRef.current.filter(Boolean);

        const text1 = SplitText.create(text1Ref.current, {
          type: "words",
        });

        const text2 = SplitText.create(text2Ref.current, {
          type: "words",
        });

        const animatedTextTargets = [text1.words, text2.words];

        gsap.set(animatedTextTargets, {
          rotateX: TEXT_ROTATE_X_START,
          opacity: 0,
          transformPerspective: TEXT_TRANSFORM_PERSPECTIVE,
          transformOrigin: "50% 100%",
          willChange: "transform",
        });

        gsap.set(imageElements, {
          opacity: 0,
        });

        const tl = gsap.timeline();
        tl.timeScale(1 / safeDuration);

        // 1. Initial Entry: Cards fly in from bottom with weight and presence
        tl.fromTo(
          `#${imgsWrapperId}`,
          {
            yPercent: IMAGE_ENTRY_Y_PERCENT,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: INTRO_EASE,
          }
        );

        tl.set([text1Ref.current, text2Ref.current], { opacity: 1 }, "<");

        tl.to(
          imageElements,
          {
            opacity: 1,
            duration: 0.65,
            ease: INTRO_EASE,
          },
          "<"
        );

        // 2. Text words rotate in with 3D perspective
        tl.to(
          animatedTextTargets,
          {
            rotateX: 0,
            opacity: 1,
            stagger: TEXT_STAGGER,
            ease: INTRO_EASE,
          },
          "<+0.35"
        );

        // 3. Staggered Z-index assignment
        imageElements.forEach((imageElement, index) => {
          tl.to(
            imageElement,
            {
              zIndex: index,
              duration: IMAGE_Z_INDEX_DURATION,
              ease: INTRO_EASE,
            },
            index * IMAGE_Z_INDEX_STAGGER
          );
        });

        // 4. THE STACK OVERLOAD ANIMATION (Cards stack up dynamically with luxurious choreography)
        tl.to(
          imageElements,
          {
            scale: (index: number) => 1 + index * STACK_SCALE_STEP,
            yPercent: (index: number) => -(index * STACK_Y_PERCENT_STEP),
            duration: 1.35,
            stagger: {
              each: 0.035,
              from: "end",
            },
            ease: "power3.inOut",
          },
          "<"
        );

        // 5. Generous hold beat on the stacked overload so the user can actually see and appreciate it!
        // 6. Smooth exit: side text rotates out
        tl.to(
          [text1.words, text2.words],
          {
            opacity: 0,
            duration: 0.55,
            rotateX: TEXT_ROTATE_X_START,
            transformOrigin: "top center",
            stagger: TEXT_STAGGER,
            ease: INTRO_EASE,
          },
          "+=1.2"
        );

        // 7. Stacked cards fade & scale out
        tl.to(
          imageElements,
          {
            opacity: 0,
            scale: (index: number) => (1 + index * STACK_SCALE_STEP) * 0.94,
            duration: safeFadeOutDuration,
            stagger: {
              each: 0.05,
              from: "end",
            },
            ease: INTRO_EASE,
            onComplete: () => {
              // Fade out the entire black overlay smoothly
              gsap.to(rootRef.current, {
                opacity: 0,
                duration: safeFadeOutDuration * 0.85,
                ease: INTRO_EASE,
                onComplete: () => {
                  gsap.set(rootRef.current, {
                    display: "none",
                  });
                  onCompleteRef.current?.();
                },
              });
            },
          },
          "<-0.1"
        );

        return () => {
          text1.revert();
          text2.revert();
        };
      }, rootRef);

      return () => ctx.revert();
    }, [imgsWrapperId, safeDuration, safeFadeOutDuration]);

    return (
      <section
        ref={(element) => {
          rootRef.current = element;
          if (typeof ref === "function") {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
        }}
        id={loaderWrapperId}
        className="fixed inset-0 z-[9999] flex h-screen w-full items-center justify-center px-[4vw] text-white select-none overflow-hidden max-[1025px]:px-[5vw] max-md:px-[6vw]"
        style={{ backgroundColor }}
      >
        <div className="flex w-full max-w-6xl items-center justify-between max-[1025px]:flex-col max-[1025px]:justify-center max-[1025px]:gap-[18vh] max-md:gap-[35vh]">
          {/* Left Side Text */}
          <p
            ref={text1Ref}
            className="opacity-0 font-mono text-xs sm:text-sm md:text-base tracking-[0.25em] text-white/90 font-medium uppercase"
          >
            HUMAN THINKERS
          </p>

          {/* Central Stacking Cards Container */}
          <div className="flex flex-col items-center gap-4">
            <div
              id={imgsWrapperId}
              className="relative"
              style={{
                width: `clamp(8rem, ${10 * safeImageSize}vw, 15.5rem)`,
                height: `clamp(11rem, ${13.5 * safeImageSize}vw, 21rem)`,
              }}
            >
              {STACK_IMAGE_SOURCES.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  ref={(element) => {
                    imagesRef.current[index] = element;
                  }}
                  className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl opacity-0 border border-white/20 bg-neutral-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.06)]"
                >
                  <img
                    src={src}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                    alt={`loader-img-${index}`}
                    loading="eager"
                    decoding="async"
                  />
                  {/* Subtle gradient vignette on each card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Subtle luxury status indicator */}
            <div className="flex items-center gap-2 select-none pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A1CD8E] shadow-[0_0_8px_#A1CD8E]" />
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-white/60 uppercase">
                SYSTEM // 2024–2026
              </span>
            </div>
          </div>

          {/* Right Side Text */}
          <p
            ref={text2Ref}
            className="opacity-0 font-mono text-xs sm:text-sm md:text-base tracking-[0.25em] text-white/90 font-medium uppercase"
          >
            DIGITAL MAKERS
          </p>
        </div>
      </section>
    );
  }
);

interface StackLoaderProps {
  /** Called once the loader finishes and has faded out. */
  onComplete?: () => void;
  imageSize?: number;
  duration?: number;
  fadeOutDuration?: number;
  backgroundColor?: string;
}

export const StackLoader: React.FC<StackLoaderProps> = ({
  onComplete,
  imageSize = 1,
  duration = 1,
  fadeOutDuration = 0.8,
  backgroundColor = "#000000",
}) => {
  const handleLoaderComplete = useCallback(() => {
    onComplete?.();
  }, [onComplete]);

  return (
    <StackToSpreadIntro
      imageSize={imageSize}
      duration={duration}
      fadeOutDuration={fadeOutDuration}
      backgroundColor={backgroundColor}
      onComplete={handleLoaderComplete}
    />
  );
};

export default StackLoader;
