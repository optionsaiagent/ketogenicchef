"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

const NAV = [
  { href: "/recipes", label: "Recipes" },
  { href: "/plan", label: "7-day plan" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/92 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="display text-xl text-char sm:text-2xl">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
              className="inline-flex min-h-11 items-center px-3 text-sm text-muted hover:text-chili"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex h-3.5 w-4 flex-col justify-between" aria-hidden>
            <span className="block h-px bg-char" />
            <span className="block h-px bg-char" />
            <span className="block h-px bg-char" />
          </span>
        </button>
        {open ? (
          <nav className="absolute inset-x-0 top-full border-b border-line bg-cream md:hidden" aria-label="Primary">
            <ul className="flex flex-col px-5 py-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex min-h-11 items-center" onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
