import type { Metadata } from "next";
import Image from "next/image";
import { getPage, rewriteHtml } from "@/lib/posts";

export const metadata: Metadata = {
  title: "7-Day Hawaii Keto Plan",
  description: "A week of Honolulu keto cooking with an Oahu grocery list. Late breakfast, leftovers on purpose.",
};

export default function PlanPage() {
  const page = getPage("your-7-day-hawaii-keto-plan");
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="kicker">Oahu grocery list</p>
      <h1 className="display mt-3 text-4xl text-char sm:text-6xl">7-Day Hawaii Keto Plan</h1>
      <div className="relative mt-8 aspect-[4/3] overflow-hidden">
        <Image
          src="/images/grocery-haul.jpg"
          alt="Oahu grocery haul for the 7-day Hawaii keto plan"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 48rem, 100vw"
          priority
        />
      </div>
      <p className="mt-8">
        <a className="btn" href="/downloads/7-day-hawaii-keto-plan.pdf">
          Download the PDF
        </a>
      </p>
      <div
        className="prose-kc mt-10 text-lg"
        dangerouslySetInnerHTML={{ __html: rewriteHtml(page?.html || "") }}
      />
    </article>
  );
}
