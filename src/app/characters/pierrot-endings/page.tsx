import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import UnverifiedBanner from "@/components/UnverifiedBanner";

export const metadata: Metadata = {
  title: "Pierrot Endings — What We Know | Freak Circus Hub",
  description: "What we know about endings associated with Pierrot in The Freak Circus. Only 'Missing' has been confirmed by name — the rest are unnamed open endings.",
  keywords: ["Pierrot endings", "Freak Circus Pierrot endings", "Pierrot route endings"],
  alternates: {
    canonical: "https://freak-circus.com/characters/pierrot-endings",
  },
};

export default function PierrotEndingsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="bg-surface py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-xs text-on-surface-variant mb-4">
            CHARACTER_ENDINGS // PIERROT
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-4 uppercase">
            Pierrot Endings
          </h1>
          <p className="text-on-surface-variant text-lg mb-8">
            What we know about endings associated with Pierrot.
          </p>

          <UnverifiedBanner level="high" />

          <div className="space-y-12 mt-8">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What We Know</h2>
              <div className="glass-card p-6">
                <ul className="space-y-3 text-on-surface/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>The game has 4 endings total: 1 confirmed bad ending (&quot;Missing&quot;) + 3 unnamed open endings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">?</span>
                    <span>Pierrot is believed to be associated with at least one open ending, but this is unverified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">?</span>
                    <span>The specific names and conditions of Pierrot-related endings are unknown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Previously listed ending names (&quot;Open Ending B&quot;, &quot;Open Ending C&quot;) were unverified and have been removed</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Community Reports (Unverified)</h2>
              <div className="glass-card p-6 border-l-4 border-l-yellow-500">
                <ul className="space-y-3 text-on-surface/50 text-sm">
                  <li>• Some players report that different dialogue choices in Pierrot&apos;s route lead to different outcomes</li>
                  <li>• Community members describe &quot;comfort&quot; vs &quot;confess&quot; type choices, but specifics are unverified</li>
                  <li>• Whether there is a &quot;secret&quot; ending tied to specific conditions is unknown</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl text-on-surface/40 uppercase tracking-widest mb-4">Sources</h2>
              <div className="text-on-surface/40 text-xs space-y-1">
                <p>• thefreakcircus.org — &quot;1 bad ending and 3 open endings&quot;</p>
                <p>• thefreakcircus.wiki.gg — &quot;Missing&quot; confirmed as only named ending</p>
                <p>• Last verified: August 2026</p>
              </div>
            </section>
          </div>

          <div className="mt-12 flex gap-4">
            <Link href="/characters/pierrot" className="font-mono text-xs text-primary uppercase hover:underline">← Pierrot Character</Link>
            <Link href="/endings" className="font-mono text-xs text-secondary uppercase hover:underline">All Endings →</Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
