"use client";

import Link from "next/link";

const links = [
  {
    from: "Pierrot Walkthrough",
    to: [
      { name: "Pierrot Character Guide", href: "/characters/pierrot" },
      { name: "Pierrot Endings", href: "/endings" },
      { name: "Pierrot Loop Theory", href: "/theories" },
    ],
  },
  {
    from: "Harlequin Walkthrough",
    to: [
      { name: "Harlequin Character Guide", href: "/characters/harlequin" },
      { name: "Harlequin Endings", href: "/endings" },
      { name: "Harlequin Branch Theory", href: "/theories" },
    ],
  },
  {
    from: "Doctor Walkthrough",
    to: [
      { name: "Doctor Character Guide", href: "/characters/doctor" },
      { name: "Doctor Endings", href: "/endings" },
      { name: "Doctor Awareness Theory", href: "/theories" },
    ],
  },
  {
    from: "Columbina Walkthrough",
    to: [
      { name: "Columbina Character Guide", href: "/characters/columbina" },
      { name: "Columbina Endings", href: "/endings" },
      { name: "Columbina Memory Theory", href: "/theories" },
    ],
  },
];

export default function WalkthroughLinkMatrix() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Related Guides
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Walkthrough → Character → Ending → Theory — complete SEO link matrix for every route
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {links.map((l) => (
            <div key={l.from} className="bg-surface-container border border-outline/20 p-6">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-3 uppercase tracking-wider">
                {l.from}
              </div>
              <div className="space-y-2">
                {l.to.map((t) => (
                  <Link
                    key={t.name}
                    href={t.href}
                    className="block text-on-surface-variant hover:text-primary transition-colors text-sm"
                  >
                    → {t.name}
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
