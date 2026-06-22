"use client";

import Link from "next/link";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Comparison", href: "#comparison" },
  { label: "Order", href: "#order" },
  { label: "Archive", href: "#archive" },
  { label: "Featured", href: "#featured" },
  { label: "Requirements", href: "#requirements" },
  { label: "Branch Map", href: "#branch-map" },
  { label: "Triggers", href: "#triggers" },
  { label: "Notes", href: "#player-notes" },
  { label: "Symbolism", href: "#symbolism" },
  { label: "FAQ", href: "#faq" },
];

export default function WalkthroughsHero() {
  return (
    <section className="bg-surface min-h-[60vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="font-[Creepster] text-4xl md:text-6xl lg:text-7xl text-primary mb-4">
          Route Walkthroughs
        </h1>
        <p className="text-on-surface-variant text-lg mb-8 max-w-2xl">
          Frame-perfect decision maps for every route in The Freak Circus. Every choice matters.
        </p>
        
        <nav className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block px-3 py-1.5 text-xs font-[JetBrains_Mono] uppercase tracking-wider border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
