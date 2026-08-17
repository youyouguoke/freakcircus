'use client';

import Link from 'next/link';

export default function TheoriesHero() {
  return (
    <section className="bg-void-black min-h-[70vh] flex flex-col justify-center py-20 md:py-28 px-4 md:px-12 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-theories.webp" alt="" className="w-full h-full object-cover object-center opacity-45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/70 to-void-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/40" />
        <div className="absolute inset-0 vhs-scanlines opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Archive tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['BRANCH_09', 'LOOP_FAILED', 'SESSION_RESTARTED', 'CORRUPTED_DATA'].map((tag) => (
            <span key={tag} className="font-label text-[0.55rem] px-2.5 py-1 text-faint-paper border border-dark-border">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <div className="font-label text-circus-red text-[0.6rem] mb-4 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-circus-red" />
          THEORY DATABASE
        </div>

        <h1 className="font-archive text-5xl md:text-7xl lg:text-8xl text-paper leading-[0.9] mb-4">
          INVESTIGATION
          <br />
          <span className="text-circus-red">ARCHIVE</span>
        </h1>

        <p className="font-label text-muted-paper text-sm tracking-[0.15em] mb-4">
          THEORIES · TIMELINE ANALYSIS · HIDDEN LORE
        </p>

        <p className="text-faint-paper text-sm md:text-base max-w-xl leading-relaxed mb-8">
          Every theory catalogued. Every piece of evidence documented. From community-accepted loop theories to unverified corrupted data — the complete investigation archive.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dark-border max-w-xl mb-10">
          {[
            { value: '15+', label: 'THEORIES' },
            { value: '80+', label: 'EVIDENCE' },
            { value: '6', label: 'SUBJECTS' },
            { value: '3', label: 'CONFIRMED' },
          ].map((stat) => (
            <div key={stat.label} className="bg-void-black p-4">
              <div className="font-horror text-2xl text-paper mb-1">{stat.value}</div>
              <div className="font-label text-[0.5rem] text-faint-paper">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="#featured" className="btn-archive btn-archive--filled">FEATURED THEORY</Link>
          <Link href="#timeline" className="btn-archive btn-archive--ghost">VIEW TIMELINE</Link>
        </div>
      </div>
    </section>
  );
}
