import React from 'react';
import { RevealText } from '../components/RevealText';

/**
 * INTRO PAGE — Separate dedicated page.
 * Pure black background, white centered text.
 * Uses the LOCKED RevealText component for the main intro.
 * 
 * ⚠️  DO NOT MODIFY THIS PAGE'S CORE CONTENT IN FUTURE PROMPTS.
 */
export const IntroPage: React.FC<{ ready?: boolean }> = ({ ready = true }) => {
  return (
    <div
      style={{
        minHeight: '100dvh',
        width: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 5rem) 1.5rem',
        gap: 'clamp(1.5rem, 3vw, 2.5rem)',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Only mount RevealText AFTER StackLoader finishes — ensures single animation */}
      {ready && (
        <>
          {/* Main Intro — RevealText (LOCKED, DO NOT CHANGE) */}
          <RevealText
            size="xl"
            as="h1"
            stagger={0.05}
            delay={0.2}
            duration={0.85}
            blur={12}
            className="font-semibold text-white"
            style={{
              maxWidth: '52rem',
            }}
          >
            Full-Stack Developer crafting AI-powered security platforms, production SaaS, and developer tools that ship.
          </RevealText>

          {/* Subtle name line */}
          <RevealText
            size="sm"
            as="p"
            stagger={0.03}
            delay={0.8}
            duration={0.6}
            blur={6}
            className="font-normal"
            style={{
              color: '#525252',
              letterSpacing: '0.12em',
              maxWidth: '32rem',
              textTransform: 'uppercase',
            }}
          >
            Gurpreet Singh
          </RevealText>

          {/* Scroll cue — appears after text reveal & is interactive */}
          <div
            onClick={() => {
              const targetEl = document.getElementById('directory') || document.getElementById('hero');
              if (targetEl) {
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo(targetEl, { offset: 0, duration: 1.0 });
                } else {
                  targetEl.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Scroll to main content"
            style={{
              position: 'absolute',
              bottom: 'clamp(2rem, 4vh, 3.5rem)',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              opacity: 0,
              animation: 'fadeInUp 0.6s ease-out 2s forwards',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '11px', color: '#737373', fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Scroll
            </span>
            <span style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, #737373, transparent)' }} />
          </div>
        </>
      )}
    </div>
  );
};

export default IntroPage;

