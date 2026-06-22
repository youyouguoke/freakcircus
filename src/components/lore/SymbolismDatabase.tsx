"use client";

const symbols = [
  { name: "Red Thread", meaning: "Connection between characters across routes. The thread frays as the player approaches the Null Route.", appearances: ["Pierrot Main", "Harlequin True", "Null Route"] },
  { name: "Mask", meaning: "Identity and deception. Characters who wear masks have different dialogue in subsequent playthroughs.", appearances: ["Harlequin True", "Columbina Fractured"] },
  { name: "Mirror", meaning: "Memory and reflection. Shows different images based on the player's route history and ending count.", appearances: ["All Routes"] },
  { name: "Stage Curtain", meaning: "Boundaries between acts. Closing the curtain at specific times triggers hidden events.", appearances: ["Pierrot Silent", "Null Route"] },
];

export default function SymbolismDatabase() {
  return (
    <section id="symbols" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Symbolism Database
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {symbols.map((sym) => (
            <div key={sym.name} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{sym.name}</h3>
              <p className="text-on-surface-variant text-sm mb-3">{sym.meaning}</p>
              <div className="flex flex-wrap gap-2">
                {sym.appearances.map((app) => (
                  <span key={app} className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
