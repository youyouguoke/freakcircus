"use client";

import Link from "next/link";

const records = [
  {
    id: "FILE_09",
    title: "What Was The First Circus Fire?",
    category: "World History",
    overview: "The First Circus Fire is the central mystery of The Freak Circus's backstory. According to recovered records, the original circus burned down decades before the current timeline, killing all original performers. However, conflicting evidence suggests the fire may never have happened — or that it happens repeatedly in a loop.",
    facts: [
      "Newspaper fragments reference a fire in 1923, 1954, and 1987 simultaneously",
      "No burn marks appear on current circus architecture",
      "Character dialogue references the fire from different historical perspectives",
      "The Doctor's medical files describe 'reconstruction' rather than 'recovery'",
    ],
    controversies: [
      "Some theorists believe the fire is a metaphor for memory erasure",
      "Others suggest the circus exists in multiple timelines simultaneously",
      "Data miners found references to 'Fire Loop #7' in unused files",
    ],
    relatedCharacters: ["The Doctor", "Pierrot", "Columbina"],
    relatedEndings: ["Doctor's Note", "Columbina's Truth"],
  },
  {
    id: "FILE_12",
    title: "What Is The Mirror Hall?",
    category: "Locations",
    overview: "The Mirror Hall is a hidden location in The Freak Circus that only appears under specific conditions. It contains mirrors that show events from other routes, future scenes, and occasionally the player's desktop. The Hall is considered the most lore-rich location in the game.",
    facts: [
      "Only appears after failing at least one route",
      "Contains 7 mirrors, each showing a different route's events",
      "The central mirror shows the player's desktop, breaking the fourth wall",
      "Mirror reflections change based on the number of completed endings",
    ],
    controversies: [
      "Some players report seeing a sixth performer in the mirrors",
      "The Hall's geometry does not match the circus's floor plan",
      "Audio files contain breathing sounds not matching any character",
    ],
    relatedCharacters: ["Pierrot", "Columbina"],
    relatedEndings: ["Eternal Silence", "Corrupted Data"],
  },
  {
    id: "FILE_03",
    title: "What Is The Founding Myth?",
    category: "World History",
    overview: "The Founding Myth describes how The Freak Circus was created. According to The Doctor's medical files, the circus was founded after a medical experiment gone wrong — an attempt to preserve human consciousness after death. The original performers were test subjects, and the current characters are reconstructions of their memories.",
    facts: [
      "The Doctor's files reference 'Project Continuity' from 1923",
      "Patient records describe memory extraction procedures",
      "The circus architecture matches 1920s hospital layouts",
      "Character names match original patient IDs",
    ],
    controversies: [
      "Some theorists believe the 'medical experiment' is a cover story",
      "Others suggest the circus is a purgatorial system, not a scientific experiment",
      "Unused files reference a 'Director' who is never seen in the game",
    ],
    relatedCharacters: ["The Doctor", "All Characters"],
    relatedEndings: ["Doctor's Note", "Null Route"],
  },
  {
    id: "FILE_17",
    title: "What Is The Silent Exit?",
    category: "Locations",
    overview: "The Silent Exit is a hidden location that appears only in the Eternal Silence ending. It is described as a door that leads 'outside the circus' but shows only darkness when opened. Some players report hearing their own voice when approaching the Exit.",
    facts: [
      "Only appears in the Eternal Silence ending",
      "Opening the Exit causes the game to crash on some systems",
      "Audio files contain the player's system username spoken aloud",
      "The Exit's door handle matches the player's mouse cursor",
    ],
    controversies: [
      "Some believe the Exit represents death within the narrative",
      "Others suggest it is a portal to the 'real world' outside the game",
      "Data miners found an unused scene showing what is behind the Exit",
    ],
    relatedCharacters: ["Pierrot"],
    relatedEndings: ["Eternal Silence"],
  },
];

export default function FeaturedRecord() {
  return (
    <section id="featured-records" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
          // Featured Records — Major Historical Events
        </div>

        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Major Historical Events
        </h2>

        <div className="space-y-8">
          {records.map((record) => (
            <div key={record.id} className="bg-surface-container border border-outline/20 p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-blood text-blood">
                  ARCHIVE STATUS: PARTIALLY RECOVERED
                </span>
              </div>

              <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">
                {record.id} — {record.category}
              </div>

              <h3 className="font-[Creepster] text-2xl md:text-3xl text-primary mb-4">
                {record.title}
              </h3>

              <p className="text-on-surface-variant mb-6">
                {record.overview}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">
                    Known Facts
                  </h4>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    {record.facts.map((fact, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">■</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">
                    Controversies
                  </h4>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    {record.controversies.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blood">■</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Characters</div>
                  <div className="flex gap-2">
                    {record.relatedCharacters.map((char) => (
                      <Link key={char} href={`/characters/${char.toLowerCase().replace(/ /g, "-")}`} className="text-primary text-sm hover:underline">
                        {char}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Endings</div>
                  <div className="flex gap-2">
                    {record.relatedEndings.map((ending) => (
                      <Link key={ending} href={`/endings/${ending.toLowerCase().replace(/ /g, "-")}`} className="text-primary text-sm hover:underline">
                        {ending}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
