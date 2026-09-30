"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ShaderAnimation } from './ShaderAnimation';
import { SpiralAnimation } from './SpiralAnimation';
import { BlurTextAnimation } from './BlurTextAnimation';

interface ShaderTransitionOverlayProps {
  active: boolean;
  projectTitle?: string;
  projectNumber?: string;
  transitionQuote?: string;
  onTransitionComplete?: () => void;
}

export const ShaderTransitionOverlay: React.FC<ShaderTransitionOverlayProps> = ({
  active,
  transitionQuote,
  onTransitionComplete,
}) => {
  const [shouldRender, setShouldRender] = useState(active);
  // Transition phases: 'shader' -> 'blending' -> 'spiral' -> 'blurText' -> 'revealing' -> 'done'
  const [phase, setPhase] = useState<'shader' | 'blending' | 'spiral' | 'blurText' | 'revealing' | 'done'>('shader');
  const onTransitionCompleteRef = useRef(onTransitionComplete);
  const transitionStartedRef = useRef(false);

  useEffect(() => {
    onTransitionCompleteRef.current = onTransitionComplete;
  }, [onTransitionComplete]);

  useEffect(() => {
    if (active) {
      if (transitionStartedRef.current) return;
      transitionStartedRef.current = true;
      setShouldRender(true);
      setPhase('shader');

      // 1. Stage 1: Chromatic Shader for 850ms
      const t1 = setTimeout(() => {
        setPhase('blending'); // Crossfade interval
      }, 850);

      // 2. Stage 2: Cosmic 3D Spiral "ENTER" Animation after 1250ms
      const t2 = setTimeout(() => {
        setPhase('spiral');
      }, 1250);

      // 3. Stage 3: Smoothly transition from ENTER warp into Blur Text Animation after 3100ms
      const t3 = setTimeout(() => {
        setPhase('blurText');
      }, 3100);

      // 4. Fallback maximum timer to guarantee project reveal even if animation complete event delays
      const t4 = setTimeout(() => {
        if (phase !== 'done' && phase !== 'revealing') {
          handleBlurTextComplete();
        }
      }, 7200);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    } else {
      transitionStartedRef.current = false;
      // Fade out cleanly - NEVER re-mount or reset to shader on exit!
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [active]);

  const handleBlurTextComplete = () => {
    // 1. Signal App to mount project screen underneath
    if (onTransitionCompleteRef.current) {
      onTransitionCompleteRef.current();
    }

    // 2. Switch to revealing phase: crossfade out smoothly over 750ms
    setPhase('revealing');

    // 3. Finalize after smooth crossfade finishes
    setTimeout(() => {
      setPhase('done');
      setShouldRender(false);
    }, 750);
  };

  if (!shouldRender) return null;

  return (
    <div
      aria-hidden={!active}
      className={`fixed inset-0 z-[99999] bg-[#070709] overflow-hidden flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        active && phase !== 'done' && phase !== 'revealing'
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* ─── STAGE 1: THREE.JS CHROMATIC SHADER (Runs first only) ─── */}
      {active && (phase === 'shader' || phase === 'blending') && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-out ${
            phase === 'blending' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <ShaderAnimation className="w-full h-full" />
        </div>
      )}

      {/* ─── STAGE 2: COSMIC 3D SPIRAL "ENTER" (Runs second) ─── */}
      {(phase === 'blending' || phase === 'spiral') && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in ${
            phase === 'blending' ? 'opacity-90' : 'opacity-100'
          }`}
        >
          <SpiralAnimation duration={2.0} className="w-full h-full" />

          {/* Minimal ENTER HUD displayed during spiral */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none select-none px-6">
            <h2
              style={{ fontFamily: '"JetBrains Mono", "SF Mono", monospace' }}
              className="text-2xl sm:text-3xl md:text-4xl font-mono uppercase tracking-[0.4em] text-white/95 font-semibold drop-shadow-[0_0_24px_rgba(255,255,255,0.4)] animate-pulse"
            >
              ENTER
            </h2>
          </div>
        </div>
      )}

      {/* ─── STAGE 3: BLUR TEXT ANIMATION + SMOOTH CINEMATIC DISSOLVE ─── */}
      {(phase === 'blurText' || phase === 'revealing') && (
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center bg-black transition-all duration-700 ease-out ${
            phase === 'revealing'
              ? 'opacity-0 scale-105 filter blur-lg pointer-events-none'
              : 'opacity-100 scale-100 filter-none pointer-events-auto'
          }`}
        >
          <BlurTextAnimation
            text={transitionQuote || "Hard work pays off. Built with relentless discipline, focus, and obsessive craft."}
            fontSize="text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
            fontFamily="font-['Aribau_Rounded',_sans-serif]"
            textColor="text-white"
            onComplete={handleBlurTextComplete}
          />
        </div>
      )}
    </div>
  );
};

export default ShaderTransitionOverlay;
