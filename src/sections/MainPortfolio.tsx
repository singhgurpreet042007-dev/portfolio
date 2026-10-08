import React from 'react';
import { Hero } from './Hero';
import { Work } from './Work';
import { Capabilities } from './Capabilities';
import { BuildLog } from './BuildLog';
import { ContributionSkylineSection } from './ContributionSkylineSection';
import { AboutSection } from './AboutSection';
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
      {/* ─── 01. DARK SECTION: HERO (DIRECTORY 01) ─── */}
      <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
        <Hero />
      </div>

      {/* ─── 02. FEATURED PROJECTS: WORK (DIRECTORY 02 - CREAM BACKGROUND) ─── */}
      <Work onSelectProject={onSelectProject} />

      {/* ─── 03. BUILD LOG: PRACTICAL EXPERIENCE (DIRECTORY 03 - DARK BACKGROUND) ─── */}
      <div className="relative z-0 w-full border-t border-white/[0.06]">
        <BuildLog />
      </div>

      {/* ─── 04. 3D GITHUB SKYLINE: CODE ACTIVITY (DIRECTORY 04 - PINNED 3D ROTATION) ─── */}
      <ContributionSkylineSection />

      {/* ─── 04.5 WHO I AM: GURPREET'S FULL STORY & ABOUT SECTION ─── */}
      <AboutSection />

      {/* ─── 05. CAPABILITIES: WHAT I WORK WITH (DIRECTORY 05 - CREAM BACKGROUND) ─── */}
      <div
        id="capabilities-section"
        className="relative z-10 w-full bg-[#F5F2EB] text-neutral-900 py-16 sm:py-24 border-t border-neutral-300/80"
      >
        <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
          <Capabilities />
        </div>
      </div>

      {/* ─── DEDICATED MIDDLE SECTION: 4K HOVER SLIDER ENGINEERING PILLARS ─── */}
      <HoverSliderSection />

      {/* ─── MIDDLE SECTION: 3D SCROLL SCATTER & CONVERGENCE ASSEMBLY ─── */}
      <div className="relative z-10 w-full bg-[#f5f4f3] text-neutral-900 py-16 sm:py-20 border-t border-neutral-300/80">
        <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
          <TechScatterSection />
        </div>
      </div>

      {/* ─── DEDICATED MIDDLE PAGE: 3D ISOMETRIC LAYERED TEXT (PHILOSOPHY) ─── */}
      <div className="relative z-0 pt-8 sm:pt-12 border-t border-white/[0.06]">
        <LayeredTextSection />
      </div>

      {/* ─── MIDDLE PAGE: SOCIAL FLIP LINKS ─── */}
      <FlipLinksSection />

      {/* ─── WHITE SECTION: THOUGHTS & OPERATING PRINCIPLES ─── */}
      <div className="relative z-10 w-full bg-white text-neutral-900 py-16 sm:py-24 border-t border-neutral-200">
        <div className="w-full max-w-page mx-auto px-6 sm:px-8 md:px-10">
          <ThoughtsSection />
        </div>
      </div>

      {/* ─── STATEMENT / PHILOSOPHY BLOCK ANIMATION (DARK) ─── */}
      <div className="relative z-0 pt-12 sm:pt-16 border-t border-white/[0.06]">
        <StatementSection />
      </div>

      {/* ─── 06. FINAL CONTACT SECTION: LET'S WORK TOGETHER (DIRECTORY 06) ─── */}
      <div className="relative z-0 border-t border-white/[0.06]">
        <LetsWorkTogether />
      </div>
    </div>
  );
};

export default MainPortfolio;
