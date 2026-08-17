"use client";

const anomalies = [
  {
    id: "REC_01",
    title: "The Columbina Legend",
    status: "confirmed",
    desc: "Day 2 reveals the Columbina legend, which explains the backstory behind Pierrot and Harlequin's rivalry. Columbina is a deceased character — not playable. This is confirmed by multiple sources including thefreakcircus.org and wiki.gg.",
  },
  {
    id: "REC_02",
    title: "The Mirror Scene",
    status: "confirmed",
    desc: "The Mirror Scene in Day 2 is a key story moment confirmed by multiple YouTube playthroughs. It appears to be a turning point in the narrative involving the main characters.",
  },
  {
    id: "REC_03",
    title: "Multiple Endings",
    status: "confirmed",
    desc: "The game has 4 endings total: 1 confirmed bad ending ('Missing') and 3 unnamed open endings. This is confirmed by thefreakcircus.org. The specific names and conditions of the open endings remain unknown.",
  },
  {
    id: "REC_04",
    title: "Day 3 (Planned)",
    status: "unreleased",
    desc: "Day 3 is planned but has not been released yet. thefreakcircus.org describes it as featuring 'higher stakes, tighter route locks, and payoffs for choices you already made.' The exact release date is unknown.",
  },
];

export default function TimelineRecords() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Key Story Records
        </h2>
        <div className="space-y-4">
          {anomalies.map((a) => (
            <div key={a.id} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-primary">{a.id}</span>
                <span className={`font-mono text-[9px] uppercase ${
                  a.status === 'confirmed' ? 'text-green-500' :
                  a.status === 'unreleased' ? 'text-yellow-500' : 'text-on-surface/40'
                }`}>{a.status}</span>
              </div>
              <h3 className="font-display text-lg text-on-surface mb-2">{a.title}</h3>
              <p className="text-on-surface/60 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
