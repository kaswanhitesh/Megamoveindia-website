"use client";

import { useEffect, useRef } from "react";
import { useRef } from "react";

const images = [
  "/images/Casestudies/DefenceCargo/Gallery1.webp",
  "/images/Casestudies/DefenceCargo/Gallery2.webp",
  "/images/Casestudies/DefenceCargo/Gallery3.webp",
  "/images/Casestudies/DefenceCargo/Gallery4.webp",
  "/images/Casestudies/DefenceCargo/Gallery5.webp",
  "/images/Casestudies/DefenceCargo/Gallery6.webp",
  "/images/Casestudies/DefenceCargo/Gallery7.webp",
  "/images/Casestudies/DefenceCargo/Gallery8.webp",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current || !trackRef.current) return;

    const section = sectionRef.current;

    const rect = section.getBoundingClientRect();

    const scrollProgress =
      Math.min(
        Math.max(-rect.top / (section.offsetHeight - window.innerHeight), 0),
        1
      );

    const maxTranslate =
      trackRef.current.scrollWidth - window.innerWidth;

    trackRef.current.style.transform =
      `translateX(-${scrollProgress * maxTranslate}px)`;
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
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

      {/* DESKTOP */}

      <section
        ref={sectionRef}
        className="
          hidden lg:block
          relative z-10
          bg-white
          h-[400vh]
        "
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">

          <div
  ref={trackRef}
  className="
    flex
    gap-10
    px-20
    w-max
    transition-transform
    duration-75
  "
>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="
                  w-[750px]
                  h-[500px]
                  object-cover
                  rounded-3xl
                  shadow-xl
                  shrink-0
                "
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
