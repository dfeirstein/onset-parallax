"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(onLoadComplete, 300);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A]">
      {/* Logo */}
      <div className="mb-12 animate-pulse-slow">
        <h1 className="font-display text-4xl font-bold tracking-wider text-white">
          ONSET
        </h1>
      </div>

      {/* Loading bar container */}
      <div className="w-64 sm:w-80">
        <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-[#14B8A6] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-4 flex justify-between text-sm text-white/50">
          <span className="font-body">Loading</span>
          <span className="font-body tabular-nums">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
