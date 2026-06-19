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
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1800&q=80"
          alt="Logistics and Supply Chain Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-light mb-4">
              Logistics & Supply Chain Solutions
            </h1>
            <p className="text-lg tracking-[3px] uppercase">
              Customs Clearance • Port Handling • Documentation • Cargo Visibility
            </p>
          </div>
        </div>
      </section>
      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-16 py-20">
        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-8">
          End-to-End Logistics & Supply Chain Management
        </h2>
        <p className="text-center text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
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
        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Comprehensive Supply Chain Support Services
        </h2>
        <div className="space-y-8 text-gray-600 leading-9 text-[16px]">
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
      <section className="max-w-7xl mx-auto px-16 pb-20">
        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Key Capabilities
        </h2>
        <div className="grid grid-cols-4 gap-6">
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
                py-8
                text-center
                border
                border-gray-100
                shadow-sm
              "
            >
              <span className="text-gray-700 text-lg">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-16 pb-20">
        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Industries We Support
        </h2>
        <div className="grid grid-cols-4 gap-6">
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
                py-8
                text-center
                border
                border-gray-100
                shadow-sm
              "
            >
              <span className="text-gray-700 text-lg">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-16 pb-24">
        <div className="bg-white border border-gray-200 py-12 px-10 text-center">
          <h2 className="text-[36px] font-light text-[#173f74] mb-6">
            Request Logistics & Supply Chain Support
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Send your enquiries to
          </p>
          <a
            href="mailto:logistics@megamoveindia.com"
            className="text-2xl font-medium text-[#173f74] hover:underline"
          >
            logistics@megamoveindia.com
          </a>
        </div>
      </section>
    </main>
  );
}
