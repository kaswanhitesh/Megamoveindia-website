import { pageMetadata } from "@/app/lib/seo";
import IndustryPage from "../IndustryPage";
import { INDUSTRIES } from "../data";

const industry = INDUSTRIES["infrastructure"];

export const metadata = pageMetadata({
  path: "/industries/infrastructure/",
  title: industry.metaTitle,
  description: industry.metaDescription,
});

export default function Page() {
  return <IndustryPage industry={industry} />;
}
