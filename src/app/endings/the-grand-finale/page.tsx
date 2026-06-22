import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Grand Finale Ending — Harlequin Route Guide | Freak Circus Hub",
  description: "Complete guide to The Grand Finale ending in The Freak Circus. Covers unlock conditions, scene requirements, and why this is the standard conclusion for Harlequin's route.",
  keywords: ["Grand Finale", "Harlequin ending", "The Freak Circus endings", "standard ending", "canon ending"],
  alternates: {
    canonical: "https://freak-circus.com/endings/the-grand-finale",
  },
};

export default function GrandFinalePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            ENDING_GUIDE // GRAND_FINALE
          </div>
          <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
            The Grand Finale
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The standard ending for Harlequin's route — complete unlock guide and scene breakdown.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm">
                The Grand Finale is the standard ending for Harlequin's route and one of the two canon endings most players see on their first playthrough. It completes the main narrative thread without requiring special conditions or replay awareness. The ending concludes with Harlequin's final performance, where the player must choose whether to applaud or remain silent.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Requirements</h2>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>• Complete Harlequin's route with standard dialogue choices</li>
                <li>• Do not refuse more than two dialogue interactions in the final act</li>
                <li>• Select "Applaud" in the final scene (Scene 15)</li>
                <li>• No replay requirements — achievable on first playthrough</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Walkthrough</h2>
              <p className="text-on-surface-variant text-sm mb-4">
                The Grand Finale follows Harlequin's standard route from beginning to end. Maintain positive dialogue choices throughout Acts I and II. In the final act, support Harlequin's performance decisions. The ending triggers automatically after Scene 15 if you have not refused too many interactions.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Lore Meaning</h2>
              <p className="text-on-surface-variant text-sm">
                The Grand Finale represents the circus as a functioning performance — Harlequin completes her act, the audience applauds, and the curtain falls. It is the only ending that presents the circus as a normal entertainment venue, without the meta-narrative elements that appear in secret endings. Some community members interpret this as the "intended" ending before the player discovers the darker layers.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">Community Theory</h2>
              <p className="text-on-surface-variant text-sm">
                The community theory suggests that The Grand Finale is a "surface level" ending — what the circus wants the player to see. Secret endings reveal that this performance is a loop, and that Harlequin has given this same performance countless times. The standard ending's simplicity makes it suspicious in retrospect.
              </p>
            </section>

            <section>
              <h2 className="font-[Epilogue] text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <div className="space-y-4">
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Can you get this ending on the first playthrough?</h3>
                  <p className="text-on-surface-variant text-sm">Yes. The Grand Finale is designed as the standard ending for Harlequin's route and requires no special conditions.</p>
                </div>
                <div className="bg-surface-container border border-outline/20 p-4">
                  <h3 className="font-bold text-foreground mb-2">Does this ending affect other routes?</h3>
                  <p className="text-on-surface-variant text-sm">No. The Grand Finale does not trigger cross-route changes. However, completing it increments the hidden counter at 0x4A20, which affects dialogue in subsequent playthroughs.</p>
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
