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

const CONFIG = { imageWidth: 420, imageHeight: 320, gap: 32 };

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dimensions, setDimensions] = useState({
    totalScrollWidth: 0,
    sectionHeight: 0,
  });

  // Initialize on client only
  useEffect(() => {
    window.scrollTo(0, 0);

    const imageCount = IMAGES.length;
    const totalScrollWidth = (imageCount - 1) * (CONFIG.imageWidth + CONFIG.gap);
    const viewportHeight = window.innerHeight;
    const sectionHeight = totalScrollWidth + viewportHeight;

    setDimensions({
      totalScrollWidth,
      sectionHeight,
    });
    setMounted(true);
  }, []);

  // Handle scroll animation
  useEffect(() => {
    if (!mounted || dimensions.sectionHeight === 0) return;

    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = dimensions.sectionHeight;

      // Calculate progress based on section position
      const sectionEntersAt = viewportHeight;
      const sectionExitsAt = -sectionHeight;

      if (sectionRect.top > sectionEntersAt || sectionRect.top < sectionExitsAt) {
        return;
      }

      const scrollProgress = (sectionEntersAt - sectionRect.top) / (sectionEntersAt - sectionExitsAt);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      setProgress(clampedProgress);

      // Apply translation directly to track
      const translateX = clampedProgress * dimensions.totalScrollWidth;
      trackRef.current.style.transform = `translateX(-${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted, dimensions]);

  if (!mounted) {
    return <section className="w-full h-screen bg-white" />;
  }

  const imageCount = IMAGES.length;

  return (
    <>
      {/* Mobile Gallery */}
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
        ref={sectionRef}
        className="hidden lg:block relative"
        style={{ height: `${dimensions.sectionHeight}px` }}
      >
        {/* Sticky viewport container */}
        <div className="sticky top-0 w-full h-screen bg-white overflow-hidden flex items-center justify-center">
          {/* Background */}
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

          {/* Gallery content wrapper */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Track - Images container that will be translated */}
            <div
              ref={trackRef}
              className="flex items-center"
              style={{
                gap: `${CONFIG.gap}px`,
                transform: 'translateX(0)',
                willChange: 'transform',
                transition: 'none',
              }}
            >
              {IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                  style={{
                    width: `${CONFIG.imageWidth}px`,
                  }}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full object-cover rounded-2xl shadow-2xl"
                    style={{
                      height: `${CONFIG.imageHeight}px`,
                    }}
                    loading={idx > 2 ? 'lazy' : 'eager'}
                    decoding="async"
                  />
                  <p className="text-center text-gray-700 text-sm font-medium mt-4">
                    {idx + 1} / {imageCount}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
            <div className="flex gap-2">
              {IMAGES.map((_, idx) => {
                const isActive = idx < Math.ceil(progress * imageCount);
                return (
                  <div
                    key={idx}
                    className="h-2 rounded-full transition-all duration-200"
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
              className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 text-center text-gray-600 text-sm pointer-events-none"
              style={{
                opacity: 1 - progress * 20,
                transition: 'opacity 300ms ease',
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
