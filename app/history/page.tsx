import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our History | Mega Move India",
  description:
    "Explore the legacy and milestone achievements of Mega Move India Private Limited, from our origins in heavy haulage in 2005 to full-scale global logistics integration in 2025 and beyond.",
};

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

export default function HistoryPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-white/10 selection:text-white">
      {/* Inject custom styling to dynamically transform the global header and footer to match the dark premium branding */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: #09090b !important; }
        header { background-color: #09090b !important; border-bottom-color: #18181b !important; }
        header p { color: #71717a !important; }
        header button { color: #a1a1aa !important; }
        header img { filter: brightness(0) invert(1) !important; }
        footer { background-color: #09090b !important; border-top-color: #18181b !important; }
        footer p, footer span, footer a { color: #a1a1aa !important; }
        footer h3, footer h4, footer strong { color: #f4f4f5 !important; }
        footer hr { border-color: #18181b !important; }
      `}} />

      {/* HERO SECTION */}
      <section className="relative h-[280px] lg:h-[450px] overflow-hidden border-b border-zinc-900">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
          alt="Mega Move India History"
          className="w-full h-full object-cover opacity-30 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl lg:text-6xl font-extralight uppercase tracking-[0.2em] mb-4 text-white">
              OUR HISTORY
            </h1>
            <p className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-zinc-400 font-mono">
              A Legacy of Engineering Logistics &bull; Built on Trust Since 2005
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-16 lg:py-24 text-center">
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.25em] mb-3 block">
          COMPANY CHRONICLE
        </span>
        <h2 className="text-2xl lg:text-3xl font-light text-zinc-100 tracking-wide mb-6">
          OUR JOURNEY
        </h2>
        <p className="text-sm lg:text-base text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
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
              <div className="absolute -left-[6.5px] top-[26px] w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950 group-hover:bg-zinc-100 group-hover:border-zinc-950 transition-colors duration-300" />
              
              {/* Milestone Details */}
              <div className="pl-8 md:pl-12">
                <div className="md:absolute md:-left-28 md:top-6 md:w-20 md:text-right font-mono font-semibold text-lg text-zinc-400 group-hover:text-zinc-100 transition-colors duration-300">
                  {milestone.year}
                </div>
                <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/80 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:bg-zinc-900/50">
                  <h3 className="text-base md:text-lg font-medium text-zinc-100 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
