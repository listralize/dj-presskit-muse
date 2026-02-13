"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

function UnkDjEffect({
  className,
  speed = 1.6,
  onAnimationComplete,
  ...props
}: Props) {
  const [loopKey, setLoopKey] = useState(0);

  const calc = (x: number) => x * speed;

  const handleComplete = useCallback(() => {
    onAnimationComplete?.();
    // Wait for fill to be visible, then fade out and restart
    setTimeout(() => {
      setLoopKey((k) => k + 1);
    }, calc(2500));
  }, [onAnimationComplete, speed]);

  const strokeInitial = { pathLength: 0, opacity: 0, filter: "blur(8px)" };
  const strokeAnimate = { pathLength: 1, opacity: 1, filter: "blur(0px)" };

  return (
    <AnimatePresence mode="wait">
      <motion.svg
        key={loopKey}
        className={cn("h-16 md:h-20", className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 900 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
        transition={{ duration: calc(0.8) }}
        {...props}
      >
        <title>UNK</title>

        {/* ===== U LETTER ===== */}
        <motion.path
          d="M 225.40625 150.269531 L 225.40625 18.625 L 281.511719 18.625 L 281.511719 150.128906 C 281.511719 187.320312 268.925781 218.492188 243.75 243.636719 C 218.578125 268.78125 187.367188 281.371094 150.144531 281.371094 C 113.996094 281.371094 83.019531 268.714844 57.207031 243.371094 C 31.394531 218.03125 18.488281 186.792969 18.488281 149.601562 L 18.488281 18.625 L 78.371094 18.625 L 78.371094 150.269531 C 78.371094 167.710938 84.476562 183.894531 96.71875 198.824219 C 111.109375 216.628906 129.441406 225.527344 151.742188 225.527344 C 171.710938 225.527344 188.960938 218.242188 203.535156 203.683594 C 218.105469 189.125 225.390625 171.304688 225.390625 150.269531 Z"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={strokeInitial}
          animate={strokeAnimate}
          transition={{
            pathLength: { duration: calc(2.2), ease: [0.65, 0, 0.35, 1] },
            opacity: { duration: calc(0.5) },
            filter: { duration: calc(1.2) },
          }}
        />

        {/* ===== N LETTER ===== */}
        <motion.path
          d="M 447.84375 154.027344 L 368.796875 154.027344 L 368.796875 285.128906 L 313.230469 285.128906 L 313.230469 22.910156 Z"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={strokeInitial}
          animate={strokeAnimate}
          transition={{
            pathLength: { duration: calc(1.8), ease: [0.65, 0, 0.35, 1], delay: calc(1.4) },
            opacity: { duration: calc(0.5), delay: calc(1.4) },
            filter: { duration: calc(1.0), delay: calc(1.4) },
          }}
        />
        <motion.path
          d="M 452.15625 154.320312 L 531.203125 154.320312 L 531.203125 11.585938 L 586.769531 11.585938 L 586.769531 285.460938 Z"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={strokeInitial}
          animate={strokeAnimate}
          transition={{
            pathLength: { duration: calc(1.8), ease: [0.65, 0, 0.35, 1], delay: calc(2.2) },
            opacity: { duration: calc(0.5), delay: calc(2.2) },
            filter: { duration: calc(1.0), delay: calc(2.2) },
          }}
        />

        {/* ===== K LETTER ===== */}
        <motion.path
          d="M 670.011719 286.898438 L 613.363281 286.898438 L 613.363281 13.09375 L 670.011719 13.09375 Z"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={strokeInitial}
          animate={strokeAnimate}
          transition={{
            pathLength: { duration: calc(1.4), ease: [0.65, 0, 0.35, 1], delay: calc(3.2) },
            opacity: { duration: calc(0.4), delay: calc(3.2) },
            filter: { duration: calc(0.8), delay: calc(3.2) },
          }}
        />
        <motion.path
          d="M 886.640625 13.09375 L 744.203125 143.933594 L 673.257812 143.933594 L 815.683594 13.09375 Z"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={{ ...strokeInitial, x: -20 }}
          animate={{ ...strokeAnimate, x: 0 }}
          transition={{
            pathLength: { duration: calc(1.5), ease: [0.65, 0, 0.35, 1], delay: calc(3.8) },
            opacity: { duration: calc(0.4), delay: calc(3.8) },
            filter: { duration: calc(0.8), delay: calc(3.8) },
            x: { duration: calc(1.0), delay: calc(3.8), type: "spring", stiffness: 150, damping: 20 },
          }}
        />
        <motion.path
          d="M 886.640625 286.636719 L 744.203125 155.796875 L 673.257812 155.796875 L 815.699219 286.636719 Z"
          style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          initial={{ ...strokeInitial, x: -20 }}
          animate={{ ...strokeAnimate, x: 0 }}
          transition={{
            pathLength: { duration: calc(1.5), ease: [0.65, 0, 0.35, 1], delay: calc(4.2) },
            opacity: { duration: calc(0.4), delay: calc(4.2) },
            filter: { duration: calc(0.8), delay: calc(4.2) },
            x: { duration: calc(1.0), delay: calc(4.2), type: "spring", stiffness: 150, damping: 20 },
          }}
        />

        {/* Fill reveal after stroke completes */}
        <motion.path
          d="M 225.40625 150.269531 L 225.40625 18.625 L 281.511719 18.625 L 281.511719 150.128906 C 281.511719 187.320312 268.925781 218.492188 243.75 243.636719 C 218.578125 268.78125 187.367188 281.371094 150.144531 281.371094 C 113.996094 281.371094 83.019531 268.714844 57.207031 243.371094 C 31.394531 218.03125 18.488281 186.792969 18.488281 149.601562 L 18.488281 18.625 L 78.371094 18.625 L 78.371094 150.269531 C 78.371094 167.710938 84.476562 183.894531 96.71875 198.824219 C 111.109375 216.628906 129.441406 225.527344 151.742188 225.527344 C 171.710938 225.527344 188.960938 218.242188 203.535156 203.683594 C 218.105469 189.125 225.390625 171.304688 225.390625 150.269531 Z"
          stroke="none" fill="currentColor"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: calc(1.0), delay: calc(5.2), ease: "easeOut" }}
        />
        <motion.path
          d="M 447.84375 154.027344 L 368.796875 154.027344 L 368.796875 285.128906 L 313.230469 285.128906 L 313.230469 22.910156 Z"
          stroke="none" fill="currentColor"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: calc(1.0), delay: calc(5.4), ease: "easeOut" }}
        />
        <motion.path
          d="M 452.15625 154.320312 L 531.203125 154.320312 L 531.203125 11.585938 L 586.769531 11.585938 L 586.769531 285.460938 Z"
          stroke="none" fill="currentColor"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: calc(1.0), delay: calc(5.4), ease: "easeOut" }}
        />
        <motion.path
          d="M 670.011719 286.898438 L 613.363281 286.898438 L 613.363281 13.09375 L 670.011719 13.09375 Z"
          stroke="none" fill="currentColor"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: calc(1.0), delay: calc(5.6), ease: "easeOut" }}
        />
        <motion.path
          d="M 886.640625 13.09375 L 744.203125 143.933594 L 673.257812 143.933594 L 815.683594 13.09375 Z"
          stroke="none" fill="currentColor"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: calc(1.0), delay: calc(5.6), ease: "easeOut" }}
        />
        <motion.path
          d="M 886.640625 286.636719 L 744.203125 155.796875 L 673.257812 155.796875 L 815.699219 286.636719 Z"
          stroke="none" fill="currentColor"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: calc(1.0), delay: calc(5.6), ease: "easeOut" }}
        />

        {/* DJ text inside SVG, centered on K area */}
        <motion.text
          x="820"
          y="189"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          fontSize="32"
          fontWeight="300"
          letterSpacing="8"
          style={{ fontFamily: "Inter, sans-serif", textTransform: "uppercase" }}
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 0.85, filter: "blur(0px)" }}
          transition={{ duration: calc(1.2), delay: calc(5.8), ease: "easeOut" }}
          onAnimationComplete={handleComplete}
        >
          DJ
        </motion.text>
      </motion.svg>
    </AnimatePresence>
  );
}

export { UnkDjEffect };
