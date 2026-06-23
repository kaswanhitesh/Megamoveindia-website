'use client';

import { useRef, useState, useEffect } from 'react';

const IMAGES = [
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery1.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery2.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery3.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery4.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery5.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery6.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery7.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery8.webp',
];

const CONFIG = { width: 450, height: 320, gap: 32, sidePadding: 60 };

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1024);
  const [progress, setProgress] = useState(0);

  // Hard refresh scroll reset
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    setViewportWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate dimensions
  const totalImagesWidth = IMAGES.length * CONFIG.width + (IMAGES.length - 1) * CONFIG.gap;
  const trackWidth = CONFIG.sidePadding * 2 + totalImagesWidth;
  const maxHorizontalScroll = Math.max(0, trackWidth - viewportWidth);
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;

  // CORRECT FORMULA: Section height equals the horizontal scroll distance
  // This ensures that scrolling through the entire section height maps to 0→1 progress
  const sectionHeight = maxHorizontalScroll + viewportHeight;

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      
      // Check if gallery section is visible
      if (rect.bottom < 0 || rect.top > viewportHeight) {
        return; // Gallery not in viewport
      }

      // CORRECT PROGRESS CALCULATION:
      // Progress starts when gallery top reaches bottom of viewport
      // Progress ends when gallery bottom reaches top of viewport
      // At top of viewport (rect.top = 0), progress should be 0
      // At bottom of viewport (rect.bottom = 0), progress should be 1
      
      const startTrigger = viewportHeight; // When gallery top enters bottom of viewport
      const endTrigger = -sectionHeight; // When gallery bottom exits top of viewport
      
      // Distance scrolled from start to end
      let scrolledDistance = startTrigger - rect.top;
      let totalScrollDistance = startTrigger - endTrigger;
      
      let newProgress = scrolledDistance / totalScrollDistance;
      newProgress = Math.max(0, Math.min(1, newProgress));

      // Apply translation based on progress
      const translateX = newProgress * maxHorizontalScroll;

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${translateX}px, 0, 0)`;
      }

      setProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewportWidth, maxHorizontalScroll, sectionHeight, viewportHeight]);

  if (!mounted) return null;

  return (
    <>
      {/* Mobile Gallery */}
      <section className="lg:hidden relative z-30 bg-white py-10">
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 px-4 w-max">
            {IMAGES.map((img, idx) => (
              <div key={idx} className="snap-center flex-shrink-0">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-[300px] h-[220px] object-cover rounded-xl shadow-lg"
                  loading={idx > 2 ? 'lazy' : 'eager'}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Gallery - Sticky Horizontal Scroll */}
      <section
        ref={containerRef}
        className="hidden lg:block relative z-20 bg-white"
        style={{ height: `${sectionHeight}px` }}
      >
        {/* Sticky Container */}
        <div
          className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        >
          {/* Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              opacity: 0.08,
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full h-full flex items-center overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-8 h-full items-center"
              style={{
                width: `${trackWidth}px`,
                paddingLeft: `${CONFIG.sidePadding}px`,
                paddingRight: `${CONFIG.sidePadding}px`,
                transform: 'translate3d(0, 0, 0)',
                willChange: 'transform',
                transition: 'none',
              }}
            >
              {IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                  style={{ width: `${CONFIG.width}px` }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-[320px] object-cover rounded-3xl shadow-2xl"
                    loading={idx > 2 ? 'lazy' : 'eager'}
                    decoding="async"
                  />
                  <p className="text-center text-gray-600 text-sm mt-4 font-medium">
                    {idx + 1} / {IMAGES.length}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4 pointer-events-none">
            <div className="flex gap-2">
              {IMAGES.map((_, idx) => {
                const isActive = idx < Math.ceil(progress * IMAGES.length);
                return (
                  <div
                    key={idx}
                    className="h-2 rounded-full transition-all duration-300 ease-out"
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

          {/* Scroll Hint */}
          {progress < 0.08 && (
            <div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-center text-gray-600 text-sm pointer-events-none"
              style={{
                opacity: Math.max(0, 1 - progress * 12),
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
};

export default Gallery;
