import type { NextConfig } from "next";
import posts from "./src/content/posts.json";

const recipeSlugs = (posts as { slug: string; kind: string }[])
  .filter((post) => post.kind === "recipe")
  .map((post) => post.slug);

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
