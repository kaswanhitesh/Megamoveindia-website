"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useHeaderFooter } from "./components/HeaderFooterContext";

import type { SectionConfig } from "./types";

const MAX_RETRIES = 3;
const LOADING_TIMEOUT_MS = 30_000; // 30 seconds

// Auto-scroll config
const AUTO_SCROLL_TARGET_FRAME = 320; // frame_000320
const AUTO_SCROLL_DURATION_MS = 3000; // 3 seconds smooth scroll

// Title fade config
const TITLE_FADE_BY_CARD_START = 80;  // title starts fading as card rises
const TITLE_FADE_BY_CARD_END = 120;   // title fully gone when card is centered

interface LoopingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const LoopingVideo = ({ src, className, style }: LoopingVideoProps) => {
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const activeVideoRef = useRef<'A' | 'B'>('A');

  useEffect(() => {
    const videoA = videoRefA.current;
    const videoB = videoRefB.current;
    if (!videoA || !videoB) return;

    // Initial styles
    videoA.style.opacity = "1";
    videoB.style.opacity = "0";

    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (activeVideoRef.current === 'A') {
            videoA.play().catch(() => {});
          } else {
            videoB.play().catch(() => {});
          }
        } else {
          videoA.pause();
          videoB.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(videoA);

    let rafId: number;
    const fadeDuration = 0.8; // 0.8s matching fade duration

    const tick = () => {
      if (!isVisible) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      if (activeVideoRef.current === 'A') {
        const duration = videoA.duration;
        const currentTime = videoA.currentTime;

        if (duration && currentTime >= duration - fadeDuration) {
          if (videoB.paused) {
            videoB.currentTime = 0;
            videoB.play().catch(() => {});
            videoB.style.opacity = "1"; // Show B underneath
          }

          const progress = (duration - currentTime) / fadeDuration;
          videoA.style.opacity = Math.max(0, Math.min(1, progress)).toString();

          if (currentTime >= duration - 0.05) {
            videoA.pause();
            videoA.style.opacity = "0";
            activeVideoRef.current = 'B';
          }
        } else {
          if (videoA.style.opacity !== "1") videoA.style.opacity = "1";
          if (videoB.style.opacity !== "0") videoB.style.opacity = "0";
          if (!videoB.paused) {
            videoB.pause();
            videoB.currentTime = 0;
          }
        }
      } else {
        const duration = videoB.duration;
        const currentTime = videoB.currentTime;

        if (duration && currentTime >= duration - fadeDuration) {
          if (videoA.paused) {
            videoA.currentTime = 0;
            videoA.play().catch(() => {});
            videoA.style.opacity = "1"; // Show A underneath
          }

          const progress = (duration - currentTime) / fadeDuration;
          videoB.style.opacity = Math.max(0, Math.min(1, progress)).toString();

          if (currentTime >= duration - 0.05) {
            videoB.pause();
            videoB.style.opacity = "0";
            activeVideoRef.current = 'A';
          }
        } else {
          if (videoB.style.opacity !== "1") videoB.style.opacity = "1";
          if (videoA.style.opacity !== "0") videoA.style.opacity = "0";
          if (!videoA.paused) {
            videoA.pause();
            videoA.currentTime = 0;
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div style={{ ...style, position: "relative", overflow: "hidden" }} className={className}>
      <video
        ref={videoRefA}
        src={src}
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="group-hover:scale-105"
      />
      <video
        ref={videoRefB}
        src={src}
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="group-hover:scale-105"
      />
    </div>
  );
};

// Services Data
const services = [
  {
    number: '01',
    title: 'AIR FREIGHT',
    description: 'Specialized air freight solutions for urgent, high-value and time-critical cargo movements. Through our global airline partnerships and logistics network, we provide reliable charter and door-to-door services.',
    image: '/images/AirFreightHeroImage.webp',
    link: '/services/air-freight'
  },
  {
    number: '02',
    title: 'OCEAN FREIGHT',
    description: 'Comprehensive ocean freight services covering FCL, LCL, breakbulk and project cargo shipments. Our experienced team manages international movements through strategic carrier partnerships.',
    image: '/images/OceanfreightHeroCardImage.webp',
    link: '/services/ocean-freight'
  },
  {
    number: '03',
    title: 'LAND TRANSPORT',
    description: 'Heavy haulage, over-dimensional cargo transportation and project logistics supported by hydraulic axle trailers, lowbed trailers and specialized equipment across India.',
    image: '/images/LandTransportCardHeroImage.webp',
    link: '/services/land-transport'
  },
  {
    number: '04',
    title: 'RENTALS & WAREHOUSING',
    description: 'Comprehensive equipment rental, warehousing and cargo handling solutions including truck mounted manlifts, aerial work platforms, loading services and project support.',
    image: '/images/RentalsCardHeroImage.webp',
    link: '/services/rentals-warehousing'
  }
];

// Text fade config (all index-based: index = frameNumber - firstFrame)
const TEXT_FADE_IN_START = 0;    // text starts fading in at first frame (frame_000294)
const TEXT_FADE_IN_END = 26;     // text fully visible at frame_000320 (index 26)

// Legacy card scroll config (index-based)
// Card continuously rises from below viewport → exits above
const CARD_ENTER_START = 50;     // card begins entering from bottom
const CARD_EXIT_END = 200;       // card fully gone above

// Portfolio horizontal glide config (index-based)
// Synced to start when legacy card is about to hit upper edge (index 140)
const PORTFOLIO_ENTER_START = 140;  // Title fades in, cards slide from right
const PORTFOLIO_ENTER_END = 175;    // First card centered, title fully visible
const PORTFOLIO_SLIDE_START = 175;  // Entire track begins horizontal slide
const PORTFOLIO_SLIDE_END = 415;    // Horizontal slide ends
const PORTFOLIO_EXIT_START = 435;   // Portfolio container begins exiting
const PORTFOLIO_EXIT_END = 475;     // Portfolio container fully gone

const getFramePath = (section: SectionConfig, index: number): string => {
  const frameNum = index + section.firstFrame;
  const padded = String(frameNum).padStart(6, "0");
  return encodeURI(`${section.folder}/frame_${padded}.webp`);
};



const INDUSTRY_DATA = [
  { 
    image: "/images/industries/industry_industrial_plants.webp", 
    title: "Industrial Plants", 
    description: "End-to-end factory relocations. We engineer precise lifting and haulage for massive industrial reactors and critical assembly lines.",
    metrics: { p: "240+", d: "14K+", e: "TIER 1" },
    link: "/industries/industrial-plants"
  },
  { 
    image: "/images/industries/industry_infrastructure.webp", 
    title: "Infrastructure", 
    description: "Logistics backbone for national mega-projects. Transporting colossal bridge girders, TBMs, and pre-cast concrete structures.",
    metrics: { p: "450+", d: "85K+", e: "24/7" },
    link: "/industries/infrastructure"
  },
  { 
    image: "/images/industries/industry_metal_mining.webp", 
    title: "Metal & Mining", 
    description: "Extreme-weight haulage for the resource sector. We move massive excavators, dump trucks, and heavy processing units.",
    metrics: { p: "180+", d: "6K+", e: "HEAVY" },
    link: "/industries/metal-mining"
  },
  { 
    image: "/images/industries/industry_oil_gas.webp", 
    title: "Oil & Gas", 
    description: "Specialized movement of highly delicate assets including long-span pipelines, offshore rigs, and massive refinery vessels.",
    metrics: { p: "320+", d: "11K+", e: "HAZMAT" },
    link: "/industries/oil-gas"
  },
  { 
    image: "/images/industries/industry_power_energy.webp", 
    title: "Power & Energy", 
    description: "Precision transport for the grid. Moving 80m wind turbine blades, high-voltage transformers, and heavy nuclear components.",
    metrics: { p: "510+", d: "22K+", e: "OFC" },
    link: "/industries/power-energy"
  },
];

// --- Premium Editorial Card Component (Restored to Original Styling) ---
const InteractiveCard = ({ item, index, cardOpacity, cardY, cardScale, isActive, s2FrameIndex, s2Cache }: any) => {
  const cardCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = cardCanvasRef.current;
    if (!canvas || !s2Cache) return;
    const img = s2Cache.get(`section2_${s2FrameIndex}`);
    if (!img || !img.complete) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;
    const canvasRatio = cw / ch;
    const imgRatio = iw / ih;
    let sx = 0, sy = 0, sw = iw, sh = ih;
    if (canvasRatio > imgRatio) {
      sh = iw / canvasRatio;
      sy = (ih - sh) / 2;
    } else {
      sw = ih * canvasRatio;
      sx = (iw - sw) / 2;
    }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, [s2FrameIndex, s2Cache]);

  return (
    <Link 
      href={item.link || "#"}
      className="flex-shrink-0 group block"
      style={{
        width: "440px",
        opacity: cardOpacity,
        transform: `translateY(${cardY}px) scale(${cardScale})`,
        pointerEvents: cardOpacity < 0.15 ? "none" : "auto", // prevent clicking on faded-out cards
      }}
    >
      <div 
        className={`relative w-full h-[450px] rounded-[24px] flex flex-col p-[2rem] overflow-hidden transition-all duration-500 ${isActive ? 'border-white/20' : 'border-white/5'}`}
        style={{
          background: "linear-gradient(135deg, rgba(24, 26, 32, 0.72) 0%, rgba(14, 16, 20, 0.88) 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderWidth: "1px",
          borderStyle: "solid",
          boxShadow: isActive
            ? "inset 0 1px 0 0 rgba(255,255,255,0.18), inset 0 -1px 0 0 rgba(0,0,0,0.4), 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.02)"
            : "inset 0 1px 0 0 rgba(255,255,255,0.08), inset 0 -1px 0 0 rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,0,0.6)",
        }}
      >
        {/* Glass reflection sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.01] to-white/[0.04] pointer-events-none rounded-[24px]" />

        {/* Frame sequence canvas (Redesigned visual hero with 5% outer margin) */}
        <div className="w-[calc(100%+4rem)] -mt-[2rem] -mx-[2rem] p-[20px] bg-transparent flex-shrink-0 mb-[4px]">
          <div className="w-full h-[250px] rounded-[16px] overflow-hidden relative border border-white/5">
            {item.title === "Infrastructure" ? (
              <LoopingVideo
                key="infrastructure-video"
                src="/images/THE_MUMBAI_LINK_Optimized.mp4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="w-full h-full object-cover"
              />
            ) : item.title === "Industrial Plants" ? (
              <LoopingVideo
                key="industrial-video"
                src="/images/industrial_final.mp4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="w-full h-full object-cover"
              />
            ) : item.title === "Metal & Mining" ? (
              <LoopingVideo
                key="mining-video"
                src="/images/Mining_mining_industry.mp4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="w-full h-full object-cover"
              />
            ) : item.title === "Oil & Gas" ? (
              <LoopingVideo
                key="oil-video"
                src="/images/oil1_norm.mp4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="w-full h-full object-cover"
              />
            ) : item.title === "Power & Energy" ? (
              <LoopingVideo
                key="power-video"
                src="/images/oil2.mp4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="w-full h-full object-cover"
              />
            ) : (
              <canvas
                ref={cardCanvasRef}
                width={400} // card width (440px) - 2 * 20px padding = 400px
                height={250}
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 mt-1 justify-between">
          <div>
            <h3 className="text-white font-extrabold text-[22px] leading-none uppercase tracking-wider line-clamp-1 mb-3">
              {item.title}
            </h3>
            <p className="text-zinc-400 text-[14.5px] leading-[1.65] font-sans font-light line-clamp-3">
              {item.description}
            </p>
          </div>
          {/* Understated Premium CTA */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-[11px] text-white/50 tracking-widest font-mono uppercase font-semibold group-hover:text-white transition-colors duration-300">
              Explore Sector
            </span>
            <span className="text-white/40 transform group-hover:translate-x-1.5 transition-transform duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>



      </div>
    </Link>
  );
};

interface HomeClientProps {
  sections: SectionConfig[];
}

export default function HomeClient({ sections }: HomeClientProps) {
  const { setHeaderOpacity } = useHeaderFooter();
  const canvas1Ref = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [textOpacity, setTextOpacity] = useState(0);
  const [autoScrollDone, setAutoScrollDone] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Legacy Card State
  const [cardOpacity, setCardOpacity] = useState(0);
  const [cardTranslateY, setCardTranslateY] = useState(100); // percentage of vh
  
  // Portfolio State
  const [portfolioOpacity, setPortfolioOpacity] = useState(0);
  const [portfolioTranslateY, setPortfolioTranslateY] = useState(0); // percentage of vh
  const [portfolioTitleOpacity, setPortfolioTitleOpacity] = useState(0);
  const [portfolioCardsX, setPortfolioCardsX] = useState(1000); // pixels
  const [section2TranslateY, setSection2TranslateY] = useState(100); // 100vh down to 0
  const [section2TranslateX, setSection2TranslateX] = useState(0); // 0vw to 100vw
  const [section2Opacity, setSection2Opacity] = useState(0);
  const [section1TranslateX, setSection1TranslateX] = useState(0); // 0vw to -100vw
  const [s2HoldProgress, setS2HoldProgress] = useState(0); // 0 to 1
  const [s2CarouselY, setS2CarouselY] = useState(0); // pixels (vertical translation)
  const [s1Progress, setS1Progress] = useState(0); // 0 to 1
  const [isMobileView, setIsMobileView] = useState(false);
  const [industriesTitleOpacity, setIndustriesTitleOpacity] = useState(0);

  // Cache and state management
  const cacheRef = useRef<Map<string, HTMLImageElement>>(new Map());
  const loadingSetRef = useRef<Set<string>>(new Set());
  const failedRetriesRef = useRef<Map<string, number>>(new Map());
  


  const currentIndexRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const highResTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoScrollRafRef = useRef<number | null>(null);
  
  // Velocity Tracking
  const lastScrollTimeRef = useRef<number>(Date.now());
  const scrollWindowStartRef = useRef<number>(Date.now());
  const scrollWindowIndexRef = useRef<number>(0);
  const lastCalculatedVelocityRef = useRef<number>(0);
  const isMobileRef = useRef<boolean>(false);
  
  // Custom Smooth Scrolling
  const targetScrollIndexRef = useRef<number>(0);
  const currentRenderIndexRef = useRef<number>(0);

  // AbortControllers for High-Res network cancellation
  const highResAbortControllersRef = useRef<Map<string, AbortController>>(new Map());

  const activeSections = useMemo(() => sections.filter((s) => s.isActive), [sections]);
  const s1 = activeSections.find(s => s.id === "section1") || sections[0];
  const s2 = activeSections.find(s => s.id === "section2");
  
  const globalTotalFrames = s1.totalFrames; // Scroll timeline driven by Section 1
  const maxCacheSize = s1.cacheSize + (s2 ? s2.cacheSize : 0);
  const totalScrollHeightVh = s1.scrollHeight; // Page height = Section 1 scroll height
  const S2_START_OFFSET = 260; // Industries We Serve slides in at frame 260 (original timing)

  const handleRetry = useCallback(() => {
    setError(null);
    setLoading(true);
    setProgress(0);
    cacheRef.current.clear();
    loadingSetRef.current.clear();
    failedRetriesRef.current.clear();
    // Force re-run of the effect by triggering a state change
    // The effect depends on `sections`, so we re-mount by clearing and restarting
    window.location.reload();
  }, []);

  useEffect(() => {
    isMobileRef.current = window.innerWidth <= 768;
    
    // Prevent the browser from restoring the previous scroll position on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Render method
    const drawImageToCanvas = (img: HTMLImageElement, canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.width;
      const ih = img.height;
      const canvasRatio = cw / ch;
      const imgRatio = iw / ih;
      let sx = 0, sy = 0, sw = iw, sh = ih;
      if (canvasRatio > imgRatio) {
        sh = iw / canvasRatio;
        sy = (ih - sh) / 2;
      } else {
        sw = ih * canvasRatio;
        sx = (iw - sw) / 2;
      }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    };

    const drawFrame = (index: number) => {
      // Draw Section 1 only
      if (canvas1Ref.current) {
        const img1 = cacheRef.current.get(`section1_${index}`);
        if (img1 && img1.complete) drawImageToCanvas(img1, canvas1Ref.current);
      }
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      if (canvas1Ref.current) {
        canvas1Ref.current.width = window.innerWidth * dpr;
        canvas1Ref.current.height = window.innerHeight * dpr;
      }
      drawFrame(currentIndexRef.current);
    };

    const cleanCache = (currentIndex: number) => {
      const cleanSpecificCache = (cache: Map<string, HTMLImageElement>) => {
        if (cache.size > maxCacheSize) {
          const keys = Array.from(cache.keys());
          const getGlobalIndex = (key: string) => {
            const parts = key.split("_");
            const localIdx = parseInt(parts[1], 10);
            return parts[0] === "section2" ? localIdx + S2_START_OFFSET : localIdx;
          };
          keys.sort((a, b) => {
            const globalA = getGlobalIndex(a);
            const globalB = getGlobalIndex(b);
            return Math.abs(currentIndex - globalB) - Math.abs(currentIndex - globalA);
          });
          const toRemove = keys.slice(0, cache.size - maxCacheSize);
          for (const key of toRemove) {
            cache.delete(key);
          }
        }
      };
      
      cleanSpecificCache(cacheRef.current);
    };

    // Load a frame using a simple Image element. Fast, no AbortController overhead.
    const lazyLoadHighResFrame = (section: SectionConfig, localIndex: number, onDone?: () => void) => {
      const key = `${section.id}_${localIndex}`;
      const cache = cacheRef.current;
      const loadingSet = loadingSetRef.current;

      if (cache.has(key) || loadingSet.has(key)) {
        if (onDone) onDone();
        return;
      }

      loadingSet.add(key);
      const img = new Image();
      img.decoding = "async";
      
      img.onload = () => {
        cache.set(key, img);
        loadingSet.delete(key);
        cleanCache(currentIndexRef.current);
        // Immediately repaint if this is the frame the user is currently on
        if (localIndex === currentIndexRef.current || 
            (section.id === "section2" && localIndex === currentIndexRef.current - S2_START_OFFSET)) {
          drawFrame(currentIndexRef.current);
        }
        if (onDone) onDone();
      };
      
      img.onerror = () => {
        loadingSet.delete(key);
        if (onDone) onDone();
      };

      img.src = getFramePath(section, localIndex);
    };

    const lazyLoadFrame = (section: SectionConfig, localIndex: number, onDone?: () => void) => {
      // Trigger the high-res fetch
      lazyLoadHighResFrame(section, localIndex, onDone);
    };

    // Preload a window of frames centered ahead of currentIndex.
    // Always loads from targetScrollIndex so frames are ready before the renderer reaches them.
    const lazyLoadWindow = (targetIndex: number) => {
      // Clamp target to ensure we don't go out of range
      const clampedTarget = Math.max(0, Math.min(s1.totalFrames - 1, targetIndex));

      // Section 1: load ahead (bias toward direction of scroll)
      const s1Start = Math.max(0, clampedTarget - s1.preloadBehind);
      const s1End = Math.min(s1.totalFrames - 1, clampedTarget + s1.preloadAhead);
      // Current frame is highest priority
      lazyLoadHighResFrame(s1, clampedTarget);
      // Then spiral outward
      for (let off = 1; off <= Math.max(s1.preloadAhead, s1.preloadBehind); off++) {
        if (clampedTarget + off <= s1End) lazyLoadHighResFrame(s1, clampedTarget + off);
        if (clampedTarget - off >= s1Start) lazyLoadHighResFrame(s1, clampedTarget - off);
      }

      // Section 2: preload when near
      if (s2 && targetIndex >= S2_START_OFFSET - s2.preloadBehind) {
        const localTarget = Math.max(0, Math.min(s2.totalFrames - 1, targetIndex - S2_START_OFFSET));
        const s2Start = Math.max(0, localTarget - s2.preloadBehind);
        const s2End = Math.min(s2.totalFrames - 1, localTarget + s2.preloadAhead);
        lazyLoadHighResFrame(s2, localTarget);
        for (let off = 1; off <= Math.max(s2.preloadAhead, s2.preloadBehind); off++) {
          if (localTarget + off <= s2End) lazyLoadHighResFrame(s2, localTarget + off);
          if (localTarget - off >= s2Start) lazyLoadHighResFrame(s2, localTarget - off);
        }
      }
    };

    // Scroll Handler Refactoring
    const calculateScrollProgress = (): number => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      return maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;
    };

    const getTargetFrame = (scrollProgress: number, totalFrames: number): number => {
      return Math.round(scrollProgress * (totalFrames - 1));
    };

    const updateCurrentFrame = (targetIndex: number): boolean => {
      if (targetIndex !== currentIndexRef.current) {
        currentIndexRef.current = targetIndex;
        return true;
      }
      return false;
    };

    const updatePreloadWindow = (index: number) => {
      lazyLoadWindow(index);
    };

    const updateUI = (targetIndex: number) => {

        // === Legacy card: continuously rises from bottom and exits upward ===
        let cardY = 100;
        let cOpacity = 0;
        
        if (targetIndex < CARD_ENTER_START) {
          cardY = 100;
          cOpacity = 0;
        } else if (targetIndex <= CARD_EXIT_END) {
          const p = (targetIndex - CARD_ENTER_START) / (CARD_EXIT_END - CARD_ENTER_START);
          cardY = 100 - (p * 200); // 100vh down to -100vh
          
          if (p < 0.2) {
            cOpacity = p / 0.2;
          } else if (cardY <= 0) {
            const fadeOutProgress = cardY / -30;
            cOpacity = Math.max(0, 1 - fadeOutProgress);
          } else {
            cOpacity = 1;
          }
        } else {
          cardY = -100;
          cOpacity = 0;
        }
        
        setCardOpacity(cOpacity);
        setCardTranslateY(cardY);

        // === Portfolio Horizontal Glide ===
        let portOp = 0;
        let portY = 0;
        let titleOp = 0;
        
        const innerWidth = typeof window !== "undefined" ? window.innerWidth : 1000;
        const startTrackX = (innerWidth / 2) - 190; // First card exactly in center
        const endTrackX = -1700; // Last card completely offscreen left
        const totalSlideDist = startTrackX - endTrackX;
        const lastCardCenterTrackX = (innerWidth / 2) - 1426; // Track pos when 4th card is centered
        const slideProgressAtCenter = 1236 / totalSlideDist;
        const RENTAL_CENTER_FRAME = Math.round(
          PORTFOLIO_SLIDE_START + slideProgressAtCenter * (PORTFOLIO_SLIDE_END - PORTFOLIO_SLIDE_START)
        );

        let cardsX = innerWidth; // Start fully offscreen right
        if (targetIndex < PORTFOLIO_ENTER_START) {
          portOp = 0;
          portY = 0;
          titleOp = 0;
          cardsX = innerWidth;
        } else if (targetIndex <= PORTFOLIO_ENTER_END) {
          // Entrance phase
          const p = (targetIndex - PORTFOLIO_ENTER_START) / (PORTFOLIO_ENTER_END - PORTFOLIO_ENTER_START);
          const eased = 1 - Math.pow(1 - p, 3);
          portOp = 1;
          portY = 0;
          titleOp = p; // Title fades in
          cardsX = innerWidth - (innerWidth - startTrackX) * eased; // Slides to center
        } else if (targetIndex <= PORTFOLIO_SLIDE_END) {
          // Slide phase (cards keep moving naturally all the way to PORTFOLIO_SLIDE_END)
          const slideProgress = (targetIndex - PORTFOLIO_SLIDE_START) / (PORTFOLIO_SLIDE_END - PORTFOLIO_SLIDE_START);
          cardsX = startTrackX - (totalSlideDist * slideProgress);
          portY = 0;
          
          if (targetIndex <= RENTAL_CENTER_FRAME) {
            portOp = 1;
            titleOp = 1;
          } else {
            // Fade-out starts after Rental card is centered, while continuing to move
            const fadeP = (targetIndex - RENTAL_CENTER_FRAME) / (PORTFOLIO_SLIDE_END - RENTAL_CENTER_FRAME);
            portOp = Math.max(0, 1 - fadeP);
            titleOp = Math.max(0, 1 - fadeP);
          }
        } else {
          // Fully gone after slide end
          cardsX = endTrackX;
          portOp = 0;
          portY = 0;
          titleOp = 0;
        }

        // === Section 2 Fade-In and Exit Animation ===
        let s2Opacity = 0;
        let indTitleOp = 0;

        const S2_EXIT_FRAMES = 150;
        const S2_END_INDEX = s2 ? S2_START_OFFSET + s2.totalFrames - 1 : 1027;
        const S2_EXIT_START = S2_END_INDEX - S2_EXIT_FRAMES;
        const S2_CARDS_PLAY_START = PORTFOLIO_SLIDE_END + 0.25 * (S2_EXIT_START - PORTFOLIO_SLIDE_END);

        // 50% opacity trigger frame for S2 card stack entrance (midpoint of horizontal fade-out)
        const CARDS_ENTRANCE_TRIGGER_FRAME = RENTAL_CENTER_FRAME + 0.5 * (PORTFOLIO_SLIDE_END - RENTAL_CENTER_FRAME);

        // Entry timing
        if (targetIndex >= RENTAL_CENTER_FRAME) {
          // Title/Overlay fade-in starts immediately
          const fadeP = Math.min(1, Math.max(0, (targetIndex - RENTAL_CENTER_FRAME) / (PORTFOLIO_SLIDE_END - RENTAL_CENTER_FRAME)));
          const easedTitle = fadeP * fadeP * (3 - 2 * fadeP); // smoothstep
          indTitleOp = easedTitle;

          // Card stack entrance starts when overlay opacity (indTitleOp) reaches 50%
          if (indTitleOp >= 0.5) {
            if (targetIndex <= S2_CARDS_PLAY_START) {
              const entryProgress = (targetIndex - CARDS_ENTRANCE_TRIGGER_FRAME) / (S2_CARDS_PLAY_START - CARDS_ENTRANCE_TRIGGER_FRAME);
              s2Opacity = entryProgress;
            } else {
              s2Opacity = 1;
            }
          } else {
            s2Opacity = 0;
          }
        }

        // Exit timing
        if (targetIndex >= S2_EXIT_START) {
          const exitP = Math.min(1, (targetIndex - S2_EXIT_START) / S2_EXIT_FRAMES);
          const easedExit = exitP * exitP * (3 - 2 * exitP); // smoothstep 0→1
          s2Opacity = 1 - easedExit; // fade out cards
          indTitleOp = 1 - easedExit; // fade out title in sync
        }

        setSection2TranslateY(0);
        setSection2TranslateX(0); // No horizontal movement
        setSection2Opacity(s2Opacity);
        setSection1TranslateX(0); // Section 1 permanently centered
        
        // === Calculate S2 Hold Progress for Industries UI ===
        let holdProgress = 0;
        let carouselY = 0;
        let isMobile = false;
        if (indTitleOp >= 0.5 || targetIndex >= S2_EXIT_START) {
           isMobile = innerWidth < 768;
           
           if (targetIndex <= S2_CARDS_PLAY_START) {
             // Card 0 slides up from below viewport (holdProgress goes -0.25 to 0)
             const p = (targetIndex - CARDS_ENTRANCE_TRIGGER_FRAME) / (S2_CARDS_PLAY_START - CARDS_ENTRANCE_TRIGGER_FRAME);
             holdProgress = -0.25 + p * 0.25;
           } else if (targetIndex <= S2_EXIT_START) {
             // Normal carousel scroll hold
             holdProgress = (targetIndex - S2_CARDS_PLAY_START) / (S2_EXIT_START - S2_CARDS_PLAY_START);
           } else {
             // Continue scrolling upward during the exit fade-out
             const exitP = Math.min(1, (targetIndex - S2_EXIT_START) / S2_EXIT_FRAMES);
             holdProgress = 1.0 + exitP * 0.25;
           }

           // Vertical Cover-Flow: spacing of 450px card height + 32px gap = 482px step
           const CARD_STEP = 482;
           carouselY = -holdProgress * (INDUSTRY_DATA.length - 1) * CARD_STEP;
        } else {
           // Before Section 2 cards appear, lock Card 0 below viewport
           holdProgress = -0.25;
           const CARD_STEP = 482;
           carouselY = -holdProgress * (INDUSTRY_DATA.length - 1) * CARD_STEP;
        }
        setS2HoldProgress(holdProgress);
        setS2CarouselY(carouselY);
        setIsMobileView(isMobile);
        
        // Calculate S1 Progress
        let currentS1Progress = 0;
        if (targetIndex >= PORTFOLIO_SLIDE_START) {
            currentS1Progress = Math.min(1, (targetIndex - PORTFOLIO_SLIDE_START) / (PORTFOLIO_SLIDE_END - PORTFOLIO_SLIDE_START));
        }
        setS1Progress(currentS1Progress);

        // Apply final Portfolio states
        setPortfolioOpacity(portOp);
        setPortfolioTranslateY(portY);
        setPortfolioTitleOpacity(titleOp);
        setPortfolioCardsX(cardsX);
        setIndustriesTitleOpacity(indTitleOp);

        // === Calculate title opacity based on card position ===
        if (targetIndex <= TEXT_FADE_IN_END) {
          // Phase 1: Fade IN during auto-scroll
          const fadeInProgress = TEXT_FADE_IN_END > TEXT_FADE_IN_START
            ? (targetIndex - TEXT_FADE_IN_START) / (TEXT_FADE_IN_END - TEXT_FADE_IN_START)
            : 1;
          setTextOpacity(Math.min(Math.max(fadeInProgress, 0), 1));
        } else {
          // Phase 2: Fade OUT based on card proximity
          // Card top edge is roughly cardY - 20. Title bottom edge is ~10.
          // Fade out completely when card hits the bottom edge of the title (cardY = 30).
          if (cardY > 50) {
            setTextOpacity(1);
          } else if (cardY > 30) {
            const fadeOutProgress = (50 - cardY) / 20; // 0 to 1 as cardY goes 50 -> 30
            setTextOpacity(1 - fadeOutProgress);
          } else {
            setTextOpacity(0);
          }
        }

        // === Calculate header opacity based on scroll progress ===
        const HEADER_FADE_START = 10;
        const HEADER_FADE_END = 100;
        let hOpacity = 1;
        if (targetIndex > HEADER_FADE_START) {
          if (targetIndex >= HEADER_FADE_END) {
            hOpacity = 0;
          } else {
            const p = (targetIndex - HEADER_FADE_START) / (HEADER_FADE_END - HEADER_FADE_START);
            hOpacity = 1 - (p * p * (3 - 2 * p)); // smoothstep fade out
          }
        }
        setHeaderOpacity(hOpacity);
    };

    const renderLoop = () => {
      const target = targetScrollIndexRef.current;
      const current = currentIndexRef.current;
      
      if (target !== current) {
        currentIndexRef.current = target;
        currentRenderIndexRef.current = target;
        drawFrame(target);
        updateUI(target);
      }
      
      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    const cancelAutoScroll = () => {
      if (autoScrollRafRef.current !== null) {
        cancelAnimationFrame(autoScrollRafRef.current);
        autoScrollRafRef.current = null;
        setAutoScrollDone(true);
        const sp = calculateScrollProgress();
        setScrollProgress(sp);
        const index = getTargetFrame(sp, globalTotalFrames);
        targetScrollIndexRef.current = index;
        currentRenderIndexRef.current = index;
        currentIndexRef.current = index;
        drawFrame(index);
        updateUI(index);
      }
    };

    const handleScroll = () => {
      const sp = calculateScrollProgress();
      setScrollProgress(sp);
      const newTarget = getTargetFrame(sp, globalTotalFrames);
      if (newTarget !== targetScrollIndexRef.current) {
        targetScrollIndexRef.current = newTarget;
        // Preload ahead of where the user IS GOING, not where the video currently is
        lazyLoadWindow(newTarget);
      }
    };

    // 5. Resize adapter
    const handleResize = () => {
      isMobileRef.current = window.innerWidth <= 768;
      resizeCanvas();
    };

    // 1. Initial size setup
    resizeCanvas();

    // 2. Map current scroll position to initial frame index
    const scrollProgressVal = calculateScrollProgress();
    setScrollProgress(scrollProgressVal);
    const initialIndex = getTargetFrame(scrollProgressVal, globalTotalFrames);
    currentIndexRef.current = initialIndex;
    targetScrollIndexRef.current = initialIndex;
    currentRenderIndexRef.current = initialIndex;

    // 3. Preload initial chunk centered around initialIndex
    const firstSection = activeSections[0] || sections[0];
    const initialPreload = firstSection.initialPreload;
    
    let startIdx = Math.max(0, initialIndex - Math.floor(initialPreload / 2));
    const endIdx = Math.min(globalTotalFrames - 1, startIdx + initialPreload - 1);
    if (endIdx === globalTotalFrames - 1) {
      startIdx = Math.max(0, endIdx - initialPreload + 1);
    }

    let loadedCount = 0;
    const totalToLoad = endIdx - startIdx + 1;
    let hasFinished = false;

    const finishLoading = () => {
      if (hasFinished) return;
      hasFinished = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      
      // Smooth fade-out for the loading screen
      const overlay = document.getElementById("loading-overlay");
      if (overlay) {
        overlay.style.opacity = "0";
      }

      setTimeout(() => {
        setLoading(false);
        drawFrame(currentIndexRef.current);
        lazyLoadWindow(currentIndexRef.current);

        const startScrollY = window.scrollY;

        // If the browser restored a scroll position on refresh, don't auto-scroll
        if (startScrollY < 10) {
          // Auto-scroll to target frame (frame_000320)
          const firstSection = activeSections[0] || sections[0];
          const targetIndex = AUTO_SCROLL_TARGET_FRAME - firstSection.firstFrame;
          const targetProgress = targetIndex / (globalTotalFrames - 1);
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const targetScrollY = targetProgress * maxScroll;
          const startTime = performance.now();

          // Ease-out cubic for smooth deceleration
          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

          const animateScroll = (now: number) => {
            const elapsed = now - startTime;
            const rawProgress = Math.min(elapsed / AUTO_SCROLL_DURATION_MS, 1);
            const easedProgress = easeOutCubic(rawProgress);
            const scrollY = startScrollY + (targetScrollY - startScrollY) * easedProgress;

            window.scrollTo(0, scrollY);

            if (rawProgress < 1) {
              autoScrollRafRef.current = requestAnimationFrame(animateScroll);
            } else {
              autoScrollRafRef.current = null;
              // Sync the render index perfectly to where the autoscroll landed,
              // so there is zero gap when the user starts manually scrolling.
              const finalProgress = calculateScrollProgress();
              const finalIndex = getTargetFrame(finalProgress, globalTotalFrames);
              targetScrollIndexRef.current = finalIndex;
              currentRenderIndexRef.current = finalIndex;
              currentIndexRef.current = finalIndex;
              setAutoScrollDone(true);
            }
          };

          autoScrollRafRef.current = requestAnimationFrame(animateScroll);
        } else {
          // Skip auto-scroll, just snap the UI elements to the restored scroll position
          setAutoScrollDone(true);
          handleScroll();
        }
      }, 600); // Wait for fade-out transition
    };

    // Loading timeout: if initial frames don't load in time, proceed with
    // whatever we have or show an error
    timeoutRef.current = setTimeout(() => {
      if (!hasFinished) {
        const cached = cacheRef.current.size;
        if (cached > 0) {
          // We have some frames — proceed with a degraded experience
          console.warn(
            `Loading timeout reached after ${LOADING_TIMEOUT_MS / 1000}s. ` +
              `Loaded ${cached}/${totalToLoad} frames. Proceeding with available frames.`
          );
          finishLoading();
        } else {
          // No frames loaded at all — show error
          setError(
            "Failed to load frames. Please check your connection and try again."
          );
          setLoading(false);
        }
      }
    }, LOADING_TIMEOUT_MS);

    for (let i = startIdx; i <= endIdx; i++) {
      lazyLoadFrame(s1, i, () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / totalToLoad) * 100));
        if (loadedCount === totalToLoad) {
          finishLoading();
        }
      });
    }

    const handleWheel = (e: WheelEvent) => {
      // Map horizontal trackpad scrolls (like swiping left/right in the carousel) to vertical scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 0) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaX, behavior: "auto" });
      }
    };

    // Attach scroll/resize listeners and start the render loop immediately.
    // Don't defer with setTimeout — that causes a race condition on first scroll.
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    updateUI(initialIndex);
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cancel auto-scroll on manual inputs
    window.addEventListener("wheel", cancelAutoScroll, { passive: true });
    window.addEventListener("touchstart", cancelAutoScroll, { passive: true });
    window.addEventListener("mousedown", cancelAutoScroll, { passive: true });
    window.addEventListener("keydown", cancelAutoScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("wheel", cancelAutoScroll);
      window.removeEventListener("touchstart", cancelAutoScroll);
      window.removeEventListener("mousedown", cancelAutoScroll);
      window.removeEventListener("keydown", cancelAutoScroll);
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (autoScrollRafRef.current !== null) {
        cancelAnimationFrame(autoScrollRafRef.current);
      }
      setHeaderOpacity(1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  // Error state UI
  if (error) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          backgroundColor: "#000",
          fontFamily: "sans-serif",
          zIndex: 20,
        }}
      >
        <div
          style={{
            fontSize: "2rem",
            marginBottom: "16px",
            opacity: 0.6,
          }}
        >
          ⚠
        </div>
        <div style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
          Something went wrong
        </div>
        <div
          style={{
            fontSize: "0.85rem",
            color: "#888",
            maxWidth: "400px",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          {error}
        </div>
        <button
          onClick={handleRetry}
          style={{
            padding: "10px 28px",
            fontSize: "0.95rem",
            color: "#000",
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: 500,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: `${totalScrollHeightVh}vh`, position: "relative", backgroundColor: "#000" }}>

      {loading && (
        <div
          id="loading-overlay"
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#050505",
            zIndex: 50,
            opacity: 1,
            transition: "opacity 0.6s ease-out",
            pointerEvents: "none",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono), monospace",
            }}>
              MEGA MOVE INDIA
            </div>
            <div style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-mono), monospace",
              marginTop: "8px",
            }}>
              Project &amp; Heavy Cargo Logistics
            </div>
          </div>
          <div style={{ width: "240px", height: "1px", backgroundColor: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
            <div style={{ width: `${progress}%`, height: "100%", backgroundColor: "#FF6A52", transition: "width 0.1s ease-out" }} />
          </div>
          <div style={{ 
            marginTop: "24px", 
            fontSize: "10px", 
            color: "#71717a", 
            fontFamily: "var(--font-geist-mono), monospace", 
            letterSpacing: "0.2em",
            textTransform: "uppercase" 
          }}>
            Loading Cinematic Engine • {progress}%
          </div>
        </div>
      )}

      {/* Text Overlay — visible during intro frames, fades out */}
      {!loading && textOpacity > 0 && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
            pointerEvents: "none",
            opacity: textOpacity,
            transition: "opacity 0.15s ease-out",
          }}
        >
          <div
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
              fontWeight: 300,
              color: "rgba(255, 255, 255, 0.85)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "12px",
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            Welcome to
          </div>
          <div
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontFamily: "var(--font-geist-sans), sans-serif",
              textShadow: "0 2px 40px rgba(0, 0, 0, 0.6), 0 0 80px rgba(0, 0, 0, 0.3)",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            MEGA MOVE INDIA
          </div>
        </div>
      )}

      {/* Legacy & Mission Card — rises from bottom, centers, exits upward */}
      {!loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
            pointerEvents: "none",
            opacity: cardOpacity,
            transform: `translateY(${cardTranslateY}vh)`,
            willChange: "transform, opacity",
          }}
        >
          <div
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                router.push("/history");
              }, 800);
            }}
            style={{
              maxWidth: "820px",
              width: "90%",
              background: "rgba(24, 24, 27, 0.60)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(63, 63, 70, 0.5)",
              borderRadius: "16px",
              padding: "clamp(32px, 5vw, 48px)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.03) inset",
              pointerEvents: "auto",
              cursor: "pointer",
              transition: "border-color 0.5s ease, background 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(82, 82, 91, 0.6)";
              e.currentTarget.style.background = "rgba(24, 24, 27, 0.70)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(63, 63, 70, 0.5)";
              e.currentTarget.style.background = "rgba(24, 24, 27, 0.60)";
            }}
          >
            <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
              {/* Section Label */}
              <div
                style={{
                  color: "rgba(161, 161, 170, 0.7)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.25em",
                  marginBottom: "24px",
                }}
              >
                OUR LEGACY &amp; MISSION
              </div>

              {/* Paragraph 1 */}
              <p
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
                  fontWeight: 300,
                  color: "rgba(228, 228, 231, 0.9)",
                  lineHeight: 1.75,
                  marginBottom: "16px",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                With a legacy in heavy haulage and over-dimensional cargo transportation
                dating back to{" "}
                <span style={{ fontWeight: 600, color: "#fff" }}>2005</span>,
                Mega Move India was incorporated in{" "}
                <span style={{ fontWeight: 600, color: "#fff" }}>2025</span> to
                expand its expertise into global project logistics, freight forwarding,
                heavy lift transportation and equipment rentals.
              </p>

              {/* Paragraph 2 */}
              <p
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
                  fontWeight: 300,
                  color: "rgba(161, 161, 170, 0.85)",
                  lineHeight: 1.75,
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                Driven by specialized equipment, experienced personnel and a commitment
                to operational excellence, we provide end-to-end logistics solutions
                for the world&rsquo;s most challenging cargo movements.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Horizontal Glide Section */}
      {!loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            zIndex: 6, // Above legacy card
            pointerEvents: "none", // Let clicks pass through except on cards
            opacity: portfolioOpacity,
            transform: `translateY(${portfolioTranslateY}vh)`,
            willChange: "transform, opacity",
          }}
        >
          {/* Fixed Title Container (Top Left corner block) */}
          <div
            style={{
              position: "absolute",
              left: "4rem", // Standard page margin
              top: "6vh", // Pushed closer to the top corner to avoid overlap
              width: "35%",
              maxWidth: "500px",
              minWidth: "320px",
              pointerEvents: "auto",
              opacity: portfolioTitleOpacity,
              willChange: "opacity",
            }}
          >
            <h3
              style={{
                fontSize: "3.5rem",
                fontWeight: 300,
                color: "#f4f4f5",
                letterSpacing: "0.02em",
                marginBottom: "1.5rem",
                fontFamily: "var(--font-geist-sans), sans-serif",
                lineHeight: 1.1,
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.15)",
              }}
            >
              CORE PORTFOLIOS
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "#a1a1aa",
                lineHeight: 1.625,
                fontWeight: 300,
                fontFamily: "var(--font-geist-sans), sans-serif",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.15)",
              }}
            >
              Integrated logistics solutions across air, ocean, and specialized
              land transportation. Scroll to explore our core capabilities.
            </p>
          </div>

          {/* Service Cards Sliding Container (Lower half of screen) */}
          <div
            style={{
              position: "absolute",
              bottom: "15vh", // Pushed lower to ensure clear separation from title
              display: "flex",
              gap: "2rem",
              transform: `translateX(${portfolioCardsX}px)`,
              willChange: "transform",
            }}
          >
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.link}
                style={{
                  width: "380px",
                  height: "420px",
                  flexShrink: 0,
                  background: "rgba(24, 24, 27, 0.60)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(63, 63, 70, 0.8)",
                  borderRadius: "16px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  pointerEvents: "auto",
                  transition: "transform 0.3s ease",
                  textDecoration: "none",
                }}
                className="group" // to use hover pseudo-classes via tailwind classes in children if needed
              >
                <div>
                  {/* Image Mask (Redesigned visual hero with 5% outer margin) */}
                  <div
                    style={{
                      width: "calc(100% + 4rem)",
                      marginLeft: "-2rem",
                      marginRight: "-2rem",
                      marginTop: "-2rem",
                      padding: "20px",
                      backgroundColor: "transparent",
                      display: "flex",
                      flexDirection: "column",
                      flexShrink: 0,
                      marginBottom: "4px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "230px",
                        width: "100%",
                        borderRadius: "12px",
                        overflow: "hidden",
                        backgroundColor: "#09090b",
                        border: "1px solid rgba(63, 63, 70, 0.5)",
                      }}
                    >
                      {service.title === 'AIR FREIGHT' || service.title === 'OCEAN FREIGHT' || service.title === 'LAND TRANSPORT' || service.title === 'RENTALS & WAREHOUSING' ? (
                        <LoopingVideo
                          key={
                            service.title === 'AIR FREIGHT'
                              ? 'air-freight-video'
                              : service.title === 'OCEAN FREIGHT'
                              ? 'ocean-freight-video'
                              : service.title === 'LAND TRANSPORT'
                              ? 'land-transport-video'
                              : 'rentals-warehousing-video'
                          }
                          src={
                            service.title === 'AIR FREIGHT'
                              ? '/images/AirFreight.mp4'
                              : service.title === 'OCEAN FREIGHT'
                              ? '/images/OceanFreightOptimizedV2.mp4'
                              : service.title === 'LAND TRANSPORT'
                              ? '/images/Land_transport.mp4'
                              : '/images/Rental_Warehouse_Final.mp4'
                          }
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                          className="group-hover:scale-105"
                        />
                      ) : (
                        <img
                          src={service.image}
                          alt={service.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                          className="group-hover:scale-105"
                          onError={(e) => {
                            // Fallback if image not found
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(9, 9, 11, 0.2)", pointerEvents: "none" }} />
                    </div>
                  </div>

                  <h4
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "#f4f4f5",
                      letterSpacing: "0.025em",
                      marginBottom: "0.75rem",
                      fontFamily: "var(--font-geist-sans), sans-serif",
                    }}
                  >
                    {service.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#a1a1aa",
                      lineHeight: 1.625,
                      fontWeight: 300,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      fontFamily: "var(--font-geist-sans), sans-serif",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-geist-mono), monospace",
                    letterSpacing: "0.1em",
                    color: "#e4e4e7",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(63, 63, 70, 0.4)",
                  }}
                  className="group-hover:text-white transition-colors"
                >
                  Explore Services <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>


        </div>
      )}

      {/* Section 1 Canvas */}
      <canvas
        ref={canvas1Ref}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "block",
          zIndex: 1,
          willChange: "transform",
        }}
      />

      {/* Section 2 replaced canvas with solid 50% black overlay */}
      {s2 && (
        <>
          {/* Solid black overlay — fades in on section entry, fades out on exit */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.50)",
              zIndex: 7,
              opacity: industriesTitleOpacity,
              willChange: "opacity",
              pointerEvents: "none",
            }}
          />
          {/* Industries We Serve UI over Section 2 */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 9,
              pointerEvents: "none",
            }}
          >
            {/* Right-side Fixed Editorial Panel */}
            <div
              style={{
                position: "absolute",
                right: "8vw",
                top: "50%",
                transform: "translateY(-50%)",
                width: "35vw",
                maxWidth: "500px",
                minWidth: "300px",
                pointerEvents: industriesTitleOpacity > 0.1 ? "auto" : "none",
                opacity: industriesTitleOpacity,
                willChange: "opacity",
                textAlign: "left",
                zIndex: 10,
              }}
              className="hidden md:block"
            >
              <div style={{
                fontSize: "2.25rem",
                fontWeight: 800,
                color: "#ffffff",
                fontFamily: "var(--font-geist-sans), sans-serif",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}>
                INDUSTRIES WE SERVE
              </div>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#a1a1aa",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  fontFamily: "var(--font-geist-sans), sans-serif",
                }}
              >
                Project Cargo &amp; Heavy Logistics Solutions Across Key Industries. Mega Move India provides specialized heavy haulage, oversized cargo transportation, project logistics, multimodal freight, and industrial supply chain solutions for infrastructure, oil &amp; gas, power, mining, manufacturing, and construction projects across India and globally.
              </p>
            </div>

            {/* Left-side Vertical Card Stack Container */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "calc(30vw - 220px)", // Perfectly centers 440px card horizontally within left 60% (30vw)
                width: "440px",
                height: "450px", // height of exactly 1 card
                transform: "translateY(-50%)",
                opacity: section2Opacity,
                pointerEvents: section2Opacity > 0.1 ? "auto" : "none",
                zIndex: 9,
              }}
            >
              {/* Vertical Card Track */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px", // gap restored
                  transform: `translateY(${s2CarouselY}px)`,
                  willChange: "transform",
                  // No transition style on transform to get instantaneous, fluid scroll matching Portfolio section
                }}
              >
                {INDUSTRY_DATA.map((item, index) => {
                  // Clamp progress to 1.0 during exit to prevent double-fading of the final card
                  const flowProgress = Math.min(1.0, s2HoldProgress);
                  const targetCenterP = index * 0.25;
                  const dist = Math.abs(flowProgress - targetCenterP) / 0.25;

                  // Center card: scale 1.03 (original active treatment scale), neighbors: scale down to 0.85
                  const cardScale = Math.max(0.85, 1.03 - dist * 0.18);

                  // Center card: full opacity, neighbors: fade out
                  const cardOpacity = Math.max(0, 1.0 - dist * 0.65);

                  // Vertical offset (none needed since they stack vertically inside flexbox)
                  const cardY = 0;

                  const activeIndex = Math.min(4, Math.max(0, Math.round(s2HoldProgress * 4)));
                  const isActive = index === activeIndex;

                  const s2TotalFrames = s2 ? s2.totalFrames : 718;
                  const segmentSize = Math.floor(s2TotalFrames / INDUSTRY_DATA.length);
                  const segmentStart = index * segmentSize;
                  const segmentEnd = index === INDUSTRY_DATA.length - 1
                    ? s2TotalFrames - 1
                    : segmentStart + segmentSize - 1;
                  const segmentProgress = Math.max(0, Math.min(1, s2HoldProgress));
                  const s2FrameIndex = Math.round(segmentStart + segmentProgress * (segmentEnd - segmentStart));

                  return (
                    <InteractiveCard
                      key={index}
                      item={item}
                      index={index}
                      cardOpacity={cardOpacity}
                      cardY={cardY}
                      cardScale={cardScale}
                      isActive={isActive}
                      s2FrameIndex={s2FrameIndex}
                      s2Cache={cacheRef.current}
                    />
                  );
                })}
              </div>
            </div>

            {/* Progress bar spacer */}
            

          </div>
        </>
      )}

      {/* 10% Dark Overlay over frames (Now zIndex 4 so it dims both) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />

      {/* Global Scroll Progress Bar */}
      <div style={{
        position: "fixed",
        bottom: "5vh",
        left: "calc(50vw - 220px)", // Centered horizontally
        width: "440px", // matches restored card width
        height: "2px",
        backgroundColor: "rgba(255,255,255,0.08)",
        borderRadius: "4px",
        overflow: "hidden",
        zIndex: 160, // Sits on top of the footer (zIndex 150)
      }}>
        <div style={{
          height: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.5)",
          width: `${scrollProgress * 100}%`,
          transition: "width 75ms linear",
        }} />
      </div>



      {/* Cinematic Transition Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#000000",
          zIndex: 500,
          pointerEvents: isTransitioning ? "auto" : "none",
          opacity: isTransitioning ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
        }}
      />
      
    </div>
  );
}
