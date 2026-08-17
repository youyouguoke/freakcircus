"use client";

import Link from "next/link";

const routes = [
  {
    name: "Pierrot",
    desc: "The melancholic clown. Introduced in Day 1, his story deepens in Day 2 through tent routes and the Columbina legend.",
    href: "/characters/pierrot",
    status: "Confirmed Route",
  },
  {
    name: "Harlequin",
    desc: "The seductive rival. Features the confirmed 'Missing' bad ending. Aggressive and comedic dialogue branches.",
    href: "/characters/harlequin",
    status: "Confirmed Route",
  },
  {
    name: "The Doctor",
    desc: "Circus physician introduced in Day 2. Appears in tent-based horror scenes alongside Ticket Taker.",
    href: "/characters/doctor",
    status: "Day 2 Character",
  },
  {
    name: "Jester",
    desc: "Storyteller character introduced in Day 2. Part of the tent route content.",
    href: "/characters/jester",
    status: "Day 2 Character",
  },
];

export default function CharacterRouteHub() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
          Character Routes
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Confirmed character routes and Day 2 characters in The Freak Circus
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((r) => (
            <div key={r.name} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1">
                  {r.status}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {r.name}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                {r.desc}
              </p>
              <Link
                href={r.href}
                className="text-primary font-mono text-xs uppercase hover:underline"
              >
                View Character →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
