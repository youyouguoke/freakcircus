"use client";

const choices = [
  {
    scene: "Scene 1 — The Garden",
    character: "Pierrot",
    choices: [
      { option: "A — Approach Pierrot", result: "Pierrot +5 affection, unlocks garden dialogue", flag: "None" },
      { option: "B — Ignore and walk past", result: "Pierrot -3 affection, skips garden scene", flag: "Missable CG #1" },
      { option: "C — Ask about the flowers", result: "Pierrot +2 affection, unlocks flower lore", flag: "Lore entry" },
    ],
  },
  {
    scene: "Scene 3 — The Stage",
    character: "Harlequin",
    choices: [
      { option: "A — Accept invitation", result: "Harlequin +5 affection, unlocks stage performance", flag: "Grand Finale route" },
      { option: "B — Refuse and leave", result: "Harlequin -5 affection, triggers confrontation", flag: "Bad ending flag" },
      { option: "C — Make a joke", result: "Harlequin +3 affection, comedic dialogue branch", flag: "Joke ending" },
    ],
  },
  {
    scene: "Scene 5 — Medical Tent",
    character: "The Doctor",
    choices: [
      { option: "A — Accept examination", result: "Doctor +5 affection, File 1 discovered", flag: "Doctor's Note route" },
      { option: "B — Refuse treatment", result: "Doctor -3 affection, locked out of tent", flag: "Medical Failure ending" },
      { option: "C — Ask about the files", result: "Doctor +2 affection, hints at hidden files", flag: "File hunt begins" },
    ],
  },
  {
    scene: "Scene 7 — The Hallway",
    character: "Columbina",
    choices: [
      { option: "A — Enter the first door", result: "Loop 1 begins, gentle response required", flag: "Loop system" },
      { option: "B — Turn back", result: "Columbina -5 affection, hallway sealed", flag: "Eternal Dance ending" },
      { option: "C — Ask about the fourth door", result: "Columbina surprised, hidden dialogue", flag: "Truth ending hint" },
    ],
  },
  {
    scene: "Scene 9 — The Mirror",
    character: "All",
    choices: [
      { option: "A — Look into mirror", result: "Reflection shows previous route character", flag: "Cross-route awareness" },
      { option: "B — Break the mirror", result: "Mirror shatters, hidden file revealed", flag: "File 4 location" },
      { option: "C — Ignore mirror", result: "No effect, mirror fades from memory", flag: "Missable content" },
    ],
  },
];

export default function ChoiceConsequenceTable() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Choice Consequence Guide
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          What happens if you choose each option — complete choice consequence table for every major decision
        </p>

        <div className="space-y-8">
          {choices.map((scene) => (
            <div key={scene.scene} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{scene.scene}</h3>
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">{scene.character}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-outline/20">
                      <th className="text-left p-3 text-foreground">Choice</th>
                      <th className="text-left p-3 text-foreground">Result</th>
                      <th className="text-left p-3 text-foreground">Flag / Unlock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scene.choices.map((c, i) => (
                      <tr key={i} className="border-b border-outline/10">
                        <td className="p-3 text-foreground font-medium">{c.option}</td>
                        <td className="p-3 text-on-surface-variant">{c.result}</td>
                        <td className="p-3">
                          <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">{c.flag}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
