"use client";

import Link from "next/link";

const sections = [
  { name: "Confirmed Ending", href: "#confirmed" },
  { name: "Open Endings (Unnamed)", href: "#open-endings" },
  { name: "Ending Analysis", href: "#explained" },
];

export default function EndingTableOfContents() {
  return (
    <section className="py-8 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-lg text-on-surface mb-4">Contents</h2>
        <div className="flex flex-wrap gap-3">
          {sections.map((s) => (
            <Link key={s.name} href={s.href} className="font-mono text-xs text-primary hover:underline px-3 py-1 border border-primary/20 hover:border-primary/40 transition-colors">
              {s.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
