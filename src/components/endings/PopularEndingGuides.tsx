"use client";

import Link from "next/link";

const guides = [
  { name: "Pierrot Good Ending", href: "/characters/pierrot" },
  { name: "Pierrot Bad Ending", href: "/characters/pierrot" },
  { name: "Pierrot Secret Ending", href: "/characters/pierrot" },
  { name: "Harlequin Good Ending", href: "/characters/harlequin" },
  { name: "Harlequin Secret Ending", href: "/characters/harlequin" },
  { name: "Doctor Good Ending", href: "/characters/doctor" },
  { name: "Doctor Secret Ending", href: "/characters/doctor" },
  { name: "Columbina Good Ending", href: "/characters/columbina" },
  { name: "Columbina Secret Ending", href: "/characters/columbina" },
  { name: "True Ending Guide", href: "/endings" },
  { name: "All Endings Guide", href: "/endings" },
  { name: "Ending Order & Timeline", href: "/endings" },
];

export default function PopularEndingGuides() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Popular Ending Guides
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The most searched ending guides — direct links to detailed walkthroughs
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {guides.map((g) => (
            <Link
              key={g.name}
              href={g.href}
              className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors"
            >
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">ENDING GUIDE</div>
              <div className="text-foreground text-sm font-medium">{g.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
