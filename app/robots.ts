import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

export const dynamic = "force-static";

// Search and AI answer engines are welcome: being readable by ChatGPT, Perplexity, Claude,
// Gemini and Copilot is how the company gets cited in AI answers. Listing them by name
// keeps them allowed even if a broader rule is ever added for "*".
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/contact.php" },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: "/contact.php" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
