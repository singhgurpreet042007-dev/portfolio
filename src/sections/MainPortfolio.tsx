import React from 'react';
import { Hero } from './Hero';
import { Work } from './Work';
import { Capabilities } from './Capabilities';
import { BuildLog } from './BuildLog';
import { StorySection } from './StorySection';
import { LayeredTextSection } from './LayeredTextSection';
import { FlipLinksSection } from './FlipLinksSection';
import { ThoughtsSection } from './ThoughtsSection';
import { FooterStickyReveal } from '../components/FooterStickyReveal';
import { AngledDivider } from '../components/AngledDivider';

export const MainPortfolio: React.FC = () => {
  return (
    <div className="bg-surface text-text-primary">
      {/* ─── 1. DARK SECTION: HERO (PROFILE) ─── */}
      <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
        <Hero />
      </div>


      {/* ─── ATMOSPHERIC SECTION: WORK (PROJECTS) ─── */}
      <Work />

      {/* ─── CUT 1: Dark to White (Slants Up-Right) ─── */}
      <AngledDivider direction="dark-to-light" slant="up-right" />

      {/* ─── 2. WHITE SECTION: CAPABILITIES (SKILLS) ─── */}
      <div
        className="w-full bg-white text-neutral-900 shadow-inner"
        style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }}
      >
        <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
          <Capabilities />
        </div>
      </div>

      {/* ─── CUT 2: White to Dark (Slants Down-Right) ─── */}
      <AngledDivider direction="light-to-dark" slant="down-right" />

      {/* ─── 3. DARK SECTION: BUILD LOG (EXPERIENCE & CONTRIBUTION) ─── */}
      <div
        className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10"
        style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}
      >
        <BuildLog />
      </div>

      {/* ─── STORY SCROLL REVEAL SECTION ─── */}
      <StorySection />

      {/* ─── DEDICATED MIDDLE PAGE: 3D ISOMETRIC LAYERED TEXT (PHILOSOPHY) ─── */}
      <div style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 700px' }}>
        <LayeredTextSection />
      </div>

      {/* ─── MIDDLE PAGE: SOCIAL FLIP LINKS ─── */}
      <div style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }}>
        <FlipLinksSection />
      </div>

      {/* ─── CUT 3: Dark to White (Slants Up-Right) ─── */}
      <AngledDivider direction="dark-to-light" slant="up-right" />

      {/* ─── 4. WHITE SECTION: THOUGHTS & OPERATING PRINCIPLES ─── */}
      <div
        className="w-full bg-white text-neutral-900 shadow-inner"
        style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 700px' }}
      >
        <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
          <ThoughtsSection />
        </div>
      </div>

      {/* ─── CUT 4: White to Dark (Slants Down-Right) ─── */}
      <AngledDivider direction="light-to-dark" slant="down-right" />

      {/* ─── 5. STICKY REVEAL FOOTER (DARK) ─── */}
      <FooterStickyReveal />
    </div>
  );
};

export default MainPortfolio;
