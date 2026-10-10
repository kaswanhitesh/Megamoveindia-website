"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// "Our History": how the company grew from one truck in 1986 to Mega Move India, told as a
// short scroll film. Each full-screen scene switches on (.is-active) as it scrolls into view,
// which starts its sliding lines, backdrop motion, counters and, for video scenes, playback.
// Styles: .film-* in globals.css. With reduced motion everything is shown still.

type Line = { text: ReactNode; big?: boolean; accent?: boolean };

// Lines slide in one after another, alternating from the left and the right.
function Lines({ lines, start = 0 }: { lines: Line[]; start?: number }) {
  return (
    <>
      {lines.map((line, i) => (
        <p
          key={i}
          className={`film-line ${(start + i) % 2 ? "film-line-r" : ""} ${
            line.big
              ? "mt-4 text-4xl font-black uppercase leading-[1.05] tracking-[0.02em] lg:text-7xl"
              : "mt-3 text-lg font-light leading-snug text-white/85 lg:text-3xl"
          } ${line.accent ? "font-mono !text-sm uppercase tracking-[0.4em] !text-[#ff5a5a] lg:!text-base" : ""}`}
          style={{ "--i": i } as CSSProperties}
        >
          {line.text}
        </p>
      ))}
    </>
  );
}

const chapters = [
  { id: "opening", label: "▶" },
  { id: "y1986", label: "1986" },
  { id: "y1990", label: "1990" },
  { id: "y1992", label: "1992" },
  { id: "y2012", label: "2012" },
  { id: "y2018", label: "2018" },
  { id: "y2025", label: "2025" },
  { id: "today", label: "Today" },
];

type PhotoScene = { id: string; year: string; title: string; text: string; image: string; video?: string };

const photoScenes: PhotoScene[] = [
  {
    id: "y2012",
    year: "2012",
    title: "Heavier cargo, bigger fleet",
    text: "Multi-axle hydraulic trailers and heavy pullers join the fleet, and the company moves into power and infrastructure project cargo.",
    image: "/images/LandTransportCardHeroImage.webp",
  },
  {
    id: "y2018",
    year: "2018",
    title: "Beyond the highway",
    text: "Partnerships with international freight forwarders add port clearance and multimodal project transport, by sea as well as by road.",
    image: "/images/OceanfreightHeroCardImage.webp",
    video: "/images/OceanFreightOptimizedV2.mp4",
  },
  {
    id: "y2025",
    year: "2025",
    title: "Mega Move India",
    text: "Priya Roadlines becomes Mega Move India Private Limited: project forwarding, transport engineering, heavy haulage and equipment rental under one name.",
    image: "/images/hero-slides/heat-exchangers.webp",
  },
];

const stats = [
  { value: 40, label: "Hydraulic axle lines" },
  { value: 18, label: "Lowbed trailers" },
  { value: 10, label: "Flatbed trailers" },
  { value: 4, label: "Offices across India" },
];

export default function HistoryFilm() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("opening");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    el.classList.add("film-js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(el.querySelectorAll<HTMLElement>("[data-scene]"));

    // Count a number up from 0 once, the first time its scene is shown.
    const countUp = (section: HTMLElement) => {
      section.querySelectorAll<HTMLElement>("[data-count]").forEach((n) => {
        if (n.dataset.done) return;
        n.dataset.done = "1";
        const target = Number(n.dataset.count);
        if (reduce) {
          n.textContent = String(target);
          return;
        }
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / 1800);
          n.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target as HTMLElement;
          const videos = Array.from(section.querySelectorAll<HTMLVideoElement>("video[data-src]"));
          if (entry.isIntersecting) {
            section.classList.add("is-active");
            if (section.dataset.chapter) setActive(section.dataset.chapter);
            countUp(section);
            if (!reduce) {
              for (const video of videos) {
                if (!video.getAttribute("src")) {
                  const small = window.matchMedia("(max-width: 767px)").matches;
                  video.src = small ? video.dataset.srcSmall || video.dataset.src! : video.dataset.src!;
                }
                video.play().catch(() => {});
              }
            }
          } else {
            videos.forEach((v) => v.pause());
          }
        }
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const scene = "film-scene relative flex min-h-[100svh] items-center overflow-hidden py-24";
  const inner = "relative z-10 mx-auto w-full max-w-5xl px-6 lg:px-16";

  return (
    <div ref={root} className="film relative bg-black text-white" data-no-reveal>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px] bg-white/10" aria-hidden="true">
        <div className="h-full origin-left bg-[#c41e1e]" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div className="film-grain pointer-events-none fixed inset-0 z-[90]" aria-hidden="true" />

      <nav aria-label="Chapters" className="fixed left-6 top-1/2 z-[95] hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {chapters.map((c) => (
          <button
            key={c.id}
            onClick={() => jump(c.id)}
            className={`film-reel-dot flex items-center gap-3 text-left font-mono text-[11px] tracking-[0.2em] ${
              active === c.id ? "text-white" : "text-white/35 hover:text-white/70"
            }`}
            aria-current={active === c.id ? "step" : undefined}
          >
            <span className={`block h-px ${active === c.id ? "w-8 bg-[#c41e1e]" : "w-4 bg-white/40"}`} />
            {c.label}
          </button>
        ))}
      </nav>

      {/* OPENING */}
      <section id="opening" data-scene data-chapter="opening" className={`${scene} justify-center`}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          data-src="/images/Land_transport.mp4"
          data-src-small="/images/Land_transport_144p.mp4"
          poster="/images/LandTransportPageHeroImage.webp"
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="film-vignette absolute inset-0" />
        <div className="film-letterbox" aria-hidden="true" />
        <div className="relative z-10 px-6 text-center">
          <p className="film-title-1 font-mono text-[11px] uppercase tracking-[0.5em] text-white/70 lg:text-xs">
            Mega Move India presents
          </p>
          <h1 className="film-title-2 mt-6 text-5xl font-black uppercase tracking-[0.12em] lg:text-8xl">Our History</h1>
          <p className="film-title-3 mt-6 text-base font-light italic text-white/85 lg:text-2xl">
            From one truck in 1986 to India&rsquo;s heaviest moves.
          </p>
          <button
            onClick={() => jump("y1986")}
            className="film-title-4 mt-14 inline-flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white"
          >
            Scroll to begin
            <span className="film-scroll-cue block h-10 w-px bg-white/60" />
          </button>
        </div>
      </section>

      {/* 1986–1988: one truck */}
      <section id="y1986" data-scene data-chapter="y1986" aria-label="1986" className={scene}>
        <div className="film-dusk absolute inset-0" aria-hidden="true" />
        <div className="film-road absolute inset-x-0 bottom-0 h-[26vh]" aria-hidden="true" />
        <span aria-hidden="true" className="film-year pointer-events-none absolute right-[-2vw] top-[8vh] select-none text-[34vw] font-black leading-none lg:text-[22vw]">
          1986
        </span>
        <div className="film-letterbox" aria-hidden="true" />
        <div className={`${inner} pb-[18vh]`}>
          <Lines
            lines={[
              { text: "Haryana, 1986", accent: true },
              { text: "It started with one truck.", big: true },
              { text: "A TATA 407, driven by our founder, Satbir Richpal Kaswan, at just sixteen." },
              { text: "By 1988, that truck was our own." },
            ]}
          />
        </div>
      </section>

      {/* 1990: Mumbai */}
      <section id="y1990" data-scene data-chapter="y1990" aria-label="1990" className={scene}>
        <div className="film-city absolute inset-0" aria-hidden="true" />
        <span aria-hidden="true" className="film-year pointer-events-none absolute bottom-[6vh] right-[-4vw] select-none text-[26vw] font-black leading-none lg:text-[17vw]">
          MUMBAI
        </span>
        <div className="film-letterbox" aria-hidden="true" />
        <div className={`${inner} text-right`}>
          <Lines
            start={1}
            lines={[
              { text: "1990", accent: true },
              { text: "The business moves", big: true },
              { text: "to Mumbai.", big: true },
              { text: "India's commercial capital. A Comet truck, driven on its own routes until 1991." },
            ]}
          />
        </div>
      </section>

      {/* 1992: Priya Roadlines */}
      <section id="y1992" data-scene data-chapter="y1992" aria-label="1992" className={`${scene} justify-center text-center`}>
        <div className="film-glow absolute inset-0" aria-hidden="true" />
        <div className="film-letterbox" aria-hidden="true" />
        <div className="relative z-10 px-6">
          <Lines
            lines={[
              { text: "1992", accent: true },
              { text: "A TATA 3516 trailer joins the fleet." },
              { text: "One truck becomes a transport company." },
            ]}
          />
          <h2 className="film-name mt-10 text-5xl font-black uppercase tracking-[0.06em] lg:text-[6.5rem] lg:leading-none">
            Priya Roadlines
          </h2>
          <p className="film-line mt-8 text-lg font-light italic text-white/85 lg:text-2xl" style={{ "--i": 4 } as CSSProperties}>
            Named after the founder&rsquo;s firstborn, Priya.
          </p>
        </div>
      </section>

      {/* Sliding interlude */}
      <div className="film-ticker overflow-hidden border-y border-white/10 bg-black py-6" aria-hidden="true">
        <div className="film-ticker-track flex w-max whitespace-nowrap text-3xl font-black uppercase tracking-[0.06em] text-white/15 lg:text-6xl">
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-12 pr-12">
              {["TATA 407", "Comet", "TATA 3516", "Hydraulic axles", "Breakbulk", "Project cargo", "Mega Move India"].map((w) => (
                <span key={w} className="flex gap-12">
                  <span>{w}</span>
                  <span className="text-[#c41e1e]/60">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* 2012, 2018, 2025 */}
      {photoScenes.map((g, i) => (
        <section
          key={g.id}
          id={g.id}
          data-scene
          data-chapter={g.id}
          aria-label={g.year}
          className="film-scene relative flex min-h-[100svh] items-end overflow-hidden"
        >
          {g.video ? (
            <video
              className="film-kenburns absolute inset-0 h-full w-full object-cover"
              data-src={g.video}
              data-src-small={g.video.replace(/\.mp4$/, "_144p.mp4")}
              poster={g.image}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            />
          ) : (
            <img
              src={g.image}
              alt=""
              loading="lazy"
              className={`film-kenburns ${i % 2 ? "film-kenburns-alt" : ""} absolute inset-0 h-full w-full object-cover`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25" />
          <div className="film-vignette absolute inset-0" />
          <div className="film-letterbox" aria-hidden="true" />
          <span aria-hidden="true" className="film-year pointer-events-none absolute right-[-2vw] top-[10vh] select-none text-[34vw] font-black leading-none lg:text-[22vw]">
            {g.year}
          </span>
          <div className={`${inner} pb-[16vh]`}>
            <Lines start={i} lines={[{ text: g.year, accent: true }, { text: g.title, big: true }, { text: g.text }]} />
          </div>
        </section>
      ))}

      {/* TODAY: from one truck to a fleet */}
      <section id="today" data-scene data-chapter="today" aria-labelledby="today-title" className={`${scene} justify-center text-center`}>
        <img
          src="/images/Casestudies/Project-10/Project10_HeroImage.webp"
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
          <Lines lines={[{ text: "Today", accent: true }, { text: "From one TATA 407 to" }]} />
          <ul className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <li key={s.label} className="film-line" style={{ "--i": i + 2 } as CSSProperties}>
                <span data-count={s.value} className="block text-6xl font-black tabular-nums lg:text-8xl">
                  {s.value}
                </span>
                <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 lg:text-xs">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
          <p className="film-line mt-10 font-mono text-[11px] uppercase tracking-[0.35em] text-white/60" style={{ "--i": 6 } as CSSProperties}>
            Mumbai · Vapi · Hisar · Chennai
          </p>
          <h2 id="today-title" className="film-name mt-12 text-3xl font-black uppercase leading-tight tracking-[0.04em] lg:text-6xl">
            And the road continues.
          </h2>
          <div className="film-line mt-12 flex flex-wrap justify-center gap-4" style={{ "--i": 6 } as CSSProperties}>
            <Link href="/contact/" prefetch={false} className="bg-[#c41e1e] px-8 py-4 font-bold text-white no-underline hover:bg-[#a51919]">
              Write the next chapter with us
            </Link>
            <Link
              href="/case-studies/"
              prefetch={false}
              className="border-2 border-white px-8 py-4 font-bold text-white no-underline hover:bg-white hover:text-black"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
