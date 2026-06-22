"use client";

import Link from "next/link";

const categories = [
  { name: "Origins", desc: "The founding myth, original performers, and the medical experiment that created the circus", count: 8, href: "#origins" },
  { name: "Key Historical Events", desc: "The First Circus Fire, Mirror Hall opening, and other documented incidents", count: 12, href: "#events" },
  { name: "Important Locations", desc: "Main Tent, Mirror Hall, Doctor's Ward, Basement Stage, and Silent Exit", count: 5, href: "#locations" },
  { name: "Recurring Symbols", desc: "Red Thread, Masks, Mirrors, and Stage Curtains — their meanings across routes", count: 4, href: "#symbols" },
  { name: "Timeline Anomalies", desc: "Precognitive dialogue, save file memory, and architecture shifts between loops", count: 9, href: "#anomalies" },
  { name: "Forbidden Records", desc: "Restricted files, corrupted data, and unverified community discoveries", count: 4, href: "#restricted" },
];

export default function LoreCategories() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          The Complete History Of The Freak Circus
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          A comprehensive encyclopedia of the game's world — from the founding myth to the current timeline
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors"
            >
              <div className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {cat.name}
              </div>
              <p className="text-on-surface-variant text-sm mb-3">
                {cat.desc}
              </p>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                {cat.count} records
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
