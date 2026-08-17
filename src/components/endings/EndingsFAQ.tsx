const faqs = [
  {
    q: "How many endings are in The Freak Circus?",
    a: "The game has 4 endings total: 1 confirmed bad ending (\"Missing\") and 3 open endings. The open endings have not been named by any official or verified source.",
  },
  {
    q: "What is the confirmed ending?",
    a: "\"Missing\" is the only independently confirmed ending. It is a Bad Ending that triggers when trust thresholds are not met by the end of Day 2. The player character goes missing and is never found.",
  },
  {
    q: "Are there secret or hidden endings?",
    a: "No secret or hidden endings have been verified. Claims about secret endings (such as 'Eternal Silence' or 'Grand Finale') are unconfirmed community speculation and have no external source backing them.",
  },
  {
    q: "What about the 3 open endings?",
    a: "The developer confirmed 3 open endings exist, but has not publicly named them. Community attempts to name these endings are speculative and should not be treated as fact.",
  },
  {
    q: "Will more endings be added?",
    a: "Yes. The developer has stated that more endings are planned for future updates, including Day 3 content.",
  },
];

export default function EndingsFAQ() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Endings FAQ
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">{faq.q}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
