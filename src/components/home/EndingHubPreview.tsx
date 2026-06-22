"use client";

import Link from "next/link";

const endings = [
  {
    name: "Grand Finale",
    type: "Standard",
    difficulty: "Normal",
    desc: "The default ending most players see on first playthrough. Unlocks by completing any main route without special conditions.",
    href: "/endings",
  },
  {
    name: "Smile For Me",
    type: "Standard",
    difficulty: "Normal",
    desc: "Pierrot's main ending. Accept his offer in the garden scene during Act III. Post-credits shows a single red thread.",
    href: "/characters/pierrot",
  },
  {
    name: "Doctor's Note",
    type: "Standard",
    difficulty: "Hard",
    desc: "The Doctor's main ending. Collect at least 3 medical files and accept his diagnosis. The prescription appears in your next route.",
    href: "/characters/doctor",
  },
  {
    name: "Eternal Silence",
    type: "Secret",
    difficulty: "Very Hard",
    desc: "Pierrot's secret ending. Refuse all dialogue for 3 consecutive scenes. Screen stays black for 4 minutes. Post-credits breaks the fourth wall.",
    href: "/endings/eternal-silence",
  },
  {
    name: "Columbina's Truth",
    type: "Secret",
    difficulty: "Very Hard",
    desc: "Complete three perfect loops with Columbina. Any deviation resets progress. The fourth door reveals the circus's true nature.",
    href: "/characters/columbina",
  },
  {
    name: "White Room",
    type: "Secret",
    difficulty: "Unknown",
    desc: "Referenced by The Doctor in Scene 7 but never officially found. May require cross-route completion of all other endings first.",
    href: "/characters/doctor",
  },
];

export default function EndingHubPreview() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          All Confirmed Endings
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The community has verified 8+ endings across standard, secret, and corrupted categories. Each requires specific unlock conditions and cross-route dependencies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {endings.map((ending, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                  ending.type === "Standard" ? "border-primary/30 text-primary" :
                  ending.type === "Secret" ? "border-blood/30 text-blood" :
                  "border-outline/30 text-on-surface-variant"
                }`}>
                  {ending.type}
                </span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                  {ending.difficulty}
                </span>
              </div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {ending.name}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                {ending.desc}
              </p>
              <Link
                href={ending.href}
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Unlock Requirements →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/endings"
            className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase"
          >
            View Full Ending Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
