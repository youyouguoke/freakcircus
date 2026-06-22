import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pierrot Main Route Guide — Step-by-Step Walkthrough | Freak Circus Hub",
  description: "Complete walkthrough for Pierrot's Main Route in The Freak Circus. Covers all dialogue choices, hidden triggers, and how to reach the Smile For Me ending. Beginner-friendly guide with no replay requirements.",
  keywords: ["Pierrot route guide", "Pierrot main route", "The Freak Circus walkthrough", "Smile For Me ending", "beginner route"],
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/pierrot-main-route",
  },
};

export default function PierrotMainRoutePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // PIERROT_MAIN
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            Pierrot Main Route
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The standard introduction to The Freak Circus. Complete standard dialogue choices to reach the Smile For Me ending.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm">
                Pierrot's Main Route is the recommended starting point for new players. It introduces the game's core mechanics — dialogue choices, relationship meters, and scene progression — without requiring replay awareness or hidden triggers. The route follows Pierrot's melancholic storyline through the circus, culminating in the Smile For Me ending.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Requirements</h2>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>• No prerequisites — available from the start of the game</li>
                <li>• Estimated playtime: 2-3 hours</li>
                <li>• Difficulty: Beginner</li>
                <li>• Ending: Smile For Me (Good Ending)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Step-by-Step Guide</h2>
              <div className="space-y-6">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Act I — The Garden</h3>
                  <p className="text-on-surface-variant text-sm mb-2">Scene 1-4: Standard introduction scenes. Choose any dialogue options — no choices affect the ending at this stage.</p>
                  <p className="text-on-surface-variant text-sm">Key moment: In Scene 3, Pierrot offers you a flower. Accepting or refusing both lead to the same outcome in the main route.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Act II — The Performance</h3>
                  <p className="text-on-surface-variant text-sm mb-2">Scene 5-8: The main narrative develops. Continue selecting standard dialogue options.</p>
                  <p className="text-on-surface-variant text-sm">Key moment: In Scene 7, Pierrot asks about your previous visit. This is foreshadowing for the Silent Route — in the main route, either answer is acceptable.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Act III — The Confession</h3>
                  <p className="text-on-surface-variant text-sm mb-2">Scene 9-12: Pierrot reveals his true feelings. The dialogue choices here determine which ending you receive.</p>
                  <p className="text-on-surface-variant text-sm">For the Smile For Me ending: Accept Pierrot's confession in Scene 11. Rejecting leads to a neutral ending, not the main route conclusion.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Hidden Triggers</h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The main route contains no hidden triggers, but it does contain foreshadowing for the Silent Route. In Scene 7, Pierrot's question about "previous visits" is the first hint that the game tracks replay history. Players who have completed other routes before starting Pierrot's main route will see additional dialogue options referencing those experiences.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Ending Outcome</h2>
              <p className="text-on-surface-variant text-sm">
                The Smile For Me ending shows Pierrot performing alone on the empty stage. The camera pulls back to reveal the circus tent is empty — no audience, no other performers. Pierrot smiles directly at the player and says, "Thank you for staying." The credits roll over a static image of the empty stage. This ending is considered the "good" ending for Pierrot's route, though its implications are darker than the label suggests.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Related Content</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/walkthroughs/pierrot-silent-route" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Next Route</div>
                  <div className="font-bold text-foreground">Pierrot Silent Route →</div>
                  <div className="text-on-surface-variant text-sm">The hidden replay-aware route</div>
                </Link>
                <Link href="/endings/eternal-silence" className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">Related Ending</div>
                  <div className="font-bold text-foreground">Smile For Me →</div>
                  <div className="text-on-surface-variant text-sm">Pierrot's standard ending</div>
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
