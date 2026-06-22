"use client";

const endings = [
  {
    name: "Eternal Silence",
    themes: [
      { title: "Emotional Withdrawal", desc: "The protagonist stops engaging with the narrative entirely, reflecting player burnout." },
      { title: "Route Refusal", desc: "By rejecting all choices, the player breaks the game's assumption of participation." },
      { title: "Rejecting Narrative", desc: "The ending suggests the only escape from the circus is to stop playing." },
    ],
  },
  {
    name: "Columbina's Truth",
    themes: [
      { title: "Purgatorial Loops", desc: "The circus as an inescapable cycle where characters forget but the world remembers." },
      { title: "Memory Erosion", desc: "Each loop strips away more of the protagonist's identity until only instinct remains." },
      { title: "Replay Identity Collapse", desc: "The player and protagonist become indistinguishable through repeated attempts." },
    ],
  },
];

export default function EndingSymbolism() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Ending Symbolism & Interpretation
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {endings.map((ending) => (
            <div key={ending.name} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Creepster] text-2xl text-primary mb-6">
                {ending.name}
              </h3>

              <div className="space-y-4">
                {ending.themes.map((theme, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4">
                    <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">
                      Possible Theme
                    </div>
                    <div className="font-[Epilogue] text-sm font-bold text-foreground mb-1">
                      {theme.title}
                    </div>
                    <div className="text-sm text-on-surface-variant">
                      {theme.desc}
                    </div>
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
