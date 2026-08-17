'use client';

import Link from 'next/link';

export default function LoreHero() {
  return (
    <section className="bg-void-black min-h-[70vh] flex flex-col justify-center py-20 md:py-28 px-4 md:px-12 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-corridor.jpg" alt="" className="w-full h-full object-cover object-center opacity-35" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/70 to-void-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-transparent to-void-black/40" />
        <div className="absolute inset-0 vhs-scanlines opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Archive tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['ARCHIVE_07', 'MEMORY_FRAGMENT', 'TIMELINE_RECORD', 'RECOVERED_FILE'].map((tag) => (
            <span key={tag} className="font-label text-[0.55rem] px-2.5 py-1 text-faint-paper border border-dark-border">
              {tag}
            </span>
          ))}
        </div>

        <div className="font-label text-circus-red text-[0.6rem] mb-4 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-circus-red" />
          ORIGIN YEAR 1887
        </div>

        <h1 className="font-archive text-5xl md:text-7xl lg:text-8xl text-paper leading-[0.9] mb-4">
          LORE
          <br />
          <span className="text-circus-red">ENCYCLOPEDIA</span>
        </h1>

        <p className="font-label text-muted-paper text-sm tracking-[0.15em] mb-6">
          HISTORY · SYMBOLS · TIMELINE · HIDDEN MEANINGS
        </p>

        {/* Quick summary */}
        <div className="archive-card max-w-2xl mb-10 border-circus-red/20">
          <div className="font-label text-[0.55rem] text-circus-red mb-3">QUICK SUMMARY</div>
          <p className="text-faint-paper text-sm leading-relaxed">
            The Freak Circus exists outside conventional time. Historical records date the first performance to 1887, but the circus references events from the 21st century. Performers never age. The audience never remembers. And the circus never closes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="#evidence" className="btn-archive btn-archive--filled">EVIDENCE WALL</Link>
          <Link href="#symbols" className="btn-archive btn-archive--ghost">SYMBOL DATABASE</Link>
        </div>
      </div>
    </section>
  );
}
