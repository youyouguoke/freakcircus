export default function FAQSection() {
  const faqs = [
    {
      question: "How many endings are there really?",
      answer:
        'The official count is 12. Our archive has found remnants of a 13th "Corrupted" ending that only triggers if the game file is modified in a specific way during the final boss encounter.',
    },
    {
      question: "Why does Pierrot stare at the screen?",
      answer:
        "It's not a glitch. He is programmed to track mouse movement in certain scenes to simulate eye contact. He knows you're there.",
    },
    {
      question: "Are there spoilers in the archive?",
      answer:
        "Everything here is a spoiler. Proceed at the risk of your own experience. We do not use spoiler tags for basic lore.",
    },
  ];

  return (
    <section className="bg-cream py-24 px-4 md:px-16">
      <h2 className="font-[Epilogue] text-3xl md:text-5xl font-bold text-paper-heading mb-12 text-center underline decoration-blood decoration-dotted">
        DECRYPTING THE UNKNOWN
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-cream-dark border border-black/10">
            <summary className="flex justify-between items-center p-6 cursor-pointer font-[Epilogue] text-lg font-semibold text-paper-heading list-none">
              <span>{faq.question}</span>
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="p-6 pt-0 text-paper-text border-t border-black/5 bg-white/30 italic">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
