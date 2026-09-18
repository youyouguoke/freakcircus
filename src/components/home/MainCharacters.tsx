'use client';

import Link from 'next/link';

const characters = [
  {
    name: 'Pierrot',
    role: 'THE CLOWN',
    caseFile: '01',
    image: '/Pierrot.jpg',
    accent: 'var(--pierrot)',
    glow: 'var(--pierrot-glow)',
    status: 'ACTIVE',
    desc: '198cm, golden eyes. Quiet, possessive yandere. Often the first route players encounter. A planned ending exists but is not yet implemented.',
    href: '/characters/pierrot',
  },
  {
    name: 'Harlequin',
    role: 'THE PERFORMER',
    caseFile: '02',
    image: '/Harlequin.jpg',
    accent: 'var(--harlequin)',
    glow: 'var(--harlequin-glow)',
    status: 'ACTIVE',
    desc: '187cm, poisonous green eyes. Pierrot\'s seductive rival. Killed Columbina. Home of the confirmed "Missing" bad ending.',
    href: '/characters/harlequin',
  },
  {
    name: 'The Doctor',
    role: 'THE PHYSICIAN',
    caseFile: '03',
    image: '/Doctor.jpg',
    accent: 'var(--doctor)',
    glow: 'var(--doctor-glow)',
    status: 'ACTIVE',
    desc: 'Day 2 character. Circus physician with medical files. Whether he has a dedicated route or endings is unverified.',
    href: '/characters/doctor',
  },
  {
    name: 'Jester',
    role: 'THE TRICKSTER',
    caseFile: '04',
    image: '/Jester2.png',
    accent: 'var(--jester)',
    glow: 'var(--jester-glow)',
    status: 'UNKNOWN',
    desc: 'Day 2 character. Operates at the edges of the narrative — watching, commenting, and delivering lines with double meanings.',
    href: '/characters/jester',
  },
  {
    name: 'Ticket Taker',
    role: 'THE GATEKEEPER',
    caseFile: '05',
    image: '/tickettaker.jpg',
    accent: 'var(--ticket-taker)',
    glow: 'var(--ticket-taker-glow)',
    status: 'ACTIVE',
    desc: 'The first character players encounter in Day 1. The enigmatic sentinel at the threshold of the circus.',
    href: '/characters/ticket-taker',
  },
];

function StatMini({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-label text-[0.5rem] text-faint-paper w-16">{label}</span>
      <div className="flex-1 h-[2px] bg-dark-border overflow-hidden">
        <div
          className="h-full transition-all duration-700"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function MainCharacters() {
  return (
    <section className="bg-void-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            SUBJECT DOSSIERS
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            Meet The Cast
          </h2>
          <p className="text-faint-paper text-sm mt-3 max-w-lg">
            The 5 main characters of The Freak Circus. Columbina is a deceased lore character, not playable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {characters.map((char) => (
            <Link
              key={char.name}
              href={char.href}
              className="group block"
            >
              <div
                className="archive-card relative overflow-hidden transition-all duration-300 group-hover:border-opacity-100 h-full"
                style={{ borderLeft: `3px solid ${char.accent}` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 60px ${char.glow}` }}
                />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-label text-[0.55rem] text-faint-paper">
                    CASE FILE {char.caseFile}
                  </span>
                  <span
                    className="font-label text-[0.5rem] px-2 py-0.5"
                    style={{
                      color: char.status === 'ACTIVE' ? 'var(--status-confirmed)' : 'var(--status-unverified)',
                      border: `1px solid ${char.status === 'ACTIVE' ? 'rgba(76,175,110,0.3)' : 'rgba(138,128,120,0.3)'}`,
                      background: char.status === 'ACTIVE' ? 'rgba(76,175,110,0.08)' : 'rgba(138,128,120,0.08)',
                    }}
                  >
                    {char.status}
                  </span>
                </div>

                <div className="relative mb-4 overflow-hidden">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-48 object-cover img-cinematic"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-archive-black via-transparent to-transparent" />
                </div>

                <h3
                  className="font-archive text-xl mb-0.5 transition-colors duration-300"
                  style={{ color: char.accent }}
                >
                  {char.name}
                </h3>
                <p className="font-label text-[0.6rem] text-faint-paper mb-3">
                  {char.role}
                </p>

                <p className="text-faint-paper text-xs leading-relaxed mb-4 line-clamp-3">
                  {char.desc}
                </p>

                <div
                  className="font-label text-[0.6rem] flex items-center gap-2 transition-colors duration-300"
                  style={{ color: char.accent }}
                >
                  VIEW FILE
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
