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
      const galleryCards =
  gsap.utils.toArray<HTMLElement>(".gallery-card");
      const cards = track.children;
const lastCard = cards[cards.length - 1] as HTMLElement;

const cardCenter =
  lastCard.offsetLeft +
  lastCard.offsetWidth / 2;

const viewportCenter =
  window.innerWidth / 2;

const totalMove =
  cardCenter - viewportCenter;

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

    onUpdate: () => {
      const viewportCenter =
        window.innerWidth / 2;

      galleryCards.forEach((card) => {
        const rect =
          card.getBoundingClientRect();

        const cardCenter =
          rect.left + rect.width / 2;

        const distance =
          Math.abs(
            viewportCenter - cardCenter
          );

        const maxDistance =
          window.innerWidth / 2;

        const ratio =
          Math.min(distance / maxDistance, 1);

        const scale =
          1 - ratio * 0.25;

        gsap.set(card, {
          scale,
          zIndex: Math.round(scale * 100),
        });
      });
    },
  },
});
}); // closes gsap.context
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* MOBILE */}

      <section className="lg:hidden py-8 bg-white/30 backdrop-blur-md">

  <h2 className="text-center text-2xl font-light text-[#173f74] mb-6">
    Project Gallery
  </h2>

  <div
    className="
      flex
      overflow-x-auto
      snap-x
      snap-mandatory
      gap-4
      px-[15vw]
      pb-4
    "
  >
    {images.map((image, index) => (
  <div
  key={index}
  className="
    gallery-card
    shrink-0
    rounded-3xl
    overflow-hidden
    bg-white
    shadow-[0_30px_80px_rgba(0,0,0,0.35)]
    transition-transform
    duration-300
    will-change-transform
  "
>
        <Image
          src={image}
          alt={`Gallery ${index + 1}`}
          width={300}
          height={200}
          className="
            w-full
            h-[220px]
            object-cover
            rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.30)]
          "
        />
      </div>
    ))}
  </div>

</section>

      {/* DESKTOP */}

      <section
        ref={sectionRef}
        className="hidden lg:block relative h-screen"
      >
        {/* Hero visible behind gallery */}

       <div
  className="
    absolute
    inset-0
    bg-white/65
    backdrop-blur-xl
    z-10
  "
/>
        <div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage:
      "url('/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(12px)",
    opacity: 0.35,
  }}
/>

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
  bg-white
  shadow-[0_30px_80px_rgba(0,0,0,0.35)]
"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    width={520}
                    height={344}
                    className="
  w-[520px]
  h-[344px]
  object-cover
  transition-all
  duration-500
  hover:scale-[1.02]
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
