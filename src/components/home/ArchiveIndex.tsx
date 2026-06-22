"use client";

import Link from "next/link";

const categories = [
  {
    title: "Characters",
    items: [
      { name: "Pierrot", href: "/characters/pierrot" },
      { name: "Harlequin", href: "/characters" },
      { name: "The Doctor", href: "/characters" },
      { name: "Columbina", href: "/characters" },
    ],
  },
  {
    title: "Endings",
    items: [
      { name: "Grand Finale", href: "/endings/grand-finale" },
      { name: "Eternal Silence", href: "/endings/eternal-silence" },
      { name: "Doctor's Note", href: "/endings/doctors-note" },
      { name: "Columbina's Truth", href: "/endings/columbinas-truth" },
    ],
  },
  {
    title: "Lore",
    items: [
      { name: "Timeline", href: "/lore/timeline" },
      { name: "Mirror Hall", href: "/lore/mirror-hall" },
      { name: "The Red Thread", href: "/lore/red-thread" },
    ],
  },
  {
    title: "Theories",
    items: [
      { name: "Pierrot Theory", href: "/theories/pierrot" },
      { name: "Loop Theory", href: "/theories/loop" },
      { name: "Broken Mirror Theory", href: "/theories/broken-mirror" },
    ],
  },
];

export default function ArchiveIndex() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Archive Index
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-outline/10 mt-12 pt-8">
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
            Last Updated: June 2026
          </div>
        </div>
      </div>
    </section>
  );
}
