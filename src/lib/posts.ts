import pagesJson from "@/content/pages.json";
import postsJson from "@/content/posts.json";

export type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  html: string;
  image: string;
  kind: "recipe" | "note";
};

export type Page = {
  slug: string;
  title: string;
  html: string;
  excerpt: string;
};

export const posts = postsJson as Post[];
export const pages = pagesJson as Page[];

export const recipes = posts.filter((p) => p.kind === "recipe");
export const notes = posts.filter((p) => p.kind === "note");

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPage(slug: string) {
  return pages.find((p) => p.slug === slug);
}

export function rewriteHtml(html: string) {
  const withoutWpMedia = html
    .replace(/<figure[^>]*>[\s\S]*?<img[^>]*(?:wp-content|ketogenicchef\.com)[^>]*>[\s\S]*?<\/figure>/gi, "")
    .replace(/<img[^>]*(?:wp-content|ketogenicchef\.com)[^>]*>/gi, "");
  return withoutWpMedia.replace(/href="\/([^"/]+)\/?"/g, (_full, slug: string) => {
    const post = getPost(slug);
    if (post?.kind === "recipe") return `href="/recipes/${slug}"`;
    if (post?.kind === "note") return `href="/notes/${slug}"`;
    if (slug === "about") return `href="/about"`;
    if (slug === "contact") return `href="/contact"`;
    if (slug === "your-7-day-hawaii-keto-plan") return `href="/plan"`;
    if (slug === "privacy-policy") return `href="/privacy-policy"`;
    if (slug === "educational-disclaimer" || slug === "affiliate-disclosure") {
      return `href="/${slug}"`;
    }
    return `href="/${slug}"`;
  });
}

export function recipeImage(post: Post) {
  return post.image || "/images/kalua-pig-hero.jpg";
}
