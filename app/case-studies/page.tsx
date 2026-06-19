export default function CaseStudies() {
  const studies = [
    {
      title: "Heavy Lift Transportation",
      description:
        "Transportation and delivery of over-dimensional cargo using hydraulic axle lines and specialized trailers across India.",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    },
    {
      title: "Project Logistics",
      description:
        "End-to-end logistics management for industrial and infrastructure projects including route surveys, permits and transportation.",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492",
    },
    {
      title: "Ocean Freight Solutions",
      description:
        "Breakbulk, FCL and project cargo shipments coordinated through global carrier networks.",
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7",
    },
    {
      title: "Equipment Rentals",
      description:
        "Deployment of manlifts, pullers, hydraulic axles and specialized equipment for industrial operations.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-16 py-16">

        <h1 className="text-5xl font-light mb-4">
          Case Studies
        </h1>

        <p className="text-gray-600 text-lg mb-12">
          Selected examples of Mega Move India's project logistics,
          heavy lift transportation, freight forwarding and equipment
          rental capabilities.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {studies.map((study, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {study.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {study.description}
                </p>

                <button className="mt-6 border border-gray-800 px-5 py-2 hover:bg-gray-800 hover:text-white transition">
                  View Case Study
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
