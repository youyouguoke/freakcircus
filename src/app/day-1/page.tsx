import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Day 1 Walkthrough | Freak Circus — First Encounter, Cafe & Pink Ticket",
  description:
    "Complete Day 1 walkthrough for The Freak Circus. Step-by-step guide for the Cafe, Ticket Taker first encounter, Pink Ticket acquisition, and Circus Entrance. All choices and outcomes explained.",
  keywords: [
    "Freak Circus day 1",
    "day 1 walkthrough",
    "ticket taker first encounter",
    "pink ticket",
    "cafe scene",
    "circus entrance",
    "first day guide",
  ],
  openGraph: {
    title: "Day 1 Walkthrough | Freak Circus — First Encounter, Cafe & Pink Ticket",
    description:
      "Complete Day 1 walkthrough for The Freak Circus. Cafe, Ticket Taker, Pink Ticket, and Circus Entrance.",
    type: "article",
    url: "https://freak-circus.com/day-1",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Day 1 Walkthrough | Freak Circus — First Encounter, Cafe & Pink Ticket",
    description:
      "Complete Day 1 walkthrough. Cafe, Ticket Taker, Pink Ticket, and Circus Entrance.",
  },
  alternates: {
    canonical: "https://freak-circus.com/day-1",
  },
};

export default function Day1Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 md:px-16 border-b border-outline/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Day 1 Walkthrough
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
            Day 1 Walkthrough
          </h1>
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">
                Estimated Time
              </span>
              <span className="font-display text-primary">20–30 min</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">
                Important Characters
              </span>
              <span className="text-sm text-on-surface/60">Ticket Taker, Doctor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Objectives", desc: "Meet Ticket Taker, obtain Pink Ticket, reach Circus Entrance" },
              { label: "Important Choices", desc: "Cafe dialogue options affect Day 2 availability" },
              { label: "Missable Content", desc: "Hidden dialogue if you stay silent" },
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

      {/* Timeline */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Timeline
          </h2>
          <div className="relative pl-8 border-l border-outline/20 space-y-8">
            {[
              { time: "Morning", desc: "Player arrives at the circus outskirts" },
              { time: "↓", desc: "Cafe" },
              { time: "↓", desc: "Meet Ticket Taker" },
              { time: "↓", desc: "Receive Pink Ticket" },
              { time: "↓", desc: "Circus Entrance" },
              { time: "Night", desc: "Day 1 ends" },
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

      {/* Walkthrough Steps */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-10">
            Walkthrough
          </h2>

          {/* Step 1 */}
          <div className="mb-12" id="step-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest bg-primary/10 px-3 py-1">
                Step 1
              </span>
              <h3 className="font-display text-xl text-on-surface">Cafe</h3>
            </div>
            <div className="glass-card p-6 mb-6">
              <h4 className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-3">
                Objectives
              </h4>
              <ul className="text-on-surface/70 text-sm space-y-1">
                <li>• Talk to Ticket Taker</li>
                <li>• Learn about the Pink Ticket</li>
              </ul>
            </div>
            <div className="glass-card p-6 mb-6">
              <h4 className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-3">
                Choices
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-outline/20">
                      <th className="text-left py-2 font-mono text-[10px] text-primary uppercase tracking-widest">Choice</th>
                      <th className="text-left py-2 font-mono text-[10px] text-primary uppercase tracking-widest">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-outline/10">
                      <td className="py-3 text-on-surface/80">Ask</td>
                      <td className="py-3 text-on-surface/60">Dialogue continues; unlocks Day 2 mirror scene</td>
                    </tr>
                    <tr className="border-b border-outline/10">
                      <td className="py-3 text-on-surface/80">Ignore</td>
                      <td className="py-3 text-on-surface/60">Miss clue; limited dialogue on Day 2</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-on-surface/80">Stay Silent</td>
                      <td className="py-3 text-on-surface/60">Hidden flag; unlocks secret dialogue later</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Characters Appearing */}
          <div className="mb-12">
            <h3 className="font-display text-lg text-on-surface mb-4">Characters Appearing</h3>
            <div className="flex flex-wrap gap-3">
              {["Ticket Taker", "Doctor", "Pierrot"].map((char) => (
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

          {/* Collectibles */}
          <div className="mb-12">
            <h3 className="font-display text-lg text-on-surface mb-4">Collectibles</h3>
            <div className="flex flex-wrap gap-3">
              {["Pink Ticket", "Dialogue", "Achievements"].map((item) => (
                <span key={item} className="glass-card px-4 py-2 text-sm text-on-surface/60">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-6">
            Related
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/ticket-taker" className="text-primary hover:underline text-sm">Ticket Taker →</Link>
            <Link href="/ticket-taker#pink-ticket" className="text-primary hover:underline text-sm">Pink Ticket →</Link>
            <Link href="/day-2" className="text-primary hover:underline text-sm">Day 2 →</Link>
          </div>
        </div>
      </section>

      <Footer />
      <JsonLd />
    </main>
  );
}
