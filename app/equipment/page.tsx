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

      <section className="relative h-[280px] lg:h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=80"
          alt="Hydraulic Axle Trailer"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">

            <h1 className="text-3xl lg:text-5xl font-light mb-3">
              Equipment Fleet
            </h1>

            <p className="text-xs lg:text-base tracking-[1px] lg:tracking-[2px] uppercase">
              Heavy Lift • ODC Transportation • Project Logistics
            </p>

          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="max-w-7xl mx-auto px-4 lg:px-12 py-10 lg:py-16">

        <h2 className="text-center text-[30px] lg:text-[40px] font-light text-[#173f74] mb-4">
          Our Equipment
        </h2>

        <p className="text-center text-[14px] lg:text-[16px] text-gray-600 max-w-4xl mx-auto leading-7 lg:leading-8 mb-10 lg:mb-14">
          Mega Move India operates a specialized fleet of hydraulic axle
          trailers, lowbed trailers, heavy-duty pullers, aerial lifting
          equipment and project cargo handling systems designed for the
          safe transportation of over-dimensional and heavy lift cargo
          across India.
        </p>

        {/* EQUIPMENT GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

          {equipment.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-gray-200
                p-4
                lg:px-8
                lg:py-6
                min-h-[110px]
                lg:h-[120px]
                flex
                items-center
                justify-between
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <div className="w-[60%]">
                <h3 className="text-[15px] lg:text-[18px] font-medium text-gray-700 leading-6 lg:leading-7">
                  {item.name}
                </h3>
              </div>

              <div className="w-[40%] text-right">
                <div className="text-[20px] lg:text-[24px] font-semibold text-gray-700">
                  {item.value}
                </div>

                {item.unit && (
                  <div className="text-xs lg:text-sm text-gray-500 mt-1">
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