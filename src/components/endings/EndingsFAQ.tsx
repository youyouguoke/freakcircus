const faqs = [
  {
    q: "How many endings are in The Freak Circus?",
    a: "The current build has 1 confirmed ending: \"Missing\" (Bad Ending). The developer has planned 4 additional endings on itch.io, but these are NOT yet implemented. The developer states: 'the script is still a work in progress, so no endings are fully planned yet.'",
  },
  {
    q: "What is the confirmed ending?",
    a: "\"Missing\" is the only independently confirmed ending. It is a Bad Ending associated with Harlequin's route. Community reports describe it as an ending where the player character goes missing. Specific trigger conditions have not been independently verified.",
  },
  {
    q: "Are there secret or hidden endings?",
    a: "No secret or hidden endings have been verified in the current build. The developer has listed 4 planned endings on itch.io, but none are implemented yet. Any specific ending names beyond 'Missing' that you see online are unconfirmed speculation.",
  },
  {
    q: "What about the planned endings?",
    a: "The developer has listed 4 planned endings on itch.io: Pierrot's ending, Harlequin's ending, Protagonist's ending, and 'All together (MC with both Pierrot and Harlequin)'. However, the developer also states these are not fully planned yet, and none exist in the current build.",
  },
  {
    q: "Will more endings be added?",
    a: "Yes. The developer has listed 4 specific planned endings and Day 3 content. However, the developer also notes 'the script is still a work in progress, so no endings are fully planned yet.'",
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
