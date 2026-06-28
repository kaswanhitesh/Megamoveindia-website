import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Mega Move India",
  description:
    "Join the team at Mega Move India Private Limited. Explore job openings in heavy lift logistics, project freight forwarding, engineering, and supply chain management.",
};

export default function CareersPage() {
  const values = [
    {
      title: "Safety First",
      text: "We prioritize safety across every project, route survey, and heavy transport operation, ensuring safe returns for our team and clients.",
    },
    {
      title: "Engineering Focus",
      text: "Our core strength lies in detailed route planning, structural load calculation, and custom engineering for heavy haul cargo.",
    },
    {
      title: "Team Growth",
      text: "We foster an inclusive and dynamic environment that encourages learning, professional certifications, and hands-on career development.",
    },
  ];

  const positions = [
    {
      title: "Heavy Haul Transport Engineer",
      department: "Engineering & Operations",
      location: "Mumbai, India",
      type: "Full-Time",
      description:
        "Responsible for performing route surveys, executing axle load simulations, preparing stability reports, and supervising complex ODC movements.",
    },
    {
      title: "Project Cargo Coordinator",
      department: "Freight Forwarding",
      location: "Vapi, Gujarat",
      type: "Full-Time",
      description:
        "Coordinate multi-modal shipments, handle carrier bookings, manage port logistics, and interface with customs agents to secure smooth delivery.",
    },
    {
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Mumbai / remote potential",
      type: "Full-Time",
      description:
        "Identify and secure cargo opportunities in Power, Infrastructure, and Metal/Mining sectors, managing key customer accounts across India.",
    },
  ];

  return (
    <main className="bg-[#f7f7f7] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[280px] lg:h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136368-1a8b27503ad7?auto=format&fit=crop&w=1800&q=80"
          alt="Mega Move India Careers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl lg:text-5xl font-light mb-3">Careers</h1>
            <p className="text-xs lg:text-base tracking-[2px] uppercase">
              Build the Future of Project Logistics • Move the Impossible
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <h2 className="text-center text-[30px] lg:text-[40px] font-light text-[#173f74] mb-10">
          Why Join Mega Move India?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6 lg:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                {val.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {val.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-center text-[30px] lg:text-[40px] font-light text-[#173f74] mb-10">
          Current Openings
        </h2>

        <div className="space-y-6">
          {positions.map((pos, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-4">
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-[#173f74]">
                    {pos.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500 font-medium mt-1">
                    {pos.department} • {pos.location}
                  </p>
                </div>
                <div className="inline-block bg-[#e8effa] text-[#173f74] px-3 py-1 text-xs font-semibold rounded-full self-start md:self-auto">
                  {pos.type}
                </div>
              </div>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6">
                {pos.description}
              </p>
              <div>
                <a
                  href={`mailto:careers@megamoveindia.com?subject=Application for ${encodeURIComponent(pos.title)}`}
                  className="inline-block border border-[#173f74] text-[#173f74] hover:bg-[#173f74] hover:text-white transition-colors px-6 py-2 rounded text-sm font-semibold"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GENERAL APPLICATION CTA */}
        <div className="mt-12 bg-white border border-gray-200 p-8 rounded-lg text-center shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Don&apos;t see a matching role?
          </h3>
          <p className="text-sm lg:text-base text-gray-600 mb-6">
            We are always looking for passionate talent. Send your resume and cover letter to our recruitment team.
          </p>
          <a
            href="mailto:careers@megamoveindia.com"
            className="inline-block bg-[#173f74] text-white hover:bg-[#0f2f58] transition-colors px-8 py-3.5 rounded text-sm font-semibold"
          >
            Submit General Application
          </a>
        </div>
      </section>
    </main>
  );
}
