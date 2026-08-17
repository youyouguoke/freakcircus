"use client";

const questions = [
  { q: "How many characters are in The Freak Circus?", a: "5 main characters: Pierrot, Harlequin, Jester, Doctor, and Ticket Taker. Columbina is a deceased character mentioned in the lore." },
  { q: "Is Pierrot evil?", a: "Pierrot is described as a yandere character — obsessive and possessive. Whether he is 'evil' depends on interpretation. His behavior is driven by the Columbina legend." },
  { q: "Is Harlequin male or female?", a: "Harlequin is male. This is confirmed by thefreakcircus.org and VNDB." },
  { q: "What happened to Columbina?", a: "Columbina was killed by Harlequin. This is confirmed by multiple sources and is the central event driving the Pierrot-Harlequin rivalry." },
  { q: "Does The Doctor have a route?", a: "The Doctor appears in Day 2 tent routes. Whether he has a dedicated playable route with specific endings is unverified." },
  { q: "Will there be more characters in Day 3?", a: "Day 3 is planned but unreleased. Whether it will add new characters is unknown." },
];

export default function MostSearchedQuestions() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Most Searched Questions
        </h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-2">{item.q}</h3>
              <p className="text-on-surface/60 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
