"use client";

import Link from "next/link";

const endings = [
  {
    character: "Pierrot",
    endings: [
      { name: "Smile For Me", type: "Standard", desc: "Accept Pierrot's offer in the garden scene. Most players see this on their first playthrough." },
      { name: "Eternal Silence", type: "Secret", desc: "Refuse all dialogue for three scenes. The 4-minute black screen ending that references previous playthroughs." },
      { name: "Null Route", type: "Corrupted", desc: "Found in unused game files. No player has legitimately unlocked this ending." },
    ],
  },
  {
    character: "Harlequin",
    endings: [
      { name: "Grand Finale", type: "Standard", desc: "Complete the Harlequin route with standard dialogue choices." },
      { name: "Harlequin's Laughter", type: "Joke", desc: "Select every comedic option in a single playthrough. Low spoilers, first playthrough possible." },
    ],
  },
  {
    character: "The Doctor",
    endings: [
      { name: "Doctor's Note", type: "Secret", desc: "Find all five hidden medical files before the final encounter." },
      { name: "White Room", type: "False", desc: "Mentioned in patch notes but never officially found." },
    ],
  },
  {
    character: "Columbina",
    endings: [
      { name: "Columbina's Truth", type: "Secret", desc: "Perfect alignment of all dialogue choices across three loops." },
      { name: "Corrupted Data", type: "Corrupted", desc: "Found only in modified game files. Screen displays raw hex before crash." },
    ],
  },
];

export default function CharacterEndingsHub() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Character Endings Hub
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          All confirmed endings for each character, with unlock conditions and community verification status
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {endings.map((char) => (
            <div key={char.character} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Creepster] text-2xl text-primary mb-4">
                {char.character}
              </h3>
              <div className="space-y-4">
                {char.endings.map((e) => (
                  <div key={e.name} className="border-l-2 border-outline/20 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-[JetBrains_Mono] text-xs text-primary">{e.name}</span>
                      <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">({e.type})</span>
                    </div>
                    <p className="text-on-surface-variant text-xs">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
