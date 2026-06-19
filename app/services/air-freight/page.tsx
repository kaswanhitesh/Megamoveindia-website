import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Air Freight Services | International Air Cargo Solutions | Mega Move India",
  description:
    "International air freight services, air cargo transportation, charter solutions, project cargo airlift, oversized cargo movement and global logistics services by Mega Move India.",
};

export default function AirFreight() {
  const services = [
    {
      title: "Import Air Freight",
      text: "Fast and reliable import cargo handling from major international airports worldwide.",
    },
    {
      title: "Export Air Freight",
      text: "Worldwide export solutions for commercial, industrial and project cargo shipments.",
    },
    {
      title: "Air Charter Services",
      text: "Dedicated charter aircraft solutions for urgent, oversized and critical cargo.",
    },
    {
      title: "Door-to-Door Delivery",
      text: "Complete pickup, customs clearance and final delivery management.",
    },
    {
      title: "Project Cargo Airlift",
      text: "Specialized handling of heavy lift and oversized project cargo by air.",
    },
    {
      title: "Customs Clearance",
      text: "Professional customs brokerage support for seamless cargo movement.",
    },
  ];

  return (
    <main className="bg-[#f7f7f7]">

      {/* HERO */}

      <section className="relative h-[500px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=80"
          alt="Air Freight Services"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <h1 className="text-6xl font-light mb-4">
              Air Freight Services
            </h1>

            <p className="text-lg tracking-[3px] uppercase">
              Global Air Cargo • Charter Solutions • Time Critical Shipments
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-7xl mx-auto px-16 py-20">

        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-8">
          Global Air Freight Solutions
        </h2>

        <p className="text-center text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
          Mega Move India provides international air freight services,
          air cargo transportation, project cargo airlift solutions,
          heavy lift air freight, oversized cargo transportation,
          import air freight, export air freight, charter aircraft
          solutions and time-critical logistics services across major
          global trade routes.
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
          Why Choose Mega Move India For Air Freight?
        </h2>

        <div className="text-gray-600 leading-9 space-y-8 text-[16px]">

          <p>
            Mega Move India delivers reliable international air freight
            solutions for businesses requiring fast, secure and efficient
            cargo transportation. Through strategic airline partnerships
            and an extensive logistics network, we manage air cargo
            movements across Asia, Europe, the Middle East, Africa and
            the Americas.
          </p>

          <p>
            Our air freight services include import and export cargo
            handling, customs clearance, charter aircraft solutions,
            project cargo airlift operations, oversized cargo
            transportation and time-critical shipments. We coordinate
            every stage of the shipment process to ensure complete
            visibility and operational efficiency.
          </p>

          <p>
            Whether transporting industrial equipment, engineering
            components, project cargo, high-value goods or urgent
            commercial shipments, our experienced logistics team
            develops customized solutions tailored to project and
            customer requirements.
          </p>

          <p>
            Backed by global freight forwarding expertise and a
            commitment to service excellence, Mega Move India
            continues to provide dependable air cargo solutions for
            manufacturers, EPC contractors, traders and industrial
            organizations worldwide.
          </p>

        </div>

      </section>

      {/* INDUSTRIES */}

      <section className="max-w-7xl mx-auto px-16 pb-20">

        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-4 gap-6">

          {[
            "Power & Energy",
            "Oil & Gas",
            "Renewable Energy",
            "Infrastructure",
            "Mining",
            "Manufacturing",
            "Steel",
            "Construction",
          ].map((industry) => (
            <div
              key={industry}
              className="
                bg-white
                py-8
                text-center
                shadow-sm
                border
                border-gray-100
              "
            >
              <span className="text-gray-700 text-lg">
                {industry}
              </span>
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT CTA */}

      <section className="max-w-7xl mx-auto px-16 pb-24">

        <div className="bg-white border border-gray-200 py-12 px-10 text-center">

          <h2 className="text-[36px] font-light text-[#173f74] mb-6">
            Request an Air Freight Quote
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Send your enquiries to
          </p>

          <a
            href="mailto:airfreight@megamoveindia.com"
            className="text-2xl font-medium text-[#173f74] hover:underline"
          >
            airfreight@megamoveindia.com
          </a>

        </div>

      </section>

    </main>
  );
}
