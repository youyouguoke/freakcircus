"use client";

import Link from "next/link";

const relationships = [
  {
    from: "Pierrot",
    to: "Harlequin",
    label: "OBSESSION",
    desc: "Harlequin describes Pierrot's garden with details the player never saw. Shared red thread sprite suggests a connection predating the circus.",
    href: "/characters",
  },
  {
    from: "Pierrot",
    to: "Columbina",
    label: "SILENCE",
    desc: "Pierrot's Eternal Silence narration references Columbina's hallway — a location he should not know about. Unused voice lines contain a hidden conversation.",
    href: "/characters",
  },
  {
    from: "The Doctor",
    to: "Columbina",
    label: "BETRAYAL",
    desc: "Medical files reference 'patient C' matching Columbina's injuries. The mirror in Scene 9 shows Columbina's reflection when The Doctor looks.",
    href: "/characters",
  },
  {
    from: "Harlequin",
    to: "The Doctor",
    label: "MANIPULATION",
    desc: "Harlequin's fractured route contains medical terminology only The Doctor uses. Their routes share the same soft-lock pattern in Scene 12.",
    href: "/characters",
  },
];

export default function CharacterRelationshipMap() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Character Relationship Map
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          How the four central figures connect across routes, hidden scenes, and shared narrative threads
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {relationships.map((rel, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">
                  {rel.label}
                </span>
              </div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {rel.from} ↔ {rel.to}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                {rel.desc}
              </p>
              <Link
                href={rel.href}
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Explore Connection →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
