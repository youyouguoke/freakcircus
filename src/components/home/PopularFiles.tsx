"use client";

import Link from "next/link";

const files = [
  {
    type: "Character",
    title: "Who Is Pierrot? Complete Character Guide",
    shortDesc: "Full analysis of Pierrot route, hidden dialogue triggers, and the loop theory.",
    fullDesc: "Pierrot is the melancholic clown of The Freak Circus, and his route is often the first players encounter. But beneath the surface lies one of the most complex character arcs in the game. This guide analyzes every dialogue choice, hidden trigger, and environmental clue that reveals Pierrot's true nature. The loop theory suggests that Pierrot demonstrates awareness extending beyond the fourth wall, remembering player behavior across save files and adjusting his responses accordingly. Key topics covered: Pierrot's garden scene mechanics, the silence trigger system, how replay awareness affects dialogue trees, and the connection between Pierrot's route and the Eternal Silence ending.",
    href: "/characters/pierrot",
    related: [
      { name: "Eternal Silence Ending", href: "/endings/eternal-silence" },
      { name: "Pierrot Loop Theory", href: "/theories/pierrot-remembers-every-loop" },
    ],
  },
  {
    type: "Route",
    title: "Harlequin Route Guide — Every Choice Mapped",
    shortDesc: "Every choice mapped. How to unlock her secret scenes and corrupted endings.",
    fullDesc: "Harlequin brings chaotic energy to The Freak Circus, with dialogue that shifts unpredictably between playful and menacing. Her route contains some of the most discussed hidden scenes in the community, requiring careful navigation to unlock her full storyline. This walkthrough maps every dialogue branch, identifies the comedic option sequence for Harlequin's Laughter ending, and explains how her route interconnects with Pierrot's through the Mirror Hall. Key topics: aggressive vs. comedic dialogue paths, the fractured route unlock conditions, how Harlequin's memory changes across playthroughs, and the hidden scene that only appears after failing her route once.",
    href: "/walkthroughs/harlequin-true-route",
    related: [
      { name: "All Endings Explained", href: "/endings" },
      { name: "Harlequin True Route", href: "/walkthroughs/harlequin-true-route" },
    ],
  },
  {
    type: "Endings",
    title: "How Many Endings Are in The Freak Circus? Complete Catalog",
    shortDesc: "Complete catalog of standard, secret, and corrupted endings with unlock conditions.",
    fullDesc: "The exact number of endings in The Freak Circus remains a topic of active community investigation. This comprehensive catalog documents all known endings: the standard character routes (Grand Finale, Smile For Me, Doctor's Note), secret endings requiring specific conditions (Eternal Silence, Columbina's Truth), and the corrupted endings that break the game interface itself. Each ending entry includes: unlock requirements, spoiler level, route dependencies, replay conditions, and community verification status. Special attention given to the Corrupted Data ending found in game files but never legitimately unlocked, and the White Room ending referenced by The Doctor in Scene 7.",
    href: "/endings",
    related: [
      { name: "Corrupted Data Ending", href: "/endings/corrupted-data" },
      { name: "Eternal Silence Guide", href: "/walkthroughs/pierrot-silent-route" },
    ],
  },
  {
    type: "Theory",
    title: "The Doctor Theory — Why His Knowledge Goes Beyond Medicine",
    shortDesc: "Why his medical knowledge goes beyond medicine. The mirror connection explained.",
    fullDesc: "The Doctor serves as the circus physician, but his medical knowledge extends into territory that players find increasingly unsettling. This theory analysis examines the clinical observations that break the fourth wall, the mirror connection that appears in Scene 9 only after failing his route once, and the five hidden medical files that reveal the circus's true purpose. Key evidence: The Doctor's precognitive references to endings before they occur, his awareness of save file states, the hex patterns found in crash logs after his route, and the unused voice lines suggesting he was originally designed as the primary antagonist.",
    href: "/theories",
    related: [
      { name: "Doctor's Memory Route", href: "/walkthroughs/doctor-memory-route" },
      { name: "Mirror Hall Lore", href: "/lore/mirror-hall" },
    ],
  },
  {
    type: "Lore",
    title: "Columbina Timeline — Chronological Breakdown of Hidden Clues",
    shortDesc: "Chronological breakdown of events, symbols, and hidden clues in her storyline.",
    fullDesc: "Columbina, the ballerina of The Freak Circus, appears gentle and refined at first. Her route contains disturbing revelations about the circus's true nature and plays a key role in understanding the overall timeline. This chronological analysis traces every hidden clue across her three-loop storyline: the changing hallway architecture, the fourth door that appears only after perfect alignment, the memory fragments that reference events from other routes, and the final revelation that suggests Columbina may be the only character who truly understands the circus. Includes: scene-by-scene analysis, symbol interpretation (red thread, mirrors, stage curtains), and connection to the Loop Theory.",
    href: "/lore",
    related: [
      { name: "Columbina Fractured Route", href: "/walkthroughs/columbina-fractured-route" },
      { name: "Timeline Records", href: "/lore/timeline" },
    ],
  },
];

export default function PopularFiles() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Most Popular Archive Files
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Where Readers Go First — Deep investigations into characters, routes, endings, and hidden lore
        </p>

        <div className="space-y-6">
          {files.map((file) => (
            <div
              key={file.title}
              className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-24 shrink-0">
                  <div className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1 text-center">
                    {file.type}
                  </div>
                </div>
                <div className="flex-1">
                  <Link href={file.href} className="group">
                    <h3 className="font-[Epilogue] text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {file.title}
                    </h3>
                  </Link>
                  <p className="text-on-surface-variant text-sm mb-4">
                    {file.shortDesc}
                  </p>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                    {file.fullDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {file.related.map((rel) => (
                      <Link
                        key={rel.name}
                        href={rel.href}
                        className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors"
                      >
                        {rel.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="shrink-0">
                  <Link
                    href={file.href}
                    className="inline-block px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
