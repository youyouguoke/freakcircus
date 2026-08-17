"use client";

export default function ConspiracyBoard() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          What We Actually Know
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Verified facts about The Freak Circus that form the basis for community theories.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { category: "Characters", fact: "Pierrot and Harlequin are the two main characters (Day 1)" },
            { category: "Characters", fact: "Jester, Doctor, Ticket Taker appear in Day 2" },
            { category: "Lore", fact: "Columbina is dead — killed by Harlequin" },
            { category: "Lore", fact: "The Columbina legend explains Pierrot-Harlequin rivalry" },
            { category: "Endings", fact: "1 confirmed ending: 'Missing' (Bad Ending)" },
            { category: "Endings", fact: "3 unnamed open endings confirmed by developer" },
            { category: "Structure", fact: "Day 1 & 2 released, Day 3 planned" },
            { category: "Structure", fact: "Game is in v0.2, actively developed" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-4 flex items-start gap-3">
              <span className="font-mono text-[9px] text-green-500 bg-green-900/20 px-2 py-0.5 uppercase shrink-0">{item.category}</span>
              <span className="text-on-surface/60 text-sm">{item.fact}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
