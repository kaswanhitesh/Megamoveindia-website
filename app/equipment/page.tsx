export default function Equipment() {
  const equipment = [
    { name: "Hydraulic Axle Lines", value: "40", unit: "Axle Lines" },
    { name: "Heavy Duty Pullers", value: "4", unit: "Units" },
    { name: "Lowbed Trailers", value: "18", unit: "Units" },
    { name: "Truck Mounted Manlifts / Aerial Lifts", value: "2", unit: "Units" },
    { name: "Flatbed Trailers", value: "10", unit: "Units" },
    { name: "Heavy Duty Spacer HAV 15 Mtr", value: "2", unit: "Units" },
    { name: "Lashing Equipment", value: "In-house", unit: "Inventory" },
    { name: "Warehousing Space", value: "Available", unit: "" },
    { name: "Project Handling Tools", value: "Various", unit: "" },
  ];

  return (
    <main className="bg-[#f7f7f7]">

      {/* HERO IMAGE */}

      <section className="relative h-[500px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=80"
          alt="Hydraulic Axle Trailer"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <h1 className="text-6xl font-light mb-4">
              Equipment Fleet
            </h1>

            <p className="text-xl tracking-[3px] uppercase">
              Heavy Lift • ODC Transportation • Project Logistics
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-7xl mx-auto px-12 py-20">

        <h2 className="text-center text-[54px] font-light text-[#173f74] mb-6">
          Our Equipment
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-5xl mx-auto leading-8 mb-20">
          Mega Move India operates a specialized fleet of hydraulic axle
          trailers, lowbed trailers, heavy-duty pullers, aerial lifting
          equipment and project cargo handling systems designed for the
          safe transportation of over-dimensional and heavy lift cargo
          across India and international project destinations.
        </p>

        {/* EQUIPMENT GRID */}

        <div className="grid grid-cols-3 gap-8">

          {equipment.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border-l-4
                border-gray-100
                px-10
                py-8
                h-[170px]
                flex
                items-center
                justify-between
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              {/* LEFT */}

              <div className="w-[58%]">

                <h3 className="text-[22px] font-medium text-gray-700 leading-relaxed">
                  {item.name}
                </h3>

              </div>

              {/* RIGHT */}

              <div className="w-[42%] text-right">

                <div className="text-[42px] font-semibold text-gray-700 leading-none">
                  {item.value}
                </div>

                {item.unit && (
                  <div className="text-[18px] text-gray-500 mt-2">
                    {item.unit}
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
