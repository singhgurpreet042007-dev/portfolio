import React from 'react';
import { Hero } from './Hero';
import { Work } from './Work';
import { Capabilities } from './Capabilities';
import { BuildLog } from './BuildLog';
import { StorySection } from './StorySection';
import { HoverSliderSection } from './HoverSliderSection';
import { TechScatterSection } from '../components/TechScatterSection';
import { LayeredTextSection } from './LayeredTextSection';
import { FlipLinksSection } from './FlipLinksSection';
import { ThoughtsSection } from './ThoughtsSection';
import { StatementSection } from './StatementSection';
import { LetsWorkTogether } from './LetsWorkTogether';

export interface MainPortfolioProps {
  onSelectProject?: (projectId: string) => void;
}

export const MainPortfolio: React.FC<MainPortfolioProps> = ({ onSelectProject }) => {
  return (
    <div className="bg-surface text-text-primary">
      {/* ─── 1. DARK SECTION: HERO (PROFILE) ─── */}
      <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
        <Hero />
      </div>

      {/* ─── FEATURED PROJECTS (WORK SHOWCASE - CREAM #F5F2EB BACKGROUND) ─── */}
      <Work onSelectProject={onSelectProject} />

      {/* ─── 2. CREAM SECTION: CAPABILITIES (SKILLS) ─── */}
      <div
        id="capabilities-section"
        className="relative z-10 w-full bg-[#F5F2EB] text-neutral-900 pb-16 sm:pb-20"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 80px), 0 100%)',
        }}
      >
        <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
          <Capabilities />
        </div>
      </div>

      {/* ─── 3. DARK SECTION: BUILD LOG (EXPERIENCE & CONTRIBUTION) ─── */}
      <div className="relative z-0 -mt-20 sm:-mt-20 w-full">
        <BuildLog />
      </div>

      {/* ─── STORY SCROLL REVEAL SECTION ─── */}
      <StorySection />

      {/* ─── DEDICATED MIDDLE SECTION: 4K HOVER SLIDER ENGINEERING PILLARS ─── */}
      <HoverSliderSection />

      {/* ─── MIDDLE SECTION: 3D SCROLL SCATTER & CONVERGENCE ASSEMBLY ─── */}
      <div
        className="relative z-10 w-full bg-[#f5f4f3] text-neutral-900 pb-16 sm:pb-20"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 80px), 0 100%)',
        }}
      >
        <TechScatterSection />
      </div>

      {/* ─── DEDICATED MIDDLE PAGE: 3D ISOMETRIC LAYERED TEXT (PHILOSOPHY) ─── */}
      <div className="relative z-0 -mt-20 sm:-mt-20 pt-6 sm:pt-8">
        <LayeredTextSection />
      </div>

      {/* ─── MIDDLE PAGE: SOCIAL FLIP LINKS ─── */}
      <FlipLinksSection />

      {/* ─── 4. WHITE SECTION: THOUGHTS & OPERATING PRINCIPLES ─── */}
      <div
        className="relative z-10 w-full bg-white text-neutral-900 pb-16 sm:pb-22"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 85px), 0 100%)',
        }}
      >
        <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
          <ThoughtsSection />
        </div>
      </div>

      {/* ─── SECOND LAST SECTION: STATEMENT / PHILOSOPHY BLOCK ANIMATION (DARK) ─── */}
      <div className="relative z-0 -mt-20 sm:-mt-22 pt-12 sm:pt-16">
        <StatementSection />
      </div>

      {/* ─── 5. FINAL CONTACT SECTION: LET'S WORK TOGETHER (DARK) ─── */}
      <div className="relative z-0">
        <LetsWorkTogether />
      </div>
    </div>
  );
};

export default MainPortfolio;
