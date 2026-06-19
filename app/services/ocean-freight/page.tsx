import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Ocean Freight Services | FCL, LCL & Breakbulk Shipping | Mega Move India",
  description:
    "International ocean freight services including FCL, LCL, breakbulk shipping, project cargo transportation, import export logistics and global sea freight forwarding solutions.",
};
export default function OceanFreight() {
  const services = [
    {
      title: "FCL Shipping",
      text: "Reliable Full Container Load services connecting India with major global trade destinations.",
    },
    {
      title: "LCL Consolidation",
      text: "Cost-effective Less than Container Load solutions for smaller cargo shipments.",
    },
    {
      title: "Breakbulk Shipping",
      text: "Specialized transportation of oversized, heavy lift and non-containerized cargo.",
    },
    {
      title: "Project Cargo",
      text: "Comprehensive planning and execution of complex project cargo movements.",
    },
    {
      title: "Import & Export Logistics",
      text: "End-to-end international shipping solutions for imports and exports.",
    },
    {
      title: "Port Handling & Customs",
      text: "Efficient cargo handling, customs clearance and documentation support.",
    },
  ];
  return (
    <main className="bg-[#f7f7f7]">
      {/* HERO */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80"
          alt="Ocean Freight Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-light mb-4">
              Ocean Freight Services
            </h1>
            <p className="text-lg tracking-[3px] uppercase">
              FCL • LCL • Breakbulk • Project Cargo
            </p>
          </div>
        </div>
      </section>
      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-16 py-20">
        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-8">
          Global Ocean Freight Solutions
        </h2>
        <p className="text-center text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
          Mega Move India provides comprehensive ocean freight services
          including FCL shipping, LCL consolidation, breakbulk cargo,
          project cargo transportation and international freight
          forwarding. Through strategic partnerships with leading
          shipping lines and global logistics networks, we deliver
          reliable and cost-effective sea freight solutions worldwide.
        </p>
      </section>
      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-16 pb-20">
        <div className="grid grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                p-8
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-medium text-[#173f74] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* SEO CONTENT */}
      <section className="max-w-6xl mx-auto px-16 pb-20">
        <h2 className="text-[42px] font-light text-[#173f74] mb-10 text-center">
          International Sea Freight & Project Cargo Expertise
        </h2>
        <div className="text-gray-600 leading-9 space-y-8 text-[16px]">
          <p>
            Ocean freight remains the most economical solution for
            international cargo transportation, offering efficient
            connectivity between global markets. Mega Move India
            manages import and export shipments through major ports,
            ensuring seamless cargo movement from origin to destination.
          </p>
          <p>
            Our ocean freight services include Full Container Load
            (FCL), Less than Container Load (LCL), breakbulk cargo,
            heavy lift shipments, project cargo logistics and
            multimodal transportation. We work closely with global
            carriers to secure competitive freight rates and reliable
            transit schedules.
          </p>
          <p>
            For oversized and over-dimensional cargo, our team provides
            specialized breakbulk and project cargo solutions supported
            by engineering studies, route planning, cargo securing and
            port coordination. We routinely manage shipments involving
            industrial equipment, transformers, machinery, wind energy
            components and infrastructure cargo.
          </p>
          <p>
            Through a combination of freight forwarding expertise,
            customs clearance capabilities and global logistics
            partnerships, Mega Move India delivers dependable ocean
            transportation solutions for industrial clients, EPC
            contractors, exporters, importers and project owners.
          </p>
        </div>
      </section>
      {/* SHIPPING SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-16 pb-20">
        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Shipping Solutions
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            "Container Shipping",
            "Breakbulk Cargo",
            "Project Cargo",
            "RoRo Solutions",
            "Heavy Lift Cargo",
            "Port Logistics",
            "Customs Clearance",
            "Multimodal Transport",
          ].map((service) => (
            <div
              key={service}
              className="
                bg-white
                py-8
                text-center
                border
                border-gray-100
                shadow-sm
              "
            >
              <span className="text-gray-700 text-lg">
                {service}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-16 pb-24">
        <div className="bg-white border border-gray-200 py-12 px-10 text-center">
          <h2 className="text-[36px] font-light text-[#173f74] mb-6">
            Request an Ocean Freight Quote
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Send your enquiries to
          </p>
          <a
            href="mailto:oceanfreight@megamoveindia.com"
            className="text-2xl font-medium text-[#173f74] hover:underline"
          >
            oceanfreight@megamoveindia.com
          </a>
        </div>
      </section>
    </main>
  );
}
