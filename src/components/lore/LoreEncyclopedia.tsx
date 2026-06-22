"use client";

import Link from "next/link";

const categories = [
  { name: "Characters", items: ["Pierrot", "Harlequin", "The Doctor", "Columbina", "Null Performer"], href: "/characters" },
  { name: "Locations", items: ["Main Tent", "Mirror Hall", "Doctor's Ward", "Basement Stage", "Silent Exit"], href: "/lore" },
  { name: "Events", items: ["First Circus Fire", "Mirror Hall Opening", "Project Continuity", "Memory Loop Discovery"], href: "/lore" },
  { name: "Objects", items: ["Red Thread", "Masks", "Mirrors", "Medical Files", "Stage Curtains"], href: "/lore" },
  { name: "Symbols", items: ["Red Thread Meaning", "Mask Symbolism", "Mirror Symbolism", "Stage Curtain Symbolism"], href: "/lore" },
  { name: "Organizations", items: ["Project Continuity", "The Circus", "The Archive"], href: "/lore" },
  { name: "Rumors", items: ["Null Performer Sighting", "Director Existence", "Fire Paradox", "Save File Persistence"], href: "/lore" },
];

export default function LoreEncyclopedia() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Lore Encyclopedia
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete archive index — browse by category
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">
                {cat.name}
              </h3>
              <ul className="space-y-1 text-sm">
                {cat.items.map((item) => (
                  <li key={item} className="text-on-surface-variant">
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={cat.href} className="text-primary text-sm hover:underline mt-3 inline-block">
                View All →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
