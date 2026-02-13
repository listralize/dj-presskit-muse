"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const formatTime = (seconds: number = 0) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const CustomSlider = ({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}) => {
  return (
    <div
      className={cn("relative w-full h-1 bg-white/10 rounded-full cursor-pointer group", className)}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        onChange(Math.min(Math.max(percentage, 0), 100));
      }}
    >
      <div
        className="absolute top-0 left-0 h-full rounded-full transition-all duration-100"
        style={{ width: `${value}%`, backgroundColor: "#a6c8d3" }}
      />
    </div>
  );
};

export interface AudioPlayerProps {
  src: string;
  title?: string;
  onPrev?: () => void;
  onNext?: () => void;
  isShuffle?: boolean;
  onShuffleToggle?: () => void;
  isRepeat?: boolean;
  onRepeatToggle?: () => void;
  autoPlay?: boolean;
}

const AudioPlayer = ({
  src,
  title,
  onPrev,
  onNext,
  isShuffle = false,
  onShuffleToggle,
  isRepeat = false,
  onRepeatToggle,
  autoPlay = false,
}: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const prog =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(isFinite(prog) ? prog : 0);
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number) => {
    if (audioRef.current && audioRef.current.duration) {
      const time = (value / 100) * audioRef.current.duration;
      if (isFinite(time)) {
        audioRef.current.currentTime = time;
        setProgress(value);
      }
    }
  };

  const handleEnded = () => {
    if (isRepeat) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else if (onNext) {
      onNext();
    } else {
      setIsPlaying(false);
    }
  };

  React.useEffect(() => {
    if (audioRef.current) {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      audioRef.current.load();
      if (autoPlay) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  }, [src, autoPlay]);

  if (!src) return null;

  return (
    <div className="w-full">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />

      <div className="rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 p-4 md:p-5">
        {/* Title */}
        {title && (
          <AnimatePresence mode="wait">
            <motion.p
              key={title}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-sm font-medium text-foreground mb-3 truncate"
            >
              {title}
            </motion.p>
          </AnimatePresence>
        )}

        {/* Slider */}
        <div className="mb-3">
          <CustomSlider value={progress} onChange={handleSeek} />
          <div className="flex justify-between mt-1.5">
            <span className="text-[10px] text-foreground/50">
              {formatTime(currentTime)}
            </span>
            <span className="text-[10px] text-foreground/50">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onShuffleToggle}
            className={cn(
              "text-foreground/60 hover:bg-accent hover:text-foreground h-8 w-8 rounded-full",
              isShuffle && "text-[#a6c8d3]"
            )}
          >
            <Shuffle size={14} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onPrev}
            className="text-foreground/60 hover:bg-accent hover:text-foreground h-8 w-8 rounded-full"
          >
            <SkipBack size={16} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="text-foreground hover:bg-accent hover:text-foreground h-10 w-10 rounded-full"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="text-foreground/60 hover:bg-accent hover:text-foreground h-8 w-8 rounded-full"
          >
            <SkipForward size={16} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onRepeatToggle}
            className={cn(
              "text-foreground/60 hover:bg-accent hover:text-foreground h-8 w-8 rounded-full",
              isRepeat && "text-[#a6c8d3]"
            )}
          >
            <Repeat size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
