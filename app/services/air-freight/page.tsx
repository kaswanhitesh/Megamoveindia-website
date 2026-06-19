export default function AirFreight() {
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

            <p className="text-xl tracking-[3px] uppercase">
              Global Air Cargo • Charter Solutions • Time Critical Shipments
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-7xl mx-auto px-16 py-20">

        <h2 className="text-center text-[48px] font-light text-[#173f74] mb-8">
          Global Air Freight Solutions
        </h2>

        <p className="text-center text-lg text-gray-600 leading-8 max-w-5xl mx-auto">
          Mega Move India provides reliable international air freight
          solutions for urgent, high-value, oversized and time-sensitive
          cargo shipments. Through our extensive airline partnerships and
          global logistics network, we offer import, export, charter,
          consolidation and door-to-door transportation services across
          major international trade lanes.
        </p>

      </section>

      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-16 pb-24">

        <div className="grid grid-cols-3 gap-8">

          {[
            {
              title: "Import Air Freight",
              text: "Fast and reliable import cargo handling from major international airports."
            },
            {
              title: "Export Air Freight",
              text: "Worldwide export solutions for commercial, industrial and project cargo."
            },
            {
              title: "Air Charter Services",
              text: "Dedicated charter aircraft for urgent, oversized and critical shipments."
            },
            {
              title: "Door-to-Door Delivery",
              text: "Complete pickup, customs clearance and final delivery management."
            },
            {
              title: "Project Cargo Airlift",
              text: "Specialized handling of heavy lift and oversized project cargo by air."
            },
            {
              title: "Customs Clearance",
              text: "Professional customs brokerage support for seamless cargo movement."
            },
          ].map((item, index) => (
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

    </main>
  );
}
