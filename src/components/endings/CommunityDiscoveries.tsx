"use client";

const discoveries = [
  {
    title: "Replay-Aware Dialogue",
    author: "u/loop_hunter",
    votes: 342,
    desc: "Players noticed Pierrot reacts differently after repeated replays. On the 4th playthrough, he references events from previous routes that the player never selected.",
    tags: ["Verified", "Pierrot", "Replay"],
  },
  {
    title: "Precognitive Doctor",
    author: "u/medical_archive",
    votes: 287,
    desc: "The Doctor references endings before they occur. In Scene 7, he describes the 'White Room' ending in detail — three routes before it becomes accessible.",
    tags: ["Verified", "The Doctor", "Timeline"],
  },
  {
    title: "Silence Changes Dialogue",
    author: "u/void_walker",
    votes: 198,
    desc: "Some route dialogue changes after staying silent for multiple scenes. Columbina's Scene 12 greeting becomes increasingly distressed if you refuse to respond.",
    tags: ["Under Investigation", "Columbina", "Mechanics"],
  },
  {
    title: "Save File Hex Patterns",
    author: "u/data_miner_99",
    votes: 156,
    desc: "Comparing save files across 50 playthroughs reveals a hidden counter at offset 0x4A20. Value increments on every route completion. Purpose unknown.",
    tags: ["Technical", "Files", "Unverified"],
  },
];

export default function CommunityDiscoveries() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Player-Reported Ending Discoveries
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {discoveries.map((d, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{d.title}</h3>
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                  Submitted by {d.author}
                </div>
              </div>
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-3">
                ▲ {d.votes}
              </div>
              <p className="text-on-surface-variant text-sm mb-4">{d.desc}</p>
              <div className="flex flex-wrap gap-2">
                {d.tags.map((tag) => (
                  <span key={tag} className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">
                    {tag}
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
