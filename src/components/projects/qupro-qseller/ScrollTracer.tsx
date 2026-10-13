import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type TracerVariant =
  | "left-to-right"
  | "right-to-left"
  | "left-to-center"
  | "right-to-center"
  | "center-to-right"
  | "center-to-left"
  | "center-to-center";

interface ScrollTracerProps {
  variant?: TracerVariant;
  customPath?: string;
}

export const ScrollTracer = ({ variant = "left-to-right", customPath }: ScrollTracerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Прогресс отрисовки линии
  const pathLength = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Микро-наконечник (1.2% от длины пути)
  const sparkStart = useTransform(scrollYProgress, (v) => {
    const head = (v - 0.15) / (0.85 - 0.15);
    return Math.max(0, Math.min(1, head - 0.012));
  });

  const presets: Record<TracerVariant, string> = {
    "left-to-right": "M 100 0 L 100 30 Q 100 60 140 60 L 1060 60 Q 1100 60 1100 90 L 1100 120",
    "right-to-left": "M 1100 0 L 1100 30 Q 1100 60 1060 60 L 140 60 Q 100 60 100 90 L 100 120",
    "left-to-center": "M 100 0 L 100 30 Q 100 60 140 60 L 560 60 Q 600 60 600 90 L 600 120",
    "right-to-center": "M 1100 0 L 1100 30 Q 1100 60 1060 60 L 640 60 Q 600 60 600 90 L 600 120",
    "center-to-right": "M 600 0 L 600 30 Q 600 60 640 60 L 1060 60 Q 1100 60 1100 90 L 1100 120",
    "center-to-left": "M 600 0 L 600 30 Q 600 60 560 60 L 140 60 Q 100 60 100 90 L 100 120",
    "center-to-center": "M 600 0 L 600 120",
  };

  const selectedPath = customPath || presets[variant];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[120px] pointer-events-none overflow-hidden hidden md:block -mt-4 -mb-14"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* 1. Серая путевая линия (1px) */}
        <motion.path
          d={selectedPath}
          stroke="#e4e4e7"
          strokeWidth="1"
          fill="none"
          style={{ pathLength, opacity }}
        />

        {/* 2. Наконечник с оригинальным Hue, но высокой светлотой #6885ff (1px) */}
        <motion.path
          d={selectedPath}
          stroke="#6885ff"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          style={{
            pathLength,
            pathOffset: sparkStart,
            opacity,
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollTracer;