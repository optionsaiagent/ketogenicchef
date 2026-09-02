import type { Metadata, Viewport } from "next";
import { Figtree, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Honolulu keto recipes`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.author }],
};

export const viewport: Viewport = {
  themeColor: "#161210",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${figtree.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-char focus:px-3 focus:py-2 focus:text-cream">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
