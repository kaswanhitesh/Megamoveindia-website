import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Fleet Expansion | Company News | Mega Move India",
  description:
    "Mega Move India Private Limited adds state-of-the-art hydraulic axle trailers and heavy-duty pullers to its in-house equipment fleet to support oversized cargo operations.",
};

export default function FleetExpansionPage() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[280px] lg:h-[450px] overflow-hidden">
        <img
          src="/images/Companynews/IMG_0983.webp"
          alt="Fleet Expansion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="text-xs lg:text-sm font-semibold tracking-widest uppercase bg-[#f4b400]/80 text-black px-3 py-1 rounded">
              Fleet News
            </span>
            <h1 className="text-2xl lg:text-5xl font-light mt-4 mb-3">
              Equipment Fleet Expansion
            </h1>
            <p className="text-xs lg:text-base tracking-[2px] uppercase">
              Investing in State-of-the-Art Heavy Transport Assets
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="text-sm text-gray-500 mb-4">Posted on November 3, 2025</div>
        <h2 className="text-3xl lg:text-4xl font-bold text-[#173f74] mb-6">
          Scaling Up Our Project Logistics Capabilities Across India
        </h2>

        <div className="prose prose-gray max-w-none text-gray-600 leading-8 text-[15px] lg:text-[17px] space-y-6">
          <p>
            Mega Move India Private Limited is excited to announce the latest addition to our in-house specialized
            transportation assets. To support the growing demand for heavy haulage and over-dimensional cargo (ODC)
            movements in India, we have expanded our fleet with new hydraulic axle lines and high-horsepower heavy pullers.
          </p>
          <p>
            These new modules feature state-of-the-art hydraulic suspension systems that ensure optimal load distribution
            and cargo safety across uneven roads. The addition brings our total specialized hydraulic axle line capacity
            to **40 lines**, positioning Mega Move India to tackle dual-axle and multi-combination projects of up to 500+ metric
            tons.
          </p>
          <p>
            With major infrastructure projects, refinery expansions, and wind energy plants ramping up across Western and
            Southern India, having instant access to modern in-house equipment is a crucial operational advantage for our
            EPC clients.
          </p>
          
          <div className="my-8 border-l-4 border-[#173f74] bg-white p-6 rounded-r shadow-sm">
            <p className="italic font-medium text-gray-700">
              &ldquo;By continuously investing in our equipment fleet and training our personnel in state-of-the-art lashing
              and stability systems, we can guarantee higher reliability and absolute safety for oversized cargo shipments.&rdquo;
            </p>
            <p className="text-xs text-gray-500 mt-2 font-semibold">— Fleet Manager, Mega Move India</p>
          </div>

          <p>
            Our maintenance and safety teams have already completed inspection, load-testing, and compliance registrations
            for all new assets. They are now fully integrated and ready to support scheduled deployments for upcoming steel,
            power, and oil & gas projects.
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
