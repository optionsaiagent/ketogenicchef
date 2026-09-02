import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipeImage, recipes, rewriteHtml } from "@/lib/posts";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return { title: "Not found" };
  return { title: recipe.title, description: recipe.excerpt };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  return (
    <article>
      <header className="bg-char text-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-2 lg:items-center lg:py-16">
          <div>
            <p className="kicker text-[#f0c9a0]">
              <Link href="/recipes" className="hover:text-cream">
                Recipes
              </Link>
            </p>
            <h1 className="display mt-4 text-4xl sm:text-5xl">{recipe.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">{recipe.excerpt}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={recipeImage(recipe)}
              alt={recipe.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div
          className="prose-kc text-lg"
          dangerouslySetInnerHTML={{ __html: rewriteHtml(recipe.html) }}
        />
      </div>
    </article>
  );
}
