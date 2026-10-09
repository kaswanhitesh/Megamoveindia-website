import { pageMetadata } from "@/app/lib/seo";
import StaticGallery from "@/app/components/StaticGallery";

export const metadata = pageMetadata({
  path: "/company-news/bauma-conexpo-india-2026/",
  title: "Mega Move India at bauma CONEXPO INDIA 2026 | Company News",
  description:
    "The Mega Move India team visited bauma CONEXPO INDIA 2026 in Greater Noida, meeting clients SANY India, XCMG, Century Cranes, Dingli, Dozco (Shantui) and SDLG.",
  image: "/images/Companynews/bauma2026/bauma2026_hero.webp",
});

const IMAGES = Array.from(
  { length: 12 },
  (_, i) => `/images/Companynews/bauma2026/bauma2026_${String(i + 1).padStart(2, "0")}.webp`,
);

const CLIENTS = ["SANY India", "XCMG", "Century Cranes", "Dingli", "Dozco (Shantui)", "SDLG"];

export default function BaumaConexpoIndia2026Page() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen">
      {/* HERO */}
      <section className="relative h-[320px] lg:h-[520px] overflow-hidden">
        <img
          src="/images/Companynews/bauma2026/bauma2026_hero.webp"
          alt="Mega Move India team member in a Dingli aerial work platform at bauma CONEXPO INDIA 2026"
          className="w-full h-full object-cover object-[center_15%]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="text-xs lg:text-sm font-semibold tracking-widest uppercase bg-[#f4b400]/80 text-black px-3 py-1 rounded">
              Event News
            </span>
            <h1 className="text-2xl lg:text-5xl font-light mt-4 mb-3">bauma CONEXPO INDIA 2026</h1>
            <p className="text-xs lg:text-base tracking-[2px] uppercase">
              15–18 September 2026 · India Expo Centre, Greater Noida
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="text-sm text-gray-500 mb-4">Posted on October 9, 2026</div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#173f74] mb-6">
          Meeting Our Equipment Manufacturer Clients at bauma CONEXPO INDIA
        </h2>

        <div className="text-gray-600 leading-8 text-[15px] lg:text-[17px] space-y-6">
          <p>
            The Mega Move India team visited <strong>bauma CONEXPO INDIA 2026</strong>, India&rsquo;s leading trade fair
            for construction machinery, mining equipment and construction vehicles, held from 15 to 18 September 2026 at
            the India Expo Centre, Greater Noida.
          </p>
          <p>
            We met our clients at their stands to discuss upcoming equipment movements and the heavy-haul, ODC and
            project logistics behind them: from factory and port to project site, and for exports overseas.
          </p>

          <ul className="flex flex-wrap gap-3 !my-8 list-none p-0">
            {CLIENTS.map((client) => (
              <li
                key={client}
                className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-[#173f74] shadow-sm"
              >
                {client}
              </li>
            ))}
          </ul>

          <p>
            At the <strong>Dingli</strong> stand, one of our team members went up in an aerial work platform during its{" "}
            <strong>load test and aerial height test</strong>. That gave us first-hand experience of the machine&rsquo;s
            safe working load and reach, which matters directly for our{" "}
            <a href="/services/rentals-warehousing/" className="text-[#173f74] underline">
              equipment rental and manlift services
            </a>
            .
          </p>

          <div className="my-8 border-l-4 border-[#173f74] bg-white p-6 rounded-r shadow-sm">
            <p className="italic font-medium text-gray-700">
              &ldquo;As manufacturers in India grow both domestic deliveries and exports, they need reliable transport
              for oversized machines. bauma is where we hear first-hand what our clients are building next.&rdquo;
            </p>
            <p className="text-xs text-gray-500 mt-2 font-semibold">— Team Mega Move India</p>
          </div>

          <p>
            We thank our clients for their time at the show, and we look forward to supporting their next equipment
            movements. Planning to move construction or mining machinery?{" "}
            <a href="/contact/" className="text-[#173f74] underline">
              Talk to our project team
            </a>
            .
          </p>
        </div>
      </article>

      <StaticGallery images={IMAGES} altPrefix="Mega Move India at bauma CONEXPO INDIA 2026" title="Event Gallery" />

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="pt-8 border-t border-gray-200">
          <a
            href="/company-news"
            className="inline-block text-[#173f74] hover:text-[#0f2f58] font-bold text-sm lg:text-base"
          >
            ← Back to Company News
          </a>
        </div>
      </div>
    </main>
  );
}
