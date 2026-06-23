'use client';

import { useRef } from 'react';
import { useScrollFadeText } from './hooks/useScrollFadeText';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { showText, textOpacity } = useScrollFadeText({ sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Fixed Background Image */}
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

      {/* Text Content with Scroll-based Fade */}
      <div
        className="relative z-[2] text-center px-4"
        style={{
          opacity: textOpacity,
          willChange: 'opacity',
        }}
      >
        <div
          className={`transition-all duration-1000 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-white text-4xl lg:text-7xl font-light tracking-[6px] mb-6 leading-tight">
            NATIONAL DEFENCE PROJECT
          </h1>

          <div className="w-20 h-px bg-white/60 mx-auto mb-6" />

          <p className="text-white text-lg lg:text-2xl tracking-[2px] font-light">
            Manufacturing Unit to Nyoma, Ladakh
          </p>
        </div>
      </div>
    </section>
  );
}
