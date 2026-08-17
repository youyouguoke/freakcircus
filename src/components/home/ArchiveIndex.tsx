'use client';

import Link from 'next/link';

const categories = [
  {
    title: 'Characters',
    items: [
      { name: 'Pierrot', href: '/characters/pierrot' },
      { name: 'Harlequin', href: '/characters/harlequin' },
      { name: 'The Doctor', href: '/characters/doctor' },
      { name: 'Columbina', href: '/characters/columbina' },
      { name: 'Jester', href: '/characters/jester' },
      { name: 'Ticket Taker', href: '/ticket-taker' },
    ],
  },
  {
    title: 'Endings',
    items: [
      { name: 'Grand Finale', href: '/endings/the-grand-finale' },
      { name: 'Eternal Silence', href: '/endings/eternal-silence' },
      { name: "Doctor's Note", href: '/endings/doctors-note' },
      { name: "Columbina's Truth", href: '/endings/columbinas-truth' },
      { name: 'Corrupted Data', href: '/endings/corrupted-data' },
    ],
  },
  {
    title: 'Lore',
    items: [
      { name: 'Founding Myth', href: '/lore/founding-myth' },
      { name: 'Mirror Hall', href: '/lore/mirror-hall' },
      { name: 'Mask Ceremony', href: '/lore/mask-ceremony' },
      { name: 'First Circus Fire', href: '/lore/first-circus-fire' },
      { name: 'Silent Exit', href: '/lore/silent-exit' },
    ],
  },
  {
    title: 'Theories',
    items: [
      { name: 'Pierrot Remembers', href: '/theories/pierrot-remembers-routes' },
      { name: 'All Theories', href: '/theories' },
    ],
  },
];

export default function ArchiveIndex() {
  return (
    <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            COMPLETE INDEX
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            Archive Index
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-archive text-sm text-paper mb-4 pb-2 border-b border-dark-border">
                {cat.title.toUpperCase()}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-faint-paper text-sm hover:text-paper transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-border mt-12 pt-6">
          <span className="font-label text-[0.55rem] text-dim-paper">
            LAST UPDATED: JUNE 2026
          </span>
        </div>
      </div>
    </section>
  );
}
