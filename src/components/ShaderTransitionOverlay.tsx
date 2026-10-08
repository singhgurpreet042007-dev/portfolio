"use client";

import React, { useEffect, useState, useRef } from 'react';
import { SpiralAnimation } from './SpiralAnimation';
import { BlurTextAnimation } from './BlurTextAnimation';
import { FluxoraRevealText } from './FluxoraRevealText';
import { LampTransition } from './LampTransition';

interface ShaderTransitionOverlayProps {
  active: boolean;
  projectId?: string;
  projectTitle?: string;
  projectNumber?: string;
  transitionQuote?: string;
  onTransitionComplete?: () => void;
}

export const ShaderTransitionOverlay: React.FC<ShaderTransitionOverlayProps> = ({
  active,
  projectId,
  projectTitle,
  transitionQuote,
  onTransitionComplete,
}) => {
  const [shouldRender, setShouldRender] = useState(active);
  // Transition phases: 'spiral' -> 'customReveal' | 'lampReveal' | 'blurText' -> 'revealing' -> 'done'
  const [phase, setPhase] = useState<'spiral' | 'customReveal' | 'lampReveal' | 'blurText' | 'revealing' | 'done'>('spiral');
  const onTransitionCompleteRef = useRef(onTransitionComplete);
  const transitionStartedRef = useRef(false);

  const normalizedId = (projectId || projectTitle || '').toLowerCase();
  const isFluxora = normalizedId.includes('fluxora');
  const isDeployFlow = normalizedId.includes('deploy');
  const isAegis = normalizedId.includes('aegis');
  const isSmartCampus = normalizedId.includes('smart') || normalizedId.includes('campus');

  // Group 1: Letter reveal animation (Fluxora & DeployFlow)
  const isLetterReveal = isFluxora || isDeployFlow;
  // Group 2: Aceternity Lamp illumination animation (Aegis & Smart Campus)
  const isLampReveal = isAegis || isSmartCampus;

  useEffect(() => {
    onTransitionCompleteRef.current = onTransitionComplete;
  }, [onTransitionComplete]);

  useEffect(() => {
    if (active) {
      if (transitionStartedRef.current) return;
      transitionStartedRef.current = true;
      setShouldRender(true);
      setPhase('spiral');

      // 1. Stage 1: Cosmic 3D Spiral "ENTER" Animation runs directly for 2000ms
      const t1 = setTimeout(() => {
        if (isLetterReveal) {
          setPhase('customReveal');
        } else if (isLampReveal) {
          setPhase('lampReveal');
        } else {
          setPhase('blurText');
        }
      }, 2000);

      // 2. Fallback maximum timer to guarantee project reveal even if animation complete event delays
      const t2 = setTimeout(() => {
        if (phase !== 'done' && phase !== 'revealing') {
          handleBlurTextComplete();
        }
      }, 7500);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      transitionStartedRef.current = false;
      // Fade out cleanly - NEVER re-mount on exit!
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [active, isLetterReveal, isLampReveal]);

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
      {/* ─── STAGE 1: COSMIC 3D SPIRAL "ENTER" (Runs directly on project entry) ─── */}
      {phase === 'spiral' && (
        <div className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in opacity-100">
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

      {/* ─── STAGE 2 (FLUXORA & DEPLOYFLOW): SPRING LETTER REVEAL TEXT ANIMATION ─── */}
      {isLetterReveal && (phase === 'customReveal' || phase === 'revealing') && (
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center bg-black px-6 transition-all duration-700 ease-out ${
            phase === 'revealing'
              ? 'opacity-0 scale-105 filter blur-lg pointer-events-none'
              : 'opacity-100 scale-100 filter-none pointer-events-auto'
          }`}
        >
          <FluxoraRevealText
            text={isDeployFlow ? "DEPLOYFLOW" : "FLUXORA"}
            onComplete={handleBlurTextComplete}
          />
        </div>
      )}

      {/* ─── STAGE 2 (AEGIS-AI & SMART CAMPUS): ACETERNITY LAMP ILLUMINATION ANIMATION ─── */}
      {isLampReveal && (phase === 'lampReveal' || phase === 'revealing') && (
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center bg-black transition-all duration-700 ease-out ${
            phase === 'revealing'
              ? 'opacity-0 scale-105 filter blur-lg pointer-events-none'
              : 'opacity-100 scale-100 filter-none pointer-events-auto'
          }`}
        >
          <LampTransition
            theme={isAegis ? "burgundy" : "lavender"}
            tag={isAegis ? "01 // BEHAVIORAL SHIELD" : "04 // CAMPUS OS"}
            title={isAegis ? "AEGIS-AI" : "SMART CAMPUS"}
            subtitle={
              isAegis
                ? "ZERO-TRUST IDENTITY VERIFICATION"
                : "UNIFIED ACADEMIC OPERATING SYSTEM"
            }
            onComplete={handleBlurTextComplete}
          />
        </div>
      )}

      {/* ─── STAGE 2 (GENERIC FALLBACK): BLUR TEXT ANIMATION ─── */}
      {!isLetterReveal && !isLampReveal && (phase === 'blurText' || phase === 'revealing') && (
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
