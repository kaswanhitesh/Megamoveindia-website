export default function PrivacyPolicy() {
  const sections = [
    "About Mega Move India",
    "Information We Collect",
    "How We Use Information",
    "Consent",
    "Sharing Of Information",
    "International Data Transfers",
    "Data Retention",
    "Cookies & Analytics",
    "Marketing Communications",
    "Confidentiality",
    "Data Security",
    "Third Party Websites",
    "Limitation Of Liability",
    "Indemnity",
    "User Rights",
    "Governing Law",
    "Changes To Policy",
    "Contact Information",
  ];

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <div className="max-w-[1600px] mx-auto px-20 py-16">

        <h1 className="text-5xl font-light mb-16">
          Privacy Policy
        </h1>

        <div className="grid grid-cols-[320px_1fr] gap-20">

          {/* Left Navigation */}

          <aside className="sticky top-10 h-fit bg-white border border-gray-200 rounded-xl p-8">

            <h3 className="text-xs tracking-[3px] uppercase font-semibold text-gray-500 mb-8">
              Contents
            </h3>

            <div className="space-y-4">
              {sections.map((item, index) => (
                <a
                  key={item}
                  href={`#section-${index + 1}`}
                  className="block text-gray-600 hover:text-black transition"
                >
                  {index + 1}. {item}
                </a>
              ))}
            </div>

          </aside>

          {/* Right Content */}

          <div className="space-y-20">

            <section id="section-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold">
                  1
                </span>

                <h2 className="text-4xl font-semibold">
                  About Mega Move India
                </h2>
              </div>

              <p className="text-lg leading-10 text-gray-700">
                Mega Move India Private Limited specializes in
                Project Logistics, Freight Forwarding,
                Heavy Lift Transportation, Over-Dimensional Cargo,
                Breakbulk Transportation, Air Freight,
                Ocean Freight, Land Transportation,
                Equipment Rentals, Warehousing Solutions
                and Supply Chain Management.
              </p>
            </section>

            <section id="section-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold">
                  2
                </span>

                <h2 className="text-4xl font-semibold">
                  Information We Collect
                </h2>
              </div>

              <p className="text-lg leading-10 text-gray-700">
                We may collect personal information,
                business information,
                shipment details,
                customs documentation,
                technical drawings,
                project information,
                equipment requirements,
                website analytics,
                IP addresses,
                browser information and other data
                necessary for the execution of logistics services.
              </p>
            </section>

            <section id="section-3">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold">
                  3
                </span>

                <h2 className="text-4xl font-semibold">
                  How We Use Information
                </h2>
              </div>

              <p className="text-lg leading-10 text-gray-700">
                Information is used for freight forwarding,
                transportation management,
                customs coordination,
                warehousing operations,
                equipment rentals,
                contract administration,
                customer service,
                marketing communications and legal compliance.
              </p>
            </section>

            {/* Continue same format for sections 4–18 */}

            <section id="section-18">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-yellow-500 text-white px-4 py-2 rounded-md font-bold">
                  18
                </span>

                <h2 className="text-4xl font-semibold">
                  Contact Information
                </h2>
              </div>

              <div className="text-lg leading-10 text-gray-700">
                <p>
                  Mega Move India Private Limited
                </p>

                <p>
                  A-Wing, Office No. 905,
                  Pranik Chambers
                </p>

                <p>
                  Saki Vihar Road, Sakinaka
                </p>

                <p>
                  Andheri East, Mumbai - 400072
                </p>

                <p>
                  Maharashtra, India
                </p>

                <p className="mt-4">
                  Phone: +91 93214 99970
                </p>

                <p>
                  Email: info@megamoveindia.com
                </p>
              </div>
            </section>

          </div>

        </div>
      </div>
    </main>
  );
}
