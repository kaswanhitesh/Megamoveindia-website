import { pageMetadata } from "@/app/lib/seo";
import type { ReactNode } from "react";

export const metadata = pageMetadata({
  path: "/privacy-policy/",
  title: "Privacy Policy | Mega Move India",
  description:
    "How Mega Move India Private Limited collects, uses, shares and protects personal data of website visitors, customers and business contacts, in line with India's DPDP Act, 2023.",
});

const EFFECTIVE_DATE = "9 October 2026";
const PRIVACY_EMAIL = "info@megamoveindia.com";

const highlights = [
  { title: "No tracking cookies", text: "This website does not use analytics, advertising or tracking cookies." },
  { title: "No selling of data", text: "We never sell or rent your personal data to anyone." },
  { title: "Used for logistics only", text: "We use your details to answer enquiries and deliver your shipments." },
  { title: "You stay in control", text: "Ask us at any time to access, correct or delete your data." },
];

const sections: { id: string; title: string; body: ReactNode }[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Mega Move India Private Limited (&ldquo;Mega Move India&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides
          project logistics, heavy haulage, ODC transport, freight forwarding and equipment rental services. Our
          registered office is at A-wing, Office No 905, Pranik Chambers, Sakivihar Road, Sakinaka, Andheri East, Mumbai
          400072, India.
        </p>
        <p>
          This policy explains how we handle personal data when you visit megamoveindia.com, send us an enquiry, do
          business with us, or meet us at an exhibition or event. For this data we act as the Data Fiduciary under the
          Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;).
        </p>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Personal data we collect",
    body: (
      <>
        <h3>Enquiries through this website</h3>
        <p>
          When you submit the enquiry form we collect your name, phone number, email address, company name and the
          details you write about your cargo or requirement.
        </p>
        <h3>Customers and shipments</h3>
        <p>
          When you engage us, we collect the contact details of your team and the information needed to move your cargo:
          shipper and consignee names and addresses, cargo details, and the documents required by Customs and other
          authorities, such as IEC, GST and PAN details, invoices, packing lists and permits.
        </p>
        <h3>Business contacts</h3>
        <p>
          We keep the business contact details of people we meet at exhibitions and events, or who share a visiting card
          with us: name, designation, company, phone number and email address.
        </p>
        <h3>Technical data</h3>
        <p>
          Like every web server, our hosting provider automatically records basic request data in server logs, such as IP
          address, browser type, pages requested and the time of the request. We use these logs only to keep the site
          secure and running.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your data",
    body: (
      <ul>
        <li>To reply to your enquiry and prepare transport plans and quotations.</li>
        <li>To carry out shipments: bookings, route surveys, permits, customs clearance, tracking and delivery.</li>
        <li>To invoice, collect payments and keep accounting records.</li>
        <li>To meet legal, tax, customs and regulatory obligations.</li>
        <li>
          To send business updates about our completed projects and vehicle availability by email or WhatsApp. You can
          opt out at any time (see <a href="#marketing">Marketing messages</a>).
        </li>
        <li>To protect our website, systems and business against fraud, spam and misuse.</li>
      </ul>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal basis",
    body: (
      <p>
        We process personal data on the basis of your consent, which you give when you send an enquiry or share your
        details with us, and for legitimate uses permitted by the DPDP Act. These include carrying out a service you have
        asked for and complying with law. Where we rely on consent, you can withdraw it at any time. Withdrawal does not
        affect processing already carried out, or data we must keep by law.
      </p>
    ),
  },
  {
    id: "marketing",
    title: "Marketing messages",
    body: (
      <>
        <p>
          We may send occasional updates about our projects, services and vehicle availability to customers and business
          contacts by email or through the official WhatsApp Business Platform.
        </p>
        <p>
          Every marketing message gives you a way to stop. Reply <strong>STOP</strong> on WhatsApp, tap the opt-out
          button, use the unsubscribe link in an email, or write to {PRIVACY_EMAIL}. We will stop marketing messages to
          you promptly. Messages about a shipment you have booked with us are not marketing and will continue.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who we share data with",
    body: (
      <>
        <p>We share personal data only where it is needed to provide our services or required by law:</p>
        <ul>
          <li>Transporters, shipping lines, airlines, ports, terminals and our partner agents in India and overseas.</li>
          <li>Customs, port authorities, and other government and regulatory bodies.</li>
          <li>Service providers who work for us, such as website hosting, email and messaging platforms, and accounting software.</li>
          <li>Professional advisers such as auditors and lawyers, and courts or authorities where the law requires it.</li>
        </ul>
        <p>We do not sell, rent or trade your personal data.</p>
      </>
    ),
  },
  {
    id: "international",
    title: "International transfers",
    body: (
      <p>
        Freight forwarding is international by nature. When your cargo moves to or from another country, the shipment
        details must be shared with carriers, agents and authorities in that country. We share only what the shipment
        needs, and we transfer data only to countries permitted under Indian law.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and third-party content",
    body: (
      <p>
        This website does not set analytics, advertising or tracking cookies. Our Contact page shows an embedded Google
        Map. When you view that map, Google may set its own cookies and collect data under the{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Google Privacy Policy
        </a>
        . Links to WhatsApp and LinkedIn take you to those services, which have their own privacy policies.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: (
      <p>
        We keep enquiry details for as long as needed to respond and follow up, and shipment and accounting records for
        the periods required by tax, customs and company law, generally up to eight years. Business contacts stay on our
        list until you ask us to remove you. When data is no longer needed, we delete it or anonymise it.
      </p>
    ),
  },
  {
    id: "security",
    title: "How we protect your data",
    body: (
      <p>
        We use reasonable security safeguards, including HTTPS encryption on this website, access controls on our email
        and business systems, and access limited to staff who need it for their work. No system is completely secure. If
        a personal data breach affects you, we will inform you and the Data Protection Board of India as the DPDP Act
        requires.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Under the DPDP Act you have the right to:</p>
        <ul>
          <li>get a summary of the personal data we hold about you and how we use it;</li>
          <li>have inaccurate or incomplete data corrected or updated;</li>
          <li>have your data erased when it is no longer needed, unless we must keep it by law;</li>
          <li>withdraw consent you have given;</li>
          <li>nominate another person to exercise your rights in case of death or incapacity;</li>
          <li>have your grievances addressed.</li>
        </ul>
        <p>
          To use any of these rights, email {PRIVACY_EMAIL}. We may ask you to verify your identity. We aim to respond
          within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Our services are meant for businesses. We do not knowingly collect personal data from anyone under 18. If you
        believe a child has sent us their data, contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy as our services or the law change. The date at the top of this page shows when it was
        last updated. Significant changes will be highlighted on this page.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#eef1f5]">
      {/* Hero band */}
      <section className="relative overflow-hidden bg-[#0f2a4d] pt-[90px] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-14 lg:px-10 lg:pb-32 lg:pt-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/60">Legal</p>
          <h1 className="mb-5 text-4xl font-light tracking-wide lg:text-6xl">Privacy Policy</h1>
          <p className="max-w-2xl text-base font-light leading-relaxed text-white/80 lg:text-lg">
            How Mega Move India Private Limited collects, uses and protects personal data, in line with the Digital
            Personal Data Protection Act, 2023.
          </p>
          <p className="mt-6 text-sm text-white/60">Last updated: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      {/* At a glance */}
      <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-6 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-white bg-white p-5 shadow-[0_10px_30px_rgba(15,42,77,0.10)]">
              <div className="mb-3 h-1 w-10 rounded bg-[#c41e1e]" />
              <h2 className="mb-2 text-base font-semibold text-[#0f2a4d]">{item.title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-[120px]">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-gray-500">On this page</p>
              <ol className="space-y-2 border-l border-gray-300 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-gray-600 hover:border-[#0f2a4d] hover:text-[#0f2a4d]">
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contact" className="-ml-px block border-l-2 border-transparent pl-4 text-gray-600 hover:border-[#0f2a4d] hover:text-[#0f2a4d]">
                    {sections.length + 1}. Contact &amp; grievances
                  </a>
                </li>
              </ol>
            </div>
          </nav>

          <div className="rounded-2xl bg-white px-6 py-8 shadow-[0_10px_40px_rgba(15,42,77,0.08)] sm:px-10 lg:px-14 lg:py-12">
            {sections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="policy-section scroll-mt-[120px] border-b border-gray-100 py-8 first:pt-0 last:border-b-0"
              >
                <h2 className="mb-4 flex items-baseline gap-3 text-xl font-semibold text-[#0f2a4d] lg:text-2xl">
                  <span className="font-mono text-sm font-normal text-[#c41e1e]">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                {s.body}
              </article>
            ))}

            <article id="contact" className="scroll-mt-[120px] pt-8">
              <div className="rounded-xl bg-[#0f2a4d] p-6 text-white sm:p-8">
                <h2 className="mb-3 flex items-baseline gap-3 text-xl font-semibold lg:text-2xl">
                  <span className="font-mono text-sm font-normal text-white/60">
                    {String(sections.length + 1).padStart(2, "0")}
                  </span>
                  Contact &amp; grievances
                </h2>
                <p className="mb-6 leading-relaxed text-white/80">
                  For any question, request or complaint about your personal data, contact our Grievance Officer. We will
                  respond within 30 days. If you are not satisfied with our response, you may approach the Data Protection
                  Board of India.
                </p>
                <div className="grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">Email</p>
                    <a href={`mailto:${PRIVACY_EMAIL}`} className="text-base text-white underline-offset-4 hover:underline">
                      {PRIVACY_EMAIL}
                    </a>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">Phone</p>
                    <a href="tel:+919321399970" className="text-base text-white underline-offset-4 hover:underline">
                      +91 93213 99970
                    </a>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">Post</p>
                    <p className="text-white/90">
                      Grievance Officer, Mega Move India Private Limited, A-wing, Office No 905, Pranik Chambers, Sakivihar
                      Road, Sakinaka, Andheri East, Mumbai 400072, India
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
