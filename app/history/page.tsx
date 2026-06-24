import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our History | Mega Move India",
  description:
    "Explore the legacy and milestone achievements of Mega Move India Private Limited, from our origins in heavy haulage in 2005 to full-scale global logistics integration in 2025 and beyond.",
};

export default function HistoryPage() {
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

  return (
    <main className="bg-[#f7f7f7] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[280px] lg:h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
          alt="Mega Move India History"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl lg:text-5xl font-light mb-3">Our History</h1>
            <p className="text-xs lg:text-base tracking-[2px] uppercase">
              A Legacy of Engineering Logistics • Built on Trust Since 2005
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-6 py-12 lg:py-16 text-center">
        <h2 className="text-[30px] lg:text-[40px] font-light text-[#173f74] mb-6">
          Our Journey
        </h2>
        <p className="text-[15px] lg:text-[17px] text-gray-600 leading-8">
          Mega Move India’s roots go back over two decades. Over the years, we
          have transitioned from a regional heavy transporter into an integrated,
          multinational project forwarding and logistics service provider. By combining
          advanced engineering, in-house machinery fleets, and global carrier alliances,
          we continue to deliver on our promise: Moving the Immovable. Delivering the Impossible.
        </p>
      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="relative border-l-2 border-[#173f74] ml-4 md:ml-32 py-4 space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Dot indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#173f74] border-4 border-white shadow-sm" />
              
              {/* Milestone Details */}
              <div className="pl-6 md:pl-10">
                <div className="md:absolute md:-left-28 md:top-0 md:w-20 md:text-right font-bold text-xl lg:text-2xl text-[#173f74]">
                  {milestone.year}
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
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
