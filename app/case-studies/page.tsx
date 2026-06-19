export default function CaseStudies() {
  const projects = [
    {
      title: "250 MT Transformer Transportation",
      description:
        "Route survey, permits, hydraulic axle deployment and safe transportation of a 250 MT transformer from port to project site.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    },
    {
      title: "Breakbulk Shipment – China to India",
      description:
        "Handling and transportation of over-dimensional project cargo from Shanghai to Mumbai through breakbulk vessel services.",
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7",
    },
    {
      title: "Factory Relocation Project",
      description:
        "Complete dismantling, transportation and relocation of industrial machinery and production equipment.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
    {
      title: "Heavy Lift Equipment Movement",
      description:
        "Transportation of oversized refinery equipment using multi-axle hydraulic trailers and specialized engineering.",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    },
    {
      title: "Wind Energy Logistics",
      description:
        "Movement of wind turbine components including tower sections, blades and nacelles to installation sites.",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    },
    {
      title: "Warehouse & Equipment Rental Support",
      description:
        "Provision of warehousing, manlifts, pullers and material handling equipment for industrial projects.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f7]">

      {/* Header */}

      <div className="border-b border-gray-300 bg-white">

        <div className="max-w-7xl mx-auto px-16 py-10">

          <h1 className="text-[54px] font-light text-center text-gray-900">
            Our Projects
          </h1>

          <p className="text-center text-gray-500 text-xl mt-4">
            Showcasing Mega Move India's Expertise in Project Logistics,
            Heavy Lift Transportation and Freight Forwarding
          </p>

        </div>

      </div>

      {/* Projects Grid */}

      <div className="max-w-7xl mx-auto px-16 py-14">

        <div className="grid grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-lg
                overflow-hidden
                border
                border-gray-200
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[260px]
                    object-cover
                    grayscale
                    hover:grayscale-0
                    transition-all
                    duration-700
                  "
                />

              </div>

              <div className="p-6">

                <h2 className="text-[24px] font-semibold text-gray-900 leading-8">
                  {project.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  {project.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}
