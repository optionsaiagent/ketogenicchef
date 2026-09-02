import type { Metadata } from "next";
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
      <p className="mt-6">
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
