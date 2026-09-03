import type { Metadata } from "next";
import Image from "next/image";
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
    <article>
      <header className="bg-char text-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-2 lg:items-center lg:py-16">
          <div>
            <p className="kicker text-[#f0c9a0]">Note</p>
            <h1 className="display mt-4 text-4xl sm:text-5xl">{note.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">{note.excerpt}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={note.image}
              alt={note.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-12">
        <div
          className="prose-kc text-lg"
          dangerouslySetInnerHTML={{ __html: rewriteHtml(note.html) }}
        />
      </div>
    </article>
  );
}
