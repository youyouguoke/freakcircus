"use client";

import Link from "next/link";

const sections = [
  {
    title: "Characters",
    desc: "Meet Pierrot, Harlequin, The Doctor, and Columbina.",
    href: "/characters",
    cta: "Explore Characters",
  },
  {
    title: "Endings",
    desc: "All known endings explained.",
    href: "/endings",
    cta: "Browse Endings",
  },
  {
    title: "Walkthroughs",
    desc: "Every route, every choice.",
    href: "/walkthroughs",
    cta: "View Walkthroughs",
  },
  {
    title: "Lore",
    desc: "Timeline, symbols, and hidden clues.",
    href: "/lore",
    cta: "Dive into Lore",
  },
];

export default function QuickNav() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Everything About The Freak Circus
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-2">
                {section.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                {section.desc}
              </p>
              <Link href={section.href} className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
                {section.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
