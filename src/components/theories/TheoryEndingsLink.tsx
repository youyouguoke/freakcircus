"use client";

import Link from "next/link";

const theoryEndings = [
  {
    theory: "Pierrot Loop Theory",
    endings: [
      { name: "Eternal Silence", href: "/endings" },
      { name: "Smile For Me", href: "/endings" },
      { name: "Null Route", href: "/endings" },
    ],
  },
  {
    theory: "Doctor Is The Observer",
    endings: [
      { name: "Doctor's Note", href: "/endings" },
      { name: "White Room", href: "/endings" },
      { name: "Medical Failure", href: "/endings" },
    ],
  },
  {
    theory: "Columbina's Memory Is The Key",
    endings: [
      { name: "Columbina's Truth", href: "/endings" },
      { name: "Eternal Dance", href: "/endings" },
      { name: "Corrupted Data", href: "/endings" },
    ],
  },
  {
    theory: "Circus Does Not Exist",
    endings: [
      { name: "Grand Finale", href: "/endings" },
      { name: "Corrupted Data", href: "/endings" },
      { name: "White Room", href: "/endings" },
    ],
  },
  {
    theory: "Timeline Reset Theory",
    endings: [
      { name: "Eternal Silence", href: "/endings" },
      { name: "Columbina's Truth", href: "/endings" },
      { name: "Harlequin's Laughter", href: "/endings" },
    ],
  },
  {
    theory: "Memory Corruption Theory",
    endings: [
      { name: "Corrupted Data", href: "/endings" },
      { name: "White Room", href: "/endings" },
      { name: "Null Route", href: "/endings" },
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
