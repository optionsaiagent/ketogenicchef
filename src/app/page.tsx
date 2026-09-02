import Image from "next/image";
import Link from "next/link";
import { recipes } from "@/lib/posts";
import { site } from "@/lib/site";

export default function HomePage() {
  const rest = recipes;

  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-char">
        <Image
          src="/images/kalua-pig-hero.png"
          alt="Slow-cooker kalua pig with cabbage"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-char via-char/50 to-char/30" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
          <p className="kicker text-[#f0c9a0]">Honolulu · home kitchen</p>
          <h1 className="display mt-4 max-w-3xl text-4xl text-cream sm:text-6xl">{site.tagline}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
            I’m Mark. I shop Costco, Foodland, Times, and Don Quijote. Kalua pig, garlic shrimp, ahi,
            musubi, mixed plates — without the rice and without the sweet sauce. Five years of this
            at home. No miracle claims. Just dinner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/recipes" className="btn">
              See the recipes
            </Link>
            <Link href="/plan" className="inline-flex min-h-12 items-center border border-cream/30 px-5 text-[0.75rem] font-bold tracking-[0.12em] text-cream uppercase">
              7-day Hawaii plan
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Plates</p>
            <h2 className="display mt-3 text-4xl text-char">Popular this month</h2>
          </div>
          <Link href="/recipes" className="hidden text-sm text-chili underline underline-offset-4 sm:inline">
            All recipes
          </Link>
        </div>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((recipe) => (
            <li key={recipe.slug}>
              <Link href={`/recipes/${recipe.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-nori">
                  <Image
                    src={recipe.image || "/images/kalua-pig-hero.png"}
                    alt={recipe.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
                <p className="display mt-4 text-2xl text-char group-hover:text-chili">{recipe.title}</p>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{recipe.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-nori text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker text-[#f0c9a0]">A week of cooking</p>
            <h2 className="display mt-3 text-4xl">The 7-Day Hawaii Keto Plan</h2>
            <p className="mt-4 max-w-lg text-cream/80">
              An Oahu grocery list and a week that looks like how I actually eat: a late breakfast,
              an early dinner, leftovers on purpose. Use the window if it fits. Ignore it if it does
              not.
            </p>
            <Link href="/plan" className="btn mt-8">
              Get the plan
            </Link>
          </div>
          <p className="display text-3xl leading-snug text-cream/90 sm:text-4xl">
            If a dish needs an ingredient I cannot find at Costco, Foodland, Times, or Don Quijote, I
            usually do not bother publishing it.
          </p>
        </div>
      </section>
    </>
  );
}
