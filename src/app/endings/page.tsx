import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Endings Guide | Freak Circus Hub",
  description: "Complete endings guide for The Freak Circus. All 12 endings explained with trigger conditions and hidden dialogue.",
};

const endings = [
  {
    name: "The Grand Finale",
    route: "Harlequin",
    difficulty: "Normal",
    desc: "The standard ending where the circus burns. Most players reach this on their first playthrough.",
  },
  {
    name: "Eternal Silence",
    route: "Pierrot",
    difficulty: "Hard",
    desc: "Unlock by refusing to speak for the entire Pierrot route. The screen fades to black and stays black for 3 minutes.",
  },
  {
    name: "The Doctor's Note",
    route: "Doctor",
    difficulty: "Hard",
    desc: "Find all five hidden medical files scattered across the map before the final encounter.",
  },
  {
    name: "Columbina's Truth",
    route: "Columbina",
    difficulty: "Very Hard",
    desc: "The true ending that reveals the circus is a purgatorial loop. Requires perfect alignment of all dialogue choices.",
  },
  {
    name: "Corrupted Data",
    route: "???",
    difficulty: "Impossible",
    desc: "A rumored 13th ending found only in modified game files. The screen displays raw hex data before crashing.",
  },
];

export default function EndingsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-surface py-32 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[Creepster] text-5xl md:text-7xl text-primary mb-4">ENDINGS ARCHIVE</h1>
          <p className="text-on-surface-variant text-lg mb-16 max-w-2xl">
            Every curtain call, every final bow. Here lies the complete guide to all known endings in The Freak Circus.
          </p>

          <div className="space-y-6">
            {endings.map((ending, i) => (
              <div key={ending.name} className="bg-surface-container border-l-4 border-primary-container p-6 hover:border-primary transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <h2 className="font-[Epilogue] text-xl md:text-2xl font-bold text-primary">{ending.name}</h2>
                  <div className="flex gap-3">
                    <span className="font-[JetBrains_Mono] text-xs uppercase bg-surface-container-highest px-2 py-1 text-primary-fixed">{ending.route}</span>
                    <span className={`font-[JetBrains_Mono] text-xs uppercase px-2 py-1 ${ending.difficulty === "Impossible" ? "bg-blood text-white" : "bg-surface-container-highest text-on-secondary-container"}`}>{ending.difficulty}</span>
                  </div>
                </div>
                <p className="text-on-surface-variant">{ending.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
