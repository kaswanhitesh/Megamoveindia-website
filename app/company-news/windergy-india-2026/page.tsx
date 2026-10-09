import { pageMetadata, SITE_URL } from "@/app/lib/seo";
import StaticGallery from "@/app/components/StaticGallery";

export const metadata = pageMetadata({
  path: "/company-news/windergy-india-2026/",
  title: "Windergy India 2026 Highlights: Mega Move India in Chennai",
  description:
    "Windergy India 2026, 7–9 October at Chennai Trade Centre: Mega Move India met the wind energy industry on transport of wind turbine blades, towers and nacelles.",
  image: "/images/Companynews/windergy2026/windergy2026_share.jpg",
});

const PAGE_URL = `${SITE_URL}/company-news/windergy-india-2026/`;

const IMAGES = Array.from(
  { length: 4 },
  (_, i) => `/images/Companynews/windergy2026/windergy2026_${String(i + 1).padStart(2, "0")}.webp`,
);

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Mega Move India at Windergy India 2026",
    description:
      "The Mega Move India team visited Windergy India 2026 at the Chennai Trade Centre, meeting wind energy companies on transport of blades, towers and nacelles.",
    url: PAGE_URL,
    mainEntityOfPage: PAGE_URL,
    datePublished: "2026-10-07",
    image: [
      `${SITE_URL}/images/Companynews/windergy2026/windergy2026_share.jpg`,
      `${SITE_URL}/images/Companynews/windergy2026/windergy2026_hero.webp`,
    ],
    author: { "@type": "Organization", name: "Mega Move India Private Limited", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Mega Move India Private Limited",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
    about: {
      "@type": "Event",
      name: "Windergy India 2026",
      startDate: "2026-10-07",
      endDate: "2026-10-09",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Chennai Trade Centre",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nandambakkam, Chennai",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Company News", item: `${SITE_URL}/company-news/` },
      { "@type": "ListItem", position: 3, name: "Windergy India 2026", item: PAGE_URL },
    ],
  },
];

export default function WindergyIndia2026Page() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      {/* HERO */}
      <section className="relative h-[320px] lg:h-[520px] overflow-hidden">
        <img
          src="/images/Companynews/windergy2026/windergy2026_hero.webp"
          alt="Mega Move India at the Windergy India 2026 sign outside Chennai Trade Centre"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="text-xs lg:text-sm font-semibold tracking-widest uppercase bg-[#f4b400]/80 text-black px-3 py-1 rounded">
              Event News
            </span>
            <h1 className="text-2xl lg:text-5xl font-light mt-4 mb-3">Windergy India 2026</h1>
            <p className="text-xs lg:text-base tracking-[2px] uppercase">
              7–9 October 2026 · Chennai Trade Centre, Chennai
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="text-sm text-gray-500 mb-4">Posted on October 7, 2026</div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#173f74] mb-6">
          Meeting the Wind Energy Industry at Windergy India 2026
        </h2>

        <div className="text-gray-600 leading-8 text-[15px] lg:text-[17px] space-y-6">
          <p>
            The Mega Move India team visited <strong>Windergy India 2026</strong>, the 8th International Trade Fair and
            Conference for the wind energy sector, held from 7 to 9 October 2026 at the Chennai Trade Centre. Organised by
            the Indian Wind Turbine Manufacturers Association (IWTMA) and PDA Ventures, this year&rsquo;s edition ran on the
            theme <em>&ldquo;Wind: Powering India&rsquo;s Energy Resilience&rdquo;</em>.
          </p>
          <p>
            Wind projects depend on some of the longest and heaviest cargo on Indian roads: turbine blades, tower sections,
            nacelles and hubs. Our team met turbine makers, component suppliers and project developers to talk about moving
            them from factory and port to wind farm sites, including route surveys, permits and{" "}
            <a href="/odc-transport/" className="text-[#173f74] underline">
              ODC transport
            </a>{" "}
            for over-length loads.
          </p>

          <div className="my-8 border-l-4 border-[#173f74] bg-white p-6 rounded-r shadow-sm">
            <p className="font-medium text-gray-700">
              Windergy came to Chennai, where Mega Move India now has an office at Rajaji Salai. That puts our team close to
              Tamil Nadu&rsquo;s wind belt, its turbine factories and the ports at Chennai, Kamarajar and Tuticorin.
            </p>
            <a href="/contact/" className="inline-block mt-3 text-sm font-semibold text-[#173f74] underline">
              Contact our Chennai office →
            </a>
          </div>

          <p>
            We thank everyone who made time for us at the show. Planning a wind or renewable energy project? See our{" "}
            <a href="/industries/power-energy/" className="text-[#173f74] underline">
              power &amp; energy logistics
            </a>{" "}
            or{" "}
            <a href="/contact/" className="text-[#173f74] underline">
              talk to our project team
            </a>
            .
          </p>
        </div>
      </article>

      <StaticGallery images={IMAGES} altPrefix="Mega Move India at Windergy India 2026" title="Event Gallery" columns={2} />

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
