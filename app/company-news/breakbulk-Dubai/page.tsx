import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mega Move India at Breakbulk Middle East Dubai 2026 | Company News",
  description:
    "Mega Move India participates in the Breakbulk Middle East 2026 exhibition in Dubai, strengthening international freight forwarding and project logistics alliances.",
};

export default function BreakbulkDubaiPage() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[280px] lg:h-[450px] overflow-hidden">
        <img
          src="/images/Companynews/Breakbulkdubai2025/IMG_0980.png"
          alt="Breakbulk Middle East Dubai"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="text-xs lg:text-sm font-semibold tracking-widest uppercase bg-[#f4b400]/80 text-black px-3 py-1 rounded">
              Event News
            </span>
            <h1 className="text-2xl lg:text-5xl font-light mt-4 mb-3">
              Breakbulk Middle East 2026
            </h1>
            <p className="text-xs lg:text-base tracking-[2px] uppercase">
              Connecting Global Project Logistics Leaders in Dubai
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="text-sm text-gray-500 mb-4">Posted on February 4, 2026</div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#173f74] mb-6">
          Expanding Global Network Alliances in the Middle East
        </h2>

        <div className="prose prose-gray max-w-none text-gray-600 leading-8 text-[15px] lg:text-[17px] space-y-6">
          <p>
            Mega Move India Private Limited was proud to participate in the Breakbulk Middle East 2026
            exhibition held in Dubai, UAE. As one of the region’s premier project cargo events, Breakbulk Middle East
            brings together EPC contractors, project owners, heavy lift carriers, and logistics specialists from across
            the globe.
          </p>
          <p>
            During the multi-day event, our leadership and project forwarding teams connected with international
            shipping lines, port authorities, and specialized transport operators. These discussions focus on scaling up
            our multimodal freight forwarding corridors connecting Asia, Europe, and the Middle East.
          </p>
          <p>
            With the rapid growth of renewable energy, mining, and large-scale infrastructure projects across India,
            securing reliable breakbulk and charter capabilities is essential. Our participation in Breakbulk Middle East
            underscores our commitment to delivering seamless, end-to-end global project logistics solutions.
          </p>
          
          <div className="my-8 border-l-4 border-[#173f74] bg-white p-6 rounded-r shadow-sm">
            <p className="italic font-medium text-gray-700">
              "Building robust international alliances at Breakbulk Dubai allows us to engineer and execute door-to-door
              logistics solutions for even the most challenging industrial cargo imports and exports."
            </p>
            <p className="text-xs text-gray-500 mt-2 font-semibold">— Projects Team, Mega Move India</p>
          </div>

          <p>
            We thank all our partners, old and new, who visited us and took the time to discuss upcoming project cargo,
            oversized haulage, and engineering logistics challenges. We look forward to realizing these opportunities
            throughout the coming year.
          </p>
        </div>

        {/* BACK TO NEWS BUTTON */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/company-news"
            className="inline-block text-[#173f74] hover:text-[#0f2f58] font-bold text-sm lg:text-base transition-colors"
          >
            ← Back to Company News
          </a>
        </div>
      </article>
    </main>
  );
}
