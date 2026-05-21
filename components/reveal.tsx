"use client";

import { useReducedMotion } from "@/lib/motion";
import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const smoothEase = [0.22, 1, 0.36, 1] as const;

const viewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -8% 0px",
} as const;

const revealUpRich: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: smoothEase },
  },
};

const revealUpSimple: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: smoothEase },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.03,
    },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Faster stagger for dense lists */
  fast?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={revealUpRich}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className,
  delay = 0,
  fast = false,
}: RevealProps): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fast ? staggerContainerFast : staggerContainer}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={revealUpRich}>
      {children}
    </motion.div>
  );
}

/** Staggered entrance for page heroes (eyebrow → headline → body). */
export function RevealHero({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function RevealHeroItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={revealUpSimple}>
      {children}
    </motion.div>
  );
}
