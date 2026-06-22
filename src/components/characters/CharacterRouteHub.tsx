"use client";

import Link from "next/link";

const routes = [
  {
    name: "Pierrot",
    route: "Silent Route",
    difficulty: "Hard",
    desc: "Requires refusing all dialogue for three consecutive scenes. Unlocks the Eternal Silence ending and reveals hidden narration about previous playthroughs.",
    href: "/characters/pierrot",
  },
  {
    name: "Harlequin",
    route: "Fractured Route",
    difficulty: "Very Hard",
    desc: "Unlocks after failing her main route once. Contains the most aggressive dialogue pruning and 7 undocumented hidden scenes.",
    href: "/characters/harlequin",
  },
  {
    name: "The Doctor",
    route: "Memory Route",
    difficulty: "Hard",
    desc: "Requires finding 5 hidden medical files. The mirror connection in Scene 9 only appears after failing the route once.",
    href: "/characters/doctor",
  },
  {
    name: "Columbina",
    route: "Three-Loop Route",
    difficulty: "Very Hard",
    desc: "Requires perfect alignment of all dialogue choices across three loops. Any deviation causes a complete reset.",
    href: "/characters/columbina",
  },
];

export default function CharacterRouteHub() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Character Route Guide Hub
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Step-by-step walkthroughs for each character's main route, hidden triggers, and secret endings
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((r) => (
            <div key={r.name} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">
                  {r.difficulty}
                </span>
              </div>
              <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-2">
                {r.name} — {r.route}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                {r.desc}
              </p>
              <Link
                href={r.href}
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Read Route Guide →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
