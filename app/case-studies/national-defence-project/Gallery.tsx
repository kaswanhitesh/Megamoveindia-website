'use client';

import { useRef, useState, useEffect } from 'react';
import { useGalleryScroll } from './hooks/useGalleryScroll';

const GALLERY_IMAGES = [
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery1.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery2.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery3.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery4.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery5.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery6.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery7.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery8.webp',
];

const IMAGE_CONFIG = {
  width: 450,
  height: 320,
  gap: 32,
  sidePadding: 60,
} as const;

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
    setViewportWidth(window.innerWidth);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use gallery scroll hook
  const scrollState = useGalleryScroll({
    containerRef,
    trackRef,
    imageCount: GALLERY_IMAGES.length,
    imageWidth: IMAGE_CONFIG.width,
    imageGap: IMAGE_CONFIG.gap,
    sidePadding: IMAGE_CONFIG.sidePadding,
  });

  // Calculate dynamic section height
  const totalImagesWidth =
    GALLERY_IMAGES.length * IMAGE_CONFIG.width + (GALLERY_IMAGES.length - 1) * IMAGE_CONFIG.gap;
  const trackWidth = IMAGE_CONFIG.sidePadding * 2 + totalImagesWidth;
  const maxHorizontalScroll = Math.max(0, trackWidth - viewportWidth);
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
  const sectionHeight =
    maxHorizontalScroll > 0
      ? Math.ceil((maxHorizontalScroll / viewportHeight) * viewportHeight) + viewportHeight
      : viewportHeight * 2;

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Mobile Gallery */}
      <section className="lg:hidden relative z-30 bg-white py-10">
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4 px-4 w-max">
            {GALLERY_IMAGES.map((image, idx) => (
              <div key={idx} className="snap-center flex-shrink-0">
                <img
                  src={image}
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
        style={{
          height: `${sectionHeight}px`,
        }}
      >
        {/* Sticky Wrapper - Pins to viewport */}
        <div
          ref={stickyRef}
          className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        >
          {/* Background - Subtle Hero Image */}
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

          {/* Content Layer */}
          <div className="relative z-10 w-full h-full flex items-center overflow-hidden">
            {/* Image Track */}
            <div
              ref={trackRef}
              className="flex gap-8 h-full items-center"
              style={{
                width: `${trackWidth}px`,
                paddingLeft: `${IMAGE_CONFIG.sidePadding}px`,
                paddingRight: `${IMAGE_CONFIG.sidePadding}px`,
                transform: 'translate3d(0, 0, 0)',
                willChange: 'transform',
                transition: 'none',
              }}
            >
              {GALLERY_IMAGES.map((image, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                  style={{
                    width: `${IMAGE_CONFIG.width}px`,
                  }}
                >
                  <img
                    src={image}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-[320px] object-cover rounded-3xl shadow-2xl"
                    loading={idx > 2 ? 'lazy' : 'eager'}
                    decoding="async"
                  />
                  <p className="text-center text-gray-600 text-sm mt-4 font-medium">
                    {idx + 1} / {GALLERY_IMAGES.length}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4 pointer-events-none">
            <div className="flex gap-2">
              {GALLERY_IMAGES.map((_, idx) => {
                const isActive = idx < Math.ceil(scrollState.progress * GALLERY_IMAGES.length);
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
              {Math.round(scrollState.progress * 100)}%
            </span>
          </div>

          {/* Scroll Hint */}
          {scrollState.progress < 0.08 && (
            <div
              className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-center text-gray-600 text-sm pointer-events-none"
              style={{
                opacity: Math.max(0, 1 - scrollState.progress * 12),
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
