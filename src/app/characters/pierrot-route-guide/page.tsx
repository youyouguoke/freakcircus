import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import UnverifiedBanner from "@/components/UnverifiedBanner";

export const metadata: Metadata = {
  title: "Pierrot Route Guide — Community Walkthrough | Freak Circus Hub",
  description: "Community guide for Pierrot's route in The Freak Circus. Covers Day 1 introduction, Day 2 development, and what the community has discovered about Pierrot's story path.",
  keywords: ["Pierrot route", "Pierrot walkthrough", "The Freak Circus Pierrot"],
  alternates: {
    canonical: "https://freak-circus.com/characters/pierrot-route-guide",
  },
};

export default function PierrotRouteGuidePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // PIERROT
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 uppercase">
            Pierrot Route Guide
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            Community guide for Pierrot&apos;s route in The Freak Circus.
          </p>

          <UnverifiedBanner level="medium" />

          <div className="space-y-12 mt-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Overview
              </h2>
              <p className="text-on-surface-variant text-sm mb-4">
                Pierrot is one of the two main characters in The Freak Circus, introduced in Day 1 as a
                silent, melancholic figure. His route is one of the two primary story paths (the other being
                Harlequin). Day 2 deepens his character through tent routes and the Columbina legend.
              </p>
              <p className="text-on-surface-variant text-sm">
                The game features multiple endings — 1 confirmed bad ending (&quot;Missing&quot;) and 3 unnamed open endings.
                Pierrot&apos;s route is believed to be associated with at least one of the open endings, though
                specific conditions have not been independently verified.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                What We Know (Verified)
              </h2>
              <ul className="space-y-3 text-on-surface-variant text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Pierrot is introduced in Day 1 alongside Harlequin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>He is described as a &quot;yandere&quot; character — obsessive and possessive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Day 2 reveals the Columbina legend, explaining his rivalry with Harlequin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Day 2 features tent-based scenes involving Pierrot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Multiple endings are associated with his route (specific names unconfirmed)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Community Tips (Unverified)
              </h2>
              <div className="glass-card p-6 border-l-4 border-l-yellow-500">
                <ul className="space-y-3 text-on-surface/60 text-sm">
                  <li>• Save before major dialogue choices — some may lock you into specific paths</li>
                  <li>• Community members describe &quot;comfort&quot; vs &quot;confess&quot; type choices in Day 1</li>
                  <li>• Day 2 tent content appears to be key to Pierrot&apos;s story development</li>
                  <li>• Multiple playthroughs may be needed to see all Pierrot-related content</li>
                  <li>• The Columbina legend provides important context for understanding Pierrot</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl text-on-surface/40 uppercase tracking-widest mb-4">
                Sources
              </h2>
              <div className="text-on-surface/40 text-xs space-y-1">
                <p>• thefreakcircus.org — Character descriptions and route structure</p>
                <p>• YouTube playthroughs (Tiffany L., MrClockWorks) — Day 1 & 2 content confirmation</p>
                <p>• Last verified: August 2026</p>
              </div>
            </section>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/walkthroughs" className="font-mono text-xs text-primary uppercase hover:underline">
              ← Walkthrough Hub
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
