"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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

const VIEWPORT_WIDTH = typeof window !== "undefined" ? window.innerWidth : 1024;
const IMAGE_WIDTH = 500;
const IMAGE_GAP = 32; // gap-8 = 32px
const SIDE_PADDING = (10 / 100) * VIEWPORT_WIDTH; // pl-[10vw] and pr-[10vw]

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isGalleryActive, setIsGalleryActive] = useState(false);

  // Calculate total horizontal scroll distance
  const totalImagesWidth = images.length * IMAGE_WIDTH + (images.length - 1) * IMAGE_GAP;
  const totalTrackWidth = SIDE_PADDING + totalImagesWidth + SIDE_PADDING;
  const maxHorizontalScroll = Math.max(0, totalTrackWidth - VIEWPORT_WIDTH);

  // Calculate section height dynamically
  // We need enough vertical pixels to scroll through all horizontal pixels
  const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 1080;
  const requiredSectionHeight = Math.ceil((maxHorizontalScroll / viewportHeight) * viewportHeight) + viewportHeight;

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !trackRef.current || !stickyRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const stickyRect = stickyRef.current.getBoundingClientRect();

    // Check if gallery is in view
    const isInView = containerRect.top <= 0 && containerRect.bottom >= 0;
    setIsGalleryActive(isInView);

    // Calculate scroll progress
    // Start when sticky section enters viewport
    const scrollStart = viewportHeight;
    const containerTop = containerRect.top;
    
    let progress = (scrollStart - containerTop) / (requiredSectionHeight);
    progress = Math.max(0, Math.min(1, progress));

    setScrollProgress(progress);

    // Apply horizontal translation
    const translateX = progress * maxHorizontalScroll;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${translateX}px, 0, 0)`;
    }

    // Lock vertical scroll while in gallery
    if (isInView && progress < 1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [maxHorizontalScroll, requiredSectionHeight, viewportHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [handleScroll]);

  return (
    <>
      {/* MOBILE - Simple Horizontal Swipe Gallery */}
      <section className="lg:hidden relative z-10 bg-white py-10">
        <div className="overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-4 px-4 w-max">
            {images.map((image, index) => (
              <div key={index} className="snap-center flex-shrink-0">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-[300px] h-[220px] object-cover rounded-xl"
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP - Sticky Horizontal Scroll Gallery */}
      <section
        ref={containerRef}
        className="hidden lg:block relative z-20 bg-transparent"
        style={{
          height: `${requiredSectionHeight}px`,
        }}
      >
        {/* Sticky Container - 100vh, pins to viewport */}
        <div
          ref={stickyRef}
          className="
            sticky
            top-0
            w-full
            h-screen
            overflow-hidden
            flex
            items-center
            justify-center
          "
        >
          {/* Semi-transparent White Overlay with Blur */}
          <div
            className="
              absolute
              inset-0
              z-0
              bg-white/75
              backdrop-blur-sm
            "
            style={{
              backgroundImage: 'url(/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp)',
              backgroundBlendMode: 'overlay',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />

          {/* Image Track Container */}
          <div className="relative z-10 w-full h-full overflow-hidden flex items-center">
            <div
              ref={trackRef}
              className="
                flex
                gap-8
                h-full
                items-center
                will-change-transform
              "
              style={{
                width: `${totalTrackWidth}px`,
                paddingLeft: `${SIDE_PADDING}px`,
                paddingRight: `${SIDE_PADDING}px`,
                transform: 'translate3d(0, 0, 0)',
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                  style={{
                    width: `${IMAGE_WIDTH}px`,
                  }}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="
                      w-full
                      h-[340px]
                      object-cover
                      rounded-3xl
                      shadow-2xl
                    "
                    loading={index > 2 ? "lazy" : "eager"}
                  />
                  <p className="text-center text-gray-600 text-sm mt-4 font-medium">
                    {index + 1} / {images.length}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
            <div className="flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: index < Math.ceil(scrollProgress * images.length) ? '24px' : '8px',
                    backgroundColor: index < Math.ceil(scrollProgress * images.length) ? '#2563eb' : '#d1d5db',
                  }}
                />
              ))}
            </div>
            <span className="text-sm text-gray-700 font-semibold min-w-[40px]">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>

          {/* Scroll Instructions */}
          {scrollProgress < 0.05 && (
            <div
              className="
                absolute
                top-8
                left-1/2
                transform
                -translate-x-1/2
                z-20
                text-center
                text-gray-600
                text-sm
                pointer-events-none
                transition-opacity
                duration-300
              "
              style={{
                opacity: 1 - scrollProgress * 20,
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
