import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project, projects } from '../../data/projects';
import { workProjects, WorkProject } from '../../data/workProjects';

interface AnimatedLetterProps {
  letter: string;
}

const letterVariants: Variants = {
  hover: {
    y: '-50%',
  },
};

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ letter }) => {
  return (
    <span className="inline-block h-[30px] sm:h-[34px] md:h-[38px] overflow-hidden font-bold text-xl sm:text-2xl md:text-3xl tracking-tight leading-none">
      <motion.span
        className="flex min-w-[3px] flex-col"
        style={{ y: '0%' }}
        variants={letterVariants}
        transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
      >
        <span className="leading-none">{letter === ' ' ? '\u00A0' : letter}</span>
        <span className="leading-none">{letter === ' ' ? '\u00A0' : letter}</span>
      </motion.span>
    </span>
  );
};

interface CardProps {
  project: WorkProject;
  richProject: Project;
  onSelectProject: (p: Project) => void;
}

const Card: React.FC<CardProps> = ({ project, richProject, onSelectProject }) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      onClick={() => onSelectProject(richProject)}
      className="group relative h-72 sm:h-80 md:h-[340px] w-full cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 border border-white/10 hover:border-white/30 transition-[border-color,box-shadow] duration-500 shadow-xl"
    >
      {/* Background Image: Grayscale on Desktop, Full Color & Scale-up on Hover */}
      <div
        className="absolute inset-0 saturate-100 transition-all duration-500 ease-out group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
        style={{
          backgroundImage: `url(${project.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Readability Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35 transition-opacity duration-500 group-hover:opacity-85" />

      {/* Card Content Overlay */}
      <div className="relative z-20 flex h-full flex-col justify-between p-5 sm:p-6 md:p-7 text-slate-300 transition-colors duration-500 group-hover:text-white">
        {/* Top Header: Badge & Rotating Arrow */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] sm:text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-full border shadow-xs"
              style={{
                backgroundColor: `${project.accentColor}18`,
                borderColor: `${project.accentColor}50`,
                color: project.accentColor,
              }}
            >
              {project.number} // {project.category}
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-full bg-white/10 border border-white/15 text-slate-300 transition-all duration-500 group-hover:text-black group-hover:bg-white shadow-md">
            <ArrowRight className="text-xl sm:text-2xl transition-transform duration-500 group-hover:-rotate-45" />
          </div>
        </div>

        {/* Bottom Content: Title with AnimatedLetter + Description + Tech Stack */}
        <div className="space-y-2.5">
          <h4 className="flex flex-wrap items-center">
            {project.title.split('').map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>

          <p className="text-xs sm:text-[13px] text-slate-300/90 font-sans line-clamp-2 leading-relaxed transition-colors duration-500 group-hover:text-white">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-neutral-300 border border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
            <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-white/20 text-white font-medium ml-auto flex items-center gap-1">
              Case Study <ArrowRight size={10} className="-rotate-45" />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ColorChangeCardsProps {
  onSelectProject: (p: Project) => void;
}

export const ColorChangeCards: React.FC<ColorChangeCardsProps> = ({ onSelectProject }) => {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
      {workProjects.map((project) => {
        const richProject = projects.find((p) => p.id === project.id) || projects[0];
        return (
          <Card
            key={project.id}
            project={project}
            richProject={richProject}
            onSelectProject={onSelectProject}
          />
        );
      })}
    </div>
  );
};

export default ColorChangeCards;
