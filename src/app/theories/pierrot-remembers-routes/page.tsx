import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import UnverifiedBanner from "@/components/UnverifiedBanner";

export const metadata: Metadata = {
  title: "Pierrot Character Analysis — Community Discussion | Freak Circus Hub",
  description: "Community analysis of Pierrot's character in The Freak Circus. Examining his yandere nature, relationship with Harlequin, and the Columbina legend.",
  keywords: ["Pierrot theory", "Pierrot character analysis", "The Freak Circus Pierrot"],
  alternates: {
    canonical: "https://freak-circus.com/theories/pierrot-remembers-routes",
  },
};

export default function PierrotAnalysisPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs text-on-surface-variant mb-4">
            COMMUNITY_ANALYSIS // PIERROT
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 uppercase">
            Pierrot — Community Analysis
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            Community discussion and analysis of Pierrot&apos;s character in The Freak Circus.
          </p>

          <UnverifiedBanner level="medium" />

          <div className="space-y-12 mt-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Who Is Pierrot?
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Pierrot is one of the two main characters in The Freak Circus, introduced in Day 1 as a
                silent, melancholic figure. He is described as a &quot;yandere&quot; character — obsessive and
                possessive toward the player character. His rival is Harlequin, and their conflict is
                explained by the Columbina legend in Day 2.
              </p>
              <p className="text-on-surface-variant text-sm">
                These are verified facts from thefreakcircus.org, wiki.gg, and YouTube playthroughs.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Verified Character Traits
              </h2>
              <ul className="space-y-3 text-on-surface-variant text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Yandere personality — obsessive, possessive, initially gentle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Rivalry with Harlequin driven by the Columbina legend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Introduced in Day 1, story deepens in Day 2 tent routes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>One of the two main character routes (alongside Harlequin)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Community Theories (Unverified)
              </h2>
              <div className="glass-card p-6 border-l-4 border-l-yellow-500">
                <p className="text-on-surface/60 text-sm mb-4">
                  The following are community speculations that have NOT been verified:
                </p>
                <ul className="space-y-3 text-on-surface/50 text-sm">
                  <li>• Some players report that Pierrot&apos;s dialogue changes after multiple playthroughs, suggesting &quot;replay awareness&quot; — but no hidden counter or memory mechanic has been independently verified</li>
                  <li>• Community members speculate about &quot;loop&quot; mechanics where the game tracks player behavior across saves — this remains unverified</li>
                  <li>• Claims about specific save file offsets (e.g., &quot;0x4A20&quot;) and build-specific behaviors are unconfirmed community reports</li>
                  <li>• Whether Pierrot has a &quot;true&quot; ending or secret path is unknown</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl text-on-surface/40 uppercase tracking-widest mb-4">
                Sources
              </h2>
              <div className="text-on-surface/40 text-xs space-y-1">
                <p>• thefreakcircus.org — Character descriptions</p>
                <p>• thefreakcircus.wiki.gg — Character information</p>
                <p>• YouTube playthroughs — Day 1 & 2 content</p>
                <p>• Last verified: August 2026</p>
              </div>
            </section>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/theories" className="font-mono text-xs text-primary uppercase hover:underline">
              ← Back to Theories
            </Link>
            <Link href="/characters/pierrot" className="font-mono text-xs text-secondary uppercase hover:underline">
              Pierrot Character →
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
