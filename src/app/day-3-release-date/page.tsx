import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freak Circus Day 3 Release Date (2026) | Latest News, Expected Launch & Developer Updates",
  description:
    "Freak Circus Day 3 release date: everything we know so far. Current development status, expected release window, developer updates, confirmed features, and community expectations for v0.3.",
  keywords: [
    "Freak Circus Day 3 release date",
    "Freak Circus v0.3",
    "Day 3 release",
    "Freak Circus update",
    "Day 3 coming soon",
    "Freak Circus development",
    "Day 3 confirmed",
  ],
  openGraph: {
    title: "Freak Circus Day 3 Release Date (2026) | Latest News, Expected Launch & Developer Updates",
    description:
      "Freak Circus Day 3 release date: current status, expected window, developer updates, and confirmed features for v0.3.",
    type: "article",
    url: "https://freak-circus.com/day-3-release-date",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Day 3 Release Date (2026) | Latest News, Expected Launch & Developer Updates",
    description:
      "Freak Circus Day 3 release date: current status, expected window, and confirmed features.",
  },
  alternates: {
    canonical: "https://freak-circus.com/day-3-release-date",
  },
};

export default function Day3ReleaseDatePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 md:px-16 border-b border-outline/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Day 3 Release Date
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
            Day 3 Release Date
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">
                  Latest Status
                </span>
                <span className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-3 py-1 font-mono text-xs">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  In Development
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">
                  Last Updated
                </span>
                <span className="text-on-surface/80 text-sm">June 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">
                  Expected Version
                </span>
                <span className="text-primary font-display">v0.3</span>
              </div>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-mono text-[10px] text-primary uppercase tracking-widest mb-4">
                Development Progress
              </h3>
              <div className="w-full bg-[#353534] h-3 mb-3">
                <div className="bg-primary h-full w-[60%]" />
              </div>
              <p className="font-mono text-xs text-on-surface/60">60% — Based on public developer updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Current Development Status
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Official Status", value: "In Development", note: "Confirmed by developer" },
              { label: "Latest Build", value: "v0.2", note: "Current public release" },
              { label: "Next Update", value: "Day 3", note: "Expected in v0.3" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 text-center">
                <p className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest mb-2">
                  {item.label}
                </p>
                <p className="font-display text-2xl text-on-surface mb-2">{item.value}</p>
                <p className="text-on-surface/50 text-xs">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is Day 3 Confirmed? */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Is Day 3 Confirmed?
          </h2>
          <div className="glass-card p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
              <div>
                <p className="font-display text-2xl text-on-surface">Yes</p>
                <p className="text-on-surface/60 text-sm">Day 3 is officially confirmed by the developer</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { source: "Developer Posts", status: "Confirmed", detail: "Multiple devlogs mention Day 3 content" },
                { source: "Steam", status: "TBA", detail: "No store page update yet" },
                { source: "Discord", status: "Active", detail: "Developer posts regular progress updates" },
              ].map((item) => (
                <div key={item.source} className="border border-outline/10 p-4">
                  <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">{item.source}</p>
                  <p className="text-on-surface/80 text-sm font-medium">{item.status}</p>
                  <p className="text-on-surface/50 text-xs">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expected Release Window */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Expected Release Window
          </h2>
          <div className="glass-card p-8 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-display text-3xl text-on-surface">Q3 2026</span>
              <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">or</span>
              <span className="font-display text-3xl text-on-surface">Late 2026</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">Confidence</span>
              <span className="text-primary">★★★☆☆</span>
            </div>
            <p className="text-on-surface/60 text-sm leading-relaxed">
              No official release date has been announced. The Q3/Late 2026 window is based on 
              community estimates derived from developer progress updates and historical update cadence. 
              <strong className="text-on-surface"> This is not an official date.</strong>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass-card p-5 border-l-2 border-l-primary">
              <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">Official Information</p>
              <p className="text-on-surface/60 text-sm">Developer has confirmed Day 3 is in development but has not provided a release date.</p>
            </div>
            <div className="glass-card p-5 border-l-2 border-l-secondary">
              <p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-2">Community Estimates</p>
              <p className="text-on-surface/60 text-sm">Based on 60% completion estimate and typical indie visual novel development cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Developer Updates */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Latest Developer Updates
          </h2>
          <div className="relative pl-8 border-l border-outline/20 space-y-8">
            {[
              { date: "2026-06-18", title: "Progress Update", desc: "Developer confirmed Day 3 writing is 80% complete. CG production ongoing." },
              { date: "2026-06-03", title: "New CG Preview", desc: "Two new CG previews shared on Discord — one featuring the Hall of Whispers mirror scene." },
              { date: "2026-05-12", title: "Developer Mentioned Day 3", desc: "First official confirmation that Day 3 will be the next major content update after v0.2." },
            ].map((update, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 bg-primary rounded-full" />
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-1">
                  {update.date}
                </span>
                <h3 className="font-display text-lg text-on-surface mb-1">{update.title}</h3>
                <p className="text-on-surface/60 text-sm">{update.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-on-surface/40 text-xs mt-8 italic">
            Dates and details based on public Discord/Steam announcements. May not reflect all internal development milestones.
          </p>
        </div>
      </section>

      {/* What Will Be Included */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
            What Will Be Included in Day 3?
          </h2>
          <p className="text-on-surface/50 text-xs mb-8 italic">
            Based on official previews and developer statements. Subject to change.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "New Story", status: "Confirmed", desc: "Day 3 critical decision chapter" },
              { name: "New Characters", status: "TBA", desc: "May include expanded Harlequin/Columbina scenes" },
              { name: "New Endings", status: "Confirmed", desc: "True Ending and Secret Ending paths" },
              { name: "New CGs", status: "Confirmed", desc: "Multiple new CGs in production" },
              { name: "New Music", status: "TBA", desc: "No official confirmation yet" },
              { name: "New Choices", status: "Confirmed", desc: "Multi-branch critical decision point" },
            ].map((item) => (
              <div key={item.name} className="glass-card p-5 border-l-2 border-l-primary">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-sm text-on-surface">{item.name}</h3>
                  <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 ${
                    item.status === "Confirmed" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-on-surface/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day 3 Preview */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Day 3 Preview
          </h2>
          <div className="mb-8">
            <h3 className="font-mono text-[10px] text-primary uppercase tracking-widest mb-4">
              Known Characters
            </h3>
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
          <div className="glass-card p-6 border-l-2 border-l-secondary">
            <p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-2">
              Preview Images
            </p>
            <p className="text-on-surface/60 text-sm">
              No official preview images have been released for Day 3 yet. This section will be updated when developer shares screenshots or CG previews.
            </p>
          </div>
        </div>
      </section>

      {/* Community Expectations */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Community Expectations
          </h2>
          <h3 className="font-mono text-[10px] text-primary uppercase tracking-widest mb-4">
            Most Requested Features
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "True Ending", demand: "Very High", desc: "Community has been waiting for the canonical conclusion since v0.1" },
              { name: "Ticket Taker Route", demand: "Very High", desc: "Most requested feature across all community platforms" },
              { name: "Mirror Story Resolution", demand: "High", desc: "Players want answers to the mirror scene mysteries" },
              { name: "New Romance Options", demand: "Medium", desc: "Expanded relationship branches for existing characters" },
            ].map((item) => (
              <div key={item.name} className="glass-card p-5 border-l-2 border-l-primary">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display text-sm text-on-surface">{item.name}</h4>
                  <span className="font-mono text-[9px] text-primary uppercase tracking-widest">{item.demand}</span>
                </div>
                <p className="text-on-surface/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            FAQ
          </h2>
          <div className="space-y-6">
            {[
              { q: "When will Day 3 release?", a: "No official release date has been announced. Based on developer progress updates, community estimates suggest Q3 or Late 2026 — but this is speculation, not confirmation." },
              { q: "Is Day 3 confirmed?", a: "Yes. The developer has officially confirmed Day 3 is in development and will be part of the v0.3 update." },
              { q: "Will Day 3 be free?", a: "No pricing information has been announced. Previous updates (v0.1 → v0.2) were free for existing owners." },
              { q: "Will saves carry over?", a: "The developer has not confirmed save compatibility details. Based on typical visual novel practices, saves likely will carry over." },
              { q: "How long is Day 3?", a: "No official length estimate. Based on Day 1–2 structure, expected to be 20–40 minutes of new content." },
              { q: "Will Ticket Taker appear?", a: "Yes. Ticket Taker is confirmed to appear in Day 3 based on developer dialogue file references." },
              { q: "Will there be new endings?", a: "Yes. The developer has confirmed new endings (including True Ending and Secret Ending paths) will be added in Day 3." },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-display text-lg text-on-surface mb-2">{faq.q}</h3>
                <p className="text-on-surface/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
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
            <Link href="/day-2" className="text-primary hover:underline text-sm">Day 2 Walkthrough →</Link>
            <Link href="/day-3" className="text-primary hover:underline text-sm">Day 3 Walkthrough (Preview) →</Link>
            <Link href="/endings" className="text-primary hover:underline text-sm">Endings →</Link>
            <Link href="/characters" className="text-primary hover:underline text-sm">Characters →</Link>
            <Link href="/ticket-taker" className="text-primary hover:underline text-sm">Ticket Taker →</Link>
          </div>
        </div>
      </section>

      <Footer />
      <JsonLd />
    </main>
  );
}
