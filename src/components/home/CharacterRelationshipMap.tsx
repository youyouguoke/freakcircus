'use client';

import Link from 'next/link';

const relationships = [
  {
    from: 'Pierrot',
    to: 'Harlequin',
    label: 'RIVALS',
    color: 'var(--pierrot)',
    desc: "The Columbina legend reveals their rivalry's origin: Harlequin killed Columbina, Pierrot's former partner. This is the central conflict of the story.",
    source: 'Day 2 Columbina legend (verified)',
    href: '/characters',
  },
];

export default function CharacterRelationshipMap() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Character Relationships
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Verified connections from the game&apos;s storyline
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {relationships.map((rel, i) => (
            <Link key={i} href={rel.href} className="group">
              <div className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-[JetBrains_Mono] text-xs text-primary">{rel.from}</span>
                  <span className="text-on-surface-variant">↔️</span>
                  <span className="font-[JetBrains_Mono] text-xs text-primary">{rel.to}</span>
                  <span className="ml-auto font-[JetBrains_Mono] text-[10px] px-2 py-0.5 border border-outline/30 text-on-surface-variant">{rel.label}</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-2">{rel.desc}</p>
                <span className="font-[JetBrains_Mono] text-[10px] text-green-500">✓ {rel.source}</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-on-surface/40 text-xs mt-6">
          Other character relationships (Doctor, Jester, Ticket Taker) have not been independently verified and are not listed here.
        </p>
      </div>
    </section>
  );
}
