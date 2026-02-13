"use client";

import type { TargetAndTransition } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
  scale: 0.7,
  rotateY: -15,
};

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
  scale: 1,
  rotateY: 0,
};

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

function UnkDjEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-24 md:h-32", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 620 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="14"
      initial={{ opacity: 1, scale: 0.8, rotateX: 10 }}
      exit={{ opacity: 0, scale: 0.6, rotateX: -10 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 120,
        damping: 15,
      }}
      {...props}
    >
      <title>UNK DJ</title>

      {/* U - Angular U shape */}
      <motion.path
        d="M15 15L15 75C15 95 30 110 55 110C80 110 95 95 95 75L95 15"
        style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 250,
          damping: 18,
          opacity: { duration: 0.35 },
          scale: { duration: 0.5, type: "spring", stiffness: 200 },
        }}
      />

      {/* N - Angular N with diagonal */}
      <motion.g>
        <motion.path
          d="M125 110L125 15"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeOut",
            delay: calc(0.7),
            type: "spring",
            stiffness: 280,
            damping: 20,
            opacity: { duration: 0.3, delay: calc(0.7) },
            scale: { duration: 0.4, delay: calc(0.7) },
          }}
        />
        <motion.path
          d="M125 15L195 110"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.6),
            ease: "easeInOut",
            delay: calc(1.0),
            type: "spring",
            stiffness: 220,
            damping: 16,
            opacity: { duration: 0.3, delay: calc(1.0) },
            scale: { duration: 0.45, delay: calc(1.0) },
          }}
        />
        <motion.path
          d="M195 110L195 15"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeOut",
            delay: calc(1.4),
            type: "spring",
            stiffness: 280,
            damping: 20,
            opacity: { duration: 0.3, delay: calc(1.4) },
            scale: { duration: 0.4, delay: calc(1.4) },
          }}
        />
      </motion.g>

      {/* K - Vertical + angular arms */}
      <motion.g>
        <motion.path
          d="M225 15L225 110"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeOut",
            delay: calc(1.9),
            type: "spring",
            stiffness: 280,
            damping: 20,
            opacity: { duration: 0.3, delay: calc(1.9) },
            scale: { duration: 0.4, delay: calc(1.9) },
          }}
        />
        <motion.path
          d="M225 65L295 15"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeInOut",
            delay: calc(2.2),
            type: "spring",
            stiffness: 260,
            damping: 18,
            opacity: { duration: 0.3, delay: calc(2.2) },
            scale: { duration: 0.4, delay: calc(2.2) },
          }}
        />
        <motion.path
          d="M250 65L305 110"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeInOut",
            delay: calc(2.5),
            type: "spring",
            stiffness: 260,
            damping: 18,
            opacity: { duration: 0.3, delay: calc(2.5) },
            scale: { duration: 0.4, delay: calc(2.5) },
          }}
        />
      </motion.g>

      {/* D - Vertical + curved arc */}
      <motion.g>
        <motion.path
          d="M370 15L370 110"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.5),
            ease: "easeOut",
            delay: calc(3.2),
            type: "spring",
            stiffness: 280,
            damping: 20,
            opacity: { duration: 0.3, delay: calc(3.2) },
            scale: { duration: 0.4, delay: calc(3.2) },
          }}
        />
        <motion.path
          d="M370 15L410 15C445 15 465 35 465 62.5C465 90 445 110 410 110L370 110"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.8),
            ease: "easeInOut",
            delay: calc(3.5),
            type: "spring",
            stiffness: 180,
            damping: 16,
            opacity: { duration: 0.4, delay: calc(3.5) },
            scale: { duration: 0.6, delay: calc(3.5) },
          }}
        />
      </motion.g>

      {/* J - Hook shape */}
      <motion.g>
        <motion.path
          d="M500 15L560 15"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.4),
            ease: "easeOut",
            delay: calc(4.2),
            type: "spring",
            stiffness: 300,
            damping: 20,
            opacity: { duration: 0.25, delay: calc(4.2) },
            scale: { duration: 0.35, delay: calc(4.2) },
          }}
        />
        <motion.path
          d="M535 15L535 85C535 100 525 110 510 110C495 110 485 100 485 85"
          style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
          initial={initialProps}
          animate={animateProps}
          transition={{
            duration: calc(0.7),
            ease: "easeInOut",
            delay: calc(4.5),
            type: "spring",
            stiffness: 200,
            damping: 16,
            opacity: { duration: 0.35, delay: calc(4.5) },
            scale: { duration: 0.5, delay: calc(4.5) },
          }}
        />
      </motion.g>

      {/* Futuristic accent lines */}
      <motion.g className="stroke-primary opacity-60">
        <motion.path
          d="M10 2L610 2"
          strokeWidth="2"
          style={{ strokeLinecap: "square" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{
            duration: calc(1.5),
            delay: calc(5.2),
            ease: "easeOut",
          }}
        />
        <motion.path
          d="M10 118L610 118"
          strokeWidth="2"
          style={{ strokeLinecap: "square" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{
            duration: calc(1.5),
            delay: calc(5.4),
            ease: "easeOut",
          }}
          onAnimationComplete={onAnimationComplete}
        />
      </motion.g>
    </motion.svg>
  );
}

export { UnkDjEffect };
