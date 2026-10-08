"use client";

import { useEffect, useRef } from "react";
import { useHeaderFooter } from "./HeaderFooterContext";

// Pinned hero background plus the "Welcome to Mega Move India" title.
// The title fades in on load (CSS) and fades out over the first ~40% of a
// screen of scrolling; the header fades with it while the menu button stays.
// Content after the hero scrolls over the pinned image.
export default function HomeHero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const { setHeaderOpacity } = useHeaderFooter();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = titleRef.current;
      if (!el) return;
      const opacity = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.4));
      el.style.opacity = String(opacity);
      el.style.visibility = opacity === 0 ? "hidden" : "visible";
      setHeaderOpacity(opacity);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      setHeaderOpacity(1);
    };
  }, [setHeaderOpacity]);

  return (
    <>
      {/* Background stays put while the legacy card scrolls over it */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <img src="/images/home-hero.webp" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div
        ref={titleRef}
        className="pointer-events-none fixed inset-0 z-[5] flex flex-col items-center justify-center px-4 pt-[90px] text-center"
      >
        <div className="hero-fade-in">
          <div className="mb-3 text-[clamp(0.9rem,2vw,1.3rem)] font-light uppercase tracking-[0.3em] text-white/85">
            Welcome to
          </div>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[1.1] tracking-[0.05em] text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.6)]">
            MEGA MOVE INDIA
          </h1>
        </div>
      </div>
    </>
  );
}
