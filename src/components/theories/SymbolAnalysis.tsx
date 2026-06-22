"use client";

const symbols = [
  {
    name: "Masks",
    meanings: [
      { title: "False Identity", desc: "Every character performs a role that may not reflect their true nature." },
      { title: "Performance", desc: "The circus as theater — every interaction is staged for an unseen audience." },
      { title: "Emotional Concealment", desc: "What the characters hide may be more real than what they show." },
    ],
  },
  {
    name: "Red Thread",
    meanings: [
      { title: "Obsession", desc: "The unbreakable connections between characters across collapsing timelines." },
      { title: "Connected Timelines", desc: "Every route is tied to every other route by invisible narrative threads." },
      { title: "Emotional Entrapment", desc: "Once connected, the characters cannot escape each other's stories." },
    ],
  },
  {
    name: "Mirrors",
    meanings: [
      { title: "Replay Awareness", desc: "Characters who seem to recognize the player from previous attempts." },
      { title: "Fractured Memory", desc: "Each reflection shows a different version of the same truth." },
      { title: "Alternate Selves", desc: "The protagonist may not be the same person across different routes." },
    ],
  },
  {
    name: "Stage Curtains",
    meanings: [
      { title: "Hidden Truth", desc: "What happens behind the curtain may be the real story." },
      { title: "Scene Transitions", desc: "Every curtain fall marks a timeline shift or memory reset." },
      { title: "Controlled Narrative", desc: "Someone — or something — is deciding when the curtain rises and falls." },
    ],
  },
];

export default function SymbolAnalysis() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Recurring Symbolism Across Routes
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {symbols.map((symbol) => (
            <div key={symbol.name} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Creepster] text-2xl text-primary mb-6">
                {symbol.name}
              </h3>

              <div className="space-y-4">
                {symbol.meanings.map((meaning, i) => (
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
