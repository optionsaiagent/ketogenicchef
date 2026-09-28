import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/notes",
  "/plan",
  "/affiliate-disclosure",
  "/privacy-policy",
  "/terms-of-service",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: new URL(path, site.url).href,
  }));

  const postEntries: MetadataRoute.Sitemap = [
    ...posts.filter((post) => post.kind === "recipe"),
    ...posts.filter((post) => post.kind === "note"),
  ].map((post) => ({
    url: new URL(
      `${post.kind === "recipe" ? "/recipes" : "/notes"}/${post.slug}`,
      site.url,
    ).href,
    lastModified: post.date,
  }));

  return [...staticEntries, ...postEntries];
}
