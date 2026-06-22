export default function CompanyNews() {
  const news = [
  {
    image: "/images/Companynews/IICS/IICS_Newscardimage.png",
    title: "Mega Move India at IICS 2025 Exhibition",
    date: "Dec 3, 2025",
    excerpt:
      "Meet our team and explore our project logistics and heavy haulage capabilities.",
    link: "/company-news/IICS",
  },
  {
    image: "/images/Companynews/IMG_0982.jpeg",
    title: "Mega Move India Featured on MMI Network",
    date: "Jan 31, 2026",
    excerpt:
      "Successful transportation of specialized industrial equipment.",
    link: "https://megamovealliance.com/mega-move-india-executes-break-bulk-shipment-from-bangalore-to-brazil/",
  },
  {
    image: "/images/Companynews/Breakbulkdubai2025/IMG_0980.png",
    title: "Mega Move India at BreakBulk Dubai 2026",
    date: "Feb 4, 2026",
    excerpt:
      "Networking at Breakbulk Event Dubai.",
    link: "/company-news/breakbulk-Dubai",
  },
  {
    image: "/images/Companynews/IMG_0983.jpeg",
    title: "Mega Move India Expands Equipment Fleet",
    date: "Nov 3, 2025",
    excerpt:
      "New hydraulic axle trailers added to support project cargo operations.",
    link: "/company-news/fleet-expansion",
  },
];

  return (
    <main>
      {/* HERO */}

      <section className="relative h-[280px] lg:h-[500px]">
        <img
          src="/images/Companynews/IMG_0981.jpeg"
          alt="Company News"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl lg:text-6xl font-light text-center px-4">
            Company News
          </h1>
        </div>
      </section>

      {/* NEWS SLIDER */}

      <section className="py-10 lg:py-16 overflow-hidden bg-[#f7f7f7]">
        <div className="news-marquee">
          <div className="news-marquee-content animate-news">
            {[...news, ...news].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="
                block
                bg-white
                shadow-sm
                mr-4
                lg:mr-6
                w-[280px]
                lg:w-[420px]
                min-w-[280px]
                lg:min-w-[420px]
               "
>
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[180px]
                    lg:h-[260px]
                    object-cover
                  "
                />

                <div className="p-4 lg:p-6">
                  <div className="text-xs lg:text-sm text-gray-500 mb-3 lg:mb-4">
                    {item.date}
                  </div>

                  <h2 className="text-lg lg:text-[28px] text-[#173f74] mb-3 lg:mb-4 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-sm lg:text-base text-gray-600">
                    {item.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}