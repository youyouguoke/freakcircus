import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Columbina's Truth Ending — Three-Loop Guide & Lore | Freak Circus Hub",
  description: "Complete guide to Columbina's Truth ending in The Freak Circus. Covers the three-loop perfection requirement, hidden fourth door, and why this ending suggests the circus is a purgatorial system.",
  keywords: ["Columbina's Truth", "Columbina ending", "The Freak Circus endings", "three loop", "secret ending", "purgatory"],
  alternates: {
    canonical: "https://freak-circus.com/endings/columbinas-truth",
  },
};

export default function ColumbinasTruthPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ENDING_GUIDE // COLUMBINAS_TRUTH
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Columbina's Truth
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The secret ending for Columbina's route — requires perfect alignment across three consecutive loops.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm">
                Columbina's Truth is the most difficult ending to unlock in The Freak Circus. It requires perfect alignment of all dialogue choices across three consecutive loops — any deviation, even a single incorrect choice, causes a complete reset. The ending reveals that Columbina is the only character who truly understands the circus, and that her gentle demeanor hides a disturbing awareness of the narrative loop.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Requirements</h2>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>• Complete Columbina's route with perfect dialogue choices in Loop 1</li>
                <li>• Complete Loop 2 with identical choices — any deviation resets to Loop 1</li>
                <li>• Complete Loop 3 with identical choices — the hallway gains a fourth door</li>
                <li>• Enter the fourth door in Scene 14 to trigger the ending</li>
                <li>• Requires completing Pierrot's route first for cross-route awareness</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Walkthrough</h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The three-loop mechanic is the most demanding system in The Freak Circus. Players must remember every choice from Loop 1 and replicate them exactly in Loops 2 and 3. The game provides no indication of which choices were "correct" — you must deduce the pattern from Columbina's reactions.
              </p>
              <p className="text-on-surface-variant text-sm">
                In Loop 3, the hallway gains a fourth door that was not present in the initial architecture. This door leads to a room containing a single chair facing a mirror. The mirror shows the player's desktop, breaking the fourth wall explicitly.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Lore Meaning</h2>
              <p className="text-on-surface-variant text-sm">
                Columbina's Truth suggests that the circus is a purgatorial system where characters forget but the world remembers. The three loops represent stages of memory erosion — each loop strips away more of the protagonist's identity until only instinct remains. The fourth door represents the boundary between the player and the protagonist, suggesting that the player is the true variable being tested.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Theory</h2>
              <p className="text-on-surface-variant text-sm">
                The community theory suggests that Columbina is not a character but a system administrator — the only entity in the circus that understands its true purpose. Her three-loop storyline is not a narrative but a calibration process, testing whether the player can maintain consistency across iterations. The ending implies that the circus exists to test human memory and decision-making under repetition.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">What happens if you make a mistake in Loop 2?</h3>
                  <p className="text-on-surface-variant text-sm">The game resets to Loop 1 without warning. You must start the three-loop sequence again from the beginning.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Is the fourth door visible in the game files?</h3>
                  <p className="text-on-surface-variant text-sm">Yes, but it only appears in the map data for build 1.04 and later. Earlier builds do not contain the fourth door geometry.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
