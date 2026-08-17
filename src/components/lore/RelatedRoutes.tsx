"use client";

import Link from "next/link";

const related = [
  { lore: "Columbina Legend", ending: "Missing (Bad Ending)", walkthrough: "harlequin-true-route" },
  { lore: "Mirror Hall", ending: "Open Ending (unnamed)", walkthrough: "pierrot-main-route" },
  { lore: "Day 2 Tents", ending: "Open Endings (3 total)", walkthrough: "all-endings-guide" },
];

export default function RelatedRoutes() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Related Content
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map((r, i) => (
            <div key={i} className="glass-card p-4">
              <div className="font-mono text-[9px] text-on-surface/40 uppercase mb-1">Lore</div>
              <div className="text-on-surface text-sm mb-2">{r.lore}</div>
              <div className="font-mono text-[9px] text-on-surface/40 uppercase mb-1">Ending</div>
              <div className="text-on-surface text-sm mb-2">{r.ending}</div>
              <Link href={`/walkthroughs/${r.walkthrough}`} className="font-mono text-xs text-primary hover:underline">
                View Guide →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
