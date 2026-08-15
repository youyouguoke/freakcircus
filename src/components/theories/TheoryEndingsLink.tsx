"use client";

import Link from "next/link";

const theoryEndings = [
  {
    theory: "Pierrot Loop Theory",
    endings: [
      { name: "Eternal Silence", href: "/characters/pierrot#endings" },
      { name: "Smile For Me", href: "/characters/pierrot#endings" },
      { name: "Null Route", href: "/characters/pierrot#endings" },
    ],
  },
  {
    theory: "Doctor Is The Observer",
    endings: [
      { name: "Doctor's Note", href: "/characters/doctor#endings" },
      { name: "White Room", href: "/characters/doctor#endings" },
      { name: "Medical Failure", href: "/characters/doctor#endings" },
    ],
  },
  {
    theory: "Columbina's Memory Is The Key",
    endings: [
      { name: "Columbina's Truth", href: "/characters/columbina#endings" },
      { name: "Eternal Dance", href: "/characters/columbina#endings" },
      { name: "Corrupted Data", href: "/characters/columbina#endings" },
    ],
  },
  {
    theory: "Circus Does Not Exist",
    endings: [
      { name: "Grand Finale", href: "/characters/harlequin#endings" },
      { name: "Corrupted Data", href: "/characters/columbina#endings" },
      { name: "White Room", href: "/characters/doctor#endings" },
    ],
  },
  {
    theory: "Timeline Reset Theory",
    endings: [
      { name: "Eternal Silence", href: "/characters/pierrot#endings" },
      { name: "Columbina's Truth", href: "/characters/columbina#endings" },
      { name: "Harlequin's Laughter", href: "/characters/harlequin#endings" },
    ],
  },
  {
    theory: "Memory Corruption Theory",
    endings: [
      { name: "Corrupted Data", href: "/characters/columbina#endings" },
      { name: "White Room", href: "/characters/doctor#endings" },
      { name: "Null Route", href: "/characters/pierrot#endings" },
    ],
  },
];

export default function TheoryEndingsLink() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Related Endings
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          How theories connect to endings — explore the evidence behind every theory
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {theoryEndings.map((te) => (
            <div key={te.theory} className="bg-surface-container border border-outline/20 p-6">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-3 uppercase tracking-wider">
                {te.theory}
              </div>
              <div className="space-y-2">
                {te.endings.map((e) => (
                  <Link
                    key={e.name}
                    href={e.href}
                    className="block text-on-surface-variant hover:text-primary transition-colors text-sm"
                  >
                    → {e.name}
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
