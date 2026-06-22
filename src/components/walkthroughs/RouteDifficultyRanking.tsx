"use client";

const rankings = [
  { rank: 1, name: "Columbina Fractured Route", character: "Columbina", difficulty: "Very Hard", desc: "Perfect alignment across three loops. Any deviation causes complete reset." },
  { rank: 2, name: "Pierrot Silent Route", character: "Pierrot", difficulty: "Very Hard", desc: "Requires refusing all dialogue for three scenes. Replay awareness flags needed." },
  { rank: 3, name: "Doctor Memory Route", character: "The Doctor", difficulty: "Hard", desc: "Find 5 hidden medical files across multiple playthroughs. Mirror connection requires failing route once." },
  { rank: 4, name: "Harlequin True Route", character: "Harlequin", difficulty: "Hard", desc: "Select all aggressive options. Contains 7 hidden scenes only visible on replay." },
  { rank: 5, name: "Pierrot Main Route", character: "Pierrot", difficulty: "Beginner", desc: "Standard dialogue choices. No replay requirements." },
];

export default function RouteDifficultyRanking() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Hardest Routes To Unlock
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
