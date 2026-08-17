"use client";

import Link from "next/link";

const characters = [
  {
    name: "Pierrot",
    role: "Main Character (Day 1)",
    desc: "The melancholic clown. Described as yandere — obsessive and possessive. His rivalry with Harlequin is driven by the Columbina legend.",
    lore: ["Introduced in Day 1 at the cafe/street", "Central to the Pierrot-Harlequin rivalry", "Day 2 tent routes deepen his story"],
    href: "/characters/pierrot",
  },
  {
    name: "Harlequin",
    role: "Main Character (Day 1)",
    desc: "The seductive rival. Manipulative and obsessive. Killed Columbina, which drives the central conflict.",
    lore: ["Introduced in Day 1 as Pierrot's rival", "The 'Missing' bad ending is associated with his route", "The Columbina legend reveals his role in her death"],
    href: "/characters/harlequin",
  },
  {
    name: "The Doctor",
    role: "Day 2 Character",
    desc: "Circus physician introduced in Day 2. Appears in tent-based horror scenes alongside Ticket Taker.",
    lore: ["Introduced in Day 2 tent routes", "One of three new characters added in the Day 2 update", "Community members speculate about hidden knowledge, but this is unverified"],
    href: "/characters/doctor",
  },
  {
    name: "Jester",
    role: "Day 2 Character",
    desc: "Storyteller character introduced in Day 2. Part of the tent route content.",
    lore: ["Introduced in Day 2 alongside Doctor and Ticket Taker", "Described as a storyteller in the tent routes"],
    href: "/characters/jester",
  },
  {
    name: "Ticket Taker",
    role: "Day 1-2 Character",
    desc: "Introduced in Day 1 at the cafe. Expanded role in Day 2 tent routes.",
    lore: ["First character the player meets in Day 1", "Present in both Day 1 and Day 2 content"],
    href: "/characters",
  },
];

export default function CharacterLoreConnections() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest mb-4">
          Character Lore
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Each character&apos;s role in the story based on verified community sources.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((c) => (
            <Link key={c.name} href={c.href} className="glass-card p-6 hover:border-primary transition-colors">
              <h3 className="font-display text-lg text-on-surface mb-1">{c.name}</h3>
              <div className="font-mono text-[9px] text-primary uppercase mb-3">{c.role}</div>
              <p className="text-on-surface/60 text-sm mb-4">{c.desc}</p>
              <ul className="space-y-1">
                {c.lore.map((item, i) => (
                  <li key={i} className="text-on-surface/50 text-xs flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
