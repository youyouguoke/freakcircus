"use client";

import Link from "next/link";

export default function LoreNavigationHub() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-8">
          Explore More
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: "Characters", desc: "Meet every performer", href: "/characters" },
            { label: "Endings", desc: "What we know about endings", href: "/endings" },
            { label: "Theories", desc: "Community speculation", href: "/theories" },
            { label: "Walkthroughs", desc: "Day 1 & 2 guides", href: "/walkthroughs" },
            { label: "Play Online", desc: "Play in browser", href: "/play-online" },
            { label: "Download", desc: "Get the game", href: "/download" },
          ].map((link, i) => (
            <Link key={i} href={link.href} className="glass-card p-5 hover:border-primary transition-colors">
              <h3 className="font-display text-sm text-on-surface mb-1">{link.label}</h3>
              <p className="text-on-surface/50 text-xs">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
