"use client";

import Link from "next/link";

const theories = [
  {
    title: "Why Pierrot Remembers Previous Routes",
    desc: "Evidence from hidden counters in save files suggests Pierrot's dialogue changes based on the number of completed routes. The 4th playthrough triggers lines that reference choices the player never selected.",
    href: "/theories/pierrot-remembers-routes",
  },
  {
    title: "Is Harlequin Trapped In The Loop?",
    desc: "Harlequin's fractured route reveals she has been attempting the same performance for an unknown number of iterations. Her 'You again' line suggests she recognizes the player from previous timelines.",
    href: "/theories",
  },
  {
    title: "Who Is Columbina Watching?",
    desc: "Columbina's three-loop storyline implies she is observing the player, not the protagonist. Her endings suggest she understands the circus as a purgatorial system where the player is the variable being tested.",
    href: "/theories",
  },
  {
    title: "Did The Doctor Create The Circus?",
    desc: "The Doctor's medical files contain references to experiments that predate the circus's founding. Unused voice lines suggest he was originally the primary antagonist before the narrative was restructured.",
    href: "/theories",
  },
];

export default function CharacterTheories() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Top Character Theories
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Community investigations into the true nature of each character, their relationships, and their role in the circus
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {theories.map((t) => (
            <div key={t.title} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">
                {t.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                {t.desc}
              </p>
              <Link
                href={t.href}
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Read Full Theory →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
