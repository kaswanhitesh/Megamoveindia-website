import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Equipment Rentals & Warehousing Services | Manlift Rental | Mega Move India",
  description:
    "Truck mounted manlift rental, aerial lift rental, warehousing solutions, cargo handling, loading and unloading services and project logistics support by Mega Move India.",
};

export default function RentalsWarehousing() {
  const services = [
    {
      title: "Truck Mounted Manlifts",
      text: "Safe and efficient access solutions for maintenance, construction and industrial applications.",
    },
    {
      title: "Aerial Lift Rental",
      text: "Reliable aerial work platforms for short-term and long-term project requirements.",
    },
    {
      title: "Warehousing Services",
      text: "Secure storage facilities for project cargo, industrial equipment and commercial goods.",
    },
    {
      title: "Loading & Unloading",
      text: "Professional cargo handling services for heavy and oversized equipment.",
    },
    {
      title: "Project Logistics Support",
      text: "Integrated logistics support for infrastructure, industrial and energy projects.",
    },
    {
      title: "Material Handling Equipment",
      text: "Specialized equipment and trained operators for complex cargo operations.",
    },
  ];

  return (
    <main className="bg-[#f7f7f7]">

      {/* HERO */}

      <section className="relative h-[500px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
          alt="Equipment Rentals & Warehousing"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <h1 className="text-6xl font-light mb-4">
              Equipment Rentals & Warehousing
            </h1>

            <p className="text-lg tracking-[3px] uppercase">
              Manlifts • Warehousing • Cargo Handling • Logistics Support
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-7xl mx-auto px-16 py-20">

        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-8">
          Equipment Rental & Logistics Support Solutions
        </h2>

        <p className="text-center text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
          Mega Move India provides specialized equipment rental,
          warehousing and cargo handling solutions for industrial,
          infrastructure and project logistics requirements. Supported
          by our in-house truck mounted manlifts, aerial lifts,
          experienced operators and logistics professionals, we deliver
          reliable support services for projects across India.
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

      {/* SEO SECTION */}

      <section className="max-w-6xl mx-auto px-16 pb-20">

        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Specialized Equipment & Warehousing Capabilities
        </h2>

        <div className="space-y-8 text-gray-600 leading-9 text-[16px]">

          <p>
            Mega Move India offers comprehensive equipment rental and
            warehousing services designed to support project logistics,
            industrial operations and infrastructure developments.
            Our solutions combine specialized equipment, trained
            operators and logistics expertise to ensure safe and
            efficient project execution.
          </p>

          <p>
            Our in-house fleet includes truck mounted manlifts and
            aerial work platforms suitable for industrial maintenance,
            construction activities, plant shutdowns, inspections,
            installation work and infrastructure projects. All
            equipment is maintained to high operational standards and
            supplied with experienced operators where required.
          </p>

          <p>
            We also provide professional loading and unloading services
            for heavy cargo, machinery, industrial equipment, project
            cargo and oversized consignments. Our experienced teams
            utilize appropriate lifting and handling methods to ensure
            cargo safety throughout the operation.
          </p>

          <p>
            In addition to equipment rentals, Mega Move India offers
            warehousing and storage solutions for project cargo,
            industrial materials and commercial goods. Our facilities
            support temporary storage, inventory management, cargo
            consolidation and project logistics activities.
          </p>

          <p>
            Whether supporting a major infrastructure project,
            manufacturing facility, energy project or industrial
            operation, Mega Move India delivers dependable equipment,
            warehousing and logistics support services throughout India.
          </p>

        </div>

      </section>

      {/* CAPABILITIES */}

      <section className="max-w-7xl mx-auto px-16 pb-20">

        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Key Capabilities
        </h2>

        <div className="grid grid-cols-4 gap-6">

          {[
            "Truck Mounted Manlifts",
            "Aerial Lift Rental",
            "Warehousing",
            "Heavy Cargo Handling",
            "Loading Services",
            "Unloading Services",
            "Project Logistics Support",
            "Material Handling",
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

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-16 pb-24">

        <div className="bg-white border border-gray-200 py-12 px-10 text-center">

          <h2 className="text-[36px] font-light text-[#173f74] mb-6">
            Request Equipment Rental & Warehousing Support
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Send your enquiries to
          </p>

          <a
            href="mailto:rentals@megamoveindia.com"
            className="text-2xl font-medium text-[#173f74] hover:underline"
          >
            rentals@megamoveindia.com
          </a>

        </div>

      </section>

    </main>
  );
}
