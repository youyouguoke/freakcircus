"use client";

const discoveries = [
  {
    title: "Hidden Dialogue Discovered After Three Silent Scenes",
    status: "Confirmed",
    desc: "Players found hidden dialogue after staying silent for three consecutive scenes. The trigger requires refusing all dialogue options in Scenes 4, 5, and 6 of Pierrot's route. After the third silent scene, Pierrot begins referencing choices from previous playthroughs that the player never selected.",
  },
  {
    title: "Mirror Hall Layout Changes After Ending #7",
    status: "Under Investigation",
    desc: "Community members report changes in the Mirror Hall scene across playthroughs. Whether this is intentional design is unverified. Some observations only appear on replay, and the hallway architecture shifts between loops. Players report seeing rooms they have not yet unlocked, suggesting the environment is not static.",
  },
  {
    title: "Pierrot Remembers Failed Routes and Adjusts Dialogue",
    status: "Community Theory",
    desc: "Some players report that Pierrot's dialogue may change after repeated playthroughs. Whether this is intentional design or player perception is debated. Claims about specific save file mechanics are unverified community speculation.",
  },
];

export default function RecentDiscoveries() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Recent Community Discoveries
        </h2>

        <div className="space-y-4">
          {discoveries.map((d, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-4 mb-2">
                <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{d.title}</h3>
                <div className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                  d.status === 'Confirmed' ? 'border-primary text-primary' :
                  d.status === 'Under Investigation' ? 'border-blood text-blood' :
                  'border-outline/30 text-on-surface-variant'
                }`}>
                  {d.status}
                </div>
              </div>
              <p className="text-on-surface-variant text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
