'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  {
    year: '2005',
    title: 'Foundations in Heavy Haulage',
    description:
      'Began operations with a core focus on overland heavy transportation and over-dimensional cargo (ODC) movements across major industrial hubs in India.',
  },
  {
    year: '2012',
    title: 'Fleet Expansion',
    description:
      'Acquired specialized multi-axle hydraulic trailers and heavy pullers to handle massive infrastructure and power sector logistics challenges.',
  },
  {
    year: '2018',
    title: 'Strategic Partnerships',
    description:
      'Formed partnerships with international freight forwarders, expanding our operational reach to include port clearance and multimodal project transport.',
  },
  {
    year: '2025',
    title: 'Incorporation of Mega Move India',
    description:
      'Officially incorporated as Mega Move India Private Limited, fully integrating global project forwarding, shipping engineering, and advanced equipment rentals.',
  },
  {
    year: '2026',
    title: 'Digital & Global Integration',
    description:
      'Strengthening our global networks with specialized certifications, supporting major EPC and engineering project logistics worldwide.',
  },
];

export default function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    // GSAP ScrollTrigger Timeline animations
    const ctx = gsap.context(() => {
      // 1. Draw timeline progress line as we scroll
      gsap.fromTo(
        '.timeline-progress-line',
        { height: 0 },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 40%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );

      // 2. Animate each timeline card and year on enter
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((node) => {
        const item = node as HTMLElement;
        const card = item.querySelector('.timeline-card');
        const dot = item.querySelector('.timeline-dot');
        const year = item.querySelector('.timeline-year');

        gsap.fromTo(
          [card, year],
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          dot,
          { scale: 0.6, backgroundColor: '#27272a', borderColor: '#3f3f46' },
          {
            scale: 1.25,
            backgroundColor: '#fafafa',
            borderColor: '#ffffff',
            duration: 0.4,
            scrollTrigger: {
              trigger: item,
              start: 'top 65%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // 3. Fade in headers and intro elements
      gsap.fromTo(
        '.history-header-element',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      lenisRef.current = null;
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-zinc-950 w-full min-h-screen text-zinc-100 overflow-x-hidden font-sans select-none pb-24"
    >
      {/* Inject styling to completely hide the global layout components and browser scrollbars */}
      <style dangerouslySetInnerHTML={{ __html: `
        header, footer { display: none !important; }
        body { background-color: #09090b !important; }
        ::-webkit-scrollbar { display: none !important; }
        html, body {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}} />

      {/* Custom Premium Dark Header */}
      <header className="w-full max-w-7xl mx-auto px-6 lg:px-16 h-[90px] flex items-center justify-between border-b border-zinc-900 bg-transparent relative z-50">
        <div className="flex items-center gap-3 lg:gap-5">
          <Link href="/experimental-home">
            <Image
              src="/images/mega-move-logo.svg"
              alt="Mega Move India"
              width={90}
              height={45}
              className="cursor-pointer invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="ml-1 lg:ml-2">
            <p className="text-[10px] md:text-xs lg:text-sm font-semibold tracking-wide text-zinc-500">
              Moving The Immovable
            </p>
            <p className="text-[10px] md:text-xs lg:text-sm font-semibold tracking-wide text-zinc-500">
              Delivering The Impossible
            </p>
          </div>
        </div>
        <Link
          href="/experimental-home"
          className="text-xs font-mono tracking-widest text-zinc-400 hover:text-white uppercase transition-colors"
        >
          ← BACK TO HOME
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-16 lg:pt-24 relative z-10">
        {/* Intro Section */}
        <section className="text-center mb-24 max-w-3xl mx-auto">
          <span className="history-header-element text-zinc-500 font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block">
            OUR JOURNEY & CHRONICLES
          </span>
          <h1 className="history-header-element text-zinc-100 font-sans text-4xl lg:text-6xl font-light tracking-wide uppercase mb-8 leading-tight">
            OUR HISTORY & LEGACY
          </h1>
          <p className="history-header-element text-base lg:text-lg text-zinc-400 font-light leading-relaxed">
            Mega Move India&rsquo;s roots run deep. Over two decades, we have transitioned from a localized heavy transporter into an integrated, multinational project forwarding and logistics service provider. By combining engineering precision, specialized machinery fleets, and global logistics networks, we continue to fulfill our commitment: Moving the Immovable. Delivering the Impossible.
          </p>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="relative mt-12 pl-6 md:pl-32 pr-2">
          {/* Base Gray Line */}
          <div className="absolute left-[13px] md:left-[139px] top-4 bottom-4 w-[2px] bg-zinc-900" />
          
          {/* Animated Progress Line */}
          <div className="absolute left-[13px] md:left-[139px] top-4 w-[2px] bg-zinc-200 origin-top timeline-progress-line" style={{ height: '0%' }} />

          <div className="space-y-16">
            {milestones.map((m, idx) => (
              <div key={idx} className="timeline-item relative flex flex-col md:flex-row md:items-start">
                
                {/* Year Indicator (Left Column on MD+) */}
                <div className="timeline-year md:absolute md:left-[-120px] md:top-2 md:w-24 md:text-right text-zinc-500 font-mono text-xl lg:text-2xl font-light mb-4 md:mb-0 transition-opacity">
                  {m.year}
                </div>

                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-[-23px] md:left-[-186px] top-3.5 w-3.5 h-3.5 rounded-full bg-zinc-800 border-2 border-zinc-700 transition-all duration-300 shadow-[0_0_10px_rgba(250,250,250,0.15)] z-20 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-transparent" />
                </div>

                {/* Glassmorphism Milestone Card */}
                <div className="timeline-card w-full bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/80 p-8 rounded-2xl hover:bg-zinc-900/50 hover:scale-[1.01] transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.4)] pointer-events-auto">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
                    MILESTONE {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-light text-zinc-100 tracking-wide mb-3">
                    {m.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    {m.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Custom Premium Dark Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 lg:px-16 mt-32 border-t border-zinc-900 bg-transparent py-8 text-xs text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-4 relative z-50">
        <div>
          © Copyright 2026, Mega Move India Private Limited. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
