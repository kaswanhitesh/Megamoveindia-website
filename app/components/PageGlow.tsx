import type { CSSProperties } from "react";

// Inner-page background: the homepage's drifting glows in light, medium and
// dark grey, plus triangles of mixed sizes floating and turning. Place it as
// the first child of a page's root element and give that root
// `relative isolate`: it then sits above the page's own background colour but
// behind its cards and text. Styles: .grey-glow and .bg-tri in globals.css.

// top/left in % of the page, size in px, dur/delay in seconds
const TRIANGLES = [
  { top: 4, left: 8, size: 90, dur: 38, delay: 0, solid: false },
  { top: 9, left: 78, size: 26, dur: 24, delay: -6, solid: true },
  { top: 16, left: 46, size: 14, dur: 20, delay: -3, solid: true },
  { top: 22, left: 90, size: 140, dur: 46, delay: -12, solid: false },
  { top: 29, left: 4, size: 34, dur: 28, delay: -9, solid: true },
  { top: 36, left: 60, size: 60, dur: 34, delay: -17, solid: false },
  { top: 43, left: 24, size: 18, dur: 22, delay: -4, solid: false },
  { top: 50, left: 84, size: 22, dur: 26, delay: -11, solid: true },
  { top: 57, left: 12, size: 120, dur: 44, delay: -20, solid: false },
  { top: 63, left: 50, size: 30, dur: 30, delay: -8, solid: true },
  { top: 70, left: 74, size: 80, dur: 40, delay: -14, solid: false },
  { top: 77, left: 32, size: 16, dur: 21, delay: -2, solid: true },
  { top: 84, left: 92, size: 40, dur: 32, delay: -19, solid: false },
  { top: 90, left: 6, size: 24, dur: 25, delay: -7, solid: true },
  { top: 95, left: 56, size: 110, dur: 42, delay: -23, solid: false },
];

export default function PageGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="card-glow grey-glow grey-glow-1" />
      <div className="card-glow grey-glow grey-glow-2" />
      <div className="card-glow grey-glow grey-glow-3" />
      <div className="card-glow grey-glow grey-glow-4" />
      {TRIANGLES.map((t, i) => (
        <svg
          key={i}
          className="bg-tri"
          viewBox="0 0 100 100"
          width={t.size}
          height={t.size}
          style={
            {
              top: `${t.top}%`,
              left: `${t.left}%`,
              "--tri-dur": `${t.dur}s`,
              "--tri-delay": `${t.delay}s`,
            } as CSSProperties
          }
        >
          <polygon
            points="50,8 94,88 6,88"
            fill={t.solid ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={t.solid ? 0 : Math.max(2, 300 / t.size)}
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}
