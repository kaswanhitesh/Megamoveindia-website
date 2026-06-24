'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const IMAGES = [
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery1.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery2.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery3.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery4.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery5.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery6.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery7.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery8.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery9.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery10.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery11.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery12.webp',
];

const MOBILE_CARD_WIDTH = 280;
const MOBILE_CARD_HEIGHT = 220;
const MOBILE_GAP = 16;
const MOBILE_CARD_HALF_WIDTH = MOBILE_CARD_WIDTH / 2;

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  const [metrics, setMetrics] = useState({
    cardWidth: 420,
    cardHeight: 320,
    gap: 32,
  });

  // Mathematically update 3D coverflow transforms for desktop cards
  const updateCoverflow = (trackX: number) => {
    const cards = trackRef.current?.children;
    if (!cards) return;

    const { cardWidth, gap } = metrics;
    const w = window.innerWidth;
    const viewportCenter = w / 2;
    // Distance over which rotation and scale effects fully saturate
    const maxDistance = cardWidth * 1.5;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = trackX + i * (cardWidth + gap) + cardWidth / 2;
      const distance = cardCenter - viewportCenter;

      const normalized = distance / maxDistance;
      const clamped = Math.max(-1, Math.min(1, normalized));

      // Calculate 3D values based on relative distance from center
      const rotateY = -clamped * 45; // Angled inward
      const translateZ = -Math.abs(clamped) * 180; // Pushed back
      const scale = 1 - Math.abs(clamped) * 0.22; // Shrunk when off-center
      const opacity = 1 - Math.abs(clamped) * 0.45; // Faded in the background
      const zIndex = Math.round(100 - Math.abs(clamped) * 50); // Center card on top

      // Pull side cards closer to the center to overlap them elegantly
      const translateX = -clamped * (cardWidth * 0.15);

      gsap.set(card, {
        transform: `rotateY(${rotateY}deg) translate3d(${translateX}px, 0px, ${translateZ}px) scale(${scale})`,
        opacity,
        zIndex,
      });
    }
  };

  // Mathematically update 3D coverflow transforms for mobile cards
  const updateMobileCoverflow = () => {
    const container = mobileContainerRef.current;
    if (!container) return;

    const cards = container.firstElementChild?.children;
    if (!cards) return;

    const scrollLeft = container.scrollLeft;
    const w = window.innerWidth;
    const paddingLeft = w / 2 - MOBILE_CARD_WIDTH / 2;
    const maxDistance = MOBILE_CARD_WIDTH * 1.2;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = paddingLeft + i * (MOBILE_CARD_WIDTH + MOBILE_GAP) + MOBILE_CARD_WIDTH / 2;
      const distance = cardCenter - (scrollLeft + w / 2);

      const normalized = distance / maxDistance;
      const clamped = Math.max(-1, Math.min(1, normalized));

      const rotateY = -clamped * 40;
      const translateZ = -Math.abs(clamped) * 150;
      const scale = 1 - Math.abs(clamped) * 0.2;
      const opacity = 1 - Math.abs(clamped) * 0.4;
      const zIndex = Math.round(100 - Math.abs(clamped) * 50);
      const translateX = -clamped * (MOBILE_CARD_WIDTH * 0.12);

      gsap.set(card, {
        transform: `rotateY(${rotateY}deg) translate3d(${translateX}px, 0px, ${translateZ}px) scale(${scale})`,
        opacity,
        zIndex,
      });
    }
  };

  // Update card metrics and trigger mobile coverflow calculations on resize
  useEffect(() => {
    const updateMetrics = () => {
      const w = window.innerWidth;
      const gap = w >= 1440 ? 40 : 32;
      const cardWidth = Math.min(Math.max(w * 0.32, 320), 460);
      const cardHeight = Math.round(cardWidth * 0.76);

      setMetrics({
        cardWidth,
        cardHeight,
        gap,
      });

      if (w < 1024) {
        // Trigger immediate calculation for mobile layout
        setTimeout(updateMobileCoverflow, 50);
      }
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  // Initialize mobile coverflow on mount
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setTimeout(updateMobileCoverflow, 50);
    }
  }, []);

  // GSAP ScrollTrigger orchestration for horizontal coverflow and entry sequence
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const container = containerRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;

    if (!container || !sticky || !track) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const { cardWidth, gap } = metrics;
    const trackWidth = IMAGES.length * cardWidth + (IMAGES.length - 1) * gap;

    const startX = w; // Start completely off-screen right
    const centerX = w / 2 - cardWidth / 2; // Card 1 centered in viewport
    const endX = w / 2 - (trackWidth - cardWidth / 2); // Card 12 centered in viewport

    const scrollDistance = trackWidth - cardWidth;
    
    // Configure height of the pinning scroll space
    container.style.height = `${h + scrollDistance}px`;

    const ctx = gsap.context(() => {
      // 1. Entry Animation (Vertical scroll translation)
      // As the section enters the screen, the track translates until the first card is centered
      gsap.fromTo(
        track,
        { x: startX },
        {
          x: centerX,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: () => {
              const currentX = gsap.getProperty(track, 'x') as number;
              updateCoverflow(currentX);
            },
          },
        }
      );

      // 2. Pinned 3D Sequence (Horizontal scroll takeover)
      // Once aligned with viewport top, it pins and translates until the last card is centered
      gsap.fromTo(
        track,
        { x: centerX },
        {
          x: endX,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${scrollDistance}`,
            scrub: true,
            pin: sticky,
            pinSpacing: true,
            invalidateOnRefresh: true,
            onUpdate: () => {
              const currentX = gsap.getProperty(track, 'x') as number;
              updateCoverflow(currentX);
            },
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [metrics]);

  return (
    <>
      {/* MOBILE GALLERY: Snap Swipe + Native Scroll driven 3D Coverflow */}
      <section
        className="bg-white/25 backdrop-blur-2xl py-16 lg:hidden relative z-20 border-y border-white/20 overflow-hidden"
        style={{ perspective: '800px' }}
      >
        <div
          ref={mobileContainerRef}
          onScroll={updateMobileCoverflow}
          className="overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingLeft: `calc(50vw - ${MOBILE_CARD_HALF_WIDTH}px)`,
            paddingRight: `calc(50vw - ${MOBILE_CARD_HALF_WIDTH}px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className="flex w-max py-8"
            style={{
              gap: `${MOBILE_GAP}px`,
              transformStyle: 'preserve-3d',
            }}
          >
            {IMAGES.map((image, index) => (
              <article
                key={image}
                className="snap-center overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)] shrink-0 transition-shadow duration-300"
                style={{
                  width: `${MOBILE_CARD_WIDTH}px`,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity',
                }}
              >
                <div className="relative" style={{ height: `${MOBILE_CARD_HEIGHT}px` }}>
                  <Image
                    src={image}
                    alt={`National defence gallery image ${index + 1}`}
                    fill
                    className="object-cover pointer-events-none"
                    loading={index < 2 ? 'eager' : 'lazy'}
                    sizes="280px"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP GALLERY: Sticky Pinned Horizontal GSAP 3D Coverflow */}
      <section
        ref={containerRef}
        className="relative hidden lg:block bg-transparent z-20"
      >
        <div
          ref={stickyRef}
          className="h-screen overflow-hidden bg-white/25 backdrop-blur-2xl flex items-center border-y border-white/20"
          style={{
            perspective: '1200px',
          }}
        >
          {/* Horizontal Pinned Track */}
          <div
            className="flex flex-1 items-center overflow-visible w-full relative"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              ref={trackRef}
              className="flex items-center"
              style={{
                gap: `${metrics.gap}px`,
                willChange: 'transform',
                transform: 'translate3d(100vw, 0, 0)',
                transformStyle: 'preserve-3d',
              }}
            >
              {IMAGES.map((image, index) => (
                <article
                  key={image}
                  className="relative flex-shrink-0 overflow-hidden rounded-[36px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.15)] transition-shadow duration-300 hover:shadow-[0_24px_80px_rgba(23,63,116,0.2)]"
                  style={{
                    width: `${metrics.cardWidth}px`,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity',
                  }}
                >
                  <div className="relative" style={{ height: `${metrics.cardHeight}px` }}>
                    <Image
                      src={image}
                      alt={`National defence gallery image ${index + 1}`}
                      fill
                      className="object-cover pointer-events-none"
                      sizes="460px"
                      priority={index < 2}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
