"use client";

import Link from "next/link";

const theories = [
  { id: "T_04", title: "Pierrot Loop", icon: "search", href: "#pierrot-loop" },
  { id: "T_11", title: "Doctor Aware?", icon: "search", href: "#doctor-aware" },
  { id: "T_07", title: "Memory Glitch", icon: "search", href: "#memory-glitch" },
  { id: "T_15", title: "Null Route", icon: "search", href: "#null-route" },
  { id: "T_22", title: "Mask Theory", icon: "help", href: "#mask-theory" },
  { id: "T_??", title: "Corrupted", icon: "help", href: "#corrupted" },
];

export default function EvidenceWall() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-8">
          Evidence Wall // TOP SECRET
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {theories.map((t) => (
            <Link
              key={t.id}
              href={t.href}
              className="block bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors group"
            >
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">
                {t.icon}
              </div>
              <div className="font-[JetBrains_Mono] text-2xl text-primary mb-1">
                {t.id}
              </div>
              <div className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {t.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
