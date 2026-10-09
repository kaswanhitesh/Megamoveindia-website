import { pageMetadata } from "@/app/lib/seo";
export const metadata = pageMetadata({
  path: "/company-news/",
  title: "Company News & Events | Mega Move India",
  description: "Latest news from Mega Move India: exhibitions such as IICS and Breakbulk Middle East, fleet expansion and project logistics milestones.",
});

export default function CompanyNews() {
  const news = [
  {
    image: "/images/Companynews/iew2026/iew2026_card.webp",
    title: "Mega Move India at India Energy Week 2026",
    date: "Jan 27, 2026",
    excerpt:
      "Meeting India's oil, gas and energy industry in Goa.",
    link: "/company-news/india-energy-week-2026",
  },
  {
    image: "/images/Companynews/bauma2026/bauma2026_card.webp",
    title: "Mega Move India at bauma CONEXPO INDIA 2026",
    date: "Sep 15, 2026",
    excerpt:
      "Meeting our clients SANY India, XCMG, Dingli and more in Greater Noida.",
    link: "/company-news/bauma-conexpo-india-2026",
  },
  {
    image: "/images/Companynews/Breakbulkdubai2025/IMG_0980.webp",
    title: "Mega Move India at BreakBulk Dubai 2026",
    date: "Feb 4, 2026",
    excerpt:
      "Networking at Breakbulk Event Dubai.",
    link: "/company-news/breakbulk-Dubai",
  },
  {
    image: "/images/Companynews/IMG_0982.webp",
    title: "Mega Move India Featured on MMI Network",
    date: "Jan 31, 2026",
    excerpt:
      "Successful transportation of specialized industrial equipment.",
    link: "https://megamovealliance.com/mega-move-india-executes-break-bulk-shipment-from-bangalore-to-brazil/",
  },
  {
    image: "/images/Companynews/IICS/IICS_Newscardimage.webp",
    title: "Mega Move India at IICS 2025 Exhibition",
    date: "Dec 3, 2025",
    excerpt:
      "Meet our team and explore our project logistics and heavy haulage capabilities.",
    link: "/company-news/IICS",
  },
  {
    image: "/images/Companynews/IMG_0983.webp",
    title: "Mega Move India Expands Equipment Fleet",
    date: "Nov 3, 2025",
    excerpt:
      "New hydraulic axle trailers added to support project cargo operations.",
    link: "/company-news/fleet-expansion",
  },
];

  // Oldest to newest, so new posts land in the right place automatically
  news.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  return (
    <main>
      {/* HERO */}

      <section className="relative h-[280px] lg:h-[500px]">
        <img
          src="/images/Companynews/IMG_0981.webp"
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
        {/* Cards scroll right to left in a seamless loop: the list is rendered four times and
            the track moves by half (two copies, wider than any screen), see .news-track in globals.css. */}
        <div className="news-marquee pb-4">
          <div className="news-marquee-content news-track">
            {[0, 1, 2, 3].map((copy) => news.map((item) => (
              <a
                key={`${copy}-${item.link}`}
                href={item.link}
                aria-hidden={copy > 0 ? true : undefined}
                tabIndex={copy > 0 ? -1 : undefined}
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
                  alt={copy === 0 ? item.title : ""}
                  loading="lazy"
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
            )))}
          </div>
        </div>
      </section>
    </main>
  );
}