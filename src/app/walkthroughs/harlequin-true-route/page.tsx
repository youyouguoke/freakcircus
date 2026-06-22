import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Harlequin True Route Guide — Aggressive Choices & Grand Finale | Freak Circus Hub",
  description: "Complete walkthrough for Harlequin's True Route in The Freak Circus. Covers all aggressive dialogue choices, hidden scenes, and how to reach the Grand Finale ending.",
  keywords: ["Harlequin route guide", "Harlequin True Route", "Grand Finale", "The Freak Circus walkthrough", "aggressive choices"],
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/harlequin-true-route",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // HARLEQUIN_TRUE
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Harlequin True Route
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The aggressive route — select all confrontational options to unlock Harlequin's true ending.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Harlequin's True Route is the aggressive path through her storyline. Unlike the standard route, which focuses on her playful exterior, the True Route reveals her dangerous obsession with the player. It requires selecting all confrontational dialogue options, which unlocks 7 hidden scenes that only appear on replay. The route culminates in the Grand Finale ending, which is considered a 'bad' ending but contains the most lore about the circus's founding.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Requirements</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">• Available from the start of the game
• Select ALL aggressive dialogue options (no exceptions)
• Contains 7 hidden scenes only visible on replay
• Estimated playtime: 3-4 hours
• Ending: Grand Finale (Bad Ending)</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Step-by-Step Guide</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">Act I — The Welcome (Scenes 1-4): Harlequin greets you with her usual playful demeanor. Select aggressive responses to her jokes. In Scene 3, she asks if you're afraid of her. Answer: 'Yes, I should be.'

Act II — The Performance (Scenes 5-8): Continue selecting aggressive options. In Scene 6, Harlequin reveals her knife collection. The aggressive response ('Show me how you use them') unlocks a hidden scene on replay.

Act III — The Confession (Scenes 9-12): Harlequin's demeanor changes. She becomes possessive and controlling. In Scene 11, she locks the door. The aggressive response ('Break the door down') is the only way to proceed.

Finale (Scene 13-14): The ending depends on whether you selected ALL aggressive options. Missing even one causes the standard ending instead.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Hidden Triggers</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The True Route contains 7 hidden scenes that only appear on replay after completing the route once:

1. Scene 3 extended: Harlequin reveals she knows your real name (from save file metadata).

2. Scene 6 knife scene: The aggressive response unlocks a 2-minute animation not found in the standard route.

3. Scene 8 backstage: A hidden conversation with The Doctor about Harlequin's 'episodes.'

4. Scene 10 mirror: Harlequin's reflection shows a different face. This is the first appearance of the Mirror Hall anomaly.

5. Scene 11 lock scene: The door is already locked before Harlequin mentions it — suggesting she planned this.

6. Scene 13 fire: The circus tent burns. This is the first appearance of the First Circus Fire reference.

7. Scene 14 credits: The credits list a fifth character ('The Director') who never appears in the game.</p>
            </section>
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Ending Outcome</h2>
              <p className="text-on-surface-variant text-sm whitespace-pre-line">The Grand Finale ending shows Harlequin performing a solo act in a burning circus tent. The audience is revealed to be mannequins. As the fire spreads, Harlequin continues performing, looking directly at the player. The final image is her smile reflected in a cracked mirror. The credits roll over the sound of fire crackling. This ending is considered 'bad' because Harlequin dies in the fire, but it reveals the most lore about the circus's founding myth.</p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/endings/the-grand-finale" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <div className="font-bold text-foreground">Grand Finale →</div>
                  <div className="text-on-surface-variant text-sm">The true ending for this route</div>
                </Link>
                <Link href="/theories" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Theory</div>
                  <div className="font-bold text-foreground">Harlequin Loop Theory →</div>
                  <div className="text-on-surface-variant text-sm">Community theory about her obsession</div>
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
