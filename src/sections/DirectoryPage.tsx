import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { TextRoll } from '../components/TextRoll';

interface DirectoryItem {
  number: string;
  title: string;
  targetId: string;
}

const ITEMS: DirectoryItem[] = [
  { number: '01', title: 'HOME', targetId: 'hero' },
  { number: '02', title: 'PROJECTS', targetId: 'projects' },
  { number: '03', title: 'EXPERIENCE', targetId: 'experience' },
  { number: '04', title: 'CONTRIBUTION', targetId: 'contributions' },
  { number: '05', title: 'CAPABILITIES', targetId: 'capabilities' },
  { number: '06', title: 'CONTACT', targetId: 'contact' },
];

export const DirectoryPage: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(element, { offset: 0, duration: 1.0 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="directory"
      className="relative w-full min-h-[100dvh] bg-[#000000] text-white flex flex-col justify-center py-12 sm:py-16 px-6 sm:px-12 md:px-20 lg:px-28 border-t border-white/[0.06]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col divide-y divide-white/[0.08]">
        {ITEMS.map((item) => (
          <motion.a
            key={item.number}
            href={`#${item.targetId}`}
            onClick={(e) => handleScrollTo(e, item.targetId)}
            initial="initial"
            whileHover="hovered"
            className="group relative flex items-center justify-between py-3.5 sm:py-5 md:py-6 px-2 sm:px-4 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer"
          >
            {/* Number & TextRoll Title */}
            <div className="flex items-center gap-4 sm:gap-8 md:gap-12">
              <span className="font-mono text-[11px] sm:text-xs text-neutral-500 group-hover:text-accent transition-colors duration-300 w-5 select-none">
                {item.number}
              </span>

              <TextRoll className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white group-hover:text-white transition-colors duration-300">
                {item.title}
              </TextRoll>
            </div>

            {/* Clean Minimal Arrow */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 flex-shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default DirectoryPage;
