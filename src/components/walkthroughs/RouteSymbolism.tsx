"use client";

const categories = [
  {
    name: "Silent Routes",
    desc: "Routes that require the player to refuse participation entirely.",
    meanings: [
      { title: "Emotional Withdrawal", desc: "The protagonist stops engaging, mirroring player fatigue and disillusionment." },
      { title: "Rejecting Participation", desc: "Silence becomes the only meaningful choice in a system designed to force engagement." },
      { title: "Resisting Manipulation", desc: "By refusing the game's dialogue economy, the player breaks the narrative contract." },
    ],
  },
  {
    name: "Replay Routes",
    desc: "Routes that only reveal themselves after multiple failed or successful attempts.",
    meanings: [
      { title: "Memory Persistence", desc: "The game world remembers what the player did, even when they don't." },
      { title: "Player Guilt", desc: "Replaying implies the player is unsatisfied — the game responds to this dissatisfaction." },
      { title: "Timeline Contamination", desc: "Each playthrough bleeds into the next, corrupting the illusion of a fresh start." },
    ],
  },
];

export default function RouteSymbolism() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Route Symbolism & Interpretation
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Creepster] text-2xl text-primary mb-2">
                {cat.name}
              </h3>
              <p className="text-on-surface-variant text-sm mb-6">
                {cat.desc}
              </p>

              <div className="space-y-4">
                {cat.meanings.map((meaning, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4">
                    <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">
                      Possible Meaning
                    </div>
                    <div className="font-[Epilogue] text-sm font-bold text-foreground mb-1">
                      {meaning.title}
                    </div>
                    <div className="text-sm text-on-surface-variant">
                      {meaning.desc}
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
