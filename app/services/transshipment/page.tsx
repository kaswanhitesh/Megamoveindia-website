import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Transshipment Services | Global Cargo Routing & Hub Operations | Mega Move India",
  description:
    "International transshipment services, cargo routing, hub port operations, breakbulk transshipment, project cargo transshipment, container transfers and multimodal logistics solutions by Mega Move India.",
};
export default function Transshipment() {
  const services = [
    {
      title: "Container Transshipment",
      text: "Efficient transfer of containers through strategic global transshipment hubs.",
    },
    {
      title: "Breakbulk Transshipment",
      text: "Specialized handling of heavy lift and breakbulk cargo between vessels and transport modes.",
    },
    {
      title: "Project Cargo Routing",
      text: "Customized routing solutions for oversized and project cargo shipments.",
    },
    {
      title: "Port Coordination",
      text: "Complete coordination with terminals, ports and shipping lines.",
    },
    {
      title: "Cargo Consolidation",
      text: "Cost-effective cargo consolidation and redistribution services.",
    },
    {
      title: "Multimodal Connections",
      text: "Seamless integration between ocean, air and land transportation networks.",
    },
  ];
  return (
    <main className="bg-[#f7f7f7]">
      {/* HERO */}
      <section className="relative h-[320px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80"
          alt="Transshipment Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-3 lg:mb-4">
              Transshipment Services
            </h1>
            <p className="text-xs md:text-sm lg:text-lg tracking-[2px] lg:tracking-[3px] uppercase">
              Global Cargo Routing • Hub Operations • Multimodal Logistics
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 py-12 lg:py-20">
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[42px] font-light text-[#173f74] mb-6 lg:mb-8">
          Strategic Transshipment & Cargo Routing Solutions
        </h2>
        <p className="text-center text-sm md:text-base lg:text-lg text-gray-600 leading-7 lg:leading-8 max-w-5xl mx-auto">
          Mega Move India provides reliable transshipment services for
          international container cargo, breakbulk shipments, project
          cargo and multimodal transportation requirements. Through our
          global logistics network and strategic port partnerships, we
          optimize cargo routing to improve transit times, reduce costs
          and ensure efficient movement across international trade lanes.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 pb-12 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                p-5 lg:p-8
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-[#173f74] mb-3 lg:mb-4">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-6 lg:leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-6xl mx-auto px-4 lg:px-16 pb-12 lg:pb-20">
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[42px] font-light text-[#173f74] mb-8 lg:mb-10">
          International Transshipment Expertise
        </h2>
        <div className="space-y-6 lg:space-y-8 text-gray-600 leading-7 lg:leading-9 text-sm md:text-base">
          <p>
            Transshipment plays a critical role in global logistics by
            enabling cargo to move efficiently between regions where
            direct shipping services may not be available. Mega Move India
            provides end-to-end transshipment solutions through major
            international hubs, connecting cargo seamlessly between
            origin and destination markets.
          </p>
          <p>
            Our services cover containerized cargo, breakbulk shipments,
            project cargo, heavy lift equipment and out-of-gauge
            consignments. We coordinate vessel schedules, cargo transfers,
            terminal operations and onward transportation to ensure smooth
            cargo movement through transshipment ports.
          </p>
          <p>
            For project logistics and heavy cargo movements, our team
            develops customized routing solutions that consider vessel
            availability, cargo dimensions, port capabilities and inland
            transportation requirements. This enables safe and efficient
            movement of oversized cargo through international logistics
            hubs.
          </p>
          <p>
            Through strong relationships with shipping lines, port
            operators, freight forwarders and logistics partners, Mega
            Move India delivers dependable transshipment services that
            provide flexibility, cost efficiency and operational control
            throughout the supply chain.
          </p>
          <p>
            Whether moving containers between global trade routes or
            coordinating breakbulk cargo transfers through major hub
            ports, Mega Move India ensures complete visibility and
            professional management at every stage of the transshipment
            process.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 pb-12 lg:pb-20">
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[42px] font-light text-[#173f74] mb-8 lg:mb-10">
          Transshipment Capabilities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {[
            "Container Transshipment",
            "Breakbulk Cargo",
            "Project Cargo",
            "Cargo Consolidation",
            "Hub Port Operations",
            "Multimodal Routing",
            "Cargo Monitoring",
            "Global Logistics Network",
          ].map((item) => (
            <div
              key={item}
              className="
                bg-white
                py-5 lg:py-8
                text-center
                border
                border-gray-100
                shadow-sm
              "
            >
              <span className="text-sm md:text-base lg:text-lg text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 pb-12 lg:pb-20">
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[42px] font-light text-[#173f74] mb-8 lg:mb-10">
          Industries We Support
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {[
            "Manufacturing",
            "Power Projects",
            "Oil & Gas",
            "Infrastructure",
            "Mining",
            "Steel Industry",
            "Renewable Energy",
            "Global Trade",
          ].map((industry) => (
            <div
              key={industry}
              className="
                bg-white
                py-5 lg:py-8
                text-center
                border
                border-gray-100
                shadow-sm
              "
            >
              <span className="text-sm md:text-base lg:text-lg text-gray-700">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 pb-16 lg:pb-24">
        <div className="bg-white border border-gray-200 py-8 lg:py-12 px-6 lg:px-10 text-center">
          <h2 className="text-[24px] md:text-[30px] lg:text-[36px] font-light text-[#173f74] mb-4 lg:mb-6">
            Request a Transshipment Solution
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 lg:mb-6">
            Send your enquiries to
          </p>
          <a
            href="mailto:transshipment@megamoveindia.com"
            className="text-lg md:text-xl lg:text-2xl font-medium text-[#173f74] hover:underline"
          >
            transshipment@megamoveindia.com
          </a>
        </div>
      </section>
    </main>
  );
}
