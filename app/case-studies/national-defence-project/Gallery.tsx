"use client";

import { useEffect, useRef } from "react";

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

useEffect(() => {
  const updateGallery = () => {
    if (!sectionRef.current || !trackRef.current) return;

    const section = sectionRef.current;
    const track = trackRef.current;

    const rect = section.getBoundingClientRect();

    const scrollableHeight =
      section.offsetHeight - window.innerHeight;

    const progress = Math.min(
      Math.max(-rect.top / scrollableHeight, 0),
      1
    );

    const maxTranslate =
      track.scrollWidth - window.innerWidth;

    track.style.transform =
      `translate3d(-${progress * maxTranslate}px,0,0)`;
  };

  updateGallery();

  window.addEventListener("scroll", updateGallery);

  return () => {
    window.removeEventListener("scroll", updateGallery);
  };
}, []);
  
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
    relative
    z-10
    h-[900vh]
    overflow-hidden
  "
>
  <div
    className="
      sticky
      top-0
      h-screen
      flex
      items-center
      overflow-hidden
      bg-white/70
      backdrop-blur-md
    "
  >
    <div
      ref={trackRef}
      className="
        flex
        gap-12
        pl-[25vw]
        pr-[25vw]
        w-max
        will-change-transform
      "
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index + 1}`}
          className="
            w-[900px]
            h-[600px]
            object-cover
            rounded-3xl
            shadow-2xl
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
