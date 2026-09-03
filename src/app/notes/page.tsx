import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notes } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes",
  description: "Older keto notes from Ketogenic Chef.",
};

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="kicker">Archive</p>
      <h1 className="display mt-3 text-4xl text-char">Notes</h1>
      <ul className="mt-12 grid gap-10 sm:grid-cols-2">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link href={`/notes/${note.slug}`} className="group grid gap-4 sm:grid-cols-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-nori sm:col-span-2">
                <Image
                  src={note.image}
                  alt={note.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 20vw, 100vw"
                />
              </div>
              <div className="sm:col-span-3">
                <p className="display text-2xl text-char group-hover:text-chili">{note.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{note.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
