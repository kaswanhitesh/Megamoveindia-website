import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Logistics & Supply Chain Solutions | Customs Clearance & Port Handling | Mega Move India",
  description:
    "Integrated logistics and supply chain solutions including customs clearance, port handling, documentation, dunnage, lashing, cargo supervision, local support and real-time shipment tracking services.",
};
export default function LogisticsSupplyChain() {
  const services = [
    {
      title: "Customs Clearance",
      text: "Import and export customs clearance services with complete regulatory compliance support.",
    },
    {
      title: "Port Handling",
      text: "Efficient cargo handling, terminal coordination and port logistics management.",
    },
    {
      title: "Documentation",
      text: "Complete shipping documentation, permits and trade compliance management.",
    },
    {
      title: "Dunnage & Lashing",
      text: "Professional cargo securing, packing, dunnage and lashing solutions.",
    },
    {
      title: "Local Support Services",
      text: "On-ground coordination, cargo supervision and project logistics support.",
    },
    {
      title: "Real-Time Updates",
      text: "Continuous shipment visibility and proactive cargo status reporting.",
    },
  ];
  return (
    <main className="bg-[#f7f7f7]">
      {/* HERO */}
      <section className="relative h-[320px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1800&q=80"
          alt="Logistics and Supply Chain Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-3 lg:mb-4">
              Logistics & Supply Chain Solutions
            </h1>
            <p className="text-xs md:text-sm lg:text-lg tracking-[2px] lg:tracking-[3px] uppercase">
              Customs Clearance • Port Handling • Documentation • Cargo Visibility
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 py-12 lg:py-20">
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[42px] font-light text-[#173f74] mb-6 lg:mb-8">
          End-to-End Logistics & Supply Chain Management
        </h2>
        <p className="text-center text-sm md:text-base lg:text-lg text-gray-600 leading-7 lg:leading-8 max-w-5xl mx-auto">
          Mega Move India provides integrated logistics and supply chain
          solutions designed to streamline cargo movement from origin to
          destination. Our services include customs clearance, port
          handling, cargo supervision, documentation management,
          dunnage and lashing solutions, local operational support and
          real-time shipment visibility for domestic and international
          cargo movements.
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
          Comprehensive Supply Chain Support Services
        </h2>
        <div className="space-y-6 lg:space-y-8 text-gray-600 leading-7 lg:leading-9 text-sm md:text-base">
          <p>
            Effective supply chain management requires more than
            transportation. Mega Move India provides complete logistics
            support services that ensure cargo moves efficiently through
            every stage of the supply chain. Our experienced logistics
            professionals coordinate customs formalities, port operations,
            cargo handling, documentation and delivery processes to
            minimize delays and maximize operational efficiency.
          </p>
          <p>
            Our customs clearance services cover both import and export
            shipments, ensuring compliance with regulatory requirements,
            customs procedures and trade regulations. We coordinate
            documentation, declarations, duty assessments and customs
            formalities to facilitate smooth cargo clearance through
            ports, airports and inland customs locations.
          </p>
          <p>
            Mega Move India also provides specialized port handling
            services including cargo supervision, terminal coordination,
            vessel operations support, breakbulk cargo handling and
            project cargo management. Our local teams work closely with
            port authorities, terminal operators and service providers
            to ensure seamless execution of logistics operations.
          </p>
          <p>
            Cargo protection remains a critical element of supply chain
            management. Our dunnage and lashing services are designed to
            secure cargo during transportation, handling and storage.
            We provide customized cargo securing solutions for containerized,
            breakbulk, heavy lift and project cargo shipments.
          </p>
          <p>
            Through continuous communication and real-time shipment
            updates, clients receive complete visibility of their cargo
            status. Our proactive reporting system enables customers to
            monitor shipment progress, milestone completion and delivery
            schedules throughout the logistics process.
          </p>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 pb-12 lg:pb-20">
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[42px] font-light text-[#173f74] mb-8 lg:mb-10">
          Key Capabilities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {[
            "Customs Clearance",
            "Port Handling",
            "Documentation",
            "Dunnage Services",
            "Lashing Services",
            "Cargo Supervision",
            "Local Support",
            "Real-Time Updates",
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
            "Power & Energy",
            "Oil & Gas",
            "Infrastructure",
            "Manufacturing",
            "Mining",
            "Steel Industry",
            "Renewable Energy",
            "Project Cargo",
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
            Request Logistics & Supply Chain Support
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 lg:mb-6">
            Send your enquiries to
          </p>
          <a
            href="mailto:logistics@megamoveindia.com"
            className="text-lg md:text-xl lg:text-2xl font-medium text-[#173f74] hover:underline"
          >
            logistics@megamoveindia.com
          </a>
        </div>
      </section>
    </main>
  );
}
