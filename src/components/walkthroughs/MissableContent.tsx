"use client";

const missable = [
  { content: "CG #1 — Pierrot's Garden Scene", unlock: "Scene 2: Choose 'Ask about the flowers'", route: "Pierrot" },
  { content: "CG #2 — Harlequin's First Performance", unlock: "Scene 4: Accept invitation to stage", route: "Harlequin" },
  { content: "CG #3 — Doctor's Medical File #1", unlock: "Scene 2: Search the drawer", route: "Doctor" },
  { content: "CG #4 — Columbina's First Dance", unlock: "Scene 3: Enter the first door", route: "Columbina" },
  { content: "CG #5 — Mirror Reflection", unlock: "Scene 9: Look into mirror (requires Doctor failure)", route: "All" },
  { content: "CG #6 — Eternal Silence Black Screen", unlock: "Scene 12: Refuse all dialogue ×3", route: "Pierrot" },
  { content: "Secret Dialogue #1 — Pierrot's 47th Variation", unlock: "4th playthrough, Scene 5", route: "Pierrot" },
  { content: "Secret Dialogue #2 — Harlequin's 'You Again'", unlock: "4th playthrough, Scene 1", route: "Harlequin" },
  { content: "Hidden Scene #1 — Doctor's Precognition", unlock: "Scene 7 (before White Room accessible)", route: "Doctor" },
  { content: "Hidden Scene #2 — Columbina's 4th Door", unlock: "3 perfect loops, Scene 12", route: "Columbina" },
  { content: "Hidden Scene #3 — Harlequin's Fracture", unlock: "Fail route once, then retry", route: "Harlequin" },
  { content: "Achievement — Medical History", unlock: "Collect all 5 medical files", route: "Doctor" },
  { content: "Achievement — Eternal Silence", unlock: "Refuse dialogue for 3 consecutive scenes", route: "Pierrot" },
  { content: "Achievement — Columbina's Truth", unlock: "Perfect 3-loop alignment", route: "Columbina" },
  { content: "Post-Credits Scene — All Characters", unlock: "Complete all 8 confirmed endings", route: "All" },
];

export default function MissableContent() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Missable Content Guide
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete list of missable CGs, secret dialogues, hidden scenes, and achievements — how to unlock every piece of content
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline/20">
                <th className="text-left p-3 text-foreground">Content</th>
                <th className="text-left p-3 text-foreground">How to Unlock</th>
                <th className="text-left p-3 text-foreground">Route</th>
              </tr>
            </thead>
            <tbody>
              {missable.map((m, i) => (
                <tr key={i} className="border-b border-outline/10">
                  <td className="p-3 text-foreground font-medium">{m.content}</td>
                  <td className="p-3 text-on-surface-variant">{m.unlock}</td>
                  <td className="p-3">
                    <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">
                      {m.route}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
