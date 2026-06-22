"use client";

import Link from "next/link";

const filters = [
  { name: "By topic", href: "#by-topic" },
  { name: "By character", href: "#by-character" },
  { name: "By credibility", href: "#by-credibility" },
  { name: "By awareness", href: "#by-awareness" },
];

export default function TheoryIndexing() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-8">
          // Archive Indexing System
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Link
              key={filter.name}
              href={filter.href}
              className="px-4 py-2 border border-outline/20 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-[JetBrains_Mono] text-xs uppercase"
            >
              {filter.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
