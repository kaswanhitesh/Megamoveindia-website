'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  {
    year: "2005",
    title: "Foundations in Heavy Haulage",
    description:
      "Began operations with a core focus on overland heavy transportation and over-dimensional cargo (ODC) movements across major industrial hubs in India.",
  },
  {
    year: "2012",
    title: "Fleet Expansion",
    description:
      "Acquired specialized multi-axle hydraulic trailers and heavy pullers to handle massive infrastructure and power sector logistics challenges.",
  },
  {
    year: "2018",
    title: "Strategic Partnerships",
    description:
      "Formed partnerships with international freight forwarders, expanding our operational reach to include port clearance and multimodal project transport.",
  },
  {
    year: "2025",
    title: "Incorporation of Mega Move India",
    description:
      "Officially incorporated as Mega Move India Private Limited, fully integrating global project forwarding, shipping engineering, and advanced equipment rentals.",
  },
  {
    year: "2026",
    title: "Digital & Global Integration",
    description:
      "Strengthening our global networks with specialized certifications, supporting major EPC and engineering project logistics worldwide.",
  },
];

export default function HistoryClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 1. Set initial states to prevent FOUC / layout shifts
    gsap.set(".page-border", { opacity: 0 });
    gsap.set(".editorial-text", { y: 30, opacity: 0, filter: "blur(8px)" });
    gsap.set(".section-heading", { y: 20, opacity: 0, scale: 0.98 });
    gsap.set(heroImageRef.current, { clipPath: "inset(100% 0% 0% 0%)", y: 40, opacity: 0 });
    gsap.set(".fine-detail", { opacity: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Step 1 – Page Reveal
      tl.to(".page-border", {
        opacity: 0.25,
        duration: 0.3,
      });

      // Step 5 – Main Illustration Reveal (Hero Image)
      tl.to(heroImageRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        opacity: 0.3, // Match original opacity: 30%
        duration: 0.8,
        ease: "power4.inOut",
      }, "-=0.15");

      // Step 2 – Editorial Text Reveal (staggered paragraphs and spans)
      tl.to(".editorial-text", {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.08,
      }, "-=0.4");

      // Step 3 – Section Headings (arrive slightly after paragraphs)
      tl.to(".section-heading", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
      }, "-=0.35");

      // Step 6 – Fine Details
      tl.to(".fine-detail", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
      }, "-=0.3");

      // Scroll Parallax (subtle editorial parallax)
      // Main illustration (Hero Image) moves faster than text
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Parallax fade and shift for hero heading and texts
      gsap.to(".hero-content-group", {
        yPercent: -10,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-content-group",
          start: "top 30%",
          end: "bottom top",
          scrub: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {/* Step 1 – Editorial Page Border (Thin border inset) */}
      <div className="fixed inset-4 border border-zinc-800 pointer-events-none z-50 page-border" style={{ opacity: 0 }} />

      {/* HERO SECTION */}
      <section className="relative h-[280px] lg:h-[450px] overflow-hidden border-b border-zinc-900 bg-zinc-950">
        <img
          ref={heroImageRef}
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
          alt="Mega Move India History"
          className="w-full h-full object-cover opacity-30 select-none pointer-events-none main-illustration"
          style={{ opacity: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center hero-content-group">
          <div className="text-center px-4">
            <h1 className="text-4xl lg:text-6xl font-extralight uppercase tracking-[0.2em] mb-4 text-white section-heading">
              OUR HISTORY
            </h1>
            <p className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-zinc-400 font-mono editorial-text">
              A Legacy of Engineering Logistics &bull; Built on Trust Since 2005
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-16 lg:py-24 text-center">
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.25em] mb-3 block editorial-text">
          COMPANY CHRONICLE
        </span>
        <h2 className="text-2xl lg:text-3xl font-light text-zinc-100 tracking-wide mb-6 section-heading">
          OUR JOURNEY
        </h2>
        <p className="text-sm lg:text-base text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto editorial-text">
          Mega Move India&rsquo;s roots go back over two decades. Over the years, we
          have transitioned from a regional heavy transporter into an integrated,
          multinational project forwarding and logistics service provider. By combining
          advanced engineering, in-house machinery fleets, and global carrier alliances,
          we continue to deliver on our promise: Moving the Immovable. Delivering the Impossible.
        </p>
      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 py-2 space-y-10">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative group">
              {/* Dot indicator */}
              <div className="absolute -left-[6.5px] top-[26px] w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:bg-zinc-100 group-hover:border-zinc-950 transition-colors duration-300 fine-detail" />
              
              {/* Milestone Details */}
              <div className="pl-8 md:pl-12">
                <div className="md:absolute md:-left-28 md:top-6 md:w-20 md:text-right font-mono font-semibold text-lg text-zinc-400 group-hover:text-zinc-100 transition-colors duration-300 editorial-text">
                  {milestone.year}
                </div>
                <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/80 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:bg-zinc-900/50 fine-detail">
                  <h3 className="text-base md:text-lg font-medium text-zinc-100 mb-2 section-heading">
                    {milestone.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed editorial-text">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
