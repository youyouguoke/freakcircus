"use client";

import Link from "next/link";

const records = [
  {
    id: "FILE_12",
    title: "The Mirror Hall",
    category: "Locations",
    status: "Restricted",
    endings: 3,
    desc: "A hallway where reflections appear before characters enter the scene. Some players report seeing themselves in mirrors before the protagonist arrives.",
    tags: ["Memory Distortion", "Identity Split", "Observation"],
    href: "#mirror-hall",
  },
  {
    id: "FILE_04",
    title: "The Founding Myth",
    category: "World History",
    status: "Recovered",
    endings: 5,
    desc: "Oral records suggest the circus was founded by a performer who never existed in any official documentation. Every account names a different founder.",
    tags: ["Erasure", "Contradiction", "Myth"],
    href: "#founding-myth",
  },
  {
    id: "FILE_18",
    title: "Doctor's Ward",
    category: "Locations",
    status: "Restricted",
    endings: 4,
    desc: "Medical records recovered from the ward contain patient names that match current performers. Dates suggest these records predate the performers' births.",
    tags: ["Time Anomaly", "Medical", "Identity"],
    href: "#doctors-ward",
  },
  {
    id: "FILE_22",
    title: "The Silent Exit",
    category: "Locations",
    status: "Unverified",
    endings: 2,
    desc: "A doorway that only appears after refusing to engage with any character for an entire playthrough. No player has confirmed walking through it.",
    tags: ["Hidden", "Null Route", "Silence"],
    href: "#silent-exit",
  },
  {
    id: "FILE_06",
    title: "Mask Ceremony",
    category: "Rituals & Symbols",
    status: "Recovered",
    endings: 3,
    desc: "Recovered stage notes describe a ritual where performers don masks that cannot be removed. The notes are dated after the supposed fire.",
    tags: ["Ritual", "Identity", "Symbolism"],
    href: "#mask-ceremony",
  },
  {
    id: "FILE_??",
    title: "The Null Performer",
    category: "Restricted Files",
    status: "Deleted",
    endings: 6,
    desc: "Referenced in 14 separate dialogue files but absent from all character rosters. Some data miners believe this entity controls route branching.",
    tags: ["Data-mined", "Deleted", "Meta"],
    href: "#null-performer",
  },
];

export default function LoreArchiveGrid() {
  return (
    <section id="archive" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-8">
          Lore Archive Grid — 6 Records Found
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((record) => (
            <div
              key={record.id}
              className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-[JetBrains_Mono] text-xs text-primary">
                  {record.id}
                </div>
                <div className="font-[JetBrains_Mono] text-xs text-blood">
                  {record.status}
                </div>
              </div>

              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-1">
                {record.title}
              </h3>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-3">
                {record.category}
              </div>

              <p className="text-on-surface-variant text-sm mb-4">
                {record.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {record.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-outline/10 pt-4">
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">
                  Classified Archive
                </div>
                <div className="text-sm text-foreground mb-1">
                  {record.endings} routes connected.
                </div>
                <div className="text-sm text-primary">
                  Hidden annotations available.
                </div>
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-2">
                  FILE_ID: {record.id.replace("FILE_", "L0")}-REDACTED
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
