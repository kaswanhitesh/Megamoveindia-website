'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  slug: string;
  title: string;
  image: string;
  badge: string;
  weight: string;
  location: string;
  duration: string;
}

const ALL_PROJECTS: Project[] = [
  {
    slug: 'national-defence-project',
    title: 'National Defence Project',
    image: '/images/Casestudies/DefenceCargo/DefenceCargoHeroImage.webp',
    badge: 'DEFENCE',
    weight: '120 MT',
    location: 'India → Ladakh',
    duration: '21 Days',
  },
  {
    slug: 'Project-2',
    title: '225 MT Used Machinery Import',
    image: '/images/225MTUsedMachineryImportCardImage.webp',
    badge: 'IMPORT',
    weight: '225 MT',
    location: 'Rotterdam → Pune',
    duration: '18 Days',
  },
  {
    slug: 'Project-3',
    title: 'Manufacturing Plant Transfer',
    image: '/images/FactoryRelocationGermanyToIndiaCardImage.webp',
    badge: 'PLANT TRANSFER',
    weight: '350 MT',
    location: 'Mumbai → Gujarat',
    duration: '12 Days',
  },
  {
    slug: 'Project-4',
    title: 'Heat Condenser Shipment',
    image: '/images/Casestudies/Project-4/Project4_HeroImage.webp',
    badge: 'ODC',
    weight: '95 MT',
    location: 'Hazira → Chennai',
    duration: '6 Days',
  },
  {
    slug: 'Project-5',
    title: '2x100MT Heat Exchanger',
    image: '/images/Casestudies/Project-5/Project5_Cardheroimage.webp',
    badge: 'ODC',
    weight: '200 MT',
    location: 'Mumbai → Panipat',
    duration: '22 Days',
  },
  {
    slug: 'Project-6',
    title: 'Chemical Storage Tanks',
    image: '/images/Casestudies/Project-6/Project6_Gallery10.webp',
    badge: 'EXPORT',
    weight: '150 MT',
    location: 'Mundra → Tanzania',
    duration: '25 Days',
  },
  {
    slug: 'Project-7',
    title: 'Critical X-Ray Systems',
    image: '/images/Casestudies/Project-7/Project7_Gallery3.webp',
    badge: 'DEFENCE',
    weight: '45 MT',
    location: 'Delhi → Ladakh',
    duration: '14 Days',
  },
  {
    slug: 'Project-8',
    title: 'Crane Shipment',
    image: '/images/Casestudies/Project-8/Project8_Gallery1.webp',
    badge: 'HEAVY LIFT',
    weight: '120 MT',
    location: 'India',
    duration: '8 Days',
  },
];

interface OtherProjectsCarouselProps {
  excludeSlug: string;
}

export default function OtherProjectsCarousel({ excludeSlug }: OtherProjectsCarouselProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter out the active project
  const projects = ALL_PROJECTS.filter((p) => p.slug !== excludeSlug);
  // Duplicate array to achieve seamless infinite marquee loop
  const displayProjects = [...projects, ...projects];

  // Continuous auto-slide marquee effect
  useEffect(() => {
    const container = sliderRef.current;
    if (!container || isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 40.25; // Pixels per second (exactly 15% speed increase from 35)

    const scrollLoop = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const cardWidth = container.firstElementChild?.clientWidth || 300;
      const gap = 32; // gap-8
      const halfWidth = projects.length * (cardWidth + gap);

      // Loop seamlessly once the first batch scrolls out of view
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
      } else {
        container.scrollLeft += speed * delta;
      }

      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, projects.length]);

  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 300;
    const gap = 32;
    const scrollLeft = container.scrollLeft;

    const halfWidth = projects.length * (cardWidth + gap);
    
    // Normalizing wrap-around for scroll offset
    let normalizedScroll = scrollLeft;
    if (scrollLeft >= halfWidth) {
      normalizedScroll = scrollLeft % halfWidth;
    }

    const index = Math.round(normalizedScroll / (cardWidth + gap)) % projects.length;
    setActiveDotIndex(index);

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + container.clientWidth < container.scrollWidth - 10);
  };

  const scrollPrev = () => {
    const container = sliderRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.clientWidth || 300;
    const gap = 32;
    container.scrollBy({
      left: -(cardWidth + gap),
      behavior: 'smooth',
    });
  };

  const scrollNext = () => {
    const container = sliderRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.clientWidth || 300;
    const gap = 32;
    container.scrollBy({
      left: cardWidth + gap,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      className="mt-14 lg:mt-16 border-t pt-10 lg:pt-12 relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <h2 className="text-3xl lg:text-5xl font-light text-zinc-900 text-center mb-4">
        Our Other Projects
      </h2>
      <p className="text-center text-gray-600 mb-8 px-4">
        Explore more successful project logistics assignments executed by Mega Move India.
      </p>

      {/* Slider Wrapper */}
      <div className="relative w-full overflow-visible px-4 lg:px-14">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={scrollPrev}
            className="absolute left-1 top-[45%] -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gray-100 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Previous Project"
          >
            <svg
              className="w-5 h-5 text-zinc-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Slider Container (No CSS snap-points to allow completely smooth marquee crawl) */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-8 px-1"
        >
          {displayProjects.map((project, idx) => (
            <div
              key={`${project.slug}-${idx}`}
              className="w-[calc(100%-8px)] md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] shrink-0 p-2"
            >
              {/* Card Container with Extra Prominent Hover Lift & Deep Soft Shadows */}
              <Link
                href={`/case-studies/${project.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100/50 shadow-[0_12px_36px_rgba(23,63,116,0.04)] hover:shadow-[0_30px_60px_rgba(23,63,116,0.16)] hover:scale-[1.05] hover:-translate-y-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full flex flex-col"
              >
                {/* Elevated Image & Badge Container */}
                <div className="relative h-[250px] lg:h-[280px] w-full bg-gray-50 flex-shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4.5 left-4.5 z-10 px-3 py-1.5 text-[10px] tracking-wider rounded-[4px] font-semibold text-white uppercase bg-zinc-950 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                    {project.badge}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6.5 flex-1 flex flex-col justify-between">
                  <div className="h-[52px] lg:h-[56px] flex items-center mb-6 w-full">
                    <h3 className="text-lg lg:text-xl font-semibold text-zinc-900 line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Metadata Row with Elevated Readability & Baseline Alignment */}
                  <div className="flex items-center justify-between text-sm text-gray-600 font-medium w-full border-t pt-5 border-gray-100/80">
                    {/* Weight */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <svg
                        className="w-[18px] h-[18px] text-zinc-900 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3z" />
                        <path d="M4 8h16a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1z" />
                        <path d="M9 14h6" />
                      </svg>
                      <span className="shrink-0">{project.weight}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 min-w-0 px-2 max-w-[42%] justify-center">
                      <svg
                        className="w-[18px] h-[18px] text-zinc-900 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="truncate" title={project.location}>{project.location}</span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <svg
                        className="w-[18px] h-[18px] text-zinc-900 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="shrink-0">{project.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={scrollNext}
            className="absolute right-1 top-[45%] -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gray-100 bg-white shadow-[0_6px_30px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Next Project"
          >
            <svg
              className="w-5 h-5 text-zinc-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {Array.from({ length: projects.length }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const container = sliderRef.current;
              if (!container) return;
              const cardWidth = container.firstElementChild?.clientWidth || 300;
              const gap = 32;
              container.scrollTo({
                left: i * (cardWidth + gap),
                behavior: 'smooth',
              });
              setActiveDotIndex(i);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
              activeDotIndex === i ? 'bg-zinc-950 scale-110 shadow-[0_0_6px_rgba(24,24,27,0.25)]' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to project slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
