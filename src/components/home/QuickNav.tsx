"use client";

import Link from "next/link";

const sections = [
  { title: "Characters", desc: "Subject dossiers for all six entities.", href: "/characters", icon: "📋" },
  { title: "Endings", desc: "Every ending, verified and catalogued.", href: "/endings", icon: "🎭" },
  { title: "Walkthroughs", desc: "Every route, every choice mapped.", href: "/walkthroughs", icon: "🗺️" },
  { title: "Lore", desc: "Timeline, symbols, and hidden clues.", href: "/lore", icon: "📜" },
];

export default function QuickNav() {
  return (
    <section className="bg-archive-black py-20 md:py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            ARCHIVE INDEX
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-paper">
            Navigate The Archive
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((s) => (
            <Link key={s.title} href={s.href} className="group block">
              <div className="archive-card h-full text-center transition-all duration-300 group-hover:border-circus-red/40">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-archive text-lg text-paper mb-2 group-hover:text-circus-red transition-colors">
                  {s.title}
                </h3>
                <p className="text-faint-paper text-sm mb-4">{s.desc}</p>
                <span className="font-label text-[0.55rem] text-circus-red">
                  EXPLORE →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
