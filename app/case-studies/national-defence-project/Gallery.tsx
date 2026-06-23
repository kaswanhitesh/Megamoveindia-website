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

const IMAGE_WIDTH = 420;
const IMAGE_HEIGHT = 320;
const GAP = 32;

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [config, setConfig] = useState({
    containerWidth: 0,
    containerHeight: 0,
    scrollDistance: 0,
  });

  // Initialize dimensions
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.scrollTo(0, 0);

    // Calculate dimensions
    const imageCount = IMAGES.length;
    const totalWidth = imageCount * IMAGE_WIDTH + (imageCount - 1) * GAP;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // The distance images need to scroll horizontally
    const scrollDistance = totalWidth - viewportWidth;

    // Container height = scroll distance + viewport height (for scroll space)
    const containerHeight = scrollDistance + viewportHeight;

    setConfig({
      containerWidth: totalWidth,
      containerHeight,
      scrollDistance,
    });

    setMounted(true);
  }, []);

  // Handle scroll
  useEffect(() => {
    if (!mounted || config.containerHeight === 0) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // When does animation start? When container top reaches bottom of viewport
      const startTrigger = viewportHeight;
      // When does animation end? When container top reaches -containerHeight
      const endTrigger = -config.containerHeight;

      // If container is outside the scroll zone, return
      if (rect.top > startTrigger || rect.top < endTrigger) {
        return;
      }

      // Calculate progress (0 to 1)
      const distance = startTrigger - rect.top;
      const totalDistance = startTrigger - endTrigger;
      let newProgress = distance / totalDistance;
      newProgress = Math.max(0, Math.min(1, newProgress));

      setProgress(newProgress);

      // Apply scroll to scroller
      if (scrollerRef.current) {
        const translateAmount = newProgress * config.scrollDistance;
        scrollerRef.current.style.transform = `translate3d(-${translateAmount}px, 0, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted, config]);

  if (!mounted) return <div className="w-full h-screen bg-white" />;

  const imageCount = IMAGES.length;

  return (
    <>
      {/* Mobile Version */}
      <section className="lg:hidden w-full bg-white py-12">
        <h2 className="text-2xl font-light text-[#173f74] text-center mb-8 px-4">Project Gallery</h2>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-4 w-max">
            {IMAGES.map((img, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="h-56 w-72 object-cover rounded-lg shadow-lg"
                  loading={idx > 2 ? 'lazy' : 'eager'}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Version */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full bg-white"
        style={{ height: `${config.containerHeight}px` }}
      >
        {/* Sticky container */}
        <div
          ref={stickyRef}
          className="sticky top-0 w-full h-screen bg-white overflow-hidden"
          style={{
            backgroundColor: '#ffffff',
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
              opacity: 0.06,
            }}
          />

          {/* Scroller wrapper - this creates the scroll zone */}
          <div className="relative z-10 w-full h-full flex items-center overflow-hidden">
            {/* Content that gets translated */}
            <div
              ref={scrollerRef}
              className="flex items-center flex-shrink-0"
              style={{
                width: `${config.containerWidth}px`,
                gap: `${GAP}px`,
                transform: 'translate3d(0, 0, 0)',
                willChange: 'transform',
                transition: 'none',
              }}
            >
              {IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex flex-col items-center gap-4"
                  style={{
                    width: `${IMAGE_WIDTH}px`,
                  }}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className="rounded-3xl shadow-2xl w-full h-auto"
                    style={{
                      height: `${IMAGE_HEIGHT}px`,
                      objectFit: 'cover',
                    }}
                    loading={idx > 2 ? 'lazy' : 'eager'}
                    decoding="async"
                  />
                  <p className="text-center text-gray-700 text-sm font-medium">
                    {idx + 1} / {imageCount}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
            <div className="flex gap-2">
              {IMAGES.map((_, idx) => {
                const threshold = idx / imageCount;
                const nextThreshold = (idx + 1) / imageCount;
                const isActive = progress >= threshold && progress < nextThreshold;
                
                return (
                  <div
                    key={idx}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? '32px' : '8px',
                      backgroundColor: isActive ? '#2563eb' : '#e5e7eb',
                    }}
                  />
                );
              })}
            </div>
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              {Math.round(progress * 100)}%
            </span>
          </div>

          {/* Hint Text */}
          {progress < 0.1 && (
            <div
              className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center text-gray-600 text-sm transition-opacity duration-300"
              style={{
                opacity: Math.max(0, 1 - progress * 10),
                pointerEvents: 'none',
              }}
            >
              Scroll down to explore gallery →
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
