"use client";

import Link from "next/link";

const recommendations = [
  {
    from: "Pierrot",
    text: "If you like Pierrot, read:",
    links: [
      { name: "Harlequin Guide", href: "/characters/harlequin" },
      { name: "Columbina Guide", href: "/characters/columbina" },
      { name: "Doctor Guide", href: "/characters/doctor" },
    ],
  },
  {
    from: "Harlequin",
    text: "If you like Harlequin, read:",
    links: [
      { name: "Pierrot Guide", href: "/characters/pierrot" },
      { name: "Doctor Guide", href: "/characters/doctor" },
      { name: "Columbina Guide", href: "/characters/columbina" },
    ],
  },
  {
    from: "The Doctor",
    text: "If you like The Doctor, read:",
    links: [
      { name: "Columbina Guide", href: "/characters/columbina" },
      { name: "Pierrot Guide", href: "/characters/pierrot" },
      { name: "Harlequin Guide", href: "/characters/harlequin" },
    ],
  },
  {
    from: "Columbina",
    text: "If you like Columbina, read:",
    links: [
      { name: "Pierrot Guide", href: "/characters/pierrot" },
      { name: "Harlequin Guide", href: "/characters/harlequin" },
      { name: "Doctor Guide", href: "/characters/doctor" },
    ],
  },
];

export default function CharacterRecommendations() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Explore More Characters
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Cross-character recommendations — discover connections you might have missed
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec) => (
            <div key={rec.from} className="bg-surface-container border border-outline/20 p-6">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-3">
                {rec.text}
              </div>
              <div className="flex flex-wrap gap-3">
                {rec.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 border border-outline/30 text-on-surface-variant hover:border-primary hover:text-primary transition-colors font-[JetBrains_Mono] text-xs uppercase"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
