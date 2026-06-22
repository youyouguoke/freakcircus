"use client";

const rankings = [
  { rank: 1, name: "Columbina's Truth", character: "Columbina", difficulty: "Very Hard", desc: "Perfect alignment across three loops. Any deviation causes complete reset." },
  { rank: 2, name: "Corrupted Data", character: "???", difficulty: "Impossible", desc: "No verified unlock conditions. May be intentionally unreachable." },
  { rank: 3, name: "Eternal Silence", character: "Pierrot", difficulty: "Hard", desc: "Requires refusing all dialogue for three scenes. 4-minute black screen." },
  { rank: 4, name: "The Doctor's Note", character: "The Doctor", difficulty: "Hard", desc: "Find 5 hidden medical files across multiple playthroughs." },
  { rank: 5, name: "White Room", character: "Unknown", difficulty: "Impossible", desc: "Mentioned in patch notes but never officially found." },
];

export default function EndingDifficultyRanking() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Hardest Endings To Unlock
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Community-verified difficulty ranking based on unlock requirements, replay dependencies, and failure rates
        </p>

        <div className="space-y-4">
          {rankings.map((r) => (
            <div key={r.rank} className="bg-surface-container border border-outline/20 p-6 flex items-start gap-4">
              <div className="font-[Creepster] text-3xl text-primary w-12 shrink-0">
                {r.rank}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{r.name}</h3>
                  <span className="font-[JetBrains_Mono] text-xs text-blood border border-blood/30 px-2 py-1">{r.difficulty}</span>
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">{r.character}</span>
                </div>
                <p className="text-on-surface-variant text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
