import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "ODC & Heavy Lift Transportation Services | Hydraulic Axle Trailer Fleet | Mega Move India",
  description:
    "Specialized heavy lift transportation, ODC cargo movement, hydraulic axle trailer services, project logistics, route surveys and heavy haulage solutions across India.",
};

const recentProjects = [
  {
    title: "National Defence Project",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
    description: "Transportation of BMP-II Armoured Vehicles to Nyoma, Ladakh.",
    link: "/case-studies/national-defence-project",
  },
  {
    title: "225MT Used Machinery Import",
    image: "/images/Casestudies/225MT/225MTHeroImage.jpg",
    description: "Heavy machinery import handling and transportation.",
    link: "/case-studies/225mt-used-machinery-import",
  },
  {
    title: "Factory Relocation",
    image: "/images/Casestudies/FactoryRelocation/FactoryRelocationHeroImage.jpg",
    description: "Factory relocation project from Germany to India.",
    link: "/case-studies/factory-relocation-germany-to-india",
  },
  {
    title: "70MT Heat Condenser Export",
    image: "/images/Casestudies/HeatCondenser/HeatCondenserHeroImage.jpg",
    description: "Heavy lift export movement from Kattupalli to Brazil.",
    link: "/case-studies/70mt-heat-condenser-export",
  },
];

export default function LandTransport() {
  const services = [
    {
      title: "ODC Transportation",
      text: "Safe transportation of over-dimensional and over-weight cargo across India.",
    },
    {
      title: "Heavy Lift Logistics",
      text: "Specialized handling of transformers, turbines, reactors and industrial equipment.",
    },
    {
      title: "Hydraulic Axle Trailers",
      text: "Modern hydraulic axle trailer fleet for complex heavy haulage operations.",
    },
    {
      title: "Route Survey & Engineering",
      text: "Detailed route planning, bridge analysis and transportation engineering.",
    },
    {
      title: "Project Cargo Transportation",
      text: "End-to-end transportation solutions for industrial and infrastructure projects.",
    },
    {
      title: "Escort & Regulatory Support",
      text: "Permit management, escort arrangements and regulatory compliance support.",
    },
  ];

  return (
    <main className="bg-[#f7f7f7]">

      {/* HERO */}
      <section className="relative h-[320px] lg:h-[500px] overflow-hidden">
        <img
          src="/images/LandTransportPageHeroImage.jpeg"
          alt="Heavy Lift Transportation"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl lg:text-6xl font-light mb-2 lg:mb-4">
              Land Transportation Services
            </h1>

            <p className="text-xs lg:text-lg tracking-[2px] lg:tracking-[3px] uppercase">
              ODC Cargo • Heavy Lift • Hydraulic Axles • Project Logistics
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 py-12 lg:py-20">
        <h2 className="text-center text-2xl lg:text-[42px] font-light text-[#173f74] mb-6 lg:mb-8">
          Heavy Lift & Over Dimensional Cargo Transportation
        </h2>

        <p className="text-center text-sm lg:text-lg text-gray-600 leading-7 lg:leading-8 max-w-5xl mx-auto">
          Mega Move India specializes in over-dimensional cargo (ODC)
          transportation, heavy lift logistics, project cargo movement
          and specialized heavy haulage operations. Supported by our
          in-house fleet of hydraulic axle trailers, lowbed trailers,
          heavy-duty pullers and experienced project logistics team,
          we execute complex cargo transportation projects safely and
          efficiently throughout India.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 pb-16 lg:pb-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg lg:text-2xl font-medium text-[#173f74] mb-2 lg:mb-4">
                {item.title}
              </h3>

              <p className="text-sm lg:text-base text-gray-600 leading-6 lg:leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-14 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-center text-3xl lg:text-5xl text-[#173f74] mb-3">
            Recent Transportation Projects
          </h2>

          <p className="text-center text-sm lg:text-base text-gray-600 mb-10 lg:mb-14">
            Explore some of our recent project logistics and heavy haulage assignments.
          </p>

          <div className="overflow-hidden">
            <div className="flex gap-4 lg:gap-8 animate-projects-slider w-max">
              {[...recentProjects, ...recentProjects].map((project, index) => (
                <Link
                  key={index}
                  href={project.link}
                  className="w-[260px] lg:w-[380px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 shrink-0"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[160px] lg:h-[240px] object-cover"
                  />

                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-2xl text-[#173f74] mb-2 lg:mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm lg:text-base text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="max-w-6xl mx-auto px-4 lg:px-16 pb-16 lg:pb-20">
        <h2 className="text-center text-2xl lg:text-[42px] font-light text-[#173f74] mb-8 lg:mb-10">
          Specialized ODC & Heavy Haulage Expertise
        </h2>

        <div className="space-y-6 lg:space-y-8 text-gray-600 leading-7 lg:leading-9 text-sm lg:text-[16px]">
          <p>
            Mega Move India provides specialized transportation solutions
            for over-dimensional cargo, heavy lift equipment, industrial
            machinery, transformers, reactors, pressure vessels, wind
            energy components and infrastructure project cargo.
          </p>

          <p>
            Unlike conventional transport operators, Mega Move India
            maintains its own transportation assets and project management
            team ensuring full operational control and safety.
          </p>

          <p>
            We handle major industrial sectors including power, oil & gas,
            steel, cement, manufacturing and infrastructure projects across India.
          </p>

          <p>
            Our team manages permits, escorts, route approvals and execution
            from origin to destination.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 pb-16 lg:pb-20">
        <h2 className="text-center text-2xl lg:text-[42px] font-light text-[#173f74] mb-8 lg:mb-10">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {[
            "Power Projects",
            "Wind Energy",
            "Oil & Gas",
            "Steel Industry",
            "Infrastructure",
            "Manufacturing",
            "Cement Plants",
            "Mining Projects",
          ].map((industry) => (
            <div
              key={industry}
              className="bg-white py-5 lg:py-8 text-center border border-gray-100 shadow-sm"
            >
              <span className="text-sm lg:text-lg text-gray-700">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 lg:px-16 pb-20 lg:pb-24">
        <div className="bg-white border border-gray-200 py-10 lg:py-12 px-6 lg:px-10 text-center">
          <h2 className="text-2xl lg:text-[36px] font-light text-[#173f74] mb-4 lg:mb-6">
            Request a Transportation Quote
          </h2>

          <p className="text-sm lg:text-lg text-gray-600 mb-4 lg:mb-6">
            Send your enquiries to
          </p>

          <a
            href="mailto:landtransport@megamoveindia.com"
            className="text-lg lg:text-2xl font-medium text-[#173f74] hover:underline"
          >
            projects@megamoveindia.com
          </a>
        </div>
      </section>

    </main>
  );
}
