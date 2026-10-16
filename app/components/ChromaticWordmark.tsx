"use client";

import { useEffect, useRef } from "react";

// Chromatic wordmark assemble: the opening beat ("makeWordmark") of the ThreeUI
// "Intro Text" motion study (creator-studio-intro.html), ported as-is: same seeded
// jitter, easing, 1.72 s timing and red/green/blue split. Only the text changes:
// the study's own brand wordmark and logo are not used. Pixel offsets are scaled
// from the study's ~88 px type to the rendered font size.

const BEAT = 1.72; // seconds, scene 1 in the study's timeline
const SOURCE_FS = 88;

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a || 1e-6), 0, 1);
const eOut = (t: number) => 1 - Math.pow(1 - t, 3);
function rng(s: number) {
  let a = s >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function ChromaticWordmark({ text }: { text: string }) {
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const chars = Array.from(el.querySelectorAll<HTMLSpanElement>("span[data-ch]"));
    const R = rng(7719);
    const jit = chars.map(() => [R() * 2 - 1, R() * 2 - 1, R()]);

    const settle = () => {
      for (const c of chars) {
        c.style.transform = "";
        c.style.opacity = "";
        c.style.textShadow = "";
        c.style.filter = "";
      }
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      settle();
      return;
    }

    let raf = 0;
    let start = 0;
    const k = parseFloat(getComputedStyle(el).fontSize) / SOURCE_FS || 1;
    const frame = (now: number) => {
      if (!start) start = now;
      const p = seg((now - start) / 1000, 0, BEAT);
      for (let i = 0; i < chars.length; i++) {
        const j = jit[i];
        const a = eOut(clamp(seg(p, 0.02, 0.5) * 1.5 - j[2] * 0.5, 0, 1));
        const c = chars[i].style;
        c.transform = `translate(${(j[0] * 62 * (1 - a) * k).toFixed(1)}px,${(j[1] * 34 * (1 - a) * k).toFixed(1)}px) scale(${lerp(1.24, 1, a).toFixed(3)})`;
        c.opacity = Math.min(1, a * 1.6).toFixed(3);
        const sep = (1 - a) * 11 * k;
        c.textShadow =
          sep > 0.4
            ? `${(-sep).toFixed(1)}px 0 rgba(255,64,72,.85),${sep.toFixed(1)}px 0 rgba(64,255,190,.8),0 ${(sep * 0.55).toFixed(1)}px rgba(96,124,255,.8)`
            : "";
        c.filter = sep > 0.7 ? `blur(${(sep * 0.3).toFixed(2)}px)` : "";
      }
      if (p < 1) raf = requestAnimationFrame(frame);
      else settle(); // hand the letters back to the heading's own styling
    };
    // start fully scattered and hidden, then assemble
    for (const c of chars) c.style.opacity = "0";
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [text]);

  return (
    <span ref={root} aria-label={text} role="text">
      {/* letters animate individually; each word stays unbreakable so lines only wrap between words */}
      {text.split(" ").map((word, w) => (
        <span key={w}>
          {w > 0 && " "}
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, k) => (
              <span key={k} data-ch aria-hidden="true" className="inline-block will-change-transform">
                {ch}
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}
