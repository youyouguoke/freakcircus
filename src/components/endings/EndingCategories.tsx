"use client";

import { CURRENT_VERSION, ENDINGS_PLANNED } from "@/lib/site-facts";

const categories = [
  {
    name: "Confirmed",
    desc: "The only ending confirmed to exist in the current build: \"Missing\" (Bad Ending), associated with Harlequin's route.",
  },
  {
    name: "Planned (Not Yet Implemented)",
    desc: `The developer has listed ${ENDINGS_PLANNED} planned endings on itch.io: Pierrot's ending, Harlequin's ending, Protagonist's ending, and "All together" (MC with both Pierrot and Harlequin). None are implemented in the current ${CURRENT_VERSION} build.`,
  },
];

export default function EndingCategories() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Ending Categories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c) => (
            <div key={c.name} className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-2">{c.name}</h3>
              <p className="text-on-surface/60 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
