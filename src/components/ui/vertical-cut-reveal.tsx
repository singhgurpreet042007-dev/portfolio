"use client";

import React from "react";
import { motion } from "framer-motion";

export interface VerticalCutRevealProps {
  children: string;
  splitBy?: "words" | "characters";
  staggerDuration?: number;
  staggerFrom?: "first" | "last";
  reverse?: boolean;
  transition?: any;
  className?: string;
}

export const VerticalCutReveal: React.FC<VerticalCutRevealProps> = ({
  children,
  splitBy = "words",
  staggerDuration = 0.08,
  transition = {
    type: "spring",
    stiffness: 250,
    damping: 30,
    delay: 0.1,
  },
  className = "",
}) => {
  const items = splitBy === "words" ? children.split(" ") : children.split("");

  return (
    <span className={`inline-flex flex-wrap gap-x-2.5 items-baseline ${className}`}>
      {items.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden py-1">
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0, filter: "blur(4px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ...transition,
              delay: (transition?.delay || 0) + i * staggerDuration,
            }}
          >
            {item}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default VerticalCutReveal;
