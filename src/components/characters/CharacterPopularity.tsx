"use client";

const rankings = [
  { rank: 1, name: "Pierrot", metric: "Most discussed in community forums", detail: "4,200+ mentions across Reddit, Discord, and Steam" },
  { rank: 2, name: "Harlequin", metric: "Most hidden scenes discovered", detail: "7 undocumented scenes found in builds 1.03-1.04" },
  { rank: 3, name: "Columbina", metric: "Highest theory-to-discussion ratio", detail: "3.2 theories per discussion thread" },
  { rank: 4, name: "The Doctor", metric: "Most disturbing route completion", detail: "Lowest completion rate at 34%" },
];

const viewedPages = [
  { page: "Pierrot Route Guide", views: "12,400" },
  { page: "Eternal Silence Ending", views: "9,800" },
  { page: "Harlequin Hidden Scenes", views: "8,200" },
  { page: "Columbina Loop Theory", views: "7,100" },
];

export default function CharacterPopularity() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Character Popularity Ranking
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Based on community discussion volume, hidden scene discoveries, and theory generation
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface-container border border-outline/20 p-6 flex flex-col">
            <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
              Most Discussed Characters
            </h3>
            <div className="space-y-4 flex-1">
              {rankings.map((r) => (
                <div key={r.rank} className="flex items-start gap-4">
                  <div className="font-[Creepster] text-2xl text-primary w-8 shrink-0">
                    {r.rank}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-foreground">{r.name}</div>
                    <div className="text-on-surface-variant text-xs">{r.metric}</div>
                    <div className="text-on-surface-variant text-xs">{r.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6 flex flex-col">
            <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
              Most Viewed Character Pages
            </h3>
            <div className="space-y-4 flex-1">
              {viewedPages.map((p) => (
                <div key={p.page} className="flex justify-between items-center">
                  <span className="text-on-surface-variant text-sm">{p.page}</span>
                  <span className="font-[JetBrains_Mono] text-xs text-primary shrink-0">{p.views} views</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
