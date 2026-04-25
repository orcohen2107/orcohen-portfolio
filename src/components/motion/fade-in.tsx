"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
};

const OFFSET = 30;

const directionMap = {
  up: { y: OFFSET },
  down: { y: -OFFSET },
  left: { x: OFFSET },
  right: { x: -OFFSET },
  none: {},
} as const;

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
  duration = 0.6,
}: FadeInProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
