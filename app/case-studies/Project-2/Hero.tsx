'use client';

import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Set body background to transparent so fixed background with z-[-10] is visible
    const originalBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'transparent';

    return () => {
      document.body.style.backgroundColor = originalBg;
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-transparent z-10 pointer-events-none">
      <div
        className="text-center px-4"
      >
        <h1 className="text-white text-4xl lg:text-7xl font-light tracking-[6px] mb-6 leading-tight select-none uppercase">
          225MT USED MACHINERY IMPORT
        </h1>
        <div className="w-20 h-px bg-white/60 mx-auto mb-6" />
        <p className="text-white text-lg lg:text-2xl tracking-[2px] font-light select-none">
          Rotterdam, Germany → Chakan, Pune
        </p>
      </div>
    </section>
  );
};

export default Hero;
