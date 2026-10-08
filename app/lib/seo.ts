import type { Metadata } from "next";

// Final production domain. Canonical URLs, the sitemap and share previews all
// point here, even while the site is served from a temporary Hostinger address.
export const SITE_URL = "https://megamoveindia.com";
export const SITE_NAME = "Mega Move India";
const DEFAULT_SHARE_IMAGE = "/og-image.jpg";

interface PageMetadataInput {
  // Route path with trailing slash (matches trailingSlash: true), e.g. "/contact/".
  path: string;
  title: string;
  description: string;
  image?: string;
}

// Per-page metadata with canonical URL and WhatsApp/LinkedIn/X share previews.
export function pageMetadata({ path, title, description, image = DEFAULT_SHARE_IMAGE }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url: path,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
