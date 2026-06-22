"use client";

const updates = [
  {
    date: "June 9, 2026",
    title: "Added Columbina Timeline Analysis",
    desc: "Full chronological breakdown of Columbina's three-loop storyline, including the fourth door trigger and memory fragment documentation.",
  },
  {
    date: "June 7, 2026",
    title: "Updated Eternal Silence Ending Guide",
    desc: "Revised unlock conditions based on new community testing. Added Scene 12 confirmation and black screen duration notes.",
  },
  {
    date: "June 5, 2026",
    title: "Added Pierrot Relationship Notes",
    desc: "Documented cross-route dialogue changes and the hidden counter mechanism found at save file offset 0x4A20.",
  },
  {
    date: "June 2, 2026",
    title: "Mirror Hall Layout Changes Documented",
    desc: "Verified room architecture shifts between loops. Added door spawn conditions and hallway variation patterns.",
  },
];

export default function LatestUpdates() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Latest Archive Updates
        </h2>

        <div className="space-y-4">
          {updates.map((u, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <div className="font-[JetBrains_Mono] text-xs text-primary">{u.date}</div>
                <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{u.title}</h3>
              </div>
              <p className="text-on-surface-variant text-sm">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
