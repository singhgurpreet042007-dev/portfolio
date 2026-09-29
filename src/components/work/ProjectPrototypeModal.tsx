import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import MorphGallery from '../MorphGallery';
import { ProjectData } from '../../data/projectsData';

interface ProjectShowcaseModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectPrototypeModal: React.FC<ProjectShowcaseModalProps> = ({
  project,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while full-screen project view is active
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project]);

  // Keyboard navigation: Escape key closes the full-screen view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!mounted || !project) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[9999] w-screen h-[100dvh] bg-[#07070a] text-white flex flex-col overflow-hidden select-none"
      >
        {/* ─── TOP STICKY BAR ─── */}
        <header className="w-full shrink-0 flex items-center justify-between px-6 sm:px-10 md:px-14 py-4 border-b border-white/10 bg-[#09090d]/95 backdrop-blur-xl z-30">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-mono text-neutral-400">
              {project.number}
            </span>
            <span className="text-sm sm:text-base font-bold tracking-tight text-white">
              {project.title}
            </span>
          </div>

          {/* Cross button on the bar */}
          <button
            onClick={onClose}
            aria-label="Close Project View"
            className="inline-flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer group active:scale-95 shadow-md"
          >
            <X size={18} className="group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </header>

        {/* ─── FULL-SCREEN SCROLLABLE PAGE BODY ─── */}
        <main className="flex-1 overflow-y-auto w-full">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-8 sm:py-12 space-y-8 sm:space-y-10">
            {/* Heading & 3-4 Line Clean Paragraph */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-sans max-w-4xl leading-relaxed">
                {project.description}
              </p>

              {/* Direct Links (Only if present, minimal & clean) */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex items-center gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-mono font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs sm:text-sm font-mono transition-all active:scale-95 cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* ─── MORPH GALLERY (WebGL Noise Dissolve Transition) ─── */}
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative h-[380px] sm:h-[500px] md:h-[620px] bg-black">
              <MorphGallery
                items={project.images}
                height="100%"
                duration={1400}
                noiseScale={3.5}
                edge={0.15}
                drift={0.4}
                loop={true}
                autoplay={4500}
                arrows={true}
                thumbnails={true}
              />
            </div>
          </div>
        </main>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default ProjectPrototypeModal;
