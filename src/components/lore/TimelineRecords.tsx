"use client";

const anomalies = [
  {
    id: "REC_07",
    title: "Why Does Dialogue Change?",
    status: "degrading",
    desc: "Pierrot references scenes before they occur. In Loop 3+, he describes events from routes the player has not yet attempted. This is not random — the game uses a hidden counter at offset 0x4A20 in the save file to track which endings the player has seen. When Pierrot references 'the time you chose silence,' he is accessing data from the Silent Route even if the player has not unlocked it yet. This creates a metanarrative where the character knows more than the player.",
  },
  {
    id: "REC_11",
    title: "Why Do Save Files Affect Events?",
    status: "degrading",
    desc: "The Doctor remembers routes from deleted saves. His dialogue in Scene 5 changes based on endings from previous installations — not just the current save file. This suggests the game stores data outside the normal save location, possibly in the Windows Registry or a hidden file in the AppData folder. Players who have uninstalled and reinstalled the game report that The Doctor still references their previous playthroughs, creating a persistent narrative memory that survives file deletion.",
  },
  {
    id: "REC_14",
    title: "How Route Memories Persist?",
    status: "collapsed",
    desc: "The circus architecture changes between loops. Room layouts, door positions, and corridor lengths vary across playthroughs. These changes are not random — they follow patterns that match the player's previous choices. A player who chose aggressive options in Harlequin's route will find the corridors in Pierrot's route are narrower, creating a claustrophobic atmosphere. A player who chose silent options will find the rooms are larger and emptier. The game is literally reshaping itself based on the player's history.",
  },
  {
    id: "REC_19",
    title: "Who Is The Null Performer?",
    status: "unverified",
    desc: "Multiple players report seeing a sixth performer in background scenes. This character has no dialogue, no name, and disappears when approached. Data miners found 14 references to this entity in dialogue files, where characters refer to 'the one who watches' or 'the empty costume.' Some theorists believe this is the game's director or narrator, while others suggest it represents the player themselves — a performer who exists in the circus but has no scripted role.",
  },
];

export default function TimelineRecords() {
  return (
    <section id="anomalies" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Timeline Anomalies Explained
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Why the game's timeline behaves strangely — and what it means for the narrative
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {anomalies.map((record) => (
            <div key={record.id} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="font-[JetBrains_Mono] text-xs text-primary">
                  {record.id}
                </div>
                <div className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                  record.status === 'degrading' ? 'border-blood text-blood' :
                  record.status === 'collapsed' ? 'border-blood text-blood' :
                  'border-outline/30 text-on-surface-variant'
                }`}>
                  {record.status}
                </div>
              </div>

              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {record.title}
              </h3>
              <p className="text-on-surface-variant text-sm">
                {record.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
