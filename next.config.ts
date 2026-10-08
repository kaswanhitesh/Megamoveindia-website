import type { NextConfig } from "next";

// Static export for Hostinger shared hosting (Apache, no Node.js runtime).
// Cache headers live in public/.htaccess since next.config headers() is
// not applied to static exports.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
