import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContinueExploring from "@/components/ContinueExploring";
import Link from "next/link";
import UnverifiedBanner from "@/components/UnverifiedBanner";

export const metadata: Metadata = {
  title: "Freak Circus Save Guide — Community Tips & Save Management",
  description: "Community save tips for The Freak Circus. General advice on save management, when to save, and how to prepare for multiple playthroughs.",
  keywords: [
    "Freak Circus save guide",
    "Freak Circus save tips",
    "Freak Circus save management",
    "Freak Circus multiple playthroughs",
  ],
  openGraph: {
    title: "Freak Circus Save Guide — Community Tips",
    description: "Community save tips for The Freak Circus — when to save and how to manage multiple playthroughs.",
    type: "article",
    url: "https://freak-circus.com/walkthroughs/save-guide",
  },
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs/save-guide",
  },
};

export default function SaveGuidePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      <section className="pt-28 pb-16 px-4 md:px-16 border-b border-outline/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-walkthroughs.webp" alt="" className="w-full h-full object-cover opacity-30" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/40 to-surface" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4 block">
            Save Guide
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
            Save Guide
          </h1>
          <p className="text-on-surface/60 text-lg max-w-2xl mb-6 leading-relaxed">
            Community tips for managing saves in The Freak Circus.
            The game has 4 endings — you&apos;ll want multiple save slots.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-16 pt-4">
        <UnverifiedBanner level="medium" />
      </div>

      <article className="py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* General Tips */}
          <section>
            <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
              General Save Tips
            </h2>
            <div className="glass-card p-6">
              <ul className="space-y-4 text-on-surface/70 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <div>
                    <strong>Save before every major dialogue choice.</strong>
                    <p className="text-on-surface/50 text-xs mt-1">
                      The Freak Circus is a choice-driven visual novel. Some choices may lock you into
                      specific routes or endings. Having a save before each decision lets you explore
                      different paths without replaying from the start.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <div>
                    <strong>Use separate save slots for each route.</strong>
                    <p className="text-on-surface/50 text-xs mt-1">
                      Label your saves by which character&apos;s route you&apos;re pursuing (Pierrot, Harlequin, etc.)
                      so you can easily return to branch points.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <div>
                    <strong>Don&apos;t overwrite your Day 1 completion save.</strong>
                    <p className="text-on-surface/50 text-xs mt-1">
                      Day 1 establishes your initial choices and character introductions.
                      Keeping a clean Day 1 save lets you quickly restart Day 2 with different decisions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <div>
                    <strong>The game has 4 endings — plan for multiple playthroughs.</strong>
                    <p className="text-on-surface/50 text-xs mt-1">
                      1 confirmed bad ending (&quot;Missing&quot;) + 3 unnamed open endings.
                      You&apos;ll need to replay with different choices to see them all.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* When to Save */}
          <section>
            <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
              When to Save
            </h2>
            <div className="glass-card p-6">
              <p className="text-on-surface/60 text-sm mb-4">
                Based on community reports, these are the key moments where saving is recommended:
              </p>
              <div className="space-y-4">
                {[
                  {
                    when: "Start of each Day",
                    why: "Lets you replay the entire day with different choices if needed.",
                    priority: "Essential",
                  },
                  {
                    when: "Before any scene with a named character",
                    why: "Character interactions often contain route-critical choices.",
                    priority: "High",
                  },
                  {
                    when: "Before dialogue options appear",
                    why: "Some choices may have consequences that aren&apos;t immediately obvious.",
                    priority: "High",
                  },
                  {
                    when: "After completing a Day",
                    why: "Clean checkpoint for returning to that point in future playthroughs.",
                    priority: "Recommended",
                  },
                ].map((point) => (
                  <div key={point.when} className="bg-surface/50 p-4 rounded flex items-start justify-between">
                    <div>
                      <div className="font-display text-on-surface text-sm">{point.when}</div>
                      <div className="text-on-surface/50 text-xs mt-1">{point.why}</div>
                    </div>
                    <span className={`font-mono text-[9px] uppercase tracking-widest ${
                      point.priority === 'Essential' ? 'text-red-400' :
                      point.priority === 'High' ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {point.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What We Don't Know */}
          <section>
            <h2 className="font-display text-2xl text-on-surface/60 uppercase tracking-widest mb-4">
              What We Don&apos;t Know
            </h2>
            <div className="glass-card p-6">
              <ul className="space-y-3 text-on-surface/50 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-on-surface/30 mt-1">?</span>
                  <span>Whether there are hidden save-related mechanics (e.g., counters, flags)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-on-surface/30 mt-1">?</span>
                  <span>The exact choice combinations that lead to each of the 3 open endings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-on-surface/30 mt-1">?</span>
                  <span>Whether Day 3 (when released) will require specific save states from Day 1-2</span>
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
              <p>• Community playthrough reports and YouTube guides</p>
              <p>• General visual novel save best practices</p>
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
