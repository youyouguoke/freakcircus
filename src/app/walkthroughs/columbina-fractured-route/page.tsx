import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Columbina Fractured Route Guide — Three Loops & Perfect Alignment | Freak Circus Hub",
  description: "Complete walkthrough for Columbina Fractured Route in The Freak Circus. Covers the three-loop perfection requirement, fourth door, and how to unlock Columbina Truth ending.",
  keywords: ["Columbina route guide", "Columbina Fractured Route", "Columbina Truth", "three loop", "The Freak Circus walkthrough"],
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/columbina-fractured-route",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // COLUMBINA_FRACTURED
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Columbina Fractured Route
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The most demanding route — requires perfect alignment across three consecutive loops.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Columbina's Fractured Route is the most difficult route to unlock in The Freak Circus. It requires perfect alignment of all dialogue choices across three consecutive loops — any deviation, even a single incorrect choice, causes a complete reset. The route reveals that Columbina is the only character who truly understands the circus, and her gentle demeanor hides a disturbing awareness of the narrative loop. The hallway gains a fourth door after the third loop, leading to a room that breaks the fourth wall.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Requirements</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Complete Pierrot Main Route
• Complete Doctor Memory Route
• Perfect alignment of all dialogue choices across 3 loops
• Any deviation causes complete reset to Loop 1
• Estimated playtime: 6-8 hours (with loops)</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Step-by-Step Guide</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Loop 1 — The First Performance (Scenes 1-14): Complete Columbina's route with perfect dialogue choices. The correct choices are not marked — you must deduce them from her reactions. Key hint: Columbina prefers honest answers over comforting ones.

Loop 2 — The Second Performance (Scenes 1-14): Replicate ALL choices from Loop 1 exactly. The game compares your choices to a hidden log. Any deviation causes a soft reset to Loop 1.

Loop 3 — The Third Performance (Scenes 1-14): The hallway gains a fourth door in Scene 12. This door was not present in Loops 1 and 2. Entering it triggers the ending.

Finale (Scene 14): The ending depends on whether you entered the fourth door. Missing it causes the standard ending.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Hidden Triggers</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Fractured Route contains three hidden triggers:

1. Perfect alignment across three loops: The game tracks every choice using a hidden log. Any deviation causes a complete reset.

2. Fourth door appearance: The door only appears in Loop 3 and only if the first two loops were perfect. It leads to a room containing a single chair facing a mirror.

3. Cross-route requirements: The route requires completing Pierrot Main and Doctor Memory first. Without these prerequisites, the fourth door does not appear even with perfect loops.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Ending Outcome</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Columbina's Truth ending shows the player sitting in a chair facing a mirror. The mirror displays the player's desktop, breaking the fourth wall explicitly. Columbina's voiceover says: 'You are not the first to sit here. You will not be the last.' The game then asks: 'Do you want to remember?' Selecting 'Yes' causes the game to delete the save file. Selecting 'No' returns to the title screen with a new option: 'Continue from Loop 4.' This ending is considered the most meta-narrative conclusion in the game.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/endings/columbinas-truth" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <div className="font-bold text-foreground">Columbina's Truth →</div>
                  <div className="text-on-surface-variant text-sm">The secret ending for this route</div>
                </Link>
                <Link href="/theories" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Theory</div>
                  <div className="font-bold text-foreground">Columbina Watches Player →</div>
                  <div className="text-on-surface-variant text-sm">Community theory about her awareness</div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
