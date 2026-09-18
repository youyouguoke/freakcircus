"use client";

import { CURRENT_VERSION } from "@/lib/site-facts";

const faqs = [
  {
    q: "Are any theories confirmed by the developer?",
    a: `No. The developer has not directly confirmed or denied any community theories. The game is still in active development (${CURRENT_VERSION}) with Day 3 planned but unreleased.`,
  },
  {
    q: "Does Pierrot remember previous playthroughs?",
    a: "This is an unverified community theory. Some players report that Pierrot's dialogue changes after multiple playthroughs, but no hidden counter or memory mechanic has been independently verified. Claims about specific save file offsets are unconfirmed.",
  },
  {
    q: "What is the Columbina legend?",
    a: "The Columbina legend is confirmed to appear in Day 2. It explains the backstory behind Pierrot and Harlequin's rivalry. Columbina is a deceased character who was killed by Harlequin. This is verified by YouTube playthroughs.",
  },
  {
    q: "Will Day 3 answer the unanswered questions?",
    a: "Day 3 is confirmed to be planned but not yet released. The developer has stated the script is complete and programming is in progress. Specific content details have not been officially revealed. Whether it will resolve the community's open questions is unknown.",
  },
  {
    q: "How many endings are there?",
    a: "The current build has 1 confirmed ending: 'Missing' (Bad Ending). The developer has listed 4 planned endings on itch.io (Pierrot's, Harlequin's, Protagonist's, All together), but none are implemented yet. The developer states: 'the script is still a work in progress, so no endings are fully planned yet.'",
  },
];

export default function TheoriesFAQ() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Theories FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-3">{faq.q}</h3>
              <p className="text-on-surface/60 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
