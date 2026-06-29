import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Factory Relocation Services | Industrial Plant Relocation & Machinery Shifting | Mega Move India",
  description:
    "Factory relocation services including inspection engineering, dismantling, packing, loading, stuffing, transportation, unloading, installation support and industrial plant relocation solutions.",
};
export default function FactoryRelocation() {
  const services = [
    {
      title: "Inspection Engineering",
      text: "Detailed site inspections, relocation planning and risk assessments before project execution.",
    },
    {
      title: "Machinery Dismantling",
      text: "Safe dismantling of industrial equipment, production lines and manufacturing assets.",
    },
    {
      title: "Packing & Preservation",
      text: "Professional export packing and preservation solutions for sensitive machinery.",
    },
    {
      title: "Loading & Handling",
      text: "Heavy lift loading operations using specialized equipment and experienced personnel.",
    },
    {
      title: "Container Stuffing",
      text: "Expert container stuffing and cargo securing for domestic and international transportation.",
    },
    {
      title: "Transportation & Delivery",
      text: "Complete inland transportation and final delivery management.",
    },
  ];
  return (
    <main className="bg-[#f7f7f7]">
      {/* HERO */}
      <section className="relative h-[320px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=80"
          alt="Factory Relocation Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-3 lg:mb-4">
              Factory Relocation Services
            </h1>
            <p className="text-xs md:text-sm lg:text-lg tracking-[2px] lg:tracking-[3px] uppercase">
              Inspection • Dismantling • Loading • Stuffing • Relocation
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 py-12 lg:py-20">
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[42px] font-light text-[#173f74] mb-6 lg:mb-8">
          Complete Industrial Relocation Solutions
        </h2>
        <p className="text-center text-sm md:text-base lg:text-lg text-gray-600 leading-7 lg:leading-8 max-w-5xl mx-auto">
          Mega Move India provides end-to-end factory relocation and
          industrial plant shifting services for manufacturers, EPC
          contractors and industrial organizations. Our experienced
          project team manages every stage of the relocation process,
          including inspection engineering, dismantling, packing,
          loading, container stuffing, transportation, unloading and
          installation support.
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
          Industrial Machinery & Plant Relocation Expertise
        </h2>
        <div className="space-y-6 lg:space-y-8 text-gray-600 leading-7 lg:leading-9 text-sm md:text-base">
          <p>
            Factory relocation projects require careful planning,
            engineering expertise and precise execution. Mega Move India
            provides comprehensive industrial relocation solutions
            designed to minimize downtime while ensuring the safe
            movement of machinery, production equipment and industrial
            assets.
          </p>
          <p>
            Every project begins with a detailed inspection conducted by
            our experienced inspection engineers. Site surveys, machinery
            assessments, relocation planning and risk evaluations are
            performed to establish the safest and most efficient
            relocation methodology.
          </p>
          <p>
            Our specialized teams handle dismantling of production lines,
            manufacturing equipment, industrial machinery, steel
            structures and process plants. Each component is carefully
            documented, labeled and prepared for transportation to ensure
            smooth reinstallation at the destination facility.
          </p>
          <p>
            Mega Move India also provides professional loading, cargo
            handling and container stuffing services. Using specialized
            lifting equipment, hydraulic trailers and cargo securing
            techniques, we ensure machinery and equipment remain fully
            protected throughout transportation.
          </p>
          <p>
            Whether relocating a single machine, an entire production
            line or a complete industrial facility, our project
            management team coordinates dismantling, packing,
            transportation, customs formalities (where applicable),
            unloading and installation support for seamless project
            execution.
          </p>
        </div>
      </section>

      {/* PROJECT CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 pb-12 lg:pb-20">
        <h2 className="text-center text-[26px] md:text-[34px] lg:text-[42px] font-light text-[#173f74] mb-8 lg:mb-10">
          Relocation Capabilities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
          {[
            "Inspection Engineering",
            "Factory Relocation",
            "Machinery Dismantling",
            "Packing & Preservation",
            "Loading Operations",
            "Container Stuffing",
            "Heavy Transportation",
            "Installation Support",
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
            "Steel Plants",
            "Cement Plants",
            "Power Projects",
            "Automotive",
            "Food Processing",
            "Textile Industry",
            "Industrial Engineering",
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
            Request a Factory Relocation Consultation
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 lg:mb-6">
            Send your enquiries to
          </p>
          <a
            href="mailto:projects@megamoveindia.com"
            className="text-lg md:text-xl lg:text-2xl font-medium text-[#173f74] hover:underline"
          >
            projects@megamoveindia.com
          </a>
        </div>
      </section>
    </main>
  );
}
