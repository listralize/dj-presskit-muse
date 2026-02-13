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
      className={cn("h-16 md:h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

      {/* U letter - outer outline */}
      <motion.path
        d="M 76.871094 151.917969 L 76.871094 108.128906 L 95.535156 108.128906 L 95.535156 151.871094 C 95.535156 164.242188 91.347656 174.609375 82.972656 182.972656 C 74.601562 191.339844 64.21875 195.523438 51.839844 195.523438 C 39.8125 195.523438 29.511719 191.316406 20.925781 182.886719 C 12.339844 174.457031 8.046875 164.066406 8.046875 151.695312 L 8.046875 108.128906 L 27.964844 108.128906 L 27.964844 151.917969 C 27.964844 157.71875 29.996094 163.101562 34.066406 168.070312 C 38.855469 173.992188 44.953125 176.949219 52.371094 176.949219 C 59.011719 176.949219 64.75 174.527344 69.597656 169.683594 C 74.445312 164.84375 76.867188 158.914062 76.867188 151.917969 Z"
        style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1.0),
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 200,
          damping: 18,
          opacity: { duration: 0.4 },
          scale: { duration: 0.6, type: "spring", stiffness: 180 },
        }}
      />

      {/* N letter - left diagonal part */}
      <motion.path
        d="M 149.101562 151.828125 L 122.808594 151.828125 L 122.808594 195.4375 L 104.328125 195.4375 L 104.328125 108.21875 Z"
        style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(1.2),
          type: "spring",
          stiffness: 220,
          damping: 16,
          opacity: { duration: 0.35, delay: calc(1.2) },
          scale: { duration: 0.5, delay: calc(1.2) },
        }}
      />

      {/* N letter - right diagonal part */}
      <motion.path
        d="M 150.539062 151.925781 L 176.832031 151.925781 L 176.832031 104.449219 L 195.3125 104.449219 L 195.3125 195.546875 Z"
        style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(1.8),
          type: "spring",
          stiffness: 220,
          damping: 16,
          opacity: { duration: 0.35, delay: calc(1.8) },
          scale: { duration: 0.5, delay: calc(1.8) },
        }}
      />

      {/* K letter - vertical bar */}
      <motion.path
        d="M 219.898438 195.523438 L 201.054688 195.523438 L 201.054688 104.449219 L 219.898438 104.449219 Z"
        style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeOut",
          delay: calc(2.5),
          type: "spring",
          stiffness: 280,
          damping: 20,
          opacity: { duration: 0.3, delay: calc(2.5) },
          scale: { duration: 0.4, delay: calc(2.5) },
        }}
      />

      {/* K letter - upper arm */}
      <motion.path
        d="M 291.953125 104.449219 L 244.574219 147.96875 L 220.980469 147.96875 L 268.351562 104.449219 Z"
        style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(2.9),
          type: "spring",
          stiffness: 260,
          damping: 18,
          opacity: { duration: 0.3, delay: calc(2.9) },
          scale: { duration: 0.4, delay: calc(2.9) },
        }}
      />

      {/* K letter - lower arm */}
      <motion.path
        d="M 291.953125 195.4375 L 244.574219 151.917969 L 220.980469 151.917969 L 268.359375 195.4375 Z"
        style={{ strokeLinecap: "square", strokeLinejoin: "miter" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeInOut",
          delay: calc(3.3),
          type: "spring",
          stiffness: 260,
          damping: 18,
          opacity: { duration: 0.3, delay: calc(3.3) },
          scale: { duration: 0.4, delay: calc(3.3) },
        }}
      />

      {/* Futuristic accent lines */}
      <motion.g className="stroke-primary opacity-60">
        <motion.path
          d="M 8 100L292 100"
          strokeWidth="1"
          style={{ strokeLinecap: "square" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            duration: calc(1.5),
            delay: calc(4.0),
            ease: "easeOut",
          }}
        />
        <motion.path
          d="M 8 200L292 200"
          strokeWidth="1"
          style={{ strokeLinecap: "square" }}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            duration: calc(1.5),
            delay: calc(4.2),
            ease: "easeOut",
          }}
          onAnimationComplete={onAnimationComplete}
        />
      </motion.g>
    </motion.svg>
  );
}

export { UnkDjEffect };
