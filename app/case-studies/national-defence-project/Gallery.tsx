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

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    // Calculate total horizontal scroll distance needed
    const trackWidth = track.scrollWidth;
    const containerWidth = window.innerWidth;
    const maxHorizontalScroll = trackWidth - containerWidth;

    // Total vertical scroll distance for the gallery section
    // We need enough vertical scrolling to scroll through all images horizontally
    const galleryHeight = container.offsetHeight;

    const handleScroll = () => {
      if (!container || !track) return;

      // Get the position of the gallery container relative to viewport
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const viewportHeight = window.innerHeight;

      // Calculate progress through the gallery section
      // Start when container top enters viewport
      // Complete when container has been scrolled through
      const scrollStart = viewportHeight;
      const scrollEnd = -container.offsetHeight;
      
      // Current progress (0 to 1)
      let progress = (scrollStart - containerTop) / (scrollStart - scrollEnd);
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);

      // Apply horizontal translation based on progress
      const translateX = progress * maxHorizontalScroll;
      track.style.transform = `translate3d(-${translateX}px, 0, 0)`;

      // Prevent page scroll until gallery scroll is complete
      if (progress < 1) {
        // Lock scroll to gallery section
        const scrollLockTop = container.offsetTop;
        const scrollLockBottom = container.offsetTop + container.offsetHeight;
        const currentScroll = window.scrollY + viewportHeight / 2;

        if (currentScroll > scrollLockTop && currentScroll < scrollLockBottom) {
          // Only prevent default if we're in the sticky section
          document.body.style.overflow = "hidden";
        }
      } else {
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* MOBILE - Simple Horizontal Swipe Gallery */}
      <section className="lg:hidden relative z-10 bg-white py-10">
        <div className="overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-4 px-4 w-max">
            {images.map((image, index) => (
              <div key={index} className="snap-center">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-[300px] h-[220px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP - Sticky Horizontal Scroll Gallery */}
      <section
        ref={containerRef}
        className="
          hidden
          lg:block
          relative
          z-30
          bg-white
        "
        style={{
          height: `${images.length * 200}px`, // Calculate height based on images
        }}
      >
        {/* Sticky Container - 100vh */}
        <div
          className="
            sticky
            top-0
            w-full
            h-screen
            overflow-hidden
            flex
            items-center
            bg-white
          "
          style={{
            backdropFilter: "blur(4px)",
          }}
        >
          {/* Hero Image Background with Semi-transparent Overlay */}
          <div
            className="
              absolute
              inset-0
              -z-10
              opacity-15
            "
            style={{
              backgroundImage: 'url(/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp)',
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
            }}
          />

          {/* Image Track */}
          <div
            ref={trackRef}
            className="
              flex
              gap-8
              pl-[10vw]
              pr-[10vw]
              w-max
              h-full
              items-center
              will-change-transform
            "
            style={{
              transform: "translate3d(0, 0, 0)",
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="
                    w-[500px]
                    h-[340px]
                    object-cover
                    rounded-3xl
                    shadow-2xl
                  "
                  loading={index > 2 ? "lazy" : "eager"}
                />
                <p className="text-center text-gray-500 text-sm mt-4">
                  {index + 1} / {images.length}
                </p>
              </div>
            ))}
          </div>

          {/* Progress Indicator - Shows scroll progress */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            <div className="flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${index < Math.ceil(scrollProgress * images.length)
                      ? "bg-blue-600 w-6"
                      : "bg-gray-300 w-2"
                    }
                  `}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-4">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>

          {/* Scroll Instructions */}
          {scrollProgress < 0.1 && (
            <div
              className="
                absolute
                top-8
                left-1/2
                transform
                -translate-x-1/2
                text-center
                text-gray-600
                text-sm
                opacity-75
                transition-opacity
                duration-300
                pointer-events-none
              "
            >
              Scroll down to view gallery
            </div>
          )}
        </div>
      </section>
    </>
  );
}
