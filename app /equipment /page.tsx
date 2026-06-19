export default function Equipment() {
  const equipment = [
    { name: "Hydraulic Axle Lines", qty: "40 Axle Lines" },
    { name: "Lowbed Trailers", qty: "18 Units" },
    { name: "Prime Movers", qty: "12 Units" },
    { name: "Truck Mounted Manlifts", qty: "2 Units" },
    { name: "Heavy Duty Pullers", qty: "4 Units" },
    { name: "Flatbed Trailers", qty: "10 Units" },
    { name: "Escort Vehicles", qty: "6 Units" },
    { name: "Hydraulic Jacks", qty: "20 Sets" },
    { name: "Spreader Beams", qty: "Multiple Sizes" },
    { name: "Lashing Equipment", qty: "In-house Inventory" },
    { name: "Warehousing Space", qty: "Available" },
    { name: "Project Handling Tools", qty: "Various" },
  ];

  return (
    <main className="bg-[#f7f7f7] min-h-screen">

      {/* HERO IMAGE */}

      <section className="w-full h-[500px] relative overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=80"
          alt="ODC Trailer"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <h1 className="text-6xl font-light mb-4">
              Equipment Fleet
            </h1>

            <p className="text-xl tracking-wide">
              Heavy Lift • ODC Transportation • Project Logistics
            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-7xl mx-auto px-16 py-20">

        <h2 className="text-center text-[52px] font-light text-gray-900 mb-6">
          Our Equipment
        </h2>

        <p className="text-center text-xl text-gray-500 max-w-4xl mx-auto mb-16">
          Mega Move India operates a specialized fleet of hydraulic axle
          trailers, lowbed trailers, heavy-duty prime movers, lifting
          equipment and project cargo handling systems designed to safely
          transport over-dimensional and heavy lift cargo across India.
        </p>

        {/* EQUIPMENT GRID */}

        <div className="grid grid-cols-4 gap-8">

          {equipment.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border-l-4
                border-gray-100
                p-10
                min-h-[150px]
                flex
                justify-between
                items-center
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <span className="text-xl text-gray-700">
                {item.name}
              </span>

              <span className="text-2xl font-bold text-gray-600">
                {item.qty}
              </span>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}
