import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write Mark at Ketogenic Chef. Honolulu home cooking, not a clinic.",
};

export default function ContactPage() {
  return (
    <article className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
      <div>
        <p className="kicker">Desk</p>
        <h1 className="display mt-3 text-4xl text-char sm:text-6xl">Contact</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Send a note with the form or email{" "}
          <a className="text-chili underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          . I do not take meal-prep orders, and I do not give medical advice.
        </p>
      </div>
      <ContactForm />
    </article>
  );
}
