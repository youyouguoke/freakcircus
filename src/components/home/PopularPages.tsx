"use client";

import Link from "next/link";

const popularPages = [
  { title: "Pierrot Route Walkthrough — Every Choice Mapped", href: "/characters/pierrot", desc: "Complete guide to Pierrot\'s main route, silent route, and hidden dialogue triggers." },
  { title: "Pierrot Route Guide", href: "/characters/pierrot-route-guide", desc: "Community guide for Pierrot's route in The Freak Circus, covering Day 1cret ending with the 4-minute black screen." },
  { title: "Harlequin Route — Community Guide", href: "/characters/harlequin", desc: "Community guide for Harlequin's confirmed route, including the 'Missing' ending anddocumented hidden scenes." },
  { title: "Doctor Unnamed Open Ending Theory — Precognitive Dialogue", href: "/characters/doctor", desc: "Why The Doctor describes endings before they occur and what the medical files reveal." },
  { title: "Complete Timeline Explained", href: "/lore", desc: "Chronological breakdown of every known event, symbol, and hidden clue in the circus lore." },
  { title: "Missing Ending Guide", href: "/endings", desc: "The confirmed bad ending in The Freak Circus perfect alignment across three loops and unlock the fourth door." },
  { title: "How Many Endings Are in The Freak Circus?", href: "/endings", desc: "Complete catalog of standard, secret, and corrupted endings with unlock conditions." },
  { title: "Mirror Hall Lore — Architecture & Symbolism", href: "/lore/mirror-hall", desc: "How the Mirror Hall connects all four character routes and what the reflections mean." },
];

export default function PopularPages() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            MOST ACCESSED FILES
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            Popular Pages
          </h2>
          <p className="text-faint-paper text-sm mt-3">Where readers go first — the most searched guides, endings, and character analyses.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {popularPages.map((page, i) => (
            <Link key={i} href={page.href} className="group block">
              <div className="archive-card py-4 px-5 flex items-start gap-4 transition-all duration-300 group-hover:border-circus-red/40">
                <span className="font-label text-[0.5rem] text-dim-paper mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-sm font-bold text-paper group-hover:text-circus-red transition-colors mb-1 truncate">
                    {page.title}
                  </h3>
                  <p className="text-faint-paper text-xs truncate">{page.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
