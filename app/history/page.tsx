import type { Metadata } from "next";
import HistoryClient from "./HistoryClient";

export const metadata: Metadata = {
  title: "Our History | Mega Move India",
  description:
    "Explore the legacy and milestone achievements of Mega Move India Private Limited, from our origins in heavy haulage in 2005 to full-scale global logistics integration in 2025 and beyond.",
};

export default function HistoryPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-100 font-sans selection:bg-white/10 selection:text-white">
      {/* Inject custom styling to dynamically transform the global header and footer to match the dark premium branding */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: #09090b !important; }
        header { background-color: #09090b !important; border-bottom-color: #18181b !important; }
        header p { color: #71717a !important; }
        header button { color: #a1a1aa !important; }
        header img { filter: brightness(0) invert(1) !important; }
        footer { background-color: #09090b !important; border-top-color: #18181b !important; }
        footer p, footer span, footer a { color: #a1a1aa !important; }
        footer h3, footer h4, footer strong { color: #f4f4f5 !important; }
        footer hr { border-color: #18181b !important; }
      `}} />

      <HistoryClient />
    </main>
  );
}
