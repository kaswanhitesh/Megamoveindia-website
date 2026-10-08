import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

export const dynamic = "force-static";

// Every page.tsx under app/ becomes a sitemap entry, so new pages are picked
// up automatically at build time.
function findRoutes(dir: string, route = ""): string[] {
  const routes: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      routes.push(...findRoutes(path.join(dir, entry.name), `${route}/${entry.name}`));
    } else if (entry.name === "page.tsx") {
      routes.push(`${route}/`);
    }
  }
  return routes;
}

function priority(route: string): number {
  if (route === "/") return 1;
  if (route.startsWith("/services/") || route === "/contact/" || route === "/odc-transport/") return 0.9;
  if (route.startsWith("/industries/") || route.startsWith("/case-studies/")) return 0.8;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return findRoutes(path.join(process.cwd(), "app"))
    .sort()
    .map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified,
      priority: priority(route),
    }));
}
