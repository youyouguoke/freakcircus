"use client";

import Link from "next/link";

const popularPages = [
  {
    num: "01",
    title: "Pierrot Character Guide",
    desc: "Complete analysis of Pierrot — the melancholic clown and one of the two main character routes.",
    href: "/characters/pierrot",
    tag: "CHARACTER",
  },
  {
    num: "02",
    title: "Harlequin Character Guide",
    desc: "Pierrot's seductive rival. Home of the confirmed 'Missing' bad ending.",
    href: "/characters/harlequin",
    tag: "CHARACTER",
  },
  {
    num: "03",
    title: "Missing Ending Guide",
    desc: "The only confirmed ending in the current build. Trigger conditions and story details.",
    href: "/endings",
    tag: "ENDING",
  },
  {
    num: "04",
    title: "Day 1 Walkthrough",
    desc: "Community guide for Day 1 — character introductions, the café scene, and first encounters.",
    href: "/walkthroughs/day-1",
    tag: "WALKTHROUGH",
  },
  {
    num: "05",
    title: "Columbina — Deceased Lore Character",
    desc: "Not playable. Killed by Harlequin. Her story is told through the Columbina legend in Day 2.",
    href: "/characters/columbina",
    tag: "LORE",
  },
  {
    num: "06",
    title: "Community Theories",
    desc: "Fan analysis of replay-aware dialogue, loop theories, and character motivations. Most remain unverified.",
    href: "/theories",
    tag: "THEORIES",
  },
];

export default function PopularPages() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Popular Pages
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularPages.map((page) => (
            <Link
              key={page.num}
              href={page.href}
              className="group bg-surface-container border border-outline/20 p-5 hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-[JetBrains_Mono] text-[10px] text-on-surface/40">{page.num}</span>
                <span className="font-[JetBrains_Mono] text-[9px] px-2 py-0.5 border border-outline/30 text-on-surface-variant">{page.tag}</span>
              </div>
              <h3 className="font-[Epilogue] text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {page.title}
              </h3>
              <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-2">
                {page.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
