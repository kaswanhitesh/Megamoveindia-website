export default function CompanyNews() {
  const news = [
    {
      image: "/images/news/news1.jpg",
      title: "Mega Move India at IICS 2025 Exhibition",
      date: "Dec 3, 2025",
      excerpt:
        "Meet our team and explore our project logistics and heavy haulage capabilities.",
    },
    {
      image: "/images/news/news2.jpg",
      title: "Mega Move India Featured on MMI Network",
      date: "Jan 31, 2026",
      excerpt:
        "Successful transportation of specialized industrial equipment.",
    },
    {
      image: "/images/news/news3.jpg",
      title: "Breakbulk Shipment Successfully Delivered",
      date: "Nov 3, 2025",
      excerpt:
        "Complex cargo movement executed safely and efficiently.",
    },
    {
      image: "/images/news/news4.jpg",
      title: "Mega Move India Expands Equipment Fleet",
      date: "Nov 3, 2025",
      excerpt:
        "New hydraulic axle trailers added to support project cargo operations.",
    },
  ];

  return (
    <main>
      {/* HERO */}

      <section className="relative h-[500px]">
        <img
          src="/images/company-news-banner.jpg"
          alt="Company News"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl font-light">
            Company News
          </h1>
        </div>
      </section>

      {/* NEWS SLIDER */}

      <section className="py-16 overflow-hidden bg-[#f7f7f7]">
        <div className="news-marquee">

          <div className="news-marquee-content animate-news">

            {[...news, ...news].map((item, index) => (

              <a
                key={index}
                href={`/company-news/${index + 1}`}
                className="news-card block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover"
                />

                <div className="p-6">

                  <div className="text-sm text-gray-500 mb-4">
                    {item.date}
                  </div>

                  <h2 className="text-[28px] text-[#173f74] mb-4">
                    {item.title}
                  </h2>

                  <p className="text-gray-600">
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
