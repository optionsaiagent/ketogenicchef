import type { Metadata } from "next";
import { getPage, rewriteHtml } from "@/lib/posts";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  const page = getPage("terms-of-service");
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="display text-4xl text-char">{page?.title}</h1>
      <div className="prose-kc mt-8" dangerouslySetInnerHTML={{ __html: rewriteHtml(page?.html || "") }} />
    </article>
  );
}
