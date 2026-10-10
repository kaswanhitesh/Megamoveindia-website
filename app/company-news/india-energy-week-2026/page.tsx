import { pageMetadata, SITE_URL } from "@/app/lib/seo";
import StaticGallery from "@/app/components/StaticGallery";

import PageGlow from "@/app/components/PageGlow";
export const metadata = pageMetadata({
  path: "/company-news/india-energy-week-2026/",
  title: "India Energy Week 2026 Highlights: Mega Move India in Goa",
  description:
    "India Energy Week (IEW) 2026, 27–30 January at ONGC Advanced Training Institute, Goa: Mega Move India met the oil, gas and energy industry on project logistics and ODC transport.",
  image: "/images/Companynews/iew2026/iew2026_share.jpg",
});

const PAGE_URL = `${SITE_URL}/company-news/india-energy-week-2026/`;

const IMAGES = [
  "/images/Companynews/iew2026/iew2026_01.webp",
  "/images/Companynews/iew2026/iew2026_02.webp",
  "/images/Companynews/iew2026/iew2026_03.webp",
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Mega Move India at India Energy Week 2026",
    description:
      "The Mega Move India team visited India Energy Week 2026 at the ONGC Advanced Training Institute, Goa, meeting oil, gas and energy companies on project logistics.",
    url: PAGE_URL,
    mainEntityOfPage: PAGE_URL,
    datePublished: "2026-01-27",
    image: [
      `${SITE_URL}/images/Companynews/iew2026/iew2026_share.jpg`,
      `${SITE_URL}/images/Companynews/iew2026/iew2026_hero.webp`,
    ],
    author: { "@type": "Organization", name: "Mega Move India Private Limited", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Mega Move India Private Limited",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    about: {
      "@type": "Event",
      name: "India Energy Week 2026",
      startDate: "2026-01-27",
      endDate: "2026-01-30",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "ONGC Advanced Training Institute",
        address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Company News", item: `${SITE_URL}/company-news/` },
      { "@type": "ListItem", position: 3, name: "India Energy Week 2026", item: PAGE_URL },
    ],
  },
];

export default function IndiaEnergyWeek2026Page() {
  return (
    <main className="isolate relative bg-[#f7f7f7] min-h-screen">
      <PageGlow />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      {/* HERO */}
      <section className="relative h-[320px] lg:h-[520px] overflow-hidden">
        <img
          src="/images/Companynews/iew2026/iew2026_hero.webp"
          alt="India Energy Week 2026 venue sculpture hosted by ONGC in Goa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="text-xs lg:text-sm font-semibold tracking-widest uppercase bg-[#f4b400]/80 text-black px-3 py-1 rounded">
              Event News
            </span>
            <h1 className="text-2xl lg:text-5xl font-light mt-4 mb-3">India Energy Week 2026</h1>
            <p className="text-xs lg:text-base tracking-[2px] uppercase">
              27–30 January 2026 · ONGC Advanced Training Institute, Goa
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="text-sm text-gray-500 mb-4">Posted on January 27, 2026</div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#173f74] mb-6">
          Connecting with India&rsquo;s Energy Industry at IEW 2026
        </h2>

        <div className="text-gray-600 leading-8 text-[15px] lg:text-[17px] space-y-6">
          <p>
            The Mega Move India team visited <strong>India Energy Week (IEW) 2026</strong>, held from 27 to 30 January
            2026 at the ONGC Advanced Training Institute in Goa. Organised under the patronage of the Ministry of
            Petroleum and Natural Gas, IEW brings together oil and gas producers, refiners, EPC contractors and equipment
            makers from India and around the world.
          </p>
          <p>
            Energy projects run on some of the heaviest and most awkward cargo there is: reactors, heat exchangers,
            columns, compressors and drilling equipment. Over the event our team met exhibitors and project teams to
            discuss the logistics behind them, from port clearance and{" "}
            <a href="/odc-transport/" className="text-[#173f74] underline">
              ODC transport
            </a>{" "}
            to delivery at refinery and field sites.
          </p>

          <div className="my-8 border-l-4 border-[#173f74] bg-white p-6 rounded-r shadow-sm">
            <p className="font-medium text-gray-700">
              IEW 2026 was hosted by <strong>ONGC</strong>, a Mega Move India client. For ONGC we imported six used
              X-ray systems of 42 tonnes each from Germany through Mumbai Port and delivered them to Barmer, Rajasthan,
              in 49 days.
            </p>
            <a href="/case-studies/Project-7/" className="inline-block mt-3 text-sm font-semibold text-[#173f74] underline">
              Read the ONGC Barmer case study →
            </a>
          </div>

          <p>
            We thank everyone who made time for us in Goa. If you are planning an energy project and need heavy cargo
            moved, see our{" "}
            <a href="/industries/oil-gas/" className="text-[#173f74] underline">
              oil &amp; gas logistics
            </a>{" "}
            or{" "}
            <a href="/contact/" className="text-[#173f74] underline">
              talk to our project team
            </a>
            .
          </p>
        </div>
      </article>

      <StaticGallery images={IMAGES} altPrefix="Mega Move India at India Energy Week 2026" title="Event Gallery" />

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="pt-8 border-t border-gray-200">
          <a href="/company-news" className="inline-block text-[#173f74] hover:text-[#0f2f58] font-bold text-sm lg:text-base">
            ← Back to Company News
          </a>
        </div>
      </div>
    </main>
  );
}
