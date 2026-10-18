import type { NextConfig } from "next";
import posts from "./src/content/posts.json";

const recipeSlugs = (posts as { slug: string; kind: string }[])
  .filter((post) => post.kind === "recipe")
  .map((post) => post.slug);

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  {
    key: "Content-Security-Policy-Report-Only",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https: wss:; media-src 'self' data: blob: https:; frame-src 'self' https:; worker-src 'self' blob:; frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self' https:",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return recipeSlugs.flatMap((slug) => [
      {
        source: `/${slug}`,
        destination: `/recipes/${slug}`,
        permanent: true,
      },
      {
        source: `/${slug}/`,
        destination: `/recipes/${slug}`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
