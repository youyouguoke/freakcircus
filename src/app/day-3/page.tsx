import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Day 3 Walkthrough | Freak Circus — Coming in v0.3",
  description:
    "Day 3 walkthrough for The Freak Circus is coming in v0.3. Preview what we know so far: critical choices, relationship branches, ending flags, and community datamined findings.",
  keywords: [
    "Freak Circus day 3",
    "day 3 release date",
    "Freak Circus v0.3",
    "day 3 walkthrough",
    "coming soon",
  ],
  openGraph: {
    title: "Day 3 Walkthrough | Freak Circus — Coming in v0.3",
    description:
      "Day 3 walkthrough coming in v0.3. Preview critical choices, ending flags, and community findings.",
    type: "article",
    url: "https://freak-circus.com/day-3",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Day 3 Walkthrough | Freak Circus — Coming in v0.3",
    description:
      "Day 3 walkthrough coming in v0.3. Preview what we know so far.",
  },
  alternates: {
    canonical: "https://freak-circus.com/day-3",
  },
};

export default function Day3Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 md:px-16 border-b border-outline/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Day 3 Walkthrough
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
            Day 3 Walkthrough
          </h1>
          <p className="text-on-surface/60 text-lg mb-6">
            Critical Decision Day
          </p>
          <Link href="/day-3-release-date" className="glass-card p-6 border-l-2 border-l-secondary bg-surface-container-low inline-block hover:border-primary transition-colors group">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-xl group-hover:text-primary transition-colors">schedule</span>
              <div>
                <p className="font-mono text-[10px] text-secondary uppercase tracking-widest">
                  Release Status
                </p>
                <p className="text-on-surface/80 text-sm">
                  Coming in <strong className="text-secondary">v0.3</strong> — no confirmed release date
                </p>
              </div>
              <span className="text-primary text-xs group-hover:translate-x-1 transition-transform ml-2">→</span>
            </div>
          </Link>

          <div className="mt-6">
            <Link href="/day-3-release-date" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-5 py-3 text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/20 hover:border-primary transition-colors group">
              <span className="material-symbols-outlined text-sm">event</span>
              Day 3 Release Date — Latest News & Expected Launch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Know */}
      <section className="py-12 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            What We Know So Far
          </h2>
          <p className="text-on-surface/70 text-sm mb-8 leading-relaxed">
            Day 3 has not been officially released in the current build (v0.2). The following information is compiled from 
            <strong> developer previews, datamined files, and community speculation</strong>. 
            All details are subject to change when v0.3 launches.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Confirmed", desc: "Day 3 exists in build files. Empty trigger zones and placeholder dialogue found." },
              { label: "Speculated", desc: "Critical decision point. Multiple ending flags converge here." },
              { label: "Unknown", desc: "Exact choice tree, character availability, and scene order TBD." },
            ].map((item) => (
              <div key={item.label} className="glass-card p-5 border-l-2 border-l-primary">
                <h3 className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
                  {item.label}
                </h3>
                <p className="text-on-surface/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Progress */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Expected Story Progress
          </h2>
          <p className="text-on-surface/50 text-xs mb-6 italic">
            Based on datamined file structure and developer interviews. Subject to change.
          </p>
          <div className="relative pl-8 border-l border-outline/20 space-y-8">
            {[
              { time: "Morning", desc: "Final preparations — relationship status check" },
              { time: "↓", desc: "Relationship Event — affinity-dependent scene" },
              { time: "↓", desc: "Circus — final confrontation location" },
              { time: "↓", desc: "Critical Decision — multi-branch choice point" },
              { time: "↓", desc: "Ending Flag — route locked" },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 bg-primary rounded-full" />
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-1">
                  {step.time}
                </span>
                <p className="text-on-surface/70 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Choices Preview */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
            Important Choices (Preview)
          </h2>
          <p className="text-on-surface/50 text-xs mb-8 italic">
            Based on datamined choice flags. Exact wording and consequences TBD.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-outline/20">
                  <th className="text-left py-3 font-mono text-[10px] text-primary uppercase tracking-widest">Choice</th>
                  <th className="text-left py-3 font-mono text-[10px] text-primary uppercase tracking-widest">Expected Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-outline/10">
                  <td className="py-4 text-on-surface/80 font-medium">A — Trust the Doctor</td>
                  <td className="py-4 text-on-surface/60">Doctor route affinity +; likely unlocks True Ending path</td>
                </tr>
                <tr className="border-b border-outline/10">
                  <td className="py-4 text-on-surface/80 font-medium">B — Follow Pierrot</td>
                  <td className="py-4 text-on-surface/60">Pierrot route affinity +; likely unlocks Eternal Silence ending</td>
                </tr>
                <tr className="border-b border-outline/10">
                  <td className="py-4 text-on-surface/80 font-medium">C — Investigate alone</td>
                  <td className="py-4 text-on-surface/60">Sets ending flag; may unlock Secret Route trigger</td>
                </tr>
                <tr>
                  <td className="py-4 text-on-surface/80 font-medium">D — Accept the Ticket</td>
                  <td className="py-4 text-on-surface/60">Likely triggers Bad Ending A; immediate Game Over</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ending Requirements Preview */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
            Ending Requirements (Preview)
          </h2>
          <p className="text-on-surface/50 text-xs mb-8 italic">
            Compiled from community theory posts and datamined file references. Unconfirmed until v0.3 release.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "True Ending",
                reqs: ["Mirror Scene completed (Day 2)", "Pink Ticket obtained (Day 1)", "Doctor Route affinity high", "Choice A on Day 3 (expected)"],
              },
              {
                name: "Bad Ending A",
                reqs: ["Fail to provide Pink Ticket", "Or choose D on Day 3 (expected)", "Immediate Game Over"],
              },
              {
                name: "Secret Ending",
                reqs: ["Mirror clicked 33× (Day 2)", "Stay silent on Day 1", "Choice C on Day 3 (expected)", "Modified files (speculated)"],
              },
              {
                name: "Eternal Silence",
                reqs: ["Pierrot Route affinity high", "Choice B on Day 3 (expected)", "Refuse all dialogue 3× (speculated)"],
              },
            ].map((ending) => (
              <div key={ending.name} className="glass-card p-6 border-l-2 border-l-primary">
                <h3 className="font-display text-lg text-on-surface mb-4">{ending.name}</h3>
                <ul className="text-on-surface/60 text-sm space-y-2">
                  {ending.reqs.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missable Events Preview */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
            Missable Events (Preview)
          </h2>
          <p className="text-on-surface/50 text-xs mb-8 italic">
            Based on unused voice lines and cut content found in build files. May not appear in final v0.3.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Secret Dialogue", desc: "Unused voice line: Ticket Taker whispers the player's name. Trigger condition unknown." },
              { name: "Mirror Animation", desc: "Datamined animation file: mask cracks under rapid clicking. May be cut content." },
              { name: "Pink Ticket Glow", desc: "Placeholder sprite: ticket glows red at low sanity. Not yet implemented." },
              { name: "Hidden CG", desc: "Gallery slot #5 exists in files but has no image. Likely reserved for v0.3." },
            ].map((event) => (
              <div key={event.name} className="glass-card p-6 border-l-2 border-l-secondary">
                <h3 className="font-display text-lg text-on-surface mb-2">{event.name}</h3>
                <p className="text-on-surface/60 text-sm">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Expected */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-6">
            Characters Expected
          </h2>
          <p className="text-on-surface/50 text-xs mb-6 italic">
            Based on dialogue file references. All appearances subject to change.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Ticket Taker", "Doctor", "Pierrot", "Harlequin"].map((char) => (
              <Link
                key={char}
                href={char === "Ticket Taker" ? "/ticket-taker" : `/characters/${char.toLowerCase()}`}
                className="glass-card px-4 py-2 text-sm text-on-surface hover:text-primary hover:border-primary transition-colors"
              >
                {char}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-6">
            Related Guides
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/ticket-taker#mirror-scene" className="text-primary hover:underline text-sm">Mirror Scene →</Link>
            <Link href="/ticket-taker" className="text-primary hover:underline text-sm">Ticket Taker →</Link>
            <Link href="/endings" className="text-primary hover:underline text-sm">Endings →</Link>
            <Link href="/characters" className="text-primary hover:underline text-sm">Characters →</Link>
            <Link href="/day-2" className="text-primary hover:underline text-sm">Day 2 →</Link>
            <Link href="/day-1" className="text-primary hover:underline text-sm">Day 1 →</Link>
          </div>
        </div>
      </section>

      <Footer />
      <JsonLd />
    </main>
  );
}
