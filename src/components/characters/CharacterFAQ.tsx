"use client";

const faqs = [
  { q: "Who are the main characters?", a: "Pierrot and Harlequin are the two main characters introduced in Day 1. Doctor, Jester, and Ticket Taker were added in the Day 2 update. Columbina is a deceased character (not playable)." },
  { q: "Is Columbina playable?", a: "No. Columbina is a deceased character who was killed by Harlequin. Her story is told through the Columbina legend in Day 2." },
  { q: "How many endings does each character have?", a: "Only 'Missing' (associated with Harlequin) has been confirmed by name. The game has 3 additional unnamed open endings. Which character is associated with which open ending is unverified." },
  { q: "Which character should I start with?", a: "Pierrot and Harlequin are both available from Day 1. The community doesn't have a consensus on which to start with — both routes are designed as entry points." },
  { q: "Will Day 3 add new characters?", a: "Day 3 is planned but unreleased. Whether it will add new characters or expand existing ones is unknown." },
];

export default function CharacterFAQ() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Character FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-2">{faq.q}</h3>
              <p className="text-on-surface/60 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
