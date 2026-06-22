"use client";

const timeline = [
  { year: "2024", events: [
    "Grand Finale discovered — first confirmed ending on Harlequin route",
    "Smile For Me documented — standard Pierrot ending",
  ]},
  { year: "2025", events: [
    "Eternal Silence documented — Pierrot secret ending requiring silence mechanics",
    "Doctor's Note confirmed — requires finding 5 hidden medical files",
    "Harlequin's Laughter discovered — joke ending from comedic choices",
    "White Room mentioned in patch notes 1.03 — conditions unknown",
  ]},
  { year: "2026", events: [
    "Columbina's Truth verified — three-loop perfection requirement confirmed",
    "Corrupted Data rumor appears — found in build 1.04 files",
    "Null Route discovered in data mining — branch with no characters",
    "Hidden counter at 0x4A20 documented — affects ending availability",
  ]},
];

export default function EndingTimeline() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Ending Discovery Timeline
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          How the community documented each ending over two years of testing
        </p>

        <div className="space-y-8">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-6">
              <div className="font-[Creepster] text-2xl text-primary w-20 shrink-0">
                {t.year}
              </div>
              <div className="space-y-3">
                {t.events.map((e, i) => (
                  <div key={i} className="bg-surface-container border border-outline/20 p-4">
                    <p className="text-on-surface-variant text-sm">{e}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
