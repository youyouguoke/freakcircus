import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import UnverifiedBanner from "@/components/UnverifiedBanner";

export const metadata: Metadata = {
  title: "Pierrot Route Guide — Community Walkthrough | Freak Circus Hub",
  description: "Community guide for Pierrot's route in The Freak Circus. Covers Day 1 introduction, Day 2 development, and what the community has discovered about Pierrot's story path.",
  keywords: ["Pierrot route guide", "Pierrot walkthrough", "The Freak Circus Pierrot"],
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
          <div className="font-mono text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // PIERROT
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 uppercase">
            Pierrot Route
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The melancholic clown — one of the two main character routes in The Freak Circus.
          </p>

          <UnverifiedBanner level="medium" />

          <div className="space-y-12 mt-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm">
                Pierrot is introduced in Day 1 as a silent, melancholic figure. His route is one of the two
                primary story paths in the game (the other being Harlequin). Day 2 deepens his character
                through the tent routes and the Columbina legend, which reveals the backstory behind
                Pierrot and Harlequin&apos;s rivalry.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What We Know (Verified)</h2>
              <ul className="space-y-3 text-on-surface-variant text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Pierrot is one of the two main characters introduced in Day 1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>He is described as a &quot;yandere&quot; character — obsessive and possessive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Day 2 reveals the Columbina legend, which explains Pierrot and Harlequin&apos;s rivalry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Multiple endings are associated with his route (specific names unconfirmed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>He appears alongside Harlequin in Day 1&apos;s story</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Community Reports (Unverified)</h2>
              <div className="glass-card p-6 border-l-4 border-l-yellow-500">
                <p className="text-on-surface/60 text-sm mb-4">
                  The following details are reported by community members but have not been independently verified.
                  Specific dialogue choices, scene names, and mechanics may be inaccurate.
                </p>
                <ul className="space-y-2 text-on-surface/50 text-sm">
                  <li>• Community members describe dialogue choices that affect relationship outcomes</li>
                  <li>• Some players report &quot;comfort&quot; vs &quot;confess&quot; type choices in Day 1</li>
                  <li>• Day 2 reportedly features tent-based scenes involving Pierrot</li>
                  <li>• The exact number of decision points and branching paths is unknown</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Tips</h2>
              <div className="glass-card p-6">
                <ul className="space-y-3 text-on-surface/60 text-sm">
                  <li>• Save before major dialogue choices — some may lock you out of other paths</li>
                  <li>• Complete Day 1 first to unlock Day 2 tent content</li>
                  <li>• Pay attention to the Columbina legend in Day 2 — it provides context for Pierrot&apos;s behavior</li>
                  <li>• Multiple playthroughs may be needed to see all Pierrot-related content</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Sources</h2>
              <div className="text-on-surface/40 text-xs space-y-1">
                <p>• thefreakcircus.org — Character descriptions and route structure</p>
                <p>• YouTube playthroughs (Tiffany L., MrClockWorks) — Day 1 & 2 content confirmation</p>
                <p>• Last verified: August 2026</p>
              </div>
            </section>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/walkthroughs" className="font-mono text-xs text-primary uppercase hover:underline">
              ← Back to Walkthrough Hub
            </Link>
            <Link href="/characters/pierrot" className="font-mono text-xs text-secondary uppercase hover:underline">
              Pierrot Character Page →
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
