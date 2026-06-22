"use client";

const loops = [
  {
    loop: "First Playthrough",
    status: "stable",
    desc: "Standard route progression. No anomalies detected.",
  },
  {
    loop: "Loop 2",
    status: "stable",
    desc: "Minor dialogue variations. Characters reference previous choices obliquely.",
  },
  {
    loop: "Loop 3",
    status: "unstable",
    desc: "Room layouts begin to shift. Columbina's memory fragments surface.",
  },
  {
    loop: "Loop 4",
    status: "corrupted",
    desc: "Pierrot acknowledges the player directly. The Doctor references endings not yet seen.",
  },
  {
    loop: "Loop 5+",
    status: "collapsed",
    desc: "Routes merge. Characters appear in wrong storylines. Save file timestamps diverge from system clock.",
  },
];

export default function TimelineCorruption() {
  return (
    <section id="timeline" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Timeline Corruption Patterns
        </h2>

        <div className="space-y-4">
          {loops.map((loop, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-32 shrink-0">
                  <div className="font-[JetBrains_Mono] text-sm text-primary">{loop.loop}</div>
                </div>
                <div className="w-24 shrink-0">
                  <div className={`font-[JetBrains_Mono] text-xs px-2 py-1 border inline-block ${
                    loop.status === 'stable' ? 'border-primary text-primary' :
                    loop.status === 'unstable' ? 'border-blood text-blood' :
                    loop.status === 'corrupted' ? 'border-blood text-blood' :
                    'border-blood text-blood'
                  }`}>
                    {loop.status}
                  </div>
                </div>
                <div className="text-sm text-on-surface-variant">{loop.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
