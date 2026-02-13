"use client";

import * as React from "react";
import {
  type HTMLMotionProps,
  motion,
  type SpringOptions,
  type Transition,
  useMotionValue,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";

type StarLayerProps = HTMLMotionProps<"div"> & {
  count: number;
  size: number;
  transition: Transition;
  starColor: string;
};

function generateStars(count: number, starColor: string) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}

function StarLayer({
  count = 1000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: "linear" },
  starColor = "#fff",
  className,
  ...props
}: StarLayerProps) {
  const [boxShadow, setBoxShadow] = React.useState("");

  React.useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);

  return (
    <motion.div
      className={cn("absolute inset-0 overflow-hidden", className)}
      {...props}
    >
      <motion.div
        className="absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          background: "transparent",
          boxShadow,
        }}
        animate={{ y: [0, -2000] }}
        transition={transition}
      />
      <motion.div
        className="absolute"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          background: "transparent",
          boxShadow,
          top: "2000px",
        }}
        animate={{ y: [0, -2000] }}
        transition={transition}
      />
    </motion.div>
  );
}

type StarsBackgroundProps = React.ComponentProps<"div"> & {
  factor?: number;
  speed?: number;
  transition?: SpringOptions;
  starColor?: string;
};

export function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  transition = { stiffness: 50, damping: 20 },
  starColor = "#fff",
  ...props
}: StarsBackgroundProps) {
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor],
  );

  return (
    <div
      className={cn("relative min-h-screen w-full overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ x: springX, y: springY }}
      >
        <StarLayer count={800} size={1} starColor={starColor} transition={{ repeat: Infinity, duration: speed, ease: "linear" }} />
        <StarLayer count={400} size={2} starColor={starColor} transition={{ repeat: Infinity, duration: speed * 1.5, ease: "linear" }} />
        <StarLayer count={200} size={3} starColor={starColor} transition={{ repeat: Infinity, duration: speed * 2, ease: "linear" }} />
      </motion.div>
      {children}
    </div>
  );
}
