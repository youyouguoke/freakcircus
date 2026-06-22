"use client";

const faqs = [
  {
    question: "Who is Pierrot in The Freak Circus?",
    answer: "Pierrot is the melancholic clown and the most discussed character in the community. His route introduces memory loops, replay awareness, and hidden dialogue triggers. The Eternal Silence ending requires refusing all dialogue for three scenes, revealing narration about previous playthroughs.",
  },
  {
    question: "Who is Harlequin in The Freak Circus?",
    answer: "Harlequin is the chaotic performer whose route shifts between playful and menacing. Her fractured route unlocks after failing her main route once, containing 7 undocumented hidden scenes. She says 'You again' on the 4th playthrough, a line not found in script files.",
  },
  {
    question: "Who is Columbina in The Freak Circus?",
    answer: "Columbina is the ballerina whose three-loop storyline requires perfect alignment of all dialogue choices. Her endings suggest she is the only character who truly understands the circus. The hallway in her route gains a fourth door after three loops.",
  },
  {
    question: "Who is The Doctor in The Freak Circus?",
    answer: "The Doctor is the circus physician whose route requires finding 5 hidden medical files. His precognitive dialogue in Scene 7 describes the White Room ending before it becomes accessible. Unused voice lines suggest he was originally the primary antagonist.",
  },
  {
    question: "Which character route should you play first?",
    answer: "Most players start with Pierrot's route as it introduces the game's central mechanics. However, the community recommends completing Harlequin's route first for the fractured route unlock, which provides context for other characters' hidden scenes.",
  },
  {
    question: "Which character has the true ending?",
    answer: "No single character has the 'true ending.' The community theory suggests that the true ending requires completing all four routes in a specific order, with Columbina's three-loop storyline being the final piece. However, this remains unverified.",
  },
  {
    question: "Which character is most popular?",
    answer: "Pierrot is the most discussed character with 4,200+ mentions across community forums. Harlequin has the most hidden scenes discovered (7 undocumented). Columbina has the highest theory-to-discussion ratio at 3.2 theories per thread.",
  },
];

export default function CharacterFAQ() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Character FAQ
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Common questions about The Freak Circus characters, routes, and endings
        </p>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
