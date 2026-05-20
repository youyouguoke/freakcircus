import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | Freak Circus Hub",
  description: "Frequently asked questions about The Freak Circus archive, spoilers, and community guidelines.",
};

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
  {
    question: "How often is the archive updated?",
    answer:
      "We update weekly as new discoveries are made by the community. Major updates happen after game patches or DLC releases.",
  },
  {
    question: "Can I contribute to the archive?",
    answer:
      "Yes! We accept verified findings, screenshots, and datamined content. Contact us at hello@freak-circus.com with evidence.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-cream py-32 px-4 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[Epilogue] text-4xl md:text-5xl font-bold text-paper-heading mb-12 underline decoration-blood decoration-4">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div className="space-y-4">
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
        </div>
      </section>
      <Footer />
    </main>
  );
}
