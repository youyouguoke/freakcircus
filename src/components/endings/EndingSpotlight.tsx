"use client";

import Link from "next/link";

const spotlights = [
  {
    id: "ENDING #04",
    title: "Eternal Silence",
    difficulty: "Hard",
    character: "Pierrot",
    desc: "The secret ending that breaks the game's narrative contract. Requires refusing all dialogue for three consecutive scenes, triggering a 4-minute black screen where Pierrot narrates events from previous playthroughs that the player never selected.",
    href: "/endings/eternal-silence",
  },
  {
    id: "ENDING #07",
    title: "Corrupted Data",
    difficulty: "Impossible",
    character: "???",
    desc: "A rumored ending hidden inside unused game files. The screen displays raw hex data before the application crashes. No player has verified legitimate unlock conditions. Data miners found references in build 1.04.",
    href: "/endings/corrupted-data",
  },
  {
    id: "ENDING #09",
    title: "Columbina's Truth",
    difficulty: "Very Hard",
    character: "Columbina",
    desc: "Requires perfect alignment of all dialogue choices across three consecutive loops. Any deviation causes a complete reset. The ending suggests the circus is a purgatorial system where characters forget but the world remembers.",
    href: "/endings/columbinas-truth",
  },
];

export default function EndingSpotlight() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
          // Ending Spotlight — Weekly Rotation
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {spotlights.map((s) => (
            <div key={s.id} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">{s.id}</div>
              <h3 className="font-[Creepster] text-2xl text-primary mb-2">{s.title}</h3>
              <div className="flex gap-2 mb-3">
                <span className="font-[JetBrains_Mono] text-xs text-blood border border-blood/30 px-2 py-1">{s.difficulty}</span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant border border-outline/30 px-2 py-1">{s.character}</span>
              </div>
              <p className="text-on-surface-variant text-sm mb-4">{s.desc}</p>
              <Link href={s.href} className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
                Full Investigation →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
