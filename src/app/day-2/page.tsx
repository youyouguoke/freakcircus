import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Day 2 Walkthrough | Freak Circus — Hall of Whispers, Mirror Scene & Secrets",
  description:
    "Complete Day 2 walkthrough for The Freak Circus. Step-by-step guide for the Hall of Whispers, Mirror Scene, Doctor encounter, and hidden events. All choices and evidence explained.",
  keywords: [
    "Freak Circus day 2",
    "day 2 walkthrough",
    "hall of whispers",
    "mirror scene",
    "doctor encounter",
    "hidden events",
    "mirror breaking",
  ],
  openGraph: {
    title: "Day 2 Walkthrough | Freak Circus — Hall of Whispers, Mirror Scene & Secrets",
    description:
      "Complete Day 2 walkthrough. Hall of Whispers, Mirror Scene, Doctor, and hidden events.",
    type: "article",
    url: "https://freak-circus.com/day-2",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Day 2 Walkthrough | Freak Circus — Hall of Whispers, Mirror Scene & Secrets",
    description:
      "Complete Day 2 walkthrough. Hall of Whispers, Mirror Scene, and hidden events.",
  },
  alternates: {
    canonical: "https://freak-circus.com/day-2",
  },
};

export default function Day2Page() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 md:px-16 border-b border-outline/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Day 2 Walkthrough
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
            Day 2
          </h1>
          <p className="text-on-surface/60 text-lg mb-4">
            Hall of Whispers · Mirror Scene · Mystery Investigation
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Timeline
          </h2>
          <div className="relative pl-8 border-l border-outline/20 space-y-8">
            {[
              { time: "Morning", desc: "Return to the circus" },
              { time: "↓", desc: "Hall of Whispers" },
              { time: "↓", desc: "Mirror Scene" },
              { time: "↓", desc: "Evidence collection" },
              { time: "↓", desc: "Choices" },
              { time: "↓", desc: "Hidden Event" },
              { time: "↓", desc: "Mirror Breaking (33 clicks)" },
              { time: "↓", desc: "Ending Flags set" },
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

      {/* Evidence Cards */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Evidence Cards
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                id: "EV-01",
                title: "Shattered Glass",
                desc: "The mirror cracks from the outside. Someone broke in — or out.",
              },
              {
                id: "EV-02",
                title: "Shared Consciousness",
                desc: "Ticket Taker speaks for the first time, using the player's exact word choice from Day 1.",
              },
              {
                id: "EV-03",
                title: "Animated Mask",
                desc: "The reflection blinks when the player does not. The mask is already animated.",
              },
              {
                id: "EV-04",
                title: "Post-Credits Mirror",
                desc: "After credits, the mirror shows Ticket Taker alone. The player is gone.",
              },
            ].map((ev) => (
              <div key={ev.id} className="glass-card p-6 border-l-2 border-l-secondary">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[9px] text-secondary uppercase tracking-widest">
                    {ev.id}
                  </span>
                </div>
                <h3 className="font-display text-lg text-on-surface mb-2">{ev.title}</h3>
                <p className="text-on-surface/60 text-sm">{ev.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walkthrough */}
      <section className="py-12 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-10">
            Walkthrough
          </h2>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest bg-primary/10 px-3 py-1">
                Step 1
              </span>
              <h3 className="font-display text-xl text-on-surface">Hall of Whispers</h3>
            </div>
            <p className="text-on-surface/70 text-sm mb-6">
              Enter the Hall of Whispers through the east wing. The Ticket Taker stands motionless before the main mirror. Approach to trigger the scene.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] text-primary uppercase tracking-widest bg-primary/10 px-3 py-1">
                Step 2
              </span>
              <h3 className="font-display text-xl text-on-surface">Mirror Scene</h3>
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
                      <td className="py-3 text-on-surface/80">Look at mirror</td>
                      <td className="py-3 text-on-surface/60">Triggers reflection scene; sets Day 3 flag</td>
                    </tr>
                    <tr className="border-b border-outline/10">
                      <td className="py-3 text-on-surface/80">Click mirror 33×</td>
                      <td className="py-3 text-on-surface/60">Hidden laugh (player's voice reversed); secret achievement</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-on-surface/80">Turn away</td>
                      <td className="py-3 text-on-surface/60">Miss mirror scene; limited Day 3 options</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
            <Link href="/ticket-taker#mirror-scene" className="text-primary hover:underline text-sm">Mirror Scene →</Link>
            <Link href="/ticket-taker" className="text-primary hover:underline text-sm">Ticket Taker →</Link>
            <Link href="/day-3" className="text-primary hover:underline text-sm">Day 3 →</Link>
            <Link href="/day-1" className="text-primary hover:underline text-sm">Day 1 →</Link>
          </div>
        </div>
      </section>

      <Footer />
      <JsonLd />
    </main>
  );
}
