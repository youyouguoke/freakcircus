"use client";

const questions = [
  { q: "What is the Columbina legend?", a: "Columbina is a deceased character killed by Harlequin. Her death explains the rivalry between Pierrot and Harlequin. This is the most significant piece of confirmed lore.", verified: true },
  { q: "Is the circus a real place?", a: "The game presents the circus as a real setting within its story. Whether it has deeper metaphysical significance is unverified community speculation.", verified: false },
  { q: "What are the 3 open endings?", a: "The developer confirmed 3 open endings exist but has not named them. Their narrative content is unknown.", verified: true },
  { q: "Will Day 3 reveal more lore?", a: "Day 3 is planned but unreleased. The developer says it will feature 'higher stakes and payoffs for choices.' Whether it adds significant new lore is unknown.", verified: true },
  { q: "Do characters remember previous playthroughs?", a: "This is unverified community speculation. Some players report dialogue changes after multiple playthroughs, but no hidden memory mechanic has been confirmed.", verified: false },
  { q: "What is the significance of the mirror scene?", a: "The mirror scene in Day 2 is confirmed to exist. Its deeper narrative significance is still being discussed by the community.", verified: false },
];

export default function LoreQuestions() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Lore Questions
        </h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display text-lg text-on-surface">{item.q}</h3>
                <span className={`font-mono text-[9px] uppercase ${item.verified ? 'text-green-500' : 'text-yellow-500'}`}>
                  {item.verified ? 'Verified' : 'Speculation'}
                </span>
              </div>
              <p className="text-on-surface/60 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
