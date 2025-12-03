"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { panelVariants } from "@/lib/data";
import { TwitterIcon, InstagramIcon, LinkedInIcon } from "./Icons";

const TOTAL_FRAMES = 144;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentPanel = panelVariants[currentIndex];

  // Preload all frame images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/sequences/frames/frame_${String(i).padStart(4, "0")}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Scroll-linked frame animation AND panel transitions
  useEffect(() => {
    let lastPanelIndex = 0;

    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Animation completes over 2x viewport height of scrolling
      // This happens while the hero is still sticky (before 200vh scroll)
      const scrollRange = viewportHeight * 2;
      const progress = Math.min(Math.max(scrollY / scrollRange, 0), 1);
      const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));

      setCurrentFrame(frameIndex);

      // Sync panel transitions with scroll progress
      // Divide scroll into 3 equal sections for 3 panels
      const panelIndex = Math.min(
        Math.floor(progress * panelVariants.length),
        panelVariants.length - 1,
      );

      if (panelIndex !== lastPanelIndex) {
        lastPanelIndex = panelIndex;
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex(panelIndex);
          setTimeout(() => setIsTransitioning(false), 300);
        }, 150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? panelVariants.length - 1 : prev - 1,
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }, 150);
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === panelVariants.length - 1 ? 0 : prev + 1,
      );
      setTimeout(() => setIsTransitioning(false), 300);
    }, 150);
  }, [isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") goToPrev();
      if (e.key === "ArrowDown") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  return (
    <section ref={heroRef} className="relative h-[300vh] w-full z-10">
      {/* Fixed hero container - stays behind the curtain */}
      <div className="fixed top-0 left-0 right-0 h-screen w-full overflow-hidden bg-[#0A0A0A]">
        {/* Background Frame Sequence */}
        <div className="absolute inset-0">
          {imagesLoaded && (
            <img
              src={`/sequences/frames/frame_${String(currentFrame).padStart(4, "0")}.webp`}
              alt="Hero background"
              className="h-full w-full object-cover opacity-70"
            />
          )}
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full w-full">
          {/* Left Side - Text Content */}
          <div className="flex flex-1 flex-col justify-center px-8 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              {/* Panel Name */}
              <h1
                className={`font-display text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white transition-all duration-300 ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
                style={{ color: currentPanel.accentColor }}
              >
                {currentPanel.name}
              </h1>

              {/* Subtitle */}
              <p
                className={`mt-2 font-display text-2xl sm:text-3xl font-light tracking-wide text-white/90 transition-all duration-300 delay-75 ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {currentPanel.subtitle}
              </p>

              {/* Description */}
              <p
                className={`mt-6 font-body text-lg leading-relaxed text-white/70 max-w-md transition-all duration-300 delay-100 ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {currentPanel.description}
              </p>

              {/* CTA Buttons */}
              <div
                className={`mt-8 flex flex-wrap gap-4 transition-all duration-300 delay-150 ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <a href="#how-it-works" className="btn-secondary">
                  HOW IT WORKS
                </a>
                <a
                  href="#pricing"
                  className="btn-primary"
                  style={{ backgroundColor: currentPanel.accentColor }}
                >
                  GET STARTED
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Panel Navigation */}
          <div className="hidden lg:flex flex-col items-center justify-center pr-8 xl:pr-16">
            {/* Large Index Number */}
            <div
              className={`font-display text-[180px] xl:text-[220px] font-black leading-none transition-all duration-300 ${
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
              style={{ color: currentPanel.accentColor, opacity: 0.15 }}
            >
              {String(currentIndex + 1).padStart(2, "0")}
            </div>

            {/* Navigation Controls */}
            <div className="absolute right-8 xl:right-16 flex flex-col items-center gap-6">
              {/* Prev Button */}
              <button
                onClick={goToPrev}
                className="group flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white"
                aria-label="Previous panel"
              >
                <svg
                  className="w-4 h-4 rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="font-body text-xs uppercase tracking-widest">
                  Prev
                </span>
              </button>

              {/* Divider with dots */}
              <div className="flex flex-col items-center gap-3 py-4">
                {panelVariants.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (index !== currentIndex && !isTransitioning) {
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentIndex(index);
                          setTimeout(() => setIsTransitioning(false), 300);
                        }, 150);
                      }
                    }}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    style={{
                      backgroundColor:
                        index === currentIndex
                          ? currentPanel.accentColor
                          : undefined,
                    }}
                    aria-label={`Go to panel ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="group flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white"
                aria-label="Next panel"
              >
                <span className="font-body text-xs uppercase tracking-widest">
                  Next
                </span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Frame counter (debug - can remove) */}
        <div className="absolute bottom-24 left-8 text-white/30 font-body text-xs">
          Frame: {currentFrame + 1} / {TOTAL_FRAMES}
        </div>

        {/* Bottom Social Icons */}
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-6">
          <a
            href="https://twitter.com/onsethealth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 transition-colors hover:text-white"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/onsethealth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 transition-colors hover:text-white"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/company/onsethealth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/40">
          <span className="font-body text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="h-16 w-[1px] bg-gradient-to-b from-white/40 to-transparent mt-12" />
        </div>
      </div>
    </section>
  );
}
