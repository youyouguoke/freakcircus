'use client';

import Link from 'next/link';

const relationships = [
  {
    from: 'Pierrot',
    to: 'Harlequin',
    label: 'OBSESSION',
    color: 'var(--pierrot)',
    desc: 'Harlequin describes Pierrot\'s garden with details the player never saw. Shared red thread sprite suggests a connection predating the circus.',
    evidence: 6,
    href: '/characters',
  },
  {
    from: 'Pierrot',
    to: 'Columbina',
    label: 'SILENCE',
    color: 'var(--columbina)',
    desc: 'Pierrot\'s Eternal Silence narration references Columbina\'s hallway — a location he should not know about. Unused voice lines contain a hidden conversation.',
    evidence: 4,
    href: '/characters',
  },
  {
    from: 'The Doctor',
    to: 'Columbina',
    label: 'BETRAYAL',
    color: 'var(--doctor)',
    desc: 'Medical files reference \'patient C\' matching Columbina\'s injuries. The mirror in Scene 9 shows Columbina\'s reflection when The Doctor looks.',
    evidence: 5,
    href: '/characters',
  },
  {
    from: 'Harlequin',
    to: 'The Doctor',
    label: 'MANIPULATION',
    color: 'var(--harlequin)',
    desc: 'Harlequin\'s fractured route contains medical terminology only The Doctor uses. Their routes share the same soft-lock pattern in Scene 12.',
    evidence: 3,
    href: '/characters',
  },
];

export default function CharacterRelationshipMap() {
  return (
    <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, var(--circus-red) 40px, var(--circus-red) 41px),
                           repeating-linear-gradient(90deg, transparent, transparent 40px, var(--circus-red) 40px, var(--circus-red) 41px)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="mb-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            EVIDENCE MAP
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            Character Connections
          </h2>
          <p className="text-faint-paper text-sm mt-3 max-w-lg">
            How the central figures connect across routes, hidden scenes, and shared narrative threads.
          </p>
        </div>

        {/* Relationship cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {relationships.map((rel, i) => (
            <Link key={i} href={rel.href} className="group block">
              <div className="archive-card h-full transition-all duration-300 group-hover:border-circus-red/40">
                {/* Relationship label */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-label text-[0.55rem] px-2 py-0.5"
                    style={{
                      color: rel.color,
                      border: `1px solid ${rel.color}33`,
                      background: `${rel.color}0D`,
                    }}
                  >
                    {rel.label}
                  </span>
                  <span className="font-label text-[0.5rem] text-faint-paper">
                    {rel.evidence} EVIDENCE
                  </span>
                </div>

                {/* From → To */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-archive text-lg text-paper">{rel.from}</span>
                  <span className="font-label text-[0.5rem] text-circus-red">←→</span>
                  <span className="font-archive text-lg text-paper">{rel.to}</span>
                </div>

                {/* Description */}
                <p className="text-faint-paper text-sm leading-relaxed mb-4">
                  {rel.desc}
                </p>

                {/* Link */}
                <span className="font-label text-[0.55rem] text-circus-red flex items-center gap-1">
                  EXPLORE CONNECTION <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
