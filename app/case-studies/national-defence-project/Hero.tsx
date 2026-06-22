"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="fixed inset-0 z-0">

      <Image
        src="/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp"
        alt="National Defence Project"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_15%]"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

        <div
          className={`
            transition-all duration-1000
            ${showText
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"}
          `}
        >
          <h1 className="text-white text-4xl lg:text-7xl font-light tracking-[6px]">
            NATIONAL DEFENCE PROJECT
          </h1>

          <p className="mt-6 text-white text-lg lg:text-2xl tracking-[2px]">
            Manufacturing Unit to Nyoma, Ladakh
          </p>
        </div>

      </div>

    </section>
  );
}
