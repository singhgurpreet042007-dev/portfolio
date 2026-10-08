"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TimelineContentProps {
  as?: string;
  animationNum?: number;
  timelineRef?: React.RefObject<any>;
  customVariants?: any;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export const TimelineContent: React.FC<TimelineContentProps> = ({
  as = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className = "",
  children,
  ...props
}) => {
  const Component = (motion as any)[as] || motion.div;

  return (
    <Component
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={animationNum}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default TimelineContent;
