import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ContinueExploring from "@/components/ContinueExploring";
import Link from "next/link";
import UnverifiedBanner from "@/components/UnverifiedBanner";
import { ENDINGS_SUMMARY } from "@/lib/site-facts";

export const metadata: Metadata = {
  title: "Freak Circus Walkthrough Hub | Day-by-Day Guides, Routes & Endings",
  description:
    "Walkthrough guides for The Freak Circus by Neko Bueno — Day 1 & Day 2 (released Dec 2025) guides, character route info, confirmed ending details, and community tips.",
  keywords: [
    "Freak Circus walkthrough",
    "Freak Circus day guide",
    "day 1 walkthrough",
    "day 2 walkthrough",
    "route guide",
    "ending guide",
  ],
  openGraph: {
    title: "Freak Circus Walkthrough Hub | Day-by-Day Guides, Routes & Endings",
    description:
      "Walkthrough guides for The Freak Circus — Day 1 & Day 2 guides, character route info, and confirmed ending details.",
    type: "website",
    url: "https://freak-circus.com/walkthroughs",
    siteName: "Freak Circus Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freak Circus Walkthrough Hub | Day-by-Day Guides, Routes & Endings",
    description:
      "Walkthrough guides for The Freak Circus — Day 1 & Day 2 guides, character route info, and confirmed ending details.",
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
      <section className="pt-28 pb-16 px-4 md:px-16 border-b border-outline/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-walkthroughs.webp" alt="" className="w-full h-full object-cover opacity-40" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/30 to-surface" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-6">
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Walkthrough Hub
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-on-surface mb-6 uppercase tracking-tight">
            Freak Circus Walkthrough Hub
          </h1>
          <p className="text-on-surface/60 text-lg max-w-2xl mb-10 leading-relaxed">
            Community guides for The Freak Circus — an 18+ psychological horror visual novel by Neko Bueno.
            Day 1 & Day 2 (released December 3, 2025) are playable. Day 3 is planned.
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
                Released Days
              </span>
              <span className="font-display text-primary">Day 1 & 2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-on-surface/40 uppercase tracking-widest">
                Est. Playtime
              </span>
              <span className="font-display text-primary">"~1h17m (Day 1+2)"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Unverified Content Banner */}
      <div className="max-w-6xl mx-auto px-4 md:px-16 pt-4">
        <UnverifiedBanner level="medium" />
      </div>

      {/* Quick Navigation */}
      <section className="py-12 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Day Guides",
              desc: "Community guides for Day 1 & Day 2 (released)",
              href: "#day-guides",
              icon: "calendar_today",
            },
            {
              title: "Route Guides",
              desc: "Pierrot & Harlequin routes — Doctor route in development",
              href: "#route-guides",
              icon: "route",
            },
            {
              title: "Ending Info",
              desc: "Confirmed ending 'Missing' plus what we know about open endings",
              href: "#ending-guides",
              icon: "flag",
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

      {/* Day Guides — Only Day 1 & 2 */}
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
                title: "Street & First Encounter",
                image: "/ticket-taker-cafe.png",
                chars: ["Ticket Taker", "Doctor", "Pierrot"],
                events: ["Café scene", "Pink Ticket", "First Pierrot & Harlequin encounter", "Ticket Taker introduction"],
                href: "/day-1",
                cta: "Begin Guide →",
                verified: true,
              },
              {
                day: "DAY 2",
                title: "Tents & Routes",
                image: "/ticket-taker-mirror-scene.png",
                chars: ["Pierrot", "Harlequin", "Jester", "Doctor", "Ticket Taker"],
                events: ["Tent routes", "Columbina legend", "Mirror scene", "Jester/Doctor/Ticket Taker stories"],
                href: "/day-2",
                cta: "Continue →",
                verified: true,
              },
              {
                day: "DAY 3",
                title: "Planned — Not Yet Released",
                image: "/ticket-taker-entrance.png",
                chars: ["TBD"],
                events: ["Higher stakes", "Route locks", "Ending payoffs"],
                href: "#",
                cta: "Coming After Release",
                verified: false,
              },
            ].map((d) => (
              <Link
                key={d.day}
                href={d.href}
                className={`glass-card overflow-hidden hover:border-primary transition-colors group ${!d.verified ? 'opacity-60' : ''}`}
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
                  {!d.verified && (
                    <div className="absolute top-3 right-3 bg-red-900/80 px-2 py-1">
                      <span className="font-mono text-[9px] text-red-300 uppercase">
                        Unreleased
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-on-surface mb-2">
                    {d.title}
                  </h3>
                  <div className="space-y-3 mb-4">
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

      {/* Route Guides — Only confirmed routes */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10" id="route-guides">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest">
              Route Guides
            </h2>
            <span className="text-primary">★★★</span>
          </div>
          <p className="text-on-surface/50 text-sm mb-8 max-w-2xl">
            The Freak Circus has character-based routes that branch based on your choices.
            Pierrot and Harlequin are the two main routes. Doctor and Jester appear in Day 2 content.
            Specific route mechanics below are community-reported and may not be fully accurate.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Pierrot Route",
                desc: "The melancholic clown. Day 1 introduces his vulnerability; Day 2 deepens the relationship. Community reports suggest multiple ending paths.",
                href: "/walkthroughs/pierrot-main-route",
                verified: true,
              },
              {
                name: "Harlequin Route",
                desc: "The seductive rival. Features aggressive and comedic dialogue branches. The 'Missing' bad ending is associated with this route.",
                href: "/walkthroughs/harlequin-true-route",
                verified: true,
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
                  Community Guide Available
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ending Info */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10" id="ending-guides">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-widest">
              Ending Info
            </h2>
            <span className="text-primary">★★★</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/endings"
              className="glass-card p-6 hover:border-primary transition-colors"
            >
              <h3 className="font-display text-lg text-on-surface mb-2">
                "Missing" — Confirmed Bad Ending
              </h3>
              <p className="text-on-surface/60 text-sm mb-3">
                The only ending confirmed by name. Associated with the Harlequin route.
                This is the ending most players encounter first.
              </p>
              <span className="font-mono text-[9px] text-green-500 uppercase tracking-widest">
                ✓ Verified
              </span>
            </Link>
            <Link
              href="/walkthroughs/all-endings-guide"
              className="glass-card p-6 hover:border-primary transition-colors"
            >
              <h3 className="font-display text-lg text-on-surface mb-2">
                All Endings Guide
              </h3>
              <p className="text-on-surface/60 text-sm mb-3">
                {ENDINGS_SUMMARY} — What we know about each ending and how to find them.
              </p>
              <span className="font-mono text-[9px] text-secondary uppercase tracking-widest">
                View Guide
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Tips — Only verified tips */}
      <section className="py-16 px-4 md:px-16 border-t border-outline/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-on-surface uppercase tracking-widest">
              Community Tips
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Save Often",
                desc: "Save before major dialogue choices. Some branches lock you out of other paths.",
              },
              {
                title: "Talk to Everyone",
                desc: "Day 2 introduces Jester, Doctor, and Ticket Taker — talk to all of them to see their content.",
              },
              {
                title: "Multiple Playthroughs",
                desc: "The game has 4 endings total (1 bad + 3 open). You'll need multiple runs to see them all.",
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

      <ContinueExploring />
      <Footer />
      <JsonLd />
    </main>
  );
}
