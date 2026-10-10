import { pageMetadata } from "@/app/lib/seo";
import HistoryFilm from "./HistoryFilm";

export const metadata = pageMetadata({
  path: "/history/",
  title: "Our History | Mega Move India",
  description: "Explore the legacy and milestone achievements of Mega Move India Private Limited, from our origins in heavy haulage in 2005 to full-scale global logistics integration in 2025 and beyond.",
});

export default function HistoryPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-white/10 selection:text-white">
      {/* Inject custom styling to dynamically transform the global header and footer to match the dark premium branding */}
      <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: #000 !important; }
        header { background-color: rgba(0,0,0,0.6) !important; border-bottom-color: transparent !important; }
        header p { color: #71717a !important; }
        header button { color: #a1a1aa !important; }
        button[aria-label="Open menu"] { color: rgba(255,255,255,0.85) !important; }
        header img { filter: brightness(0) invert(1) !important; }
        footer { background-color: #000 !important; border-top-color: #18181b !important; }
        footer p, footer span, footer a { color: #a1a1aa !important; }
        footer h3, footer h4, footer strong { color: #f4f4f5 !important; }
        footer hr { border-color: #18181b !important; }
      `}} />

      <HistoryFilm />
    </main>
  );
}
