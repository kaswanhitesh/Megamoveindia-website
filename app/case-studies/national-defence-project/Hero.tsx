"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [textOpacity, setTextOpacity] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text after 2 seconds
    const showTimer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showText) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate opacity based on scroll position
      // Text should be fully visible when hero is centered
      // Text should fade out as user scrolls past hero
      const distanceFromTop = rect.top;
      
      // When distanceFromTop is 0, text should start fading
      // When distanceFromTop is -viewportHeight, text should be invisible
      let opacity = 1 - (Math.max(0, -distanceFromTop) / viewportHeight);
      opacity = Math.max(0, Math.min(1, opacity));

      setTextOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showText]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Fixed Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: 'url(/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp)',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Text Content with Fade Out */}
      <div
        ref={textContainerRef}
        className="
          relative
          z-10
          text-center
          px-4
          transition-opacity
          duration-300
        "
        style={{
          opacity: textOpacity,
        }}
      >
        <div
          className={`
            transition-all
            duration-1000
            ${showText
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"}
          `}
        >
          <h1 className="text-white text-4xl lg:text-7xl font-light tracking-[6px]">
            NATIONAL DEFENCE PROJECT
          </h1>

          <div className="w-24 h-[1px] bg-white/70 mx-auto my-6" />

          <p className="text-white text-lg lg:text-2xl tracking-[2px]">
            Manufacturing Unit to Nyoma, Ladakh
          </p>
        </div>
      </div>
    </section>
  );
}
