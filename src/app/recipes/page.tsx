import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { recipes } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Recipes",
  description: "Honolulu keto recipes: kalua pig, garlic shrimp, ahi, musubi, mixed plates. Shop Costco and Foodland.",
};

export default function RecipesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="kicker">The plates</p>
      <h1 className="display mt-3 text-4xl text-char sm:text-6xl">Recipes</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Weeknight cooking in Honolulu. No specialty order. No pineapple-teriyaki costume.
      </p>
      <ul className="mt-12 grid gap-10 sm:grid-cols-2">
        {recipes.map((recipe) => (
          <li key={recipe.slug}>
            <Link href={`/recipes/${recipe.slug}`} className="group grid gap-4 sm:grid-cols-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-nori sm:col-span-2">
                <Image
                  src={recipe.image || "/images/kalua-pig-hero.jpg"}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 20vw, 100vw"
                />
              </div>
              <div className="sm:col-span-3">
                <p className="display text-2xl text-char group-hover:text-chili">{recipe.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{recipe.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
