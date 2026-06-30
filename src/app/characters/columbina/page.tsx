import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Columbina — Character Profile, Route Guide & Three-Loop Mystery | Freak Circus Hub",
  description: "Complete Columbina character analysis for The Freak Circus. Covers her ballerina persona, three-loop perfection route, hallway architecture, memory fragments, and the theory that she alone understands the circus.",
  keywords: ["Columbina", "The Freak Circus Columbina", "Columbina route guide", "ballerina", "three-loop route", "hallway architecture", "memory fragments", "Columbina's Truth"],
  openGraph: {
    title: "Columbina — Character Profile, Route Guide & Three-Loop Mystery",
    description: "Complete Columbina character analysis, three-loop route walkthrough, hallway architecture, and memory fragments.",
    type: "article",
    url: "https://freak-circus.com/characters/columbina",
  },
  alternates: {
    canonical: "https://freak-circus.com/characters/columbina",
  },
};

export default function ColumbinaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface pt-8 pb-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4 uppercase tracking-widest">
            Character Profile // Columbina
          </div>

          {/* Hero Section */}
          <section className="relative mb-16">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group">
              <img
                alt="Columbina dancing in the hallway of doors"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="/Columbina.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-2 py-0.5 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest">Three-Loop Route</span>
                  <span className="px-2 py-0.5 border border-white/10 text-on-surface/50 font-mono text-[10px] uppercase tracking-widest">Romanceable</span>
                  <span className="px-2 py-0.5 border border-secondary/30 text-secondary font-mono text-[10px] uppercase tracking-widest">Orchestrator ★★★★★</span>
                </div>
                <h1 className="font-[Creepster] text-4xl md:text-6xl text-on-surface mb-2 uppercase tracking-tight">Columbina</h1>
                <p className="font-[Epilogue] italic opacity-60">The ballerina — three-loop perfection, hallway architecture, and the truth that remembers when everyone else forgets.</p>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="mt-8 bg-surface-container border border-outline/20 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-l-4 border-l-primary">
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Role</h4>
                <p className="font-[Epilogue]">Ballerina</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">First Encounter</h4>
                <p className="font-[Epilogue]">The Hallway (Day 1)</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Key Mechanic</h4>
                <p className="font-[Epilogue]">Three-Loop Alignment</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Secret Ending</h4>
                <p className="font-[Epilogue] text-primary font-bold">Columbina's Truth</p>
              </div>
            </div>
          </section>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Who Is Columbina?
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Columbina is the ballerina of The Freak Circus, appearing gentle and refined at first glance. Her route contains the most disturbing revelations about the circus's true nature and plays a key role in understanding the overall timeline. The three-loop storyline requires perfect alignment of all dialogue choices — any deviation causes a complete reset.
              </p>
              <p className="text-on-surface-variant text-sm">
                Her hallway gains a fourth door after three loops, and memory fragments reference events from other routes that the player never selected. Many players believe she is the only character who truly understands the circus, and that her endings suggest the entire narrative is a purgatorial loop where characters forget but the world remembers.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Columbina Main Route Overview
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Columbina's main route is deceptively simple on the surface — her gentle demeanor suggests a straightforward narrative about a ballerina seeking perfection. However, the route's true complexity emerges in the loop mechanics. Unlike other characters whose routes reset independently, Columbina's route remembers. Choices from previous loops affect available options, and the game tracks deviations with hidden precision.
              </p>
              <p className="text-on-surface-variant text-sm">
                The main route ending, "Final Curtain," triggers when players achieve perfect alignment in a single loop. But community testing has revealed that this ending is incomplete — the true conclusion requires three consecutive perfect loops, and even then, the game suggests there is more to discover.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                How to Unlock the Three-Loop Route
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Three-Loop Route is Columbina's secret path and contains the most disturbing revelations in the game. It requires perfect alignment of all dialogue choices across three consecutive loops — any deviation causes a complete reset to Loop 1, Scene 1. The game does not warn the player when a deviation occurs; it simply resets.
              </p>
              <ul className="space-y-2 text-on-surface-variant text-sm mb-4">
                <li>• Loop 1: Select all "graceful" options (accept, comfort, encourage)</li>
                <li>• Loop 2: Select all "precise" options (observe, mirror, follow)</li>
                <li>• Loop 3: Select all "silent" options (watch, wait, listen)</li>
                <li>• Any deviation in any loop resets to Loop 1 with no notification</li>
              </ul>
              <p className="text-on-surface-variant text-sm">
                After three perfect loops, the hallway scene in Act III gains a fourth door. This door was not present in build 1.02 and was discovered by u/loop_architect in 2025. Behind the door is a memory fragment that references events from all other routes, including routes the player has not yet completed.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Hallway Architecture & Memory Fragments
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">The Changing Hallway</h3>
                  <p className="text-on-surface-variant text-sm">Columbina's hallway scene appears in every loop, but its architecture changes subtly. In Loop 1, there are three doors. In Loop 2, the doors are labeled with names the player does not recognize. In Loop 3, a fourth door appears. After three perfect loops, the hallway extends into a corridor not shown on the map, containing a fifth door that leads to a memory fragment.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Memory Fragment Content</h3>
                  <p className="text-on-surface-variant text-sm">The memory fragment behind the fourth door contains events from all four character routes, including routes the player has not completed. It describes Pierrot's garden scene from a perspective the player never sees, Harlequin's "You again" line from her point of view, and The Doctor's unused antagonist voice lines as if they were canonical. The fragment ends with a single line: "You have always been here. You just keep forgetting."</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Cross-Route Awareness</h3>
                  <p className="text-on-surface-variant text-sm">Unlike other characters whose replay awareness is limited to their own route, Columbina's memory fragments reference events from all routes simultaneously. This suggests that her awareness is not route-specific but global — she experiences the entire circus as a single continuous narrative, while other characters only remember their own loops.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Columbina Route Endings
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Final Curtain (Main Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Achieve perfect alignment in a single loop. Columbina performs a final dance and the curtain falls. The ending appears complete, but post-credits text suggests "there are more acts."</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Columbina's Truth (Secret Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Complete three perfect loops and enter the fourth door. The memory fragment plays, revealing the circus's true nature. The ending suggests the entire narrative is a purgatorial loop where characters forget but the world remembers. Requires cross-route awareness flag.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Empty Stage (Corrupted)</h3>
                  <p className="text-on-surface-variant text-sm">Found in unused game files. The stage is empty, but the music continues. Columbina's sprite is present but transparent. No known unlock conditions.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Related Content
              </h2>
              <div className="flex flex-wrap gap-2">
                <a href="/endings" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">All Endings Explained</a>
                <a href="/walkthroughs/columbina-fractured-route" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Columbina Fractured Route</a>
                <a href="/lore/timeline" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Timeline Records</a>
                <a href="/theories" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Community Theories</a>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
      <JsonLd />
    </main>
  );
}
