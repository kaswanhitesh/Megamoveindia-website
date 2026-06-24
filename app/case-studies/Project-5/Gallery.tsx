'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const IMAGES = [
    "/images/Casestudies/Project-5/Project5_Gallery1.webp",
    "/images/Casestudies/Project-5/Project5_Gallery2.webp",
    "/images/Casestudies/Project-5/Project5_Gallery3.webp",
    
  ];

const MOBILE_CARD_WIDTH = 280;
const MOBILE_CARD_HEIGHT = 280;
const MOBILE_GAP = 20;
const MOBILE_CARD_HALF_WIDTH = MOBILE_CARD_WIDTH / 2;

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fixedContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<any>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // States and refs for positioning tracking
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoveredIndexRef = useRef<number | null>(null);
  const entryProgressRef = useRef(0);
  const mainProgressRef = useRef(0);

  const [metrics, setMetrics] = useState({
    cardWidth: 420,
    cardHeight: 420,
    gap: 64,
    windowWidth: 1200,
  });

  // Lightbox States & Handlers
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    lenisRef.current?.stop();
    document.body.classList.add('overflow-hidden');
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    lenisRef.current?.start();
    document.body.classList.remove('overflow-hidden');
  };

  const nextLightboxImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prevLightboxImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setLightboxIndex((prev) => (prev + 1) % IMAGES.length);
    } else if (isRightSwipe) {
      setLightboxIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % IMAGES.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    hoveredIndexRef.current = index;
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    hoveredIndexRef.current = null;
  };

  // State update logic to position all desktop cards in linear horizontal space
  const updateGalleryState = (
    entryVal: number,
    mainVal: number,
    activeHoverIndex: number | null,
    isScrollUpdate: boolean = true
  ) => {
    const cards = trackRef.current?.children;
    if (!cards) return;

    const { cardWidth, gap, windowWidth } = metrics;
    const isAnyCardHovered = activeHoverIndex !== null;

    // Linear sequence running through 12 images (index 0 to 11) over the first 2/3 of scroll (2.0 viewports).
    // During the final 1/3 of scroll (1.0 viewport) when Project Outcome overlaps, we slow down card movement
    // (index 11 to 12.2) so the final image remains visible behind the incoming content, avoiding blank gaps.
    let fActiveIndex = 0;
    const scrubEndProgress = 2.0 / 3.0;
    if (mainVal <= scrubEndProgress) {
      const progressFraction = mainVal / scrubEndProgress;
      fActiveIndex = progressFraction * (IMAGES.length - 1);
    } else {
      const overflowFraction = (mainVal - scrubEndProgress) / (1 - scrubEndProgress);
      fActiveIndex = (IMAGES.length - 1) + overflowFraction * 1.2;
    }

    setActiveIndex(Math.min(IMAGES.length - 1, Math.round(fActiveIndex)));

    // Entry slide parallax offset
    const entryOffset = windowWidth * (1 - entryVal);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;

      const x = i - fActiveIndex;
      const absX = Math.abs(x);

      // Linear horizontal alignment: no stacking, no rotations, no z-depth
      const translateX = x * (cardWidth + gap) + entryOffset;

      // Clean scale and opacity falloff
      let scale = 0.80 + 0.30 * Math.exp(-absX * absX * 1.5); // Dominant center (1.10x), side cards (0.80x)
      let opacity = 0.40 + 0.60 * Math.exp(-absX * absX * 1.2); // Active is 1.0, adjacent are ~0.60, far are 0.40
      const zIndex = Math.round(100 - absX * 10);

      const isHovered = activeHoverIndex === i;
      if (isHovered) {
        scale += 0.04;
        opacity = 1.0;
      } else if (isAnyCardHovered) {
        opacity *= 0.60;
      }

      const transformStr = `translate3d(${translateX}px, 0px, 0px) scale(${scale})`;

      if (isScrollUpdate) {
        gsap.set(card, {
          transform: transformStr,
          opacity,
          zIndex,
        });
      } else {
        gsap.to(card, {
          duration: 0.45,
          ease: 'power2.out',
          transform: transformStr,
          opacity,
          zIndex,
          overwrite: 'auto',
        });
      }
    }
  };

  // Update scale and opacity for mobile cards in native overflow scroll container
  const updateMobileCoverflow = () => {
    const container = mobileContainerRef.current;
    if (!container) return;

    const cards = container.firstElementChild?.children;
    if (!cards) return;

    const scrollLeft = container.scrollLeft;

    const fActiveIndex = scrollLeft / (MOBILE_CARD_WIDTH + MOBILE_GAP);
    const active = Math.round(fActiveIndex);
    setActiveIndex(active);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;

      const x = i - fActiveIndex;
      const absX = Math.abs(x);

      const scale = 0.80 + 0.20 * Math.exp(-absX * absX * 1.5); // Center 1.0x, sides 0.80x
      const opacity = 0.40 + 0.60 * Math.exp(-absX * absX * 1.2);
      const zIndex = Math.round(100 - absX * 10);

      gsap.set(card, {
        transform: `scale(${scale})`,
        opacity,
        zIndex,
      });
    }
  };

  const scrollToImage = (index: number) => {
    if (window.innerWidth < 1024) {
      const container = mobileContainerRef.current;
      if (!container) return;
      const targetScroll = index * (MOBILE_CARD_WIDTH + MOBILE_GAP);
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    } else {
      if (scrollTriggerRef.current) {
        const start = scrollTriggerRef.current.start;
        const end = scrollTriggerRef.current.end;
        const total = end - start;

        const scrubEndProgress = 2.0 / 3.0;
        const targetScroll = start + (index / (IMAGES.length - 1)) * scrubEndProgress * total;

        if (lenisRef.current) {
          lenisRef.current.scrollTo(targetScroll, {
            duration: 1.2,
          });
        } else {
          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  useEffect(() => {
    const updateMetrics = () => {
      const w = window.innerWidth;
      const cardWidth = Math.min(Math.max(w * 0.32, 320), 460);
      const cardHeight = Math.round(cardWidth * 1.0);
      const gap = w >= 1440 ? 64 : 48;

      setMetrics({
        cardWidth,
        cardHeight,
        gap,
        windowWidth: w,
      });

      if (w < 1024) {
        setTimeout(updateMobileCoverflow, 50);
      }
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setTimeout(updateMobileCoverflow, 50);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      updateGalleryState(entryProgressRef.current, mainProgressRef.current, hoveredIndex, false);
    }
  }, [hoveredIndex, metrics]);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const track = trackRef.current;
    const fixedContainer = fixedContainerRef.current;
    const container = containerRef.current;

    if (!track || !fixedContainer || !container) return;

    // Initialize Lenis smooth scroll orchestration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    // Synchronize ScrollTrigger updates with Lenis scroll events directly
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    lenisRef.current = lenis;

    // Initialize ScrollTriggers in the GSAP Context
    const ctx = gsap.context(() => {
      // Pin fixedContainer using GSAP ScrollTrigger
      ScrollTrigger.create({
        trigger: container,
        pin: fixedContainer,
        start: 'top top',
        end: 'bottom top',
        pinSpacing: false,
        anticipatePin: 1,
      });

      // Entry trigger (0 to 1.0vh) to slide cards in from off-screen right
      const entryTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        onUpdate: (self) => {
          entryProgressRef.current = self.progress;
          updateGalleryState(self.progress, mainProgressRef.current, hoveredIndexRef.current, true);
        },
      });

      // Main trigger (1.0vh to 3.8vh) to scrub the horizontal sequence
      const mainTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          mainProgressRef.current = self.progress;
          updateGalleryState(entryProgressRef.current, self.progress, hoveredIndexRef.current, true);
        },
      });
      scrollTriggerRef.current = mainTrigger;

      // Force initial update to prevent visual flashes
      const initialEntry = entryTrigger.scroll() >= entryTrigger.end ? 1 : 0;
      const initialMain = mainTrigger.scroll() >= mainTrigger.end ? 1 : 0;
      entryProgressRef.current = initialEntry;
      mainProgressRef.current = initialMain;
      updateGalleryState(initialEntry, initialMain, hoveredIndexRef.current, true);
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
      lenisRef.current = null;
    };
  }, [metrics]);

  return (
    <>
      {/* MOBILE GALLERY: snap horizontal slider */}
      <section
        className="py-12 lg:hidden relative z-20 border-y border-white/10 overflow-hidden bg-transparent"
      >
        {/* Mobile Background Hero Image with heavy blur & a subtle light overlay */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-transparent">
          <Image
            src="/images/Casestudies/Project-5/Project5_Heroimage.webp"
            alt="Gallery Background"
            fill
            className="object-cover scale-105 blur-[44px] opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/25 z-10" />
        </div>

        {/* Mobile Section Heading */}
        <div className="relative z-10 mb-6 select-none">
          <h2 className="text-3xl font-light text-zinc-900 text-center">
            Project Gallery
          </h2>
        </div>

        <div
          ref={mobileContainerRef}
          onScroll={updateMobileCoverflow}
          className="overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative z-10"
          style={{
            paddingLeft: `calc(50vw - ${MOBILE_CARD_HALF_WIDTH}px)`,
            paddingRight: `calc(50vw - ${MOBILE_CARD_HALF_WIDTH}px)`,
          }}
        >
          <div
            className="flex w-max py-8"
            style={{
              gap: `${MOBILE_GAP}px`,
            }}
          >
            {IMAGES.map((image, index) => (
              <article
                key={image}
                onClick={() => openLightbox(index)}
                className="snap-center relative shrink-0 transition-shadow duration-300 cursor-pointer"
                style={{
                  width: `${MOBILE_CARD_WIDTH}px`,
                  willChange: 'transform, opacity',
                }}
              >
                {/* Mobile Main Image Card */}
                <div
                  className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                  style={{ height: `${MOBILE_CARD_HEIGHT}px` }}
                >
                  <Image
                    src={image}
                    alt={`ODC IN-LAND TRANSPORTATION gallery image ${index + 1}`}
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

        {/* Mobile Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 select-none">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToImage(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                activeIndex === index
                  ? 'bg-zinc-950 scale-125 shadow-[0_0_8px_rgba(0,0,0,0.25)]'
                  : 'bg-black/25'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* DESKTOP GALLERY: Fixed Parallax Overlay + GSAP Horizontal Slider */}
      <section
        ref={containerRef}
        className="relative z-10 hidden lg:block bg-transparent w-full h-[300vh]"
      >
        {/* Cinematic container which will be pinned by GSAP ScrollTrigger */}
        <div
          ref={fixedContainerRef}
          className="w-full h-screen bg-transparent overflow-hidden flex items-center border-y border-white/10"
        >
          {/* Gallery Background Hero Image with heavy blur and a subtle light overlay */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-transparent">
            <Image
              src="/images/Casestudies/Project-5/Project5_Heroimage.webp"
              alt="Gallery Background"
              fill
              className="object-cover scale-105 blur-[55px] opacity-40"
              priority
              sizes="100vw"
            />
            {/* Subtle light overlay */}
            <div className="absolute inset-0 bg-white/25 z-10" />
          </div>

          {/* Desktop Section Heading */}
          <div className="absolute top-12 left-0 w-full z-20 pointer-events-none select-none">
            <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center">
              Project Gallery
            </h2>
          </div>

          {/* Horizontal Track Container */}
          <div
            ref={trackRef}
            className="absolute inset-0 w-full h-full z-10 overflow-visible flex items-center justify-center"
          >
            {IMAGES.map((image, index) => (
              <article
                key={image}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => openLightbox(index)}
                className="group absolute cursor-pointer"
                style={{
                  width: `${metrics.cardWidth}px`,
                  height: `${metrics.cardHeight}px`,
                  left: '50%',
                  top: '50%',
                  marginTop: `-${metrics.cardHeight / 2}px`,
                  marginLeft: `-${metrics.cardWidth / 2}px`,
                  willChange: 'transform, opacity',
                }}
              >
                {/* Card Main Image */}
                <div
                  className="relative w-full h-full overflow-hidden rounded-[36px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.12)] select-none"
                >
                  <Image
                    src={image}
                    alt={`ODC IN-LAND TRANSPORTATION gallery image ${index + 1}`}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="460px"
                    priority={index < 2}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Desktop Navigation Dots */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3.5 z-30 select-none">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                  activeIndex === index
                    ? 'bg-zinc-950 scale-125 shadow-[0_0_12px_rgba(0,0,0,0.25)]'
                    : 'bg-black/25 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent backdrop-blur-2xl transition-opacity duration-300 animate-fade-in"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-[110] text-zinc-900 hover:text-zinc-900/80 transition-colors duration-300 p-2 cursor-pointer bg-zinc-900/10 hover:bg-zinc-900/20 rounded-full"
            aria-label="Close Lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow Button */}
          <button
            onClick={prevLightboxImage}
            className="absolute left-6 z-[110] text-zinc-900 hover:text-zinc-900/80 transition-all duration-300 p-3 cursor-pointer bg-zinc-900/10 hover:bg-zinc-900/20 rounded-full hover:scale-105"
            aria-label="Previous Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextLightboxImage}
            className="absolute right-6 z-[110] text-zinc-900 hover:text-zinc-900/80 transition-all duration-300 p-3 cursor-pointer bg-zinc-900/10 hover:bg-zinc-900/20 rounded-full hover:scale-105"
            aria-label="Next Image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div className="relative max-w-[90vw] max-h-[80vh] w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-[1200px] max-h-[800px] transition-all duration-300 select-none shadow-[0_25px_60px_rgba(0,0,0,0.15)] rounded-2xl">
              <Image
                src={IMAGES[lightboxIndex]}
                alt={`Lightbox image ${lightboxIndex + 1}`}
                fill
                className="object-contain pointer-events-none rounded-2xl"
                sizes="(max-width: 1280px) 90vw, 1200px"
                priority
              />
            </div>
          </div>

          {/* Slide indicator at bottom */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-zinc-900/80 text-sm font-semibold tracking-widest bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              {lightboxIndex + 1} / {IMAGES.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
