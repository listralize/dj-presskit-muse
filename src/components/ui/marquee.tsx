"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  repeat?: number;
  duration?: number;
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  strokeWidth?: string;
}

const fontSizeClasses = {
  sm: "text-5xl sm:text-6xl md:text-7xl",
  md: "text-6xl sm:text-7xl md:text-8xl",
  lg: "text-7xl sm:text-8xl md:text-9xl",
  xl: "text-8xl sm:text-9xl md:text-[10rem]",
  "2xl": "text-9xl sm:text-[10rem] md:text-[11rem]",
  "3xl": "text-[10rem] sm:text-[11rem] md:text-[12rem]",
};

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      text,
      repeat = 4,
      duration = 20,
      fontSize = "lg",
      strokeWidth = "1px",
      ...props
    },
    ref
  ) => {
    const strokeColor = "hsl(var(--foreground))";

    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden py-8", className)}
        {...props}
      >
        {/* Top and bottom fade */}
        <>
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background to-transparent z-10" />
        </>

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            },
          }}
        >
          {[...Array(repeat)].map((_, index) => (
            <span
              key={index}
              className={cn(
                "inline-block mx-4 font-display uppercase tracking-wider",
                fontSizeClasses[fontSize]
              )}
              style={{
                WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
                color: "transparent",
              }}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }
);

Marquee.displayName = "Marquee";
