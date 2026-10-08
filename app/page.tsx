import Link from "next/link";

const services = [
  {
    title: "AIR FREIGHT",
    description:
      "Specialized air freight solutions for urgent, high-value and time-critical cargo movements. Through our global airline partnerships and logistics network, we provide reliable charter and door-to-door services.",
    image: "/images/AirFreightHeroImage.webp",
    video: "/images/AirFreight.mp4",
    link: "/services/air-freight",
  },
  {
    title: "OCEAN FREIGHT",
    description:
      "Comprehensive ocean freight services covering FCL, LCL, breakbulk and project cargo shipments. Our experienced team manages international movements through strategic carrier partnerships.",
    image: "/images/OceanfreightHeroCardImage.webp",
    video: "/images/OceanFreightOptimizedV2.mp4",
    link: "/services/ocean-freight",
  },
  {
    title: "LAND TRANSPORT",
    description:
      "Heavy haulage, over-dimensional cargo transportation and project logistics supported by hydraulic axle trailers, lowbed trailers and specialized equipment across India.",
    image: "/images/LandTransportCardHeroImage.webp",
    video: "/images/Land_transport.mp4",
    link: "/services/land-transport",
  },
  {
    title: "RENTALS & WAREHOUSING",
    description:
      "Comprehensive equipment rental, warehousing and cargo handling solutions including truck mounted manlifts, aerial work platforms, loading services and project support.",
    image: "/images/RentalsCardHeroImage.webp",
    video: "/images/Rental_Warehouse_Final.mp4",
    link: "/services/rentals-warehousing",
  },
];

const industries = [
  {
    title: "Industrial Plants",
    description:
      "End-to-end factory relocations. We engineer precise lifting and haulage for massive industrial reactors and critical assembly lines.",
    image: "/images/industries/industry_industrial_plants.webp",
    video: "/images/industrial_final.mp4",
    link: "/industries/industrial-plants",
  },
  {
    title: "Infrastructure",
    description:
      "Logistics backbone for national mega-projects. Transporting colossal bridge girders, TBMs, and pre-cast concrete structures.",
    image: "/images/industries/industry_infrastructure.webp",
    video: "/images/THE_MUMBAI_LINK_Optimized.mp4",
    link: "/industries/infrastructure",
  },
  {
    title: "Metal & Mining",
    description:
      "Extreme-weight haulage for the resource sector. We move massive excavators, dump trucks, and heavy processing units.",
    image: "/images/industries/industry_metal_mining.webp",
    video: "/images/Mining_mining_industry.mp4",
    link: "/industries/metal-mining",
  },
  {
    title: "Oil & Gas",
    description:
      "Specialized movement of highly delicate assets including long-span pipelines, offshore rigs, and massive refinery vessels.",
    image: "/images/industries/industry_oil_gas.webp",
    video: "/images/oil1_norm.mp4",
    link: "/industries/oil-gas",
  },
  {
    title: "Power & Energy",
    description:
      "Precision transport for the grid. Moving 80m wind turbine blades, high-voltage transformers, and heavy nuclear components.",
    image: "/images/industries/industry_power_energy.webp",
    video: "/images/oil2.mp4",
    link: "/industries/power-energy",
  },
];

// Looping, muted card video. Phones get the lighter 144p encode; the still
// image shows until the video starts (and if it can't play).
function CardVideo({ src, poster }: { src: string; poster: string }) {
  const mobileSrc = src.replace(/\.mp4$/, "_144p.mp4");
  return (
    <video autoPlay muted loop playsInline preload="metadata" poster={poster} className="h-full w-full object-cover">
      <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
      <source src={src} type="video/mp4" />
    </video>
  );
}

const cardClass =
  "group flex flex-col rounded-2xl border border-zinc-700/80 bg-zinc-900/60 p-4 lg:p-5 no-underline hover:border-zinc-500";

export default function Home() {
  return (
    <div className="relative bg-black text-white">
      {/* Hero */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4 pt-[90px]"
        style={{ backgroundImage: "url('/images/home-hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-center">
          <div className="mb-3 text-[clamp(0.9rem,2vw,1.3rem)] font-light uppercase tracking-[0.3em] text-white/85">
            Welcome to
          </div>
          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold uppercase leading-[1.1] tracking-[0.05em] [text-shadow:0_2px_40px_rgba(0,0,0,0.6)]">
            MEGA MOVE INDIA
          </h1>
        </div>
      </section>

      {/* Legacy & Mission */}
      <section className="px-4 py-16 lg:py-24">
        <Link
          href="/history"
          className="mx-auto block max-w-[820px] rounded-2xl border border-zinc-700/50 bg-zinc-900/60 p-6 text-center no-underline hover:border-zinc-600 lg:p-12"
        >
          <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400/70">
            OUR LEGACY &amp; MISSION
          </div>
          <p className="mb-4 text-[clamp(1rem,2.2vw,1.25rem)] font-light leading-[1.75] text-zinc-200/90">
            With a legacy in heavy haulage and over-dimensional cargo transportation dating back to{" "}
            <span className="font-semibold text-white">2005</span>, Mega Move India was incorporated in{" "}
            <span className="font-semibold text-white">2025</span> to expand its expertise into global project
            logistics, freight forwarding, heavy lift transportation and equipment rentals.
          </p>
          <p className="text-[clamp(1rem,2.2vw,1.25rem)] font-light leading-[1.75] text-zinc-400/85">
            Driven by specialized equipment, experienced personnel and a commitment to operational excellence, we
            provide end-to-end logistics solutions for the world&rsquo;s most challenging cargo movements.
          </p>
        </Link>
      </section>

      {/* Core Portfolios */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-16 lg:py-24">
        <h2 className="mb-4 text-[1.75rem] font-light leading-[1.1] tracking-[0.02em] text-zinc-100 lg:text-[3.5rem]">
          CORE PORTFOLIOS
        </h2>
        <p className="mx-auto mb-10 max-w-[500px] text-sm font-light leading-relaxed text-zinc-400 lg:text-base">
          Integrated logistics solutions across air, ocean, and specialized land transportation.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.title} href={service.link} className={cardClass}>
              <div className="mb-4 h-[180px] overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-950">
                <CardVideo src={service.video} poster={service.image} />
              </div>
              <h3 className="mb-3 text-lg font-medium tracking-wide text-zinc-100">{service.title}</h3>
              <p className="mb-4 flex-1 text-sm font-light leading-relaxed text-zinc-400">{service.description}</p>
              <div className="border-t border-zinc-700/40 pt-4 font-mono text-xs uppercase tracking-widest text-zinc-200 group-hover:text-white">
                Explore Services →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 text-center lg:px-16 lg:pb-28">
        <h2 className="mb-6 text-[1.75rem] font-extrabold uppercase leading-[1.2] tracking-[0.02em] lg:text-[2.25rem]">
          INDUSTRIES WE SERVE
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-[1.05rem] font-light leading-[1.7] text-zinc-400">
          Project Cargo &amp; Heavy Logistics Solutions Across Key Industries. Mega Move India provides specialized
          heavy haulage, oversized cargo transportation, project logistics, multimodal freight, and industrial supply
          chain solutions for infrastructure, oil &amp; gas, power, mining, manufacturing, and construction projects
          across India and globally.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((item) => (
            <Link key={item.title} href={item.link} className={`${cardClass} w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}>
              <div className="mb-4 h-[200px] overflow-hidden rounded-xl border border-zinc-700/50 bg-zinc-950">
                <CardVideo src={item.video} poster={item.image} />
              </div>
              <h3 className="mb-3 text-[22px] font-extrabold uppercase leading-none tracking-wider">{item.title}</h3>
              <p className="mb-4 flex-1 text-[14.5px] font-light leading-[1.65] text-zinc-400">{item.description}</p>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-widest text-white/50 group-hover:text-white">
                Explore Sector →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
