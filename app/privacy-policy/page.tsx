export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#122f5b] to-[#234b82] text-white py-24 text-center">
        <p className="uppercase tracking-[4px] text-yellow-400 text-sm">
          Mega Move India
        </p>

        <h1 className="text-6xl font-light mt-4">
          Privacy Policy
        </h1>

        <div className="w-16 h-[3px] bg-yellow-400 mx-auto mt-6"></div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-10 py-20">

        <div className="bg-white border border-gray-200 rounded-lg p-10 shadow-sm">
          <p className="text-lg leading-9 text-gray-700">
            Mega Move India Private Limited is committed to protecting
            the privacy and security of all information shared with us.
            This Privacy Policy explains how we collect, use, store and
            protect information obtained through our website, logistics
            services and business communications.
          </p>
        </div>

        <div className="mt-16 space-y-12">

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              1. Information We Collect
            </h2>

            <p className="text-gray-700 leading-8">
              We may collect company information, contact details,
              shipment information, project cargo requirements and
              communication records required to provide our logistics
              services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              2. How We Use Information
            </h2>

            <p className="text-gray-700 leading-8">
              Information is used for freight forwarding,
              transportation planning, project logistics execution,
              customer support, billing and regulatory compliance.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              3. Data Protection
            </h2>

            <p className="text-gray-700 leading-8">
              We implement reasonable technical and organizational
              measures to safeguard information from unauthorized
              access, misuse or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              4. Contact Us
            </h2>

            <p className="text-gray-700 leading-8">
              Email: info@megamoveindia.com
              <br />
              Phone: +91 93214 99970
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
