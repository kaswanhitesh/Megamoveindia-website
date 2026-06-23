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
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollComplete, setIsScrollComplete] = useState(false);

  useEffect(() => {
    const updateGallery = () => {
      if (!sectionRef.current || !trackRef.current || !containerRef.current) return;

      const section = sectionRef.current;
      const track = trackRef.current;
      const container = containerRef.current;

      const rect = section.getBoundingClientRect();
      
      // Calculate how far into the gallery section we are
      const sectionTop = rect.top;
      const viewportHeight = window.innerHeight;
      
      // Start scroll animation when gallery enters viewport
      const scrollStart = viewportHeight;
      
      // Distance we need to scroll to complete the horizontal scroll
      const trackWidth = track.scrollWidth;
      const containerWidth = window.innerWidth;
      const maxTranslate = trackWidth - containerWidth;
      
      // Calculate the scroll distance needed for horizontal scroll to complete
      // We need enough vertical scrolling to scroll through all images
      const scrollableDistance = maxTranslate + viewportHeight;
      
      // Current progress through the scroll section
      const progress = Math.max(
        Math.min((scrollStart - sectionTop) / scrollableDistance, 1),
        0
      );

      // Translate images based on progress
      track.style.transform = `translate3d(-${progress * maxTranslate}px, 0, 0)`;
      
      // Check if scroll is complete (last image centered)
      setIsScrollComplete(progress >= 0.95);
    };

    updateGallery();
    window.addEventListener("scroll", updateGallery);

    return () => {
      window.removeEventListener("scroll", updateGallery);
    };
  }, []);

  return (
    <>
      {/* MOBILE */}
      <section className="lg:hidden relative z-10 bg-white py-10">
        <div className="overflow-x-auto">
          <div className="flex gap-4 px-4 w-max">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-[300px] h-[220px] object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP HORIZONTAL SCROLL GALLERY */}
      <section
        ref={sectionRef}
        className="hidden lg:block relative z-30"
        style={{
          height: `${images.length * 800}px`, // Dynamic height based on number of images
        }}
      >
        <div
          ref={containerRef}
          className="
            sticky
            top-0
            h-screen
            overflow-hidden
            flex
            items-center
            bg-gradient-to-b
            from-white
            to-white
            backdrop-blur-sm
          "
        >
          <div
            ref={trackRef}
            className="
              flex
              gap-8
              pl-[5vw]
              pr-[5vw]
              w-max
              will-change-transform
            "
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0">
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
                <p className="text-center text-gray-500 text-sm mt-3">
                  {index + 1} / {images.length}
                </p>
              </div>
            ))}
          </div>

          {/* Optional: Scroll Progress Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`
                  h-2 w-2 rounded-full transition-all duration-300
                  ${index < Math.ceil((images.length * (1 - (isScrollComplete ? 1 : 0.5))) / images.length)
                    ? "bg-blue-600"
                    : "bg-gray-300"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
