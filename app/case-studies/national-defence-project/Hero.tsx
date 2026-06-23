"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textOpacity, setTextOpacity] = useState(0);
  const [showText, setShowText] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  // Text fade-in after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll-based text fade-out
  useEffect(() => {
    if (!showText) return;

    const updateOpacity = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Text fades from 1 to 0 as section scrolls from center to top
      // When rect.top = vh (bottom of viewport): opacity = 1
      // When rect.top = 0 (center of viewport): opacity = 1
      // When rect.top = -vh (top scrolled past): opacity = 0
      const fadeStart = vh * 0.5; // Start fade when center reaches middle
      const fadeEnd = -vh * 0.5; // Complete fade when past

      let opacity = 1 - Math.max(0, rect.top - fadeStart) / (fadeEnd - fadeStart);
      opacity = Math.max(0, Math.min(1, opacity));

      setTextOpacity(opacity);
    };

    const handleScroll = () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(updateOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [showText]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Fixed Background - Using absolute + fixed for perfect layering */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      {/* Text Content */}
      <div
        ref={textRef}
        className="relative z-[2] text-center px-4"
        style={{
          opacity: textOpacity,
          transition: 'opacity 300ms ease-out',
          willChange: 'opacity',
        }}
      >
        <div
          className={`transition-all duration-1000 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-white text-4xl lg:text-7xl font-light tracking-[6px] mb-6">
            NATIONAL DEFENCE PROJECT
          </h1>

          <div className="w-24 h-[1px] bg-white/70 mx-auto mb-6" />

          <p className="text-white text-lg lg:text-2xl tracking-[2px]">
            Manufacturing Unit to Nyoma, Ladakh
          </p>
        </div>
      </div>
    </section>
  );
}