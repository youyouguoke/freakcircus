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
    desc: "The Mirror Hall layout changes after viewing the Corrupted Data ending. Some doors only appear on replay, and the hallway architecture shifts between loops. Players report seeing rooms they have not yet unlocked, suggesting the environment is not static.",
  },
  {
    title: "Pierrot Remembers Failed Routes and Adjusts Dialogue",
    status: "Community Theory",
    desc: "Multiple players have documented Pierrot reacting differently on the 4th playthrough. He references events from previous routes with specificity that suggests memory retention across saves. The loop theory proposes that the game maintains a hidden counter at save file offset 0x4A20 that affects available dialogue options.",
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
