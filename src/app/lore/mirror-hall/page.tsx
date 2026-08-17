import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import UnverifiedBanner from "@/components/UnverifiedBanner";

export const metadata: Metadata = {
  title: "Mirror Scene — Day 2 Key Story Moment | Freak Circus Hub",
  description: "The mirror scene in The Freak Circus Day 2 — what we know about this confirmed story moment and community interpretations.",
  keywords: ["Freak Circus mirror scene", "Day 2 mirror", "The Freak Circus lore"],
  alternates: {
    canonical: "https://freak-circus.com/lore/mirror-hall",
  },
};

export default function MirrorHallPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs text-on-surface-variant mb-4">
            LORE // MIRROR_SCENE
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 uppercase">
            The Mirror Scene
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            A key story moment in Day 2 of The Freak Circus.
          </p>

          <UnverifiedBanner level="medium" />

          <div className="space-y-12 mt-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What We Know (Verified)</h2>
              <ul className="space-y-3 text-on-surface-variant text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>The mirror scene exists in Day 2 — confirmed by multiple YouTube playthroughs (240K+ views)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>It appears to be a key turning point in the narrative</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>It is part of the Day 2 tent route content</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Community Interpretations (Unverified)</h2>
              <div className="glass-card p-6 border-l-4 border-l-yellow-500">
                <ul className="space-y-3 text-on-surface/60 text-sm">
                  <li>• Some community members interpret the mirror as representing self-reflection or duality</li>
                  <li>• Others connect it to the Pierrot-Harlequin rivalry and the theme of identity</li>
                  <li>• Whether the mirror has hidden mechanics (e.g., showing different reflections based on choices) is unverified</li>
                  <li>• Specific scene numbers and technical details reported by community members have not been independently confirmed</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl text-on-surface/40 uppercase tracking-widest mb-4">Sources</h2>
              <div className="text-on-surface/40 text-xs space-y-1">
                <p>• YouTube — Tiffany L. &quot;The Freak Circus (Day 1 &amp; 2) Full Walkthrough&quot; (240K views)</p>
                <p>• YouTube — MrClockWorks &quot;The Freak Circus Day 2 All Routes&quot; (170K views)</p>
                <p>• Last verified: August 2026</p>
              </div>
            </section>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/lore" className="font-mono text-xs text-primary uppercase hover:underline">← Back to Lore</Link>
            <Link href="/theories" className="font-mono text-xs text-secondary uppercase hover:underline">Community Theories →</Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
