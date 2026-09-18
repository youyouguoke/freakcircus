"use client";

import Link from "next/link";

const endings = [
  { name: "Missing (Bad Ending)", href: "/endings", status: "CONFIRMED" },
  { name: "Pierrot's ending", href: "/endings", status: "PLANNED" },
  { name: "Harlequin's ending", href: "/endings", status: "PLANNED" },
  { name: "Protagonist's ending", href: "/endings", status: "PLANNED" },
  { name: "All together", href: "/endings", status: "PLANNED" },
];

export default function TheoryEndingsLink() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Related Endings
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {endings.map((e) => (
            <Link key={e.name} href={e.href} className="glass-card p-4 hover:border-primary/50 transition-colors flex items-center justify-between">
              <span className="font-display text-sm text-on-surface">{e.name}</span>
              <span className={`font-mono text-[9px] uppercase ${e.status === "CONFIRMED" ? "text-green-500" : "text-amber-400"}`}>{e.status}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
