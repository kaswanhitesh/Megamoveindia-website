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
    description: "Our own fleet: 40 hydraulic axle lines, heavy-duty pullers, lowbed and flatbed trailers.",
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

// Page sections, in order. Each lists tile titles from `services` above.
const sections = [
  {
    id: "logistics",
    title: "Logistics",
    intro: "Heavy and over-dimensional cargo moved by road, with our own fleet and engineering team.",
    tiles: [
      "Land Transport",
      "ODC Transport",
      "In-House Equipment",
      "Transport Engineering",
      "Factory Relocation",
      "Rentals & Warehousing",
    ],
  },
  {
    id: "shipping",
    title: "Shipping",
    intro: "Cargo moved by air and sea, with customs, port handling and routing through to delivery.",
    tiles: ["Air Freight", "Ocean Freight", "Project Forwarding", "Transshipment", "Logistics & Supply Chain"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-[150px] lg:px-16 lg:pb-28 lg:pt-[170px]">
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-[2rem] font-light uppercase leading-[1.1] tracking-[0.04em] text-zinc-100 lg:text-[3.5rem]">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-zinc-400 lg:text-base">
            Integrated project logistics across air, sea and road, from route engineering to final delivery. Choose a
            service to see how we work.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.id} id={section.id} className="mb-16 scroll-mt-28 last:mb-0 lg:mb-20">
            <div className="mb-8 border-l-4 border-[#c41e1e] pl-4 lg:mb-10">
              <h2 className="text-2xl font-semibold uppercase tracking-[0.06em] text-white lg:text-3xl">{section.title}</h2>
              <p className="mt-2 text-sm font-light text-zinc-400 lg:text-base">{section.intro}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-5 lg:gap-6" data-no-reveal>
              {section.tiles.map((title) => services.find((s) => s.title === title)!).map((service) => (
                <Link
                  key={service.link}
                  href={service.link}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-900 no-underline sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)]"
                >
                  {service.video ? (
                    <CardVideo src={service.video} poster={service.image} />
                  ) : (
                    <img src={service.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left lg:p-6">
                    <h3 className="flex items-center justify-between gap-3 text-lg font-semibold uppercase tracking-wide text-white lg:text-xl">
                      {service.title}
                      <span aria-hidden="true" className="shrink-0 text-white/80 group-hover:text-white">→</span>
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm font-light leading-snug text-zinc-300">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
