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

const CONFIG = { width: 400, height: 300, gap: 24, sidePadding: 80 };

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Reset scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculate exact dimensions
  const imageCount = IMAGES.length;
  const totalImageWidth = imageCount * CONFIG.width + (imageCount - 1) * CONFIG.gap;
  const trackWidth = CONFIG.sidePadding * 2 + totalImageWidth;
  const maxTranslate = trackWidth - window.innerWidth;

  // Section height is precisely what we need for the scroll animation
  // We want: scrolling through this section = horizontal translation from 0 to maxTranslate
  const sectionHeight = maxTranslate + window.innerHeight;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate where gallery section is relative to viewport
      // When top of section = bottom of viewport (containerRect.top = windowHeight), trigger = 0
      // When bottom of section = top of viewport (containerRect.bottom = 0), trigger = 1
      
      if (containerRect.bottom < 0 || containerRect.top > windowHeight) {
        // Gallery is completely out of view
        return;
      }

      // Calculate progress based on container position
      // triggerStart = when container.top reaches window bottom (windowHeight)
      // triggerEnd = when container.bottom reaches window top (0)
      const triggerStart = windowHeight;
      const triggerEnd = -sectionHeight;
      const currentPosition = containerRect.top;

      let currentProgress = (triggerStart - currentPosition) / (triggerStart - triggerEnd);
      currentProgress = Math.max(0, Math.min(1, currentProgress));

      setProgress(currentProgress);

      // Apply horizontal translation
      if (trackRef.current) {
        const translateAmount = currentProgress * maxTranslate;
        trackRef.current.style.transform = `translate3d(-${translateAmount}px, 0, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionHeight, maxTranslate]);

  if (!mounted) return null;

  return (
    <>
      {/* Mobile Gallery - Simple Horizontal Scroll */}
      <section className="lg:hidden relative z-30 bg-white py-12 px-4">
        <h2 className="text-2xl font-light text-[#173f74] text-center mb-8">Project Gallery</h2>
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 w-max px-4">
            {IMAGES.map((img, idx) => (
              <div key={idx} className="snap-center flex-shrink-0">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-[300px] h-[220px] object-cover rounded-lg shadow-lg"
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
        className="hidden lg:block relative z-20 bg-gradient-to-b from-white via-white to-gray-50"
        style={{ height: `${sectionHeight}px` }}
      >
        {/* Sticky Container */}
        <div
          className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-white"
          style={{
            backgroundColor: '#ffffff',
          }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              opacity: 0.06,
              zIndex: 0,
            }}
          />

          {/* Gallery Container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
            {/* Track - Images Container */}
            <div
              ref={trackRef}
              className="flex items-center"
              style={{
                width: `${trackWidth}px`,
                height: '100%',
                gap: `${CONFIG.gap}px`,
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
                  className="flex-shrink-0"
                  style={{ width: `${CONFIG.width}px` }}
                >
                  <div className="relative flex flex-col items-center h-full justify-center">
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-[300px] object-cover rounded-2xl shadow-2xl"
                      loading={idx > 2 ? 'lazy' : 'eager'}
                      decoding="async"
                    />
                    <p className="text-center text-gray-700 text-sm font-medium mt-4">
                      {idx + 1} / {IMAGES.length}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
            <div className="flex gap-2">
              {IMAGES.map((_, idx) => {
                const isActive = progress >= (idx / imageCount) && progress <= ((idx + 1) / imageCount);
                return (
                  <div
                    key={idx}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? '28px' : '8px',
                      backgroundColor: isActive ? '#2563eb' : '#d1d5db',
                    }}
                  />
                );
              })}
            </div>
            <span className="text-sm text-gray-700 font-semibold ml-4 whitespace-nowrap">
              {Math.round(progress * 100)}%
            </span>
          </div>

          {/* Scroll Hint */}
          {progress < 0.05 && (
            <div
              className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 text-center text-gray-600 text-sm"
              style={{
                opacity: 1 - progress * 20,
                transition: 'opacity 300ms ease',
                pointerEvents: 'none',
              }}
            >
              ↓ Scroll down to explore gallery →
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
