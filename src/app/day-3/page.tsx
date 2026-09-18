import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Day3Subscribe from "@/components/Day3Subscribe";
import { CURRENT_VERSION } from "@/lib/site-facts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Day 3 — Not Yet Released | Freak Circus Hub",
  description:
    "Day 3 of The Freak Circus has not been released. No confirmed release date. The developer is currently working on programming. Follow official Tumblr for updates.",
  keywords: [
    "Freak Circus day 3",
    "day 3 release date",
    "Freak Circus update",
    "day 3 status",
  ],
  openGraph: {
    title: "Day 3 — Not Yet Released | Freak Circus Hub",
    description:
      "Day 3 of The Freak Circus has not been released. No confirmed release date.",
    type: "article",
    url: "https://freak-circus.com/day-3",
    siteName: "Freak Circus Hub",
  },
  alternates: {
    canonical: "https://freak-circus.com/day-3",
  },
};

export default function Day3Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      <section className="pt-28 pb-16 px-4 md:px-16 border-b border-outline/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="font-mono text-[10px] text-red-500 uppercase tracking-[0.3em]">
              Not Yet Released
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
            Day 3 — Status
          </h1>
          <p className="text-on-surface/60 text-lg mb-6">
            Day 3 has not been released. There is no confirmed release date.
          </p>
        </div>
      </section>

      {/* Subscribe for Day 3 notification */}
      <section className="py-10 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <Day3Subscribe />
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            What We Know
          </h2>

          <div className="bg-surface-container border border-amber-500/30 p-6 mb-8">
            <div className="font-mono text-xs text-amber-400 mb-3">
              ⚠️ DEVELOPER STATEMENT
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              The developer has confirmed that <strong>the script for Day 3 is complete</strong>,
              but <strong>programming/implementation is still in progress</strong>.
              There is no confirmed release date.
            </p>
            <p className="text-on-surface/40 text-xs">
              Source: Official itch.io community replies, developer Tumblr
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-3">
                What the developer has said about Day 3
              </h3>
              <ul className="space-y-3 text-on-surface/60 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Script is complete</strong> — the developer has stated the Day 3 script is done</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Programming in progress</strong> — the developer is currently working on implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">?</span>
                  <span><strong>No release date</strong> — the developer has not announced a specific date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">?</span>
                  <span><strong>Content unknown</strong> — specific scenes, choices, and endings for Day 3 have not been revealed</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-3">
                Planned endings (from itch.io &quot;What is planned?&quot;)
              </h3>
              <p className="text-on-surface/60 text-sm mb-4">
                The developer has listed 4 planned endings on the official itch.io page.
                Whether all of these will be available in Day 3 is unknown:
              </p>
              <ul className="space-y-2 text-on-surface/60 text-sm">
                <li>• Pierrot&apos;s ending</li>
                <li>• Harlequin&apos;s ending</li>
                <li>• Protagonist&apos;s ending</li>
                <li>• &quot;All together&quot; (MC with both Pierrot and Harlequin)</li>
              </ul>
              <p className="text-on-surface/40 text-xs mt-4">
                The developer also states: &quot;the script is still a work in progress, so no endings are fully planned yet.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where to get updates */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Where to Get Updates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-3">
                Official Sources
              </h3>
              <ul className="space-y-2 text-on-surface/60 text-sm">
                <li>
                  <a href="https://garula.itch.io/the-freak-circus" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    itch.io page
                  </a> — Official game page with devlogs
                </li>
                <li>
                  <a href="https://www.tumblr.com/nekoboydreams" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @nekoboydreams
                  </a> — Developer&apos;s Tumblr
                </li>
                <li>
                  <a href="https://www.tumblr.com/freakcircusofhorrors" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @freakcircusofhorrors
                  </a> — Game&apos;s official Tumblr
                </li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-3">
                ⚠️ Caution
              </h3>
              <p className="text-on-surface/60 text-sm">
                Do not trust release dates from TikTok, Instagram, or YouTube.
                The official community manager has specifically warned against
                unconfirmed date claims from social media.
              </p>
              <p className="text-on-surface/40 text-xs mt-3">
                Source: Official itch.io community replies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-6">
            Current Content (Day 1 & Day 2)
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/walkthroughs/day-1" className="text-primary hover:underline text-sm">Day 1 Guide →</Link>
            <Link href="/walkthroughs/day-2" className="text-primary hover:underline text-sm">Day 2 Guide →</Link>
            <Link href="/endings" className="text-primary hover:underline text-sm">Endings →</Link>
            <Link href="/characters" className="text-primary hover:underline text-sm">Characters →</Link>
          </div>
        </div>
      </section>

      <Footer />
      
    </main>
  );
}
