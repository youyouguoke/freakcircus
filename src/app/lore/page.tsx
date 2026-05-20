import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lore Archive | Freak Circus Hub",
  description: "Deep lore archive for The Freak Circus. Hidden dialogue, item descriptions, and world-building documents.",
};

const loreEntries = [
  {
    title: "The Origins of the Circus",
    category: "World",
    content: "Founded in 1887 by a group of exiled performers, the circus was originally a sanctuary for those rejected by society. Over decades, it transformed into something far darker.",
  },
  {
    title: "The Ringmaster's Contract",
    category: "Documents",
    content: "A leather-bound agreement found in the game's files, written in an unknown language. Translators have identified clauses about 'eternal service' and 'soul binding'.",
  },
  {
    title: "Hidden Item: The Broken Mirror",
    category: "Items",
    content: "Found in Pierrot's tent after completing his route. The description reads: 'Reflects not your face, but the face of the one who will replace you.'",
  },
  {
    title: "The Fire of 1923",
    category: "History",
    content: "A historical event referenced in multiple endings. The original circus burned to the ground, yet photographs show it standing intact the next morning.",
  },
];

export default function LorePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-surface py-32 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[Creepster] text-5xl md:text-7xl text-primary mb-4">LORE ARCHIVE</h1>
          <p className="text-on-surface-variant text-lg mb-16 max-w-2xl">
            Every scrap of text, every hidden item description, every background detail. The complete documented history of the circus.
          </p>

          <div className="space-y-6">
            {loreEntries.map((entry) => (
              <div key={entry.title} className="bg-surface-container border-l-4 border-primary-container p-6 hover:border-primary transition-colors">
                <span className="font-[JetBrains_Mono] text-[10px] uppercase text-primary mb-2 block">{entry.category}</span>
                <h2 className="font-[Epilogue] text-xl md:text-2xl font-bold text-primary mb-3">{entry.title}</h2>
                <p className="text-on-surface-variant">{entry.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
