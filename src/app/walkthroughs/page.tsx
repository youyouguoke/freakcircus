import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freak Circus Walkthrough Hub | Day-by-Day Guides, Routes & Endings",
  description:
    "Complete walkthroughs for every day, every route, every choice and every ending in The Freak Circus. Day 1–3 guides, route walkthroughs, hidden events, ending requirements, and missable content.",
  keywords: [
    "Freak Circus walkthrough",
    "Freak Circus day guide",
    "day 1 walkthrough",
    "day 2 walkthrough",
    "day 3 walkthrough",
    "route guide",
    "ending guide",
    "hidden events",
    "missable content",
    "choice guide",
  ],
  openGraph: {
    title: "Freak Circus Walkthrough Hub | Day-by-Day Guides, Routes & Endings",
    description:
      "Complete walkthroughs for every day, every route, every choice and every ending in The Freak Circus.",
    type: "website",
    url: "https://freak-circus.com/walkthroughs",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Walkthrough Hub | Day-by-Day Guides, Routes & Endings",
    description:
      "Complete walkthroughs for every day, every route, every choice and every ending.",
  },
  alternates: {
    canonical: "https://freak-circus.com/walkthroughs",
  },
};

export default function WalkthroughsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 md:px-16 border-b border-outline/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Walkthrough Hub
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
            Freak Circus Walkthrough Hub
          </h1>
          <p className="text-on-surface/60 text-lg max-w-2xl mb-10 leading-relaxed">
            Complete walkthroughs for every day, every route, every choice and
            every ending.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">
                Version
              </span>
              <span className="font-display text-primary">v0.2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">
                Coverage
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                "Day Guides",
                "Route Guides",
                "Hidden Events",
                "Ending Requirements",
              ].map((item) => (
                <span
                  key={item}
                  className="font-mono text-[10px] text-primary uppercase tracking-widest flex items-center gap-1"
                >
                  <span className="text-primary">✓</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Four Big Cards */}
      <section className="py-12 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Day Guides",
              desc: "Step-by-step walkthroughs for Day 1, 2 & 3",
              href: "#day-guides",
              icon: "calendar_today",
            },
            {
              title: "Route Guides",
              desc: "Pierrot, Doctor, Harlequin & Secret routes",
              href: "#route-guides",
              icon: "route",
            },
            {
              title: "Ending Guides",
              desc: "Good, Bad, True & Secret endings",
              href: "#ending-guides",
              icon: "flag",
            },
            {
              title: "Secrets",
              desc: "Hidden dialogue, missable events & achievements",
              href: "#hidden-content",
              icon: "visibility",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="glass-card p-8 hover:border-primary transition-colors group"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </span>
              <h3 className="font-display text-xl text-on-surface mb-2">
                {card.title}
              </h3>
              <p className="text-on-surface/60 text-sm">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Day Guides */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10" id="day-guides">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest">
              Day Guides
            </h2>
            <span className="text-primary">★★★★★</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                day: "DAY 1",
                title: "First Encounter",
                image: "/ticket-taker-cafe.png",
                progress: "25%",
                chars: ["Ticket Taker", "Doctor"],
                events: ["Cafe", "Pink Ticket", "Circus Entrance"],
                href: "/day-1",
                cta: "Begin Guide →",
              },
              {
                day: "DAY 2",
                title: "Hall of Whispers",
                image: "/ticket-taker-mirror-scene.png",
                progress: "55%",
                chars: ["Ticket Taker", "Doctor", "Pierrot"],
                events: ["Mirror Scene", "Secrets", "Evidence"],
                href: "/day-2",
                cta: "Continue →",
              },
              {
                day: "DAY 3",
                title: "Critical Choices",
                image: "/ticket-taker-entrance.png",
                progress: "85%",
                chars: ["Ticket Taker", "Doctor", "Pierrot", "Harlequin"],
                events: ["Relationship Branches", "Hidden Events", "Ending Flags"],
                href: "/day-3",
                cta: "Continue →",
              },
            ].map((d) => (
              <Link
                key={d.day}
                href={d.href}
                className="glass-card overflow-hidden hover:border-primary transition-colors group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.day} — ${d.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 px-3 py-1">
                    <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                      {d.day}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-on-surface mb-2">
                    {d.title}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-on-surface/40 uppercase tracking-widest">
                        Progress
                      </span>
                      <span className="font-mono text-xs text-primary">
                        {d.progress}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-on-surface/40 uppercase tracking-widest">
                        Characters
                      </span>
                      <span className="text-xs text-on-surface/60">
                        {d.chars.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-on-surface/40 uppercase tracking-widest">
                        Key Events
                      </span>
                      <span className="text-xs text-on-surface/60">
                        {d.events.join(", ")}
                      </span>
                    </div>
                  </div>
                  <span className="text-primary font-mono text-xs uppercase hover:underline">
                    {d.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Route Guides */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10" id="route-guides">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest">
              Route Guides
            </h2>
            <span className="text-primary">★★★★</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Pierrot Route",
                desc: "Melancholic clown. Memory loops & silence mechanics.",
                href: "/walkthroughs/pierrot-main-route",
                difficulty: "Hard",
              },
              {
                name: "Doctor Route",
                desc: "Circus physician. Medical files & mirror connections.",
                href: "/walkthroughs/doctor-memory-route",
                difficulty: "Very Hard",
              },
              {
                name: "Harlequin Route",
                desc: "Chaotic performer. Fractured identity & hidden scenes.",
                href: "/walkthroughs/harlequin-true-route",
                difficulty: "Medium",
              },
              {
                name: "Secret Route",
                desc: "Null route. Corrupted files & unused endings.",
                href: "/walkthroughs/null-route",
                difficulty: "Extreme",
              },
            ].map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="glass-card p-6 hover:border-primary transition-colors"
              >
                <h3 className="font-display text-lg text-on-surface mb-2">
                  {route.name}
                </h3>
                <p className="text-on-surface/60 text-sm mb-3">{route.desc}</p>
                <span className="font-mono text-[9px] text-secondary uppercase tracking-widest">
                  Difficulty: {route.difficulty}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ending Guides */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10" id="ending-guides">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest">
              Ending Guides
            </h2>
            <span className="text-primary">★★★★</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Good Ending",
                desc: "Standard completion. Available on first playthrough.",
                href: "/endings/the-grand-finale",
                req: "Any route completion",
              },
              {
                name: "Bad Ending",
                desc: "Fail states & early deaths. Multiple variations.",
                href: "/endings",
                req: "Miss key choices",
              },
              {
                name: "True Ending",
                desc: "Requires all routes & hidden flags.",
                href: "/endings/columbinas-truth",
                req: "100% completion",
              },
              {
                name: "Secret Ending",
                desc: "Datamined content. Unused in current build.",
                href: "/endings/corrupted-data",
                req: "Modified files",
              },
            ].map((ending) => (
              <Link
                key={ending.name}
                href={ending.href}
                className="glass-card p-6 hover:border-primary transition-colors"
              >
                <h3 className="font-display text-lg text-on-surface mb-2">
                  {ending.name}
                </h3>
                <p className="text-on-surface/60 text-sm mb-3">{ending.desc}</p>
                <span className="font-mono text-[9px] text-secondary uppercase tracking-widest">
                  Requires: {ending.req}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Content */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10" id="hidden-content">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest">
              Hidden Content
            </h2>
            <span className="text-primary">★★★</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Hidden Dialogue", desc: "Unused voice lines & cut scenes" },
              { name: "Mirror Breaking", desc: "33-click trigger & reversed audio" },
              { name: "Pink Ticket", desc: "Color changes & sanity mechanics" },
              { name: "Missable Events", desc: "Time-gated & failure-locked scenes" },
              { name: "Achievements", desc: "Secret badges & completion rewards" },
            ].map((item) => (
              <div
                key={item.name}
                className="glass-card p-5 border-l-2 border-l-primary"
              >
                <h3 className="font-display text-sm text-on-surface mb-1">
                  {item.name}
                </h3>
                <p className="text-on-surface/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest">
              Quick Tips
            </h2>
            <span className="text-primary">★★★</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Beginner Tips",
                desc: "Save before every major choice. Talk to everyone twice.",
              },
              {
                title: "Missable Choices",
                desc: "Some options only appear on specific days or routes.",
              },
              {
                title: "Relationship Tips",
                desc: "Character affinity affects ending availability.",
              },
              {
                title: "Best Save Points",
                desc: "Day 1 Cafe, Day 2 Mirror, Day 3 Decision.",
              },
            ].map((tip) => (
              <div key={tip.title} className="glass-card p-6">
                <h3 className="font-display text-lg text-on-surface mb-2">
                  {tip.title}
                </h3>
                <p className="text-on-surface/60 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
            Related Guides
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Ticket Taker", href: "/ticket-taker" },
              { label: "Mirror Scene", href: "/ticket-taker#mirror-scene" },
              { label: "Pink Ticket", href: "/ticket-taker#pink-ticket" },
              { label: "Characters", href: "/characters" },
              { label: "Endings", href: "/endings" },
              { label: "Theories", href: "/theories" },
              { label: "Lore Archive", href: "/lore" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="glass-card px-5 py-3 text-sm text-on-surface hover:text-primary hover:border-primary transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <JsonLd />
    </main>
  );
}
