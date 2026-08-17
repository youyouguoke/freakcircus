"use client";

export default function HistoricalDocuments() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Story Elements
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Key story elements confirmed by community sources.
        </p>
        <div className="space-y-4">
          {[
            { title: "The Cafe (Day 1)", desc: "The starting location where the player receives the pink ticket and first encounters the circus world." },
            { title: "The Circus Entrance", desc: "Where the Ticket Taker welcomes the player. This transition marks the shift from normal life to the circus." },
            { title: "The Tent Routes (Day 2)", desc: "Day 2's branching content is structured around different tents, each containing different character stories." },
            { title: "The Mirror Scene (Day 2)", desc: "A key story moment confirmed by multiple YouTube playthroughs. Its narrative significance is still being discussed." },
            { title: "The Columbina Legend (Day 2)", desc: "The central piece of confirmed lore — explains why Pierrot and Harlequin are rivals." },
          ].map((doc, i) => (
            <div key={i} className="glass-card p-5 flex items-start gap-4">
              <span className="font-mono text-xs text-primary shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-sm text-on-surface mb-1">{doc.title}</h3>
                <p className="text-on-surface/50 text-xs">{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
