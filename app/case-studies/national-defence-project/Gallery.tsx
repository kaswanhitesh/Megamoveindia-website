"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery1.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery2.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery3.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery4.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery5.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery6.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery7.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery8.webp",
];

interface GalleryState {
  scrollProgress: number;
  viewportWidth: number;
  maxScroll: number;
}

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<GalleryState>({
    scrollProgress: 0,
    viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 1024,
    maxScroll: 0,
  });
  const animFrameRef = useRef<number | null>(null);

  // Constants for image layout
  const IMAGE_WIDTH = 450;
  const IMAGE_HEIGHT = 320;
  const IMAGE_GAP = 32;
  const SIDE_PADDING = 60;

  // Calculate max horizontal scroll
  const totalImagesWidth = images.length * IMAGE_WIDTH + (images.length - 1) * IMAGE_GAP;
  const trackWidth = SIDE_PADDING * 2 + totalImagesWidth;
  const maxHorizontalScroll = Math.max(0, trackWidth - state.viewportWidth);

  // Dynamic section height: enough vertical scroll to achieve horizontal scroll
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
  const sectionHeight = maxHorizontalScroll > 0
    ? Math.ceil((maxHorizontalScroll / viewportHeight) * viewportHeight) + viewportHeight
    : viewportHeight * 2;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setState(prev => ({
        ...prev,
        viewportWidth: window.innerWidth,
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll - convert vertical to horizontal
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

      animFrameRef.current = requestAnimationFrame(() => {
        const containerRect = containerRef.current!.getBoundingClientRect();
        const vh = window.innerHeight;

        // Calculate progress: 0 when container top enters viewport, 1 when bottom exits
        const containerTop = containerRect.top;
        const containerBottom = containerRect.bottom;
        const containerHeight = containerRect.height;

        // Progress from when container enters at bottom (top = vh) to when it exits at top (top = -height)
        const scrollStart = vh;
        const scrollEnd = -containerHeight;
        let progress = (scrollStart - containerTop) / (scrollStart - scrollEnd);
        progress = Math.max(0, Math.min(1, progress));

        // Apply horizontal translation
        const translateX = progress * maxHorizontalScroll;
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(-${translateX}px, 0, 0)`;
        }

        setState(prev => ({
          ...prev,
          scrollProgress: progress,
          maxScroll: maxHorizontalScroll,
        }));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [maxHorizontalScroll]);

  const progress = state.scrollProgress;

  return (
    <>
      {/* MOBILE - Simple swipe gallery */}
      <section className="lg:hidden relative z-30 bg-white py-10">
        <div className="overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-4 px-4 w-max">
            {images.map((image, idx) => (
              <div key={idx} className="snap-center flex-shrink-0">
                <img
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  className="w-[300px] h-[220px] object-cover rounded-xl"
                  loading={idx > 2 ? 'lazy' : 'eager'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP - Sticky horizontal scroll */}
      <section
        ref={containerRef}
        className="hidden lg:block relative z-20 bg-white"
        style={{
          height: `${sectionHeight}px`,
        }}
      >
        {/* Sticky wrapper - pinned to viewport */}
        <div
          ref={stickyRef}
          className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-white"
          style={{
            willChange: 'transform',
          }}
        >
          {/* Background - subtle hero image */}
          <div
            className="absolute inset-0 z-0 opacity-5"
            style={{
              backgroundImage: 'url(/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />

          {/* Gallery content */}
          <div className="relative z-10 w-full h-full flex items-center overflow-hidden">
            {/* Track - horizontal scroll container */}
            <div
              ref={trackRef}
              className="flex gap-8 h-full items-center"
              style={{
                width: `${trackWidth}px`,
                paddingLeft: `${SIDE_PADDING}px`,
                paddingRight: `${SIDE_PADDING}px`,
                transform: 'translate3d(0, 0, 0)',
                willChange: 'transform',
                transition: 'none',
              }}
            >
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                  style={{
                    width: `${IMAGE_WIDTH}px`,
                  }}
                >
                  <img
                    src={image}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-[320px] object-cover rounded-3xl shadow-2xl"
                    loading={idx > 2 ? 'lazy' : 'eager'}
                  />
                  <p className="text-center text-gray-600 text-sm mt-4 font-medium">
                    {idx + 1} / {images.length}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicator - bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
            <div className="flex gap-2">
              {images.map((_, idx) => {
                const isActive = idx < Math.ceil(progress * images.length);
                return (
                  <div
                    key={idx}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? '24px' : '8px',
                      backgroundColor: isActive ? '#2563eb' : '#d1d5db',
                    }}
                  />
                );
              })}
            </div>
            <span className="text-sm text-gray-700 font-semibold whitespace-nowrap">
              {Math.round(progress * 100)}%
            </span>
          </div>

          {/* Scroll hint - top */}
          {progress < 0.05 && (
            <div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-center text-gray-600 text-sm pointer-events-none"
              style={{
                opacity: 1 - progress * 20,
                transition: 'opacity 300ms ease',
              }}
            >
              Scroll down to explore gallery
            </div>
          )}
        </div>
      </section>
    </>
  );
}