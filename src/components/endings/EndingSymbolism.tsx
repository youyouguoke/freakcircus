"use client";

const endings = [
  {
    name: "Missing",
    symbols: ["Disappearance", "Absence", "Loss"],
    meaning: "The only confirmed ending. The player character goes missing and is never found. Associated with Harlequin's route.",
  },
];

export default function EndingSymbolism() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Ending Symbolism
        </h2>
        <div className="space-y-4">
          {endings.map((e) => (
            <div key={e.name} className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-2">{e.name}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {e.symbols.map((s) => (
                  <span key={s} className="font-mono text-[9px] text-primary bg-primary/10 px-2 py-0.5 uppercase">{s}</span>
                ))}
              </div>
              <p className="text-on-surface/60 text-sm">{e.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
