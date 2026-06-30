import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Harlequin — Character Profile, Route Guide & Hidden Scenes | Freak Circus Hub",
  description: "Complete Harlequin character analysis for The Freak Circus. Covers her chaotic performer persona, fractured route unlock conditions, hidden scenes, and the 'You again' replay dialogue.",
  keywords: ["Harlequin", "The Freak Circus Harlequin", "Harlequin route guide", "chaotic performer", "fractured route", "hidden scenes", "You again"],
  openGraph: {
    title: "Harlequin — Character Profile, Route Guide & Hidden Scenes",
    description: "Complete Harlequin character analysis, fractured route walkthrough, hidden scenes, and replay-aware mechanics.",
    type: "article",
    url: "https://freak-circus.com/characters/harlequin",
  },
  alternates: {
    canonical: "https://freak-circus.com/characters/harlequin",
  },
};

export default function HarlequinPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface pt-8 pb-16 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4 uppercase tracking-widest">
            Character Profile // Harlequin
          </div>

          {/* Hero Section */}
          <section className="relative mb-16">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/5 group">
              <img
                alt="Harlequin performing on the fractured stage"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                src="/Harlequin-hero.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-2 py-0.5 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest">Fractured Route</span>
                  <span className="px-2 py-0.5 border border-white/10 text-on-surface/50 font-mono text-[10px] uppercase tracking-widest">Romanceable</span>
                  <span className="px-2 py-0.5 border border-secondary/30 text-secondary font-mono text-[10px] uppercase tracking-widest">Unpredictable ★★★★★</span>
                </div>
                <h1 className="font-[Creepster] text-4xl md:text-6xl text-on-surface mb-2 uppercase tracking-tight">Harlequin</h1>
                <p className="font-[Epilogue] italic opacity-60">The chaotic performer — fractured identity, hidden scenes, and the smile that remembers.</p>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="mt-8 bg-surface-container border border-outline/20 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-l-4 border-l-primary">
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Role</h4>
                <p className="font-[Epilogue]">Chaotic Performer</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">First Encounter</h4>
                <p className="font-[Epilogue]">The Stage (Day 1)</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Key Mechanic</h4>
                <p className="font-[Epilogue]">Comedy / Aggression</p>
              </div>
              <div>
                <h4 className="font-[JetBrains_Mono] text-[10px] text-primary mb-1 uppercase tracking-widest">Secret Ending</h4>
                <p className="font-[Epilogue] text-primary font-bold">Fractured Smile</p>
              </div>
            </div>
          </section>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Who Is Harlequin?
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Harlequin is the chaotic performer of The Freak Circus, bringing unpredictable energy that shifts between playful and menacing without warning. Her route contains some of the most discussed hidden scenes in the community, requiring careful navigation between comedic and aggressive dialogue choices.
              </p>
              <p className="text-on-surface-variant text-sm">
                The fractured route unlocks only after failing her main route once, revealing a darker side to her personality. Players have reported her looking directly at the screen and saying "You again" after multiple replays, a line that does not appear in the script files and suggests replay-aware mechanics.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Harlequin Main Route Overview
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Harlequin's main route introduces the comedy/aggression choice system that defines her character arc. Unlike Pierrot's withdrawn melancholy, Harlequin demands active engagement — her dialogue branches aggressively based on whether players choose playful or confrontational responses.
              </p>
              <p className="text-on-surface-variant text-sm">
                The main route ending, "Harlequin's Laughter," triggers when players maintain comedic choices throughout Acts I and II, then select the aggressive option in Scene 9. This counterintuitive requirement — building trust through comedy, then breaking it with aggression — frustrates many first-time players.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                How to Unlock the Fractured Route
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Fractured Route is Harlequin's secret path and reveals the darkest version of her character. It requires specific failure conditions to unlock — players must choose aggressive options in Scene 4, then comedic options in Scene 9, creating a contradiction that breaks her dialogue tree.
              </p>
              <ul className="space-y-2 text-on-surface-variant text-sm mb-4">
                <li>• Choose aggressive options in Scene 4 ("Mock her performance")</li>
                <li>• Switch to comedic options in Scene 9 ("Laugh with her")</li>
                <li>• This contradiction triggers the Fractured Route flag</li>
                <li>• Scene 10 onwards contains 7 undocumented hidden scenes</li>
              </ul>
              <p className="text-on-surface-variant text-sm">
                The Fractured Route contains the most aggressive dialogue pruning in the game — entire scenes play out with only Harlequin speaking, the player's choices reduced to silent observation. Community reports suggest this route was designed to make players uncomfortable with their own complicity.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Hidden Scenes & Replay Dialogue
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">The "You Again" Line</h3>
                  <p className="text-on-surface-variant text-sm">On the 4th playthrough, Harlequin looks directly at the screen and says "You again." This line does not appear in the script files of any known build and was first reported by u/harlequin_hunter in 2024. Multiple players have confirmed the trigger, but data miners have not located the audio file.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Scene 7 Hidden Monologue</h3>
                  <p className="text-on-surface-variant text-sm">If the player selects all neutral options in Scenes 1-6, Scene 7 plays a hidden monologue where Harlequin speaks to an empty stage. The dialogue references events from Pierrot's route that the player may not have experienced, suggesting cross-route memory.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Mirror Hall Connection</h3>
                  <p className="text-on-surface-variant text-sm">After completing both Pierrot's and Harlequin's routes, the Mirror Hall scene changes. Harlequin's reflection appears in Pierrot's mirror, and vice versa. This connection is not documented in either route guide and was discovered through community cross-referencing.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Harlequin Route Endings
              </h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Harlequin's Laughter (Main Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Maintain comedic choices through Acts I-II, then select aggressive option in Scene 9. Harlequin performs a final act that breaks the fourth wall, addressing the player directly before credits roll.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Fractured Smile (Secret Ending)</h3>
                  <p className="text-on-surface-variant text-sm">Trigger the Fractured Route through the Scene 4/9 contradiction. Contains 7 hidden scenes and ends with Harlequin alone on stage, asking why the player keeps coming back. Requires cross-route awareness flag.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Empty Stage (Corrupted)</h3>
                  <p className="text-on-surface-variant text-sm">Found in unused game files. The stage is empty, but applause plays. No character sprites load. Unlock conditions unknown, possibly related to the "You again" trigger.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">
                Related Content
              </h2>
              <div className="flex flex-wrap gap-2">
                <a href="/endings" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">All Endings Explained</a>
                <a href="/walkthroughs/harlequin-true-route" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Harlequin True Route</a>
                <a href="/lore/mirror-hall" className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors">Mirror Hall Lore</a>
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
