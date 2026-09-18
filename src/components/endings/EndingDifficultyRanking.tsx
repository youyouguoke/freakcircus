"use client";

const rankings = [
  { rank: 1, name: "Missing", character: "Harlequin", difficulty: "Unknown", desc: "The only confirmed ending. Specific trigger conditions have not been independently verified." },
];

export default function EndingDifficultyRanking() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Ending Difficulty
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          Only 1 ending has been confirmed. Difficulty ratings are not available.
        </p>
        <div className="space-y-3">
          {rankings.map((r) => (
            <div key={r.rank} className="glass-card p-4 flex items-center gap-4">
              <span className="font-mono text-lg text-primary w-8">{r.rank}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display text-on-surface">{r.name}</span>
                  <span className="font-mono text-[9px] text-green-500 uppercase">CONFIRMED</span>
                </div>
                <p className="text-on-surface/50 text-xs">{r.desc}</p>
              </div>
              <span className="font-mono text-xs text-on-surface/40">{r.character}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-surface-container border border-amber-500/30 p-4">
          <p className="text-on-surface-variant text-xs">
            <strong className="text-amber-400">Note:</strong> The developer has planned 4 additional endings but none are implemented.
            Previously this page listed fabricated difficulty rankings for endings that do not exist.
          </p>
        </div>
      </div>
    </section>
  );
}
