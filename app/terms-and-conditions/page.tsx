import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mega Move India",
  description:
    "Terms and Conditions of Mega Move India Private Limited.",
};

export default function TermsAndConditions() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen">

      <section className="max-w-5xl mx-auto px-10 py-24">

        <h1 className="text-5xl font-light text-[#173f74] mb-8">
          Terms & Conditions
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-10">
          Please review Mega Move India Private Limited's Terms &
          Conditions by viewing or downloading the document below.
        </p>

        <a
          href="/documents/MegaMoveIndia-Terms-and-Conditions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-[#173f74]
            text-white
            px-8
            py-4
            rounded
            hover:bg-[#0f2f58]
            transition-all
          "
        >
          View / Download Terms & Conditions
        </a>

      </section>

    </main>
  );
}
