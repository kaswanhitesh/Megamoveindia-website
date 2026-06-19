import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Project Forwarding Services | Breakbulk & OOG Cargo Specialists | Mega Move India",
  description:
    "Project forwarding services, breakbulk shipping, out of gauge cargo transportation, heavy lift logistics, project cargo management and global freight forwarding solutions by Mega Move India.",
};
export default function ProjectForwarding() {
  const services = [
    {
      title: "Project Cargo Management",
      text: "Complete planning, coordination and execution of complex project cargo movements worldwide.",
    },
    {
      title: "Breakbulk Shipping",
      text: "Specialized handling and transportation of non-containerized heavy lift cargo.",
    },
    {
      title: "Out of Gauge (OOG) Cargo",
      text: "Expert solutions for oversized cargo exceeding standard container dimensions.",
    },
    {
      title: "Heavy Lift Logistics",
      text: "Engineering-led logistics solutions for heavy and over-dimensional cargo.",
    },
    {
      title: "Multimodal Transportation",
      text: "Integrated sea, air and land transportation for project cargo requirements.",
    },
    {
      title: "Route Survey & Engineering",
      text: "Detailed transportation planning, route assessments and cargo securing studies.",
    },
  ];
  return (
    <main className="bg-[#f7f7f7]">
      {/* HERO */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80"
          alt="Project Forwarding Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-light mb-4">
              Project Forwarding Services
            </h1>
            <p className="text-lg tracking-[3px] uppercase">
              Breakbulk • OOG Cargo • Heavy Lift • Project Logistics
            </p>
          </div>
        </div>
      </section>
      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-16 py-20">
        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-8">
          Global Project Forwarding Expertise
        </h2>
        <p className="text-center text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
          Mega Move India provides specialized project forwarding,
          breakbulk shipping, out of gauge (OOG) cargo transportation,
          heavy lift logistics and project cargo management solutions.
          With over 10 years of industry experience and expertise in
          handling complex cargo movements, we deliver reliable and
          efficient logistics solutions for industrial and infrastructure
          projects across the globe.
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
          Breakbulk & Out of Gauge Cargo Specialists
        </h2>
        <div className="space-y-8 text-gray-600 leading-9 text-[16px]">
          <p>
            Mega Move India specializes in project forwarding services
            for oversized, heavy lift and complex cargo movements.
            Backed by more than a decade of practical industry
            experience, our team manages every stage of project cargo
            transportation from planning and engineering to execution
            and final delivery.
          </p>
          <p>
            Our expertise includes breakbulk shipping, out of gauge
            cargo transportation, heavy lift cargo handling and
            multimodal logistics solutions. We work closely with vessel
            operators, shipping lines, port authorities and inland
            transportation partners to ensure safe and timely cargo
            movement across international trade routes.
          </p>
          <p>
            We regularly handle project cargo including transformers,
            reactors, pressure vessels, wind energy components,
            industrial machinery, steel structures, mining equipment
            and infrastructure project cargo requiring specialized
            logistics planning and execution.
          </p>
          <p>
            Through our extensive global network and project logistics
            expertise, we provide complete freight forwarding solutions
            including cargo surveys, route engineering, vessel chartering,
            breakbulk vessel coordination, customs clearance and
            final-mile delivery.
          </p>
          <p>
            Whether managing a single heavy lift shipment or an entire
            EPC project logistics package, Mega Move India delivers
            customized project forwarding solutions focused on safety,
            efficiency and operational excellence.
          </p>
        </div>
      </section>
      {/* PROJECT CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-16 pb-20">
        <h2 className="text-center text-[42px] font-light text-[#173f74] mb-10">
          Project Logistics Capabilities
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            "Breakbulk Cargo",
            "Out of Gauge Cargo",
            "Heavy Lift Cargo",
            "Project Cargo",
            "Vessel Chartering",
            "Route Surveys",
            "Cargo Engineering",
            "Multimodal Logistics",
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
          Industries We Serve
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            "Power Projects",
            "Renewable Energy",
            "Oil & Gas",
            "Mining",
            "Steel Industry",
            "Infrastructure",
            "Manufacturing",
            "EPC Contractors",
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
            Request a Project Cargo Consultation
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Send your enquiries to
          </p>
          <a
            href="mailto:projects@megamoveindia.com"
            className="text-2xl font-medium text-[#173f74] hover:underline"
          >
            projects@megamoveindia.com
          </a>
        </div>
      </section>
    </main>
  );
}
