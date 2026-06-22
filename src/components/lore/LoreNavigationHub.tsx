"use client";

import Link from "next/link";

const hubs = [
  { title: "Characters", desc: "Pierrot, Harlequin, The Doctor, Columbina — psychological profiles, lore roles, and contradictions", href: "/characters", label: "Explore Characters" },
  { title: "Endings", desc: "All 8+ confirmed endings — unlock conditions, secret routes, and post-credits analysis", href: "/endings", label: "Explore Endings" },
  { title: "Theories", desc: "Community theories with evidence — Pierrot Loop, Timeline Reset, Doctor Awareness, and more", href: "/theories", label: "Explore Theories" },
  { title: "Walkthroughs", desc: "Step-by-step guides for all routes — choices, hidden triggers, and 100% completion checklist", href: "/walkthroughs", label: "Explore Walkthroughs" },
];

export default function LoreNavigationHub() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Explore Related Archives
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Lore connects to every part of the archive — follow the links to complete your understanding
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((h) => (
            <Link
              key={h.title}
              href={h.href}
              className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors group"
            >
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {h.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                {h.desc}
              </p>
              <span className="text-primary font-[JetBrains_Mono] text-xs uppercase">
                {h.label} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
