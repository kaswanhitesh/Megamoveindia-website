'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const IMAGES = [
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery1.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery2.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery3.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery4.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery5.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery6.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery7.webp',
  '/images/Casestudies/DefenceCargo/defencecargo_Gallery8.webp',
];

const MOBILE_CARD_WIDTH = 280;
const MOBILE_CARD_HEIGHT = 220;
const MOBILE_GAP = 16;
const MOBILE_CARD_HALF_WIDTH = MOBILE_CARD_WIDTH / 2;
const EAGER_LOAD_COUNT = 2;
const MIN_PROGRESS_BAR_WIDTH_PCT = 6;
const PROGRESS_THRESHOLD = 0.001;
const MOBILE_GALLERY_LABEL = 'Project Gallery';
const DESKTOP_GALLERY_LABEL = 'Mission Frame';

interface DesktopMetrics {
  cardWidth: number;
  cardHeight: number;
  gap: number;
  startOffset: number;
  scrollDistance: number;
  sectionHeight: number;
}

const EMPTY_METRICS: DesktopMetrics = {
  cardWidth: 420,
  cardHeight: 320,
  gap: 32,
  startOffset: 0,
  scrollDistance: 0,
  sectionHeight: 0,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getCurrentSlide(progress: number, totalImages: number) {
  if (totalImages === 0) {
    return 0;
  }

  return Math.max(1, Math.min(totalImages, Math.round(progress * (totalImages - 1)) + 1));
}

function areMetricsEqual(currentMetrics: DesktopMetrics, nextMetrics: DesktopMetrics) {
  return (
    currentMetrics.cardWidth === nextMetrics.cardWidth &&
    currentMetrics.cardHeight === nextMetrics.cardHeight &&
    currentMetrics.gap === nextMetrics.gap &&
    currentMetrics.startOffset === nextMetrics.startOffset &&
    currentMetrics.scrollDistance === nextMetrics.scrollDistance &&
    currentMetrics.sectionHeight === nextMetrics.sectionHeight
  );
}

function getDesktopMetrics(): DesktopMetrics {
  if (typeof window === 'undefined') {
    return EMPTY_METRICS;
  }

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const gap = viewportWidth >= 1440 ? 40 : 32;
  const cardWidth = Math.round(clamp(viewportWidth * 0.32, 320, 460));
  const cardHeight = Math.round(cardWidth * 0.76);
  const startOffset = (viewportWidth - cardWidth) / 2;
  const scrollDistance = Math.max(0, (IMAGES.length - 1) * (cardWidth + gap));

  return {
    cardWidth,
    cardHeight,
    gap,
    startOffset,
    scrollDistance,
    sectionHeight: viewportHeight + scrollDistance,
  };
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionTopRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const metricsFrameRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const [desktopMetrics, setDesktopMetrics] = useState<DesktopMetrics>(EMPTY_METRICS);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const resetFrame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.cancelAnimationFrame(resetFrame);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const updateMetrics = () => {
      sectionTopRef.current = (sectionRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY;
      setDesktopMetrics((currentMetrics) => {
        const nextMetrics = getDesktopMetrics();

        if (areMetricsEqual(currentMetrics, nextMetrics)) {
          return currentMetrics;
        }

        return nextMetrics;
      });
    };

    const resizeHandler = () => {
      if (metricsFrameRef.current !== null) {
        window.cancelAnimationFrame(metricsFrameRef.current);
      }

      metricsFrameRef.current = window.requestAnimationFrame(updateMetrics);
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => {
      if (metricsFrameRef.current !== null) {
        window.cancelAnimationFrame(metricsFrameRef.current);
      }
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const syncProgress = useCallback(() => {
    if (!sectionRef.current || desktopMetrics.scrollDistance === 0) {
      return;
    }

    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      const nextProgress = clamp((window.scrollY - sectionTopRef.current) / desktopMetrics.scrollDistance, 0, 1);

      if (Math.abs(nextProgress - progressRef.current) < PROGRESS_THRESHOLD) {
        return;
      }

      progressRef.current = nextProgress;
      setProgress(nextProgress);
    });
  }, [desktopMetrics.scrollDistance]);

  useEffect(() => {
    if (desktopMetrics.scrollDistance === 0) {
      return;
    }

    const handleScroll = () => syncProgress();
    if (window.scrollY > 0) {
      syncProgress();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener('scroll', handleScroll);
    };
  }, [desktopMetrics.scrollDistance, syncProgress]);

  const currentSlide = getCurrentSlide(progress, IMAGES.length);
  const translateX = desktopMetrics.startOffset - progress * desktopMetrics.scrollDistance;

  return (
    <>
      <section className="bg-white px-4 py-14 lg:hidden">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light text-[#173f74]">Project Gallery</h2>
          <p className="mt-3 text-center text-sm tracking-[0.18em] text-slate-500 uppercase">
            Swipe through the execution journey
          </p>
        </div>

        <div
          className="mt-8 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{
            paddingLeft: `calc(50vw - ${MOBILE_CARD_HALF_WIDTH}px)`,
            paddingRight: `calc(50vw - ${MOBILE_CARD_HALF_WIDTH}px)`,
          }}
        >
          <div className="flex w-max" style={{ gap: `${MOBILE_GAP}px` }}>
            {IMAGES.map((image, index) => (
              <article
                key={image}
                className="snap-center overflow-hidden rounded-[28px] bg-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.14)]"
                style={{ width: `${MOBILE_CARD_WIDTH}px` }}
              >
                <Image
                  src={image}
                  alt={`National defence gallery image ${index + 1}`}
                  width={MOBILE_CARD_WIDTH}
                  height={MOBILE_CARD_HEIGHT}
                  className="h-[220px] w-full object-cover"
                  loading={index < EAGER_LOAD_COUNT ? 'eager' : 'lazy'}
                  sizes="280px"
                />
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    {MOBILE_GALLERY_LABEL}
                  </span>
                  <span className="text-sm font-semibold text-[#173f74]">
                    {index + 1}/{IMAGES.length}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="relative hidden bg-white lg:block"
        style={{ height: desktopMetrics.sectionHeight > 0 ? `${desktopMetrics.sectionHeight}px` : '200vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-white">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              opacity: 0.08,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/92 to-white" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="px-8 pt-16 text-center">
              <h2 className="text-5xl font-light text-[#173f74]">Project Gallery</h2>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">
                Scroll down to move through the transport sequence
              </p>
            </div>

            <div className="flex flex-1 items-center overflow-hidden">
              <div
                className="flex items-center"
                style={{
                  gap: `${desktopMetrics.gap}px`,
                  transform: `translate3d(${translateX}px, 0, 0)`,
                  willChange: 'transform',
                }}
              >
                {IMAGES.map((image, index) => (
                  <article
                    key={image}
                    className="relative flex-shrink-0 overflow-hidden rounded-[36px] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
                    style={{ width: `${desktopMetrics.cardWidth}px` }}
                  >
                    <Image
                      src={image}
                      alt={`National defence gallery image ${index + 1}`}
                      width={desktopMetrics.cardWidth}
                      height={desktopMetrics.cardHeight}
                      className="w-full object-cover"
                      style={{ height: `${desktopMetrics.cardHeight}px` }}
                      loading={index < EAGER_LOAD_COUNT ? 'eager' : 'lazy'}
                      sizes="(min-width: 1536px) 460px, (min-width: 1024px) 32vw, 420px"
                      priority={index === 0}
                    />
                    <div className="flex items-center justify-between px-6 py-5">
                      <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                        {DESKTOP_GALLERY_LABEL}
                      </span>
                      <span className="text-base font-semibold text-[#173f74]">
                        {index + 1}/{IMAGES.length}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-5 rounded-full bg-white/85 px-6 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="h-1.5 w-56 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-[#173f74] transition-[width] duration-150"
                  style={{ width: `${Math.max(progress * 100, MIN_PROGRESS_BAR_WIDTH_PCT)}%` }}
                />
              </div>
              <span className="min-w-20 text-sm font-semibold text-[#173f74]">
                {currentSlide}/{IMAGES.length}
              </span>
            </div>

            <div
              className="absolute top-12 left-1/2 -translate-x-1/2 text-center text-sm uppercase tracking-[0.28em] text-slate-500 transition-opacity duration-200"
              style={{ opacity: progress < 0.12 ? 1 - progress / 0.12 : 0 }}
            >
              Horizontal scroll takeover
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
