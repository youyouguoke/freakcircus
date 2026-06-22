"use client";

import Link from "next/link";

const discoveries = [
  {
    date: "June 2026",
    tag: "NEW",
    title: "Build 1.04 Unused Ending Investigation",
    desc: "Data miners discovered references to a 13th ending in the latest build. Corrupted hex patterns suggest a route that was cut before release but remains partially accessible through file manipulation.",
    href: "/endings",
  },
  {
    date: "June 2026",
    tag: "UPDATE",
    title: "Doctor Route Hidden Dialogue Analysis",
    desc: "New community testing confirmed Scene 7 precognitive dialogue triggers across all save slots, not just slot 1. The White Room reference appears even on first playthrough under specific conditions.",
    href: "/characters/doctor",
  },
  {
    date: "June 2026",
    tag: "THEORY",
    title: "New Columbina Loop Theory",
    desc: "u/loop_architect proposes that Columbina's three-loop structure mirrors the game's overall narrative architecture — suggesting the entire circus is a single loop containing smaller loops within each character route.",
    href: "/theories",
  },
  {
    date: "May 2026",
    tag: "DISCOVERY",
    title: "Hidden Counter at Save Offset 0x4A20 Confirmed",
    desc: "Cross-platform testing by 12 community members confirmed the hidden counter affects dialogue options across all builds. Counter value 4 triggers Pierrot's replay-aware dialogue regardless of current route choices.",
    href: "/theories/pierrot-remembers-routes",
  },
];

export default function LatestDiscoveries() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary">
            Latest Discoveries
          </h2>
          <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant border border-outline/30 px-3 py-1">
            LIVE FEED
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {discoveries.map((d, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">
                  {d.tag}
                </span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                  {d.date}
                </span>
              </div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {d.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                {d.desc}
              </p>
              <Link
                href={d.href}
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
