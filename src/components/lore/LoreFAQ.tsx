"use client";

const faqs = [
  {
    q: "What is the First Circus Fire?",
    a: "Conflicting records suggest the circus both burned and did not burn. Some files reference fire damage that does not appear in any visual asset.",
  },
  {
    q: "Who is the Null Performer?",
    a: "A missing performer referenced in 14 separate dialogue files but absent from all character rosters. Some investigators believe this entity controls route branching.",
  },
  {
    q: "Why do the mirrors show future events?",
    a: "The Mirror Hall reflects events that have not yet occurred. Some players report seeing characters in mirrors before they enter the scene.",
  },
  {
    q: "Are the timeline changes intentional?",
    a: "The anomalies appear to be deliberate design choices. They create a metanarrative layer that connects separate playthroughs into a single ongoing story.",
  },
];

export default function LoreFAQ() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Archive FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-surface-container border border-outline/20 group">
              <summary className="p-4 cursor-pointer font-medium text-foreground hover:text-primary transition-colors list-none flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">[+]</span>
              </summary>
              <div className="px-4 pb-4 text-on-surface-variant text-sm">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
