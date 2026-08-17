"use client";

import Link from "next/link";
import { ENDINGS_TOTAL } from "@/lib/site-facts";

const guides = [
  { name: "Pierrot — Smile For Me (Good)", href: "/characters/pierrot#endings" },
  { name: "Pierrot — Eternal Silence (Secret)", href: "/characters/pierrot#endings" },
  { name: "Pierrot — Null Route (Unverified)", href: "/characters/pierrot#endings" },
  { name: "Harlequin — Grand Finale (Good)", href: "/characters/harlequin#endings" },
  { name: "Harlequin — Fractured Ending (Secret)", href: "/characters/harlequin#endings" },
  { name: "Doctor — Doctor's Note (Secret)", href: "/characters/doctor#endings" },
  { name: "Doctor — White Room (Unverified)", href: "/characters/doctor#endings" },
  { name: "True Ending Guide", href: "/endings" },
  { name: `All ${ENDINGS_TOTAL} Endings Overview`, href: "/endings" },
  { name: "Ending Order & Timeline", href: "/endings" },
  { name: "Step-by-Step Ending Unlock", href: "/walkthroughs/all-endings-guide" },
  { name: "Save Points & Data Guide", href: "/walkthroughs/save-guide" },
];

export default function PopularEndingGuides() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Popular Ending Guides
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The most searched ending guides — direct links to detailed walkthroughs
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {guides.map((g) => (
            <Link
              key={g.name}
              href={g.href}
              className="bg-surface-container border border-outline/20 p-4 hover:border-primary transition-colors"
            >
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">ENDING GUIDE</div>
              <div className="text-foreground text-sm font-medium">{g.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
