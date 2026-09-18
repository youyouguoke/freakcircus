import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import Link from "next/link";
import UnverifiedBanner from "@/components/UnverifiedBanner";
import { ENDINGS_CONFIRMED, ENDINGS_BAD, ENDINGS_PLANNED, ENDINGS_TOTAL } from "@/lib/site-facts";

export const metadata: Metadata = {
  title: "All Endings Guide — Freak Circus Ending Information (2026)",
  description: `What we know about endings in The Freak Circus. ${ENDINGS_TOTAL} endings reported: ${ENDINGS_BAD} confirmed bad ending ("Missing") and ${ENDINGS_PLANNED} planned endings. Only "Missing" has been verified by name.`,
  keywords: [
    "Freak Circus all endings",
    "Freak Circus endings guide",
    "Freak Circus Missing ending",
    "Freak Circus ending walkthrough",
  ],
  openGraph: {
    title: "All Endings Guide — Freak Circus Ending Information",
    description: "What we know about endings in The Freak Circus. Only 'Missing' confirmed by name.",
    type: "article",
    url: "https://freak-circus.com/walkthroughs/all-endings-guide",
  },
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/all-endings-guide",
  },
};

export default function AllEndingsGuidePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 md:px-16 border-b border-outline/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-endings.webp" alt="" className="w-full h-full object-cover opacity-30" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/40 to-surface" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4 block">
            Endings Guide
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
            All Endings Guide
          </h1>
          <p className="text-on-surface/60 text-lg max-w-2xl mb-6 leading-relaxed">
            What we know about every ending in The Freak Circus.
            Only one ending has been confirmed by name — the rest are unnamed open endings.
          </p>
        </div>
      </section>

      {/* Unverified Banner */}
      <div className="max-w-4xl mx-auto px-4 md:px-16 pt-4">
        <UnverifiedBanner level="high" />
      </div>

      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Summary */}
          <section>
            <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
              Ending Summary
            </h2>
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="font-display text-3xl text-primary">{ENDINGS_TOTAL}</div>
                  <div className="font-mono text-[10px] text-on-surface/40 uppercase">Confirmed Endings</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl text-green-500">{ENDINGS_BAD}</div>
                  <div className="font-mono text-[10px] text-on-surface/40 uppercase">Bad Ending (Named)</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl text-yellow-500">{ENDINGS_PLANNED}</div>
                  <div className="font-mono text-[10px] text-on-surface/40 uppercase">Open Endings (Unnamed)</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl text-on-surface/30">—</div>
                  <div className="font-mono text-[10px] text-on-surface/40 uppercase">True/Secret Ending</div>
                </div>
              </div>
              <p className="text-on-surface/50 text-xs mt-4 text-center">
                Source: Official developer statements — "1 bad ending" (current) and 4 planned endings
              </p>
            </div>
          </section>

          {/* Confirmed Ending */}
          <section>
            <h2 className="font-display text-2xl text-green-500 uppercase tracking-widest mb-4">
              ✓ Confirmed Ending
            </h2>
            <div className="glass-card p-6 border-l-4 border-l-green-500">
              <h3 className="font-display text-xl text-on-surface mb-2">"Missing" — Bad Ending</h3>
              <div className="space-y-3 text-on-surface/70 text-sm">
                <p>

                  YouTube has multiple "Bad End" scene videos.
                </p>
                <p>
                  <strong>Associated Route:</strong> Harlequin route — this is the ending most players encounter
                  on their first playthrough.
                </p>
                <p>
                  <strong>What Happens:</strong> The details of this ending's narrative content have not been
                  independently verified by our team. Community reports describe it as a dark conclusion
                  to the Harlequin storyline.
                </p>
              </div>
              <div className="mt-4 flex gap-3">
                <Link href="/endings" className="font-mono text-xs text-primary uppercase hover:underline">
                  View Ending Page →
                </Link>
              </div>
            </div>
          </section>

          {/* Planned Endings */}
          <section>
            <h2 className="font-display text-2xl text-yellow-500 uppercase tracking-widest mb-4">
              Planned Endings (Not Yet Implemented)
            </h2>
            <div className="glass-card p-6 border-l-4 border-l-yellow-500">
              <p className="text-on-surface/70 text-sm mb-4">
                The developer has listed <strong>4 planned endings</strong> on itch.io (Pierrot&apos;s, Harlequin&apos;s, Protagonist&apos;s,
                and &quot;All together&quot;), but <strong>none are implemented in the current build</strong>. The developer states:
                &quot;the script is still a work in progress, so no endings are fully planned yet.&quot;
                Any specific ending names you see elsewhere are unverified and may be community speculation or fabrications.
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Pierrot's ending",
                    status: "Planned (not in game)",
                    note: "Listed under 'What is planned?' on itch.io.",
                  },
                  {
                    label: "Harlequin's ending",
                    status: "Planned (not in game)",
                    note: "Listed under 'What is planned?' on itch.io.",
                  },
                  {
                    label: "Protagonist's ending",
                    status: "Planned (not in game)",
                    note: "Listed under 'What is planned?' on itch.io.",
                  },
                  {
                    label: "All together",
                    status: "Planned (not in game)",
                    note: "MC with both Pierrot and Harlequin. Listed on itch.io.",
                  },
                ].map((ending) => (
                  <div key={ending.label} className="bg-surface/50 p-4 rounded">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-on-surface">{ending.label}</span>
                      <span className="font-mono text-[9px] text-yellow-500 uppercase">{ending.status}</span>
                    </div>
                    <p className="text-on-surface/50 text-xs">{ending.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What We Don't Know */}
          <section>
            <h2 className="font-display text-2xl text-on-surface/60 uppercase tracking-widest mb-4">
              What We Don't Know Yet
            </h2>
            <div className="glass-card p-6">
              <ul className="space-y-3 text-on-surface/60 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-on-surface/30 mt-1">?</span>
                  <span>The specific details of the 4 planned endings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-on-surface/30 mt-1">?</span>
                  <span>The exact choice combinations required for each open ending</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-on-surface/30 mt-1">?</span>
                  <span>Whether there is a "true" ending that requires 100% completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-on-surface/30 mt-1">?</span>
                  <span>How many endings will be added in Day 3 when it releases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-on-surface/30 mt-1">?</span>
                  <span>Whether datamined content in game files is actually accessible in normal gameplay</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Sources */}
          <section>
            <h2 className="font-display text-xl text-on-surface/40 uppercase tracking-widest mb-4">
              Sources
            </h2>
            <div className="text-on-surface/40 text-xs space-y-1">
              <p>• itch.io (garula) — Official download and game info</p>
              <p>• YouTube — Community playthroughs and ending verification</p>
              <p>• YouTube — Multiple "Bad End" and "Good End" scene videos confirm endings exist</p>
              <p>• Last verified: August 2026</p>
            </div>
          </section>
        </div>
      </article>

      <ContinueExploring />
      <Footer />
    </main>
  );
}
