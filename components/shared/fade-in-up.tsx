"use client";

import { motion, HTMLMotionProps } from "motion/react";
import React from "react";

interface FadeInUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function FadeInUp({ children, delay = 0, ...props }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.25, 0, 1], // Cubic bezier for smooth feeling
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
