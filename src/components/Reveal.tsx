import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Subtle fade + slide-up on scroll reveal.
 * The ONLY allowed animation on the page (200-400ms).
 */
export const Reveal: React.FC<RevealProps> = React.memo(({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -20px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.35, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
      style={{
        willChange: isInView ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </motion.div>
  );
});

Reveal.displayName = 'Reveal';
