import { pageMetadata } from "@/app/lib/seo";
import HistoryFilm from "./HistoryFilm";

export const metadata = pageMetadata({
  path: "/history/",
  title: "Our History | From One Truck in 1986 to Mega Move India",
  description: "How Mega Move India grew from a single TATA 407 in Haryana in 1986 to Priya Roadlines in 1992 and today's heavy-haulage and project logistics company, with 40 hydraulic axle lines and offices across India.",
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
