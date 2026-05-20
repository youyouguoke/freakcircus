import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fan Theories | Freak Circus Hub",
  description: "Community theories and deep lore analysis for The Freak Circus visual novel.",
};

const theories = [
  {
    title: "The Pierrot Identity Theory",
    author: "Reddit User: u/circus_rising",
    date: "Oct 2024",
    desc: "Evidence suggests Pierrot is not a single character but a collective consciousness of every player who has ever reached the 'Eternal Silence' ending.",
    tags: ["Pierrot", "Meta", "Spoilers"],
  },
  {
    title: "Columbina is the True Protagonist",
    author: "Discord: lore_hunter_99",
    date: "Nov 2024",
    desc: "By analyzing the camera angles and who the screen focuses on during cutscenes, Columbina is present in 89% of all scenes, suggesting she is the observer, not the player.",
    tags: ["Columbina", "Analysis", "Visual"],
  },
  {
    title: "The Circus is a Mental Institution",
    author: "Twitter: @freaklore",
    date: "Dec 2024",
    desc: "Medical terminology hidden in background textures suggests all characters are patients. The 'ringmaster' is the doctor, and the 'performances' are therapy sessions.",
    tags: ["Medical", "Doctor", "Hidden"],
  },
];

export default function TheoriesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-surface py-32 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[Creepster] text-5xl md:text-7xl text-primary mb-4">THEORY BOARD</h1>
          <p className="text-on-surface-variant text-lg mb-16 max-w-2xl">
            The community has been piecing together the truth. Here are the most compelling theories backed by evidence from the game files.
          </p>

          <div className="space-y-8">
            {theories.map((t) => (
              <article key={t.title} className="bg-surface-container border-2 border-primary-container p-6 md:p-8 hover:border-primary transition-colors">
                <div className="flex flex-wrap gap-2 mb-4">
                  {t.tags.map((tag) => (
                    <span key={tag} className="font-[JetBrains_Mono] text-[10px] uppercase bg-surface-container-highest px-2 py-1 text-primary-fixed border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-3">{t.title}</h2>
                <div className="flex gap-4 text-on-surface-variant text-sm mb-4">
                  <span>By {t.author}</span>
                  <span>{t.date}</span>
                </div>
                <p className="text-on-surface-variant">{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
