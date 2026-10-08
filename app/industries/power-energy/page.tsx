import { pageMetadata } from "@/app/lib/seo";
import IndustryPage from "../IndustryPage";
import { INDUSTRIES } from "../data";

const industry = INDUSTRIES["power-energy"];

export const metadata = pageMetadata({
  path: "/industries/power-energy/",
  title: industry.metaTitle,
  description: industry.metaDescription,
});

export default function Page() {
  return <IndustryPage industry={industry} />;
}
