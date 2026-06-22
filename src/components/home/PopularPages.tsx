"use client";

import Link from "next/link";

const popularPages = [
  {
    title: "Pierrot Route Walkthrough — Every Choice Mapped",
    href: "/characters/pierrot",
    desc: "Complete guide to Pierrot's main route, silent route, and hidden dialogue triggers.",
  },
  {
    title: "How to Unlock Eternal Silence Ending",
    href: "/endings/eternal-silence",
    desc: "Step-by-step unlock conditions for Pierrot's secret ending with the 4-minute black screen.",
  },
  {
    title: "Harlequin Route Choices — Fractured Route Guide",
    href: "/characters/harlequin",
    desc: "Every dialogue branch mapped, including the 7 undocumented hidden scenes.",
  },
  {
    title: "Doctor White Room Theory — Precognitive Dialogue Explained",
    href: "/characters/doctor",
    desc: "Why The Doctor describes endings before they occur and what the medical files reveal.",
  },
  {
    title: "Complete Timeline Explained — From First Circus to White Room",
    href: "/lore/timeline",
    desc: "Chronological breakdown of every known event, symbol, and hidden clue in the circus lore.",
  },
  {
    title: "Columbina Three-Loop Route — Perfect Alignment Guide",
    href: "/characters/columbina",
    desc: "How to achieve perfect alignment across three loops and unlock the fourth door.",
  },
  {
    title: "How Many Endings Are in The Freak Circus?",
    href: "/endings",
    desc: "Complete catalog of standard, secret, and corrupted endings with unlock conditions.",
  },
  {
    title: "Mirror Hall Lore — Architecture, Symbolism & Hidden Connections",
    href: "/lore/mirror-hall",
    desc: "How the Mirror Hall connects all four character routes and what the reflections mean.",
  },
];

export default function PopularPages() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Popular Pages
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Where readers go first — the most searched guides, endings, and character analyses
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {popularPages.map((page, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-5 hover:border-primary transition-colors">
              <Link href={page.href} className="group">
                <h3 className="font-[Epilogue] text-base font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {page.title}
                </h3>
              </Link>
              <p className="text-on-surface-variant text-sm">
                {page.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
