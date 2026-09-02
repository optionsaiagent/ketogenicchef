import type { Metadata } from "next";
import { getPage, rewriteHtml } from "@/lib/posts";

export const metadata: Metadata = {
  title: "About Mark Souza",
  description: "Mark Souza cooks keto at home in Honolulu. Costco, Foodland, Times, Don Quijote. Not a clinic.",
};

export default function AboutPage() {
  const page = getPage("about");
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="kicker">Honolulu</p>
      <h1 className="display mt-3 text-4xl text-char sm:text-6xl">About Mark</h1>
      <div
        className="prose-kc mt-10 text-lg"
        dangerouslySetInnerHTML={{ __html: rewriteHtml(page?.html || "") }}
      />
    </article>
  );
}
