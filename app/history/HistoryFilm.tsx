"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { customers } from "@/app/lib/customers";

// "Our History" told as a short film: an opening title sequence, one full-screen scene per
// milestone and closing credits. Scenes switch on as they scroll into view (.is-active), which
// starts their camera move, text reveal and, for video scenes, playback. Styles: .film-* in
// globals.css. With reduced motion everything is shown still.

type Scene = {
  id: string;
  chapter: string;
  year: string;
  title: string;
  text: string;
  caption: string;
  image: string;
  video?: string;
};

const scenes: Scene[] = [
  {
    id: "y2005",
    chapter: "Chapter I",
    year: "2005",
    title: "Foundations in Heavy Haulage",
    text: "It began on the road. Overland heavy transport and over-dimensional cargo, moved across India's major industrial hubs, one load at a time.",
    caption: "Over-dimensional cargo on an Indian highway",
    image: "/images/hero-slides/heat-condenser.webp",
  },
  {
    id: "y2012",
    chapter: "Chapter II",
    year: "2012",
    title: "Fleet Expansion",
    text: "Multi-axle hydraulic trailers and heavy pullers joined the fleet, opening the door to the infrastructure and power sector's biggest moves.",
    caption: "Hydraulic axle trailer, in-house fleet",
    image: "/images/LandTransportCardHeroImage.webp",
  },
  {
    id: "y2018",
    chapter: "Chapter III",
    year: "2018",
    title: "Strategic Partnerships",
    text: "Partnerships with international freight forwarders took the work beyond the highway: port clearance and multimodal project transport, by sea and by road.",
    caption: "Ocean freight and multimodal project cargo",
    image: "/images/OceanfreightHeroCardImage.webp",
    video: "/images/OceanFreightOptimizedV2.mp4",
  },
  {
    id: "y2025",
    chapter: "Chapter IV",
    year: "2025",
    title: "Mega Move India Is Born",
    text: "Priya Roadlines becomes Mega Move India Private Limited, bringing project forwarding, shipping engineering and equipment rentals under one name.",
    caption: "2 × 100 MT heat exchangers, Mega Move India",
    image: "/images/hero-slides/heat-exchangers.webp",
  },
  {
    id: "y2026",
    chapter: "Chapter V",
    year: "2026",
    title: "Digital & Global Integration",
    text: "Stronger global networks and specialised certifications, supporting major EPC and engineering project logistics worldwide, from Mumbai to the world's trade fairs.",
    caption: "bauma CONEXPO INDIA 2026",
    image: "/images/Companynews/bauma2026/bauma2026_hero.webp",
  },
];

const credits: { role: string; names: string[] }[] = [
  { role: "A story that began with", names: ["Priya Roadlines"] },
  {
    role: "Starring",
    names: ["40 hydraulic axle lines", "18 lowbed trailers", "10 flatbed trailers", "Heavy-duty pullers"],
  },
  {
    role: "Filmed on location",
    names: ["Mumbai · Vapi · Hisar · Chennai", "JNPT · Mumbai Port · Kanpur", "Nyoma, Ladakh · Barmer · Panipat", "Hamburg · Dubai"],
  },
  { role: "With the trust of", names: customers.filter((c) => c.name !== "Customer").map((c) => c.name) },
  {
    role: "Proud member of",
    names: ["AITWA", "FFFAI", "FIATA", "HTOA", "JCtrans", "Mega Move Alliance"],
  },
  { role: "Produced by", names: ["Mega Move India Private Limited"] },
];

export default function HistoryFilm() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("opening");
  const [progress, setProgress] = useState(0);

  // Activate scenes as they enter the frame; play/pause their videos.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    el.classList.add("film-js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(el.querySelectorAll<HTMLElement>("[data-scene]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target as HTMLElement;
          const video = section.querySelector<HTMLVideoElement>("video[data-src]");
          if (entry.isIntersecting) {
            section.classList.add("is-active");
            setActive(section.dataset.scene || "");
            if (video && !reduce) {
              if (!video.getAttribute("src")) {
                const small = window.matchMedia("(max-width: 767px)").matches;
                video.src = small ? video.dataset.srcSmall || video.dataset.src! : video.dataset.src!;
              }
              video.play().catch(() => {});
            }
          } else if (video) {
            video.pause();
          }
        }
      },
      { threshold: 0.45 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Thin red progress bar along the top, like a playhead.
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

  return (
    <div ref={root} className="film relative bg-black text-white" data-no-reveal>
      {/* Playhead, grain and vignette sit over the whole film */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px] bg-white/10" aria-hidden="true">
        <div className="h-full origin-left bg-[#c41e1e]" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <div className="film-grain pointer-events-none fixed inset-0 z-[90]" aria-hidden="true" />

      {/* Chapter reel (desktop) */}
      <nav aria-label="Chapters" className="fixed left-6 top-1/2 z-[95] hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {[{ id: "opening", year: "▶" }, ...scenes, { id: "credits", year: "End" }].map((s) => (
          <button
            key={s.id}
            onClick={() => jump(s.id)}
            className={`film-reel-dot flex items-center gap-3 text-left font-mono text-[11px] tracking-[0.2em] ${
              active === s.id ? "text-white" : "text-white/35 hover:text-white/70"
            }`}
            aria-current={active === s.id ? "step" : undefined}
          >
            <span className={`block h-px ${active === s.id ? "w-8 bg-[#c41e1e]" : "w-4 bg-white/40"}`} />
            {s.year}
          </button>
        ))}
      </nav>

      {/* OPENING TITLES */}
      <section id="opening" data-scene="opening" className="film-scene relative flex h-[100svh] items-center justify-center overflow-hidden">
        <video
          className="film-media absolute inset-0 h-full w-full object-cover"
          data-src="/images/Land_transport.mp4"
          data-src-small="/images/Land_transport_144p.mp4"
          poster="/images/LandTransportPageHeroImage.webp"
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="film-vignette absolute inset-0" />
        <div className="film-letterbox" aria-hidden="true" />
        <div className="relative z-10 px-6 text-center">
          <p className="film-title-1 font-mono text-[11px] uppercase tracking-[0.5em] text-white/70 lg:text-xs">
            Mega Move India presents
          </p>
          <h1 className="film-title-2 mt-6 text-5xl font-black uppercase tracking-[0.12em] lg:text-8xl">Our History</h1>
          <p className="film-title-3 mt-6 text-sm font-light italic tracking-wide text-white/80 lg:text-xl">
            Moving the immovable, since 2005.
          </p>
          <button
            onClick={() => jump(scenes[0].id)}
            className="film-title-4 mt-14 inline-flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white"
          >
            Scroll to play
            <span className="film-scroll-cue block h-10 w-px bg-white/60" />
          </button>
        </div>
      </section>

      {/* CHAPTERS */}
      {scenes.map((scene, i) => (
        <section
          key={scene.id}
          id={scene.id}
          data-scene={scene.id}
          aria-labelledby={`${scene.id}-title`}
          className="film-scene relative flex h-[100svh] min-h-[560px] items-end overflow-hidden"
        >
          {scene.video ? (
            <video
              className="film-media film-kenburns absolute inset-0 h-full w-full object-cover"
              data-src={scene.video}
              data-src-small={scene.video.replace(/\.mp4$/, "_144p.mp4")}
              poster={scene.image}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            />
          ) : (
            <img
              src={scene.image}
              alt={scene.caption}
              loading={i === 0 ? "eager" : "lazy"}
              className={`film-media film-kenburns ${i % 2 ? "film-kenburns-alt" : ""} absolute inset-0 h-full w-full object-cover`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
          <div className="film-vignette absolute inset-0" />
          <div className="film-letterbox" aria-hidden="true" />

          {/* Giant year behind the text */}
          <span
            aria-hidden="true"
            className="film-year pointer-events-none absolute right-[-2vw] top-[12vh] select-none text-[34vw] font-black leading-none lg:top-[8vh] lg:text-[22vw]"
          >
            {scene.year}
          </span>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-[16vh] lg:px-16 lg:pb-[18vh]">
            <p className="film-reveal font-mono text-[11px] uppercase tracking-[0.45em] text-[#ff5a5a] lg:text-xs">
              {scene.chapter} · {scene.year}
            </p>
            <h2
              id={`${scene.id}-title`}
              className="film-reveal film-d1 mt-4 max-w-3xl text-4xl font-black uppercase leading-[1.05] tracking-[0.02em] lg:text-7xl"
            >
              {scene.title}
            </h2>
            <p className="film-reveal film-d2 mt-6 max-w-xl text-base font-light leading-relaxed text-white/85 lg:text-xl">
              {scene.text}
            </p>
            <p className="film-reveal film-d3 mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
              <span className="block h-px w-8 bg-white/40" />
              {scene.caption}
            </p>
          </div>
        </section>
      ))}

      {/* END CREDITS */}
      <section
        id="credits"
        data-scene="credits"
        aria-labelledby="credits-title"
        className="film-scene relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden py-24"
      >
        <img
          src="/images/Casestudies/Project-10/Project10_HeroImage.webp"
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="relative z-10 w-full max-w-3xl px-6 text-center">
          <h2 id="credits-title" className="film-reveal font-mono text-[11px] uppercase tracking-[0.5em] text-white/60">
            The journey continues
          </h2>
          <div className="film-credits-window relative mx-auto mt-10 h-[56vh] overflow-hidden">
            <div className="film-credits-roll">
              {credits.map((block) => (
                <div key={block.role} className="mb-14">
                  <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#ff5a5a]">{block.role}</p>
                  {block.names.map((name) => (
                    <p key={name} className="mt-2 text-lg font-light tracking-wide text-white/90 lg:text-2xl">
                      {name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="film-reveal film-d1 mt-12 text-2xl font-black uppercase tracking-[0.06em] lg:text-4xl">
            Your cargo could be the next chapter.
          </p>
          <div className="film-reveal film-d2 mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              prefetch={false}
              className="bg-[#c41e1e] px-8 py-4 font-bold text-white no-underline hover:bg-[#a51919]"
            >
              Request a Quote
            </Link>
            <Link
              href="/case-studies/"
              prefetch={false}
              className="border-2 border-white px-8 py-4 font-bold text-white no-underline hover:bg-white hover:text-black"
            >
              Watch our case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
