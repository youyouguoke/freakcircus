"use client";

const records = [
  {
    id: "LORE_01",
    title: "The Circus of Horrors",
    category: "Setting",
    overview: "The Freak Circus is set in a traveling circus called the Circus of Horrors. The player begins as an ordinary café worker whose life becomes entangled with the enigmatic performers of this sinister circus.",
    facts: [
      "The circus arrives in town, bringing dark secrets and terrifying mysteries",
      "The player is dragged into the circus through a single encounter",
      "The circus features original artwork and carefully crafted backgrounds",
      "The setting combines psychological horror with romance tension",
    ],
    verified: true,
    source: "thefreakcircus.org, thefreakcircus.my",
  },
  {
    id: "LORE_02",
    title: "The Columbina Legend",
    category: "Core Lore",
    overview: "The Columbina legend is the most significant piece of confirmed lore in The Freak Circus. It is revealed in Day 2 and explains the central conflict between Pierrot and Harlequin.",
    facts: [
      "Columbina is a deceased character — killed by Harlequin",
      "Her death drives the rivalry between Pierrot and Harlequin",
      "The legend is revealed through Day 2 tent route content",
      "Columbina is not a playable character — she exists only in lore",
    ],
    verified: true,
    source: "thefreakcircus.org, thefreakcircus.wiki.gg, YouTube",
  },
  {
    id: "LORE_03",
    title: "The Café Meeting",
    category: "Day 1",
    overview: "The game begins at a café where the player works. The Ticket Taker delivers a pink ticket, and the player's encounter with Pierrot and Harlequin begins the central story.",
    facts: [
      "The player is a café worker at the start of the game",
      "The Ticket Taker is the first character encountered",
      "The pink ticket is delivered at the café",
      "Day 1 introduces Pierrot and Harlequin as the two main characters",
    ],
    verified: true,
    source: "thefreakcircus.my, YouTube playthroughs",
  },
  {
    id: "LORE_04",
    title: "Day 2 Tent Routes",
    category: "Day 2",
    overview: "Day 2 (released December 3, 2025) expands the story with tent-based routes. New characters Jester, Doctor, and Ticket Taker are introduced, and the Columbina legend is revealed.",
    facts: [
      "Day 2 was released on December 3, 2025",
      "Introduces three new characters: Jester, Doctor, Ticket Taker",
      "Features tent-based branching routes",
      "The mirror scene is a key story moment in Day 2",
      "The Columbina legend is revealed, explaining the Pierrot-Harlequin rivalry",
    ],
    verified: true,
    source: "thefreakcircus.my, thefreakcircus.org, YouTube",
  },
];

export default function FeaturedRecord() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Key Lore Records
        </h2>
        <div className="space-y-6">
          {records.map((r) => (
            <div key={r.id} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-primary">{r.id}</span>
                <span className="font-mono text-[9px] text-green-500 bg-green-900/20 px-2 py-0.5 uppercase">{r.category}</span>
                <span className="font-mono text-[9px] text-green-500 uppercase">Verified</span>
              </div>
              <h3 className="font-display text-lg text-on-surface mb-2">{r.title}</h3>
              <p className="text-on-surface/60 text-sm mb-4">{r.overview}</p>
              <div className="mb-3">
                <div className="font-mono text-[9px] text-on-surface/40 uppercase mb-2">Confirmed Facts</div>
                <ul className="space-y-1">
                  {r.facts.map((fact, i) => (
                    <li key={i} className="text-on-surface/50 text-xs flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="font-mono text-[8px] text-on-surface/30">Source: {r.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
