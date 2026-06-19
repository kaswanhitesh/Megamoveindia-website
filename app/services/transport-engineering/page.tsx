import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Transport Engineering Services | Route Survey & Heavy Cargo Engineering | Mega Move India",
  description:
    "Transport engineering services including route surveys, bridge analysis, cargo securing studies, transport feasibility studies, lifting plans, heavy haulage engineering and ODC transportation planning.",
};

export default function TransportEngineering() {
  const services = [
    {
      title: "Route Surveys",
      text: "Detailed route inspections to identify transportation constraints and optimize cargo movement.",
    },
    {
      title: "Bridge Analysis",
      text: "Structural assessment of bridges and critical infrastructure along transportation routes.",
    },
    {
      title: "Transport Feasibility Studies",
      text: "Comprehensive evaluation of transportation methods, routes and operational requirements.",
    },
    {
      title: "Cargo Securing Plans",
      text: "Engineering-based lashing, dunnage and cargo securing calculations.",
    },
    {
      title: "Heavy Lift Planning",
      text: "Lift studies, crane selection and heavy cargo handling methodologies.",
    },
    {
      title: "Project Logistics Engineering",
      text: "Integrated transport engineering support for complex industrial projects.",
    },
  ];

  return (
    <main className="bg-[#f7f7f7]">

      {/* HERO */}

      <section className="relative h-[500px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
          alt="Transport Engineering Services"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <h1 className="text-6xl font-light mb-4">
              Transport Engineering Capabilities
            </h1>

            <p className="text-lg tracking-[3px] uppercase">
              Route Surveys • Feasibility Studies • Heavy Lift Engineering
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-7xl mx-auto px-16 py-20">

        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-8">
          Engineering-Led Transportation Solutions
        </h2>

        <p className="text-center text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
          Mega Move India provides specialized transport engineering
          services for heavy lift cargo, over-dimensional cargo,
          project logistics and industrial transportation projects.
          Our engineering team evaluates every movement through route
          surveys, feasibility studies, bridge assessments and cargo
          securing calculations to ensure safe and efficient project
          execution.
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
          Specialized Transport Engineering Expertise
        </h2>

        <div className="space-y-8 text-gray-600 leading-9 text-[16px]">

          <p>
            Successful transportation of heavy and oversized cargo
            requires detailed engineering analysis before movement
            begins. Mega Move India conducts comprehensive transport
            engineering studies that help identify operational risks,
            route constraints and infrastructure limitations before
            project execution.
          </p>

          <p>
            Our engineering capabilities include detailed route surveys,
            bridge and culvert assessments, turning radius analysis,
            overhead obstruction identification and transportation
            feasibility studies. These evaluations ensure that heavy
            cargo can be transported safely while minimizing operational
            disruptions.
          </p>

          <p>
            We prepare transport engineering reports for transformers,
            reactors, pressure vessels, wind turbine components,
            industrial machinery, power plant equipment and other
            heavy lift cargo requiring specialized transportation
            methodologies.
          </p>

          <p>
            Cargo securing is another critical aspect of transport
            engineering. Our specialists develop dunnage plans,
            lashing calculations and cargo securing methodologies
            to protect equipment throughout transportation,
            transshipment and storage operations.
          </p>

          <p>
            Through our engineering-driven approach, Mega Move India
            delivers reliable project logistics solutions that combine
            technical expertise, operational experience and practical
            transportation planning for some of the most challenging
            cargo movements in the industry.
          </p>

        </div>

      </section>

      {/* CAPABILITIES */}

      <section className="max-w-7xl mx-auto px-16 pb-20">

        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Engineering Capabilities
        </h2>

        <div className="grid grid-cols-4 gap-6">

          {[
            "Route Surveys",
            "Bridge Analysis",
            "Feasibility Studies",
            "Cargo Securing Plans",
            "Lashing Calculations",
            "Heavy Lift Planning",
            "Transport Simulations",
            "Project Logistics Engineering",
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

      {/* PROJECT TYPES */}

      <section className="max-w-7xl mx-auto px-16 pb-20">

        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Project Types
        </h2>

        <div className="grid grid-cols-4 gap-6">

          {[
            "Transformers",
            "Reactors",
            "Wind Turbines",
            "Industrial Machinery",
            "Power Projects",
            "Oil & Gas Equipment",
            "Mining Equipment",
            "Infrastructure Projects",
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
            Request a Transport Engineering Assessment
          </h2>

          <p className="text-gray-600 text-lg mb-6">
            Send your enquiries to
          </p>

          <a
            href="mailto:engineering@megamoveindia.com"
            className="text-2xl font-medium text-[#173f74] hover:underline"
          >
            engineering@megamoveindia.com
          </a>

        </div>

      </section>

    </main>
  );
}
