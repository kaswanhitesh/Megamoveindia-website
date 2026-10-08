import { pageMetadata } from "@/app/lib/seo";
import IndustryPage from "../IndustryPage";
import { INDUSTRIES } from "../data";

const industry = INDUSTRIES["metal-mining"];

export const metadata = pageMetadata({
  path: "/industries/metal-mining/",
  title: industry.metaTitle,
  description: industry.metaDescription,
});

export default function Page() {
  return <IndustryPage industry={industry} />;
}
