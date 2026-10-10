import Link from "next/link";
import { pageMetadata } from "@/app/lib/seo";
import CardVideo from "@/app/components/CardVideo";

export const metadata = pageMetadata({
  path: "/services/",
  title: "Our Services | Project Logistics, ODC Transport & Freight Forwarding | Mega Move India",
  description:
    "All Mega Move India services in one place: air and ocean freight, land transport, ODC transport, in-house equipment, project forwarding, transport engineering, factory relocation, rentals, supply chain and transshipment.",
});

type Service = {
  title: string;
  description: string;
  link: string;
  image: string;
  video?: string;
};

const services: Service[] = [
  {
    title: "Air Freight",
    description: "Urgent, high-value and time-critical cargo by air, including charters and door-to-door project airlift.",
    link: "/services/air-freight/",
    image: "/images/AirFreightHeroImage.webp",
    video: "/images/AirFreight.mp4",
  },
  {
    title: "Ocean Freight",
    description: "FCL, LCL, breakbulk and project cargo shipping through strategic carrier partnerships worldwide.",
    link: "/services/ocean-freight/",
    image: "/images/OceanfreightHeroCardImage.webp",
    video: "/images/OceanFreightOptimizedV2.mp4",
  },
  {
    title: "Land Transport",
    description: "Heavy haulage across India on hydraulic axle trailers, low-beds and specialised vehicles.",
    link: "/services/land-transport/",
    image: "/images/LandTransportCardHeroImage.webp",
    video: "/images/Land_transport.mp4",
  },
  {
    title: "ODC Transport",
    description: "Over-dimensional cargo moved end to end: route survey, permits, escorts and our own ODC fleet.",
    link: "/odc-transport/",
    image: "/images/industries/industry_power_energy.webp",
    video: "/images/oil2.mp4",
  },
  {
    title: "In-House Equipment",
    description: "Our own fleet: 40 hydraulic axle lines, heavy-duty pullers, lowbed and flatbed trailers, manlifts and lashing gear.",
    link: "/equipment/",
    image: "/images/Casestudies/Project-10/Project10_Gallery3.webp",
  },
  {
    title: "Project Forwarding",
    description: "Breakbulk and out-of-gauge project cargo managed from factory to foundation, across borders.",
    link: "/services/project-forwarding/",
    image: "/images/industries/industry_oil_gas.webp",
    video: "/images/oil1_norm.mp4",
  },
  {
    title: "Transport Engineering",
    description: "Route surveys, bridge analysis, lifting plans and cargo securing studies before a load moves.",
    link: "/services/transport-engineering/",
    image: "/images/industries/industry_infrastructure.webp",
    video: "/images/THE_MUMBAI_LINK_Optimized.mp4",
  },
  {
    title: "Factory Relocation",
    description: "Dismantling, packing, transport and re-installation support for complete plants and production lines.",
    link: "/services/factory-relocation/",
    image: "/images/industries/industry_industrial_plants.webp",
    video: "/images/industrial_final.mp4",
  },
  {
    title: "Rentals & Warehousing",
    description: "Truck-mounted manlifts, aerial work platforms, warehousing and loading or unloading support.",
    link: "/services/rentals-warehousing/",
    image: "/images/RentalsCardHeroImage.webp",
    video: "/images/Rental_Warehouse_Final.mp4",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Customs clearance, port handling, documentation, lashing and cargo supervision in one chain.",
    link: "/services/logistics-supply-chain/",
    image: "/images/Casestudies/Project-6/Project6_Gallery1.webp",
  },
  {
    title: "Transshipment",
    description: "Cargo routing through hub ports, breakbulk and container transfers, and multimodal connections.",
    link: "/services/transshipment/",
    image: "/images/Casestudies/Project-2/Project2_Galleryheroimage.webp",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative bg-black text-white">
      {/* Slow-drifting colour glows behind the glass cards, as on the homepage */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="card-glow card-glow-1" />
        <div className="card-glow card-glow-2" />
        <div className="card-glow card-glow-3" />
        <div className="card-glow card-glow-4" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-[150px] text-center lg:px-16 lg:pb-28 lg:pt-[170px]">
        <h1 className="mb-4 text-[2rem] font-light uppercase leading-[1.1] tracking-[0.04em] text-zinc-100 lg:text-[3.5rem]">
          Our Services
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-sm font-light leading-relaxed text-zinc-400 lg:text-base">
          Integrated project logistics across air, sea and road, from route engineering to final delivery. Choose a
          service to see how we work.
        </p>

        <div className="flex flex-wrap justify-center gap-6" data-no-reveal>
          {services.map((service) => (
            <Link
              key={service.link}
              href={service.link}
              className="glass-card group flex w-full flex-col rounded-2xl p-4 text-center no-underline sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] lg:p-5"
            >
              <div className="mb-4 h-[200px] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950">
                {service.video ? (
                  <CardVideo src={service.video} poster={service.image} />
                ) : (
                  <img src={service.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                )}
              </div>
              <h2 className="mb-3 text-lg font-medium uppercase tracking-wide text-zinc-900">{service.title}</h2>
              <p className="mb-4 flex-1 text-sm font-light leading-relaxed text-zinc-600">{service.description}</p>
              <div className="border-t border-zinc-200 pt-4 font-mono text-xs uppercase tracking-widest text-zinc-800 group-hover:text-black">
                Explore Service →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
