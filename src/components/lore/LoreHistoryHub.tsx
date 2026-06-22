"use client";

import Link from "next/link";

const categories = [
  { title: "Origins", desc: "The circus's founding and early history", href: "#origins" },
  { title: "Key Events", desc: "Major incidents that shaped the narrative", href: "#events" },
  { title: "Locations", desc: "Important places within and around the circus", href: "#locations" },
  { title: "Symbols", desc: "Recurring motifs and their meanings", href: "#symbols" },
  { title: "Anomalies", desc: "Timeline irregularities and unexplained phenomena", href: "#anomalies" },
  { title: "Records", desc: "Classified documents and hidden archives", href: "#records" },
];

export default function LoreHistoryHub() {
  return (
    <section id="origins" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Historical Encyclopedia
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="block bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors"
            >
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{cat.title}</h3>
              <p className="text-on-surface-variant text-sm">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
