import React from 'react';
import { motion } from 'framer-motion';
import { FloatingPathsHeroBackground } from '../components/FloatingPaths';

const items = [
  'Full-Stack Architecture',
  'Zero-Trust AI & Security',
  'High-Throughput Microservices',
  'Developer Tooling & Extensions',
  'Distributed Cloud & DevOps',
];

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full py-8 md:py-14 overflow-hidden">
      <div id="home" className="absolute -top-16 left-0 pointer-events-none" />
      {/* Dynamic flowing paths background effect — strictly scoped to Hero photo section */}
      <FloatingPathsHeroBackground />

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10 overflow-x-hidden items-center">
        {/* Right side: Gurpreet's real photo with soft glow */}
        <div className="md:order-2 relative flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px] aspect-square flex justify-center">
            <div className="absolute -z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#2997ff]/20 blur-2xl opacity-25 -top-8 -left-8 pointer-events-none" />
            <img
              src="/assets/profile/profile.webp"
              alt="Gurpreet Singh"
              decoding="async"
              className="rounded-2xl shadow-xl w-full h-full object-cover filter brightness-105"
            />
          </div>
        </div>

        {/* Left side: Pure Kokonut layout */}
        <div className="md:order-1 flex flex-col justify-between">
          <div className="flex flex-col h-full justify-between">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-white leading-[1.08] tracking-tighter">
              Gurpreet.
            </h1>

            <ul
              style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
              className="font-aribau font-light text-[13.5px] sm:text-[15.5px] text-white/90 space-y-1.5 py-3.5 sm:py-4.5 tracking-normal"
            >
              {items.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0.8 }}
                  whileHover={{
                    opacity: 1,
                    y: -2,
                    transition: {
                      duration: 0.3,
                      ease: 'easeOut',
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  <a href="#work" className="cursor-pointer hover:underline hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div>
              <h2
                style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
                className="text-base sm:text-lg md:text-xl font-aribau font-bold text-white tracking-tight mt-auto pt-2.5 sm:pt-3"
              >
                ENGINEERING &amp; SYSTEMS · 2026
              </h2>
              <p
                style={{ fontFamily: '"Aribau Rounded", sans-serif' }}
                className="font-aribau font-light text-[12px] sm:text-[13.5px] text-[#b5b5ba] leading-relaxed max-w-lg pt-2 sm:pt-3 tracking-normal"
              >
                <a href="#work" className="underline text-white font-normal hover:text-accent transition-colors">
                  "I build systems that ship"
                </a>{' '}
                — Full-Stack Software Engineer engineering zero-trust behavioral
                security platforms, production SaaS, and developer tools. Crafting
                real-time microservices and explainable machine learning biometrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
