import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import UnverifiedBanner from "@/components/UnverifiedBanner";

export const metadata: Metadata = {
  title: "Harlequin Route Guide — Community Walkthrough | Freak Circus Hub",
  description: "Community guide for Harlequin's route in The Freak Circus. Covers Day 1 introduction, the 'Missing' bad ending, and what the community has discovered about Harlequin's story path.",
  keywords: ["Harlequin route guide", "Harlequin walkthrough", "The Freak Circus Harlequin", "Missing ending"],
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/harlequin-true-route",
  },
};

export default function HarlequinRoutePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />
      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs text-on-surface-variant mb-4">
            ROUTE_GUIDE // HARLEQUIN
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 uppercase">
            Harlequin Route
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            The seductive rival — one of the two main character routes in The Freak Circus.
            Home of the confirmed &quot;Missing&quot; bad ending.
          </p>

          <UnverifiedBanner level="medium" />

          <div className="space-y-12 mt-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-on-surface-variant text-sm">
                Harlequin is introduced in Day 1 as Pierrot&apos;s seductive rival. He enters the story
                as a competing force, creating a triangle of desire, manipulation, and psychological tension.
                His route is one of the two primary story paths (the other being Pierrot).
                The confirmed bad ending &quot;Missing&quot; is associated with Harlequin&apos;s route.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What We Know (Verified)</h2>
              <ul className="space-y-3 text-on-surface-variant text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Harlequin is one of the two main characters introduced in Day 1</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>He is described as seductive, manipulative, and obsessive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>The &quot;Missing&quot; bad ending is confirmed to be associated with his route</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>YouTube has &quot;Bad End&quot; scene videos confirming the ending exists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>His rivalry with Pierrot is a central plot element, driven by the Columbina legend</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">&quot;Missing&quot; — The Confirmed Bad Ending</h2>
              <div className="glass-card p-6 border-l-4 border-l-green-500">
                <h3 className="font-display text-lg text-on-surface mb-2">Ending: &quot;Missing&quot;</h3>
                <div className="space-y-3 text-on-surface/60 text-sm">
                  <p>
                    <strong>Status:</strong> <span className="text-green-500">CONFIRMED</span> — the only ending
                    confirmed by name in any official or wiki source.
                  </p>
                  <p>
                    <strong>How to get it:</strong> Community reports suggest this is the standard ending
                    most players encounter on their first playthrough of Harlequin&apos;s route.
                    Specific choice requirements have not been independently verified.
                  </p>
                  <p>
                    <strong>Source:</strong> thefreakcircus.wiki.gg lists &quot;Missing&quot; as the only confirmed ending.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Community Reports (Unverified)</h2>
              <div className="glass-card p-6 border-l-4 border-l-yellow-500">
                <p className="text-on-surface/60 text-sm mb-4">
                  The following details are reported by community members but have not been independently verified:
                </p>
                <ul className="space-y-2 text-on-surface/50 text-sm">
                  <li>• Players report aggressive and comedic dialogue options in Harlequin scenes</li>
                  <li>• Day 2 reportedly features tent-based scenes involving Harlequin</li>
                  <li>• Some players describe a &quot;comedy vs aggression&quot; choice system</li>
                  <li>• The exact number of endings tied to Harlequin is unknown beyond &quot;Missing&quot;</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Tips</h2>
              <div className="glass-card p-6">
                <ul className="space-y-3 text-on-surface/60 text-sm">
                  <li>• Save before major dialogue choices — aggressive vs comedic options may lead to different outcomes</li>
                  <li>• The &quot;Missing&quot; ending appears to be the default — try different choices to find alternatives</li>
                  <li>• Complete Day 1 first to unlock Day 2 tent content</li>
                  <li>• Understanding the Columbina legend from Day 2 adds context to Harlequin&apos;s motivations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Sources</h2>
              <div className="text-on-surface/40 text-xs space-y-1">
                <p>• thefreakcircus.wiki.gg — Confirmed ending &quot;Missing&quot; linked to Harlequin</p>
                <p>• thefreakcircus.org — Character descriptions and route structure</p>
                <p>• YouTube playthroughs — &quot;Bad End&quot; scene confirmation</p>
                <p>• Last verified: August 2026</p>
              </div>
            </section>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/walkthroughs" className="font-mono text-xs text-primary uppercase hover:underline">
              ← Back to Walkthrough Hub
            </Link>
            <Link href="/characters/harlequin" className="font-mono text-xs text-secondary uppercase hover:underline">
              Harlequin Character Page →
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
