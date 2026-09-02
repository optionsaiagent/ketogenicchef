import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { notes, rewriteHtml } from "@/lib/posts";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return { title: "Not found" };
  return { title: note.title, description: note.excerpt };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="kicker">Note</p>
      <h1 className="display mt-3 text-4xl text-char sm:text-5xl">{note.title}</h1>
      <div
        className="prose-kc mt-10 text-lg"
        dangerouslySetInnerHTML={{ __html: rewriteHtml(note.html) }}
      />
    </article>
  );
}
