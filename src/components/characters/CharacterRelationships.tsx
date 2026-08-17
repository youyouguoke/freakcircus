"use client";

const relationships = [
  {
    pair: "Pierrot ↔ Harlequin",
    desc: "The central rivalry of the game. The Columbina legend in Day 2 reveals why they are rivals — Harlequin killed Columbina, which is the driving conflict.",
    verified: true,
  },
  {
    pair: "Pierrot ↔ Columbina",
    desc: "Columbina's death affects Pierrot significantly. The nature of their relationship before her death is not fully verified.",
    verified: true,
  },
  {
    pair: "Harlequin ↔ Columbina",
    desc: "Harlequin killed Columbina. This is the most significant confirmed plot point in the game.",
    verified: true,
  },
  {
    pair: "Doctor ↔ Ticket Taker",
    desc: "Both appear in Day 2 tent routes. Whether they have a deeper connection is unverified community speculation.",
    verified: false,
  },
  {
    pair: "Jester ↔ All Characters",
    desc: "Jester appears in Day 2 tent routes alongside other characters. His specific relationships are not well documented.",
    verified: false,
  },
];

export default function CharacterRelationships() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Character Relationships
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Key relationships between characters based on verified sources.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {relationships.map((r, i) => (
            <div key={i} className="glass-card p-5">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-sm text-on-surface">{r.pair}</h3>
                <span className={`font-mono text-[9px] uppercase ${r.verified ? 'text-green-500' : 'text-yellow-500'}`}>
                  {r.verified ? 'Verified' : 'Unverified'}
                </span>
              </div>
              <p className="text-on-surface/60 text-xs">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
