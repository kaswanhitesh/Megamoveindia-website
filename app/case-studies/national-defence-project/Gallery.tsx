"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery1.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery2.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery3.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery4.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery5.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery6.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery7.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery8.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery9.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery10.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery11.webp",
  "/images/Casestudies/DefenceCargo/defencecargo_Gallery12.webp",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;

      const totalMove =
        track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalMove,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalMove}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* MOBILE */}

      <section className="lg:hidden bg-white py-10">
        <div className="overflow-x-auto">
          <div className="flex gap-4 px-4 w-max">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                width={300}
                height={220}
                className="rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP */}

      <section
        ref={sectionRef}
        className="hidden lg:block relative h-screen"
      >
        {/* Hero visible behind gallery */}

        <div className="absolute inset-0 bg-white/25 backdrop-blur-md z-10" />

        <div className="sticky top-0 h-screen overflow-hidden z-20">

          <div className="h-full flex items-center">

            <div
              ref={trackRef}
              className="flex gap-10 pl-[35vw] pr-[35vw] w-max"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="
                    shrink-0
                    rounded-3xl
                    overflow-hidden
                    shadow-2xl
                    bg-white
                  "
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    width={700}
                    height={500}
                    className="
                      w-[700px]
                      h-[500px]
                      object-cover
                    "
                    priority={index < 2}
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
