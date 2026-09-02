import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-char text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="display text-2xl">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm text-cream/80">
            <li>
              <Link href="/recipes">Recipes</Link>
            </li>
            <li>
              <Link href="/plan">7-day Hawaii keto plan</Link>
            </li>
            <li>
              <Link href="/about">About Mark</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <p className="text-sm leading-relaxed text-cream/60">
          Home cooking in Honolulu. Not a clinic, not a meal-prep company, not medical advice.
        </p>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto flex max-w-6xl flex-wrap gap-x-4 gap-y-1 px-5 py-5 text-xs text-cream/45">
          <span>© {site.name}. Honolulu.</span>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
          <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
        </p>
      </div>
    </footer>
  );
}
