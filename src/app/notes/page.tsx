import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes",
  description: "Older keto notes from Ketogenic Chef.",
};

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="kicker">Archive</p>
      <h1 className="display mt-3 text-4xl text-char">Notes</h1>
      <ul className="mt-10 space-y-8">
        {notes.map((note) => (
          <li key={note.slug}>
            <Link href={`/notes/${note.slug}`} className="group">
              <p className="display text-2xl text-char group-hover:text-chili">{note.title}</p>
              <p className="mt-2 text-sm text-muted">{note.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
