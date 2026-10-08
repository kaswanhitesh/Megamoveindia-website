"use client";

import { useEffect, useRef, useState } from "react";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

const FALLBACK_EMAIL = "info@megamoveindia.com";
const inputClass = "border border-gray-300 p-3 text-base bg-white";

// Posts to /contact.php (served by Hostinger's PHP), which emails the enquiry.
export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const startedAt = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startedAt.current) startedAt.current.value = String(Date.now());
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/contact.php", { method: "POST", body: new FormData(form) });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.ok) {
        form.reset();
        setStatus({ state: "sent", message: data.message });
      } else {
        setStatus({
          state: "error",
          message: data?.message ?? `Sorry, something went wrong. Please email ${FALLBACK_EMAIL} directly.`,
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: `Sorry, your enquiry could not be sent. Please email ${FALLBACK_EMAIL} directly.`,
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div className="max-w-[520px] mx-auto border border-green-600/30 bg-green-50 p-6 text-center text-green-800" role="status">
        {status.message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-[520px] mx-auto">
      {/* Spam traps: hidden from people, filled in by bots */}
      <input ref={startedAt} type="hidden" name="started_at" />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input required name="name" type="text" placeholder="Name *" aria-label="Name" autoComplete="name" className={inputClass} />
        <input required name="phone" type="tel" placeholder="Phone Number *" aria-label="Phone number" autoComplete="tel" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input required name="email" type="email" placeholder="Email Address *" aria-label="Email address" autoComplete="email" className={inputClass} />
        <input name="company" type="text" placeholder="Company Name" aria-label="Company name" autoComplete="organization" className={inputClass} />
      </div>

      <textarea required name="remarks" rows={5} placeholder="Remarks *" aria-label="Remarks" className={`${inputClass} w-full`} />

      {status.state === "error" && (
        <p className="text-center text-sm text-red-700" role="alert">
          {status.message}
        </p>
      )}

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="bg-[#c41e1e] text-white px-10 lg:px-14 py-3 lg:py-4 text-lg lg:text-xl font-semibold rounded disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending…" : "Submit Enquiry"}
        </button>
      </div>
    </form>
  );
}
