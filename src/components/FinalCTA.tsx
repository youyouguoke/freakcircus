"use client";

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-void-black flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img src="/hero-corridor.jpg" alt="" className="w-full h-full object-cover opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/50 to-void-black" />
      </div>
      <div className="relative z-10 px-4">
        <div className="font-label text-circus-red text-[0.6rem] mb-6 flex items-center justify-center gap-3">
          <span className="inline-block w-8 h-px bg-circus-red" />
          CLASSIFIED
          <span className="inline-block w-8 h-px bg-circus-red" />
        </div>
        <h2 className="font-archive text-4xl md:text-6xl text-paper mb-4 leading-tight">
          THE ARCHIVE<br /><span className="text-circus-red">AWAITS</span>
        </h2>
        <p className="text-faint-paper text-sm md:text-base max-w-md mx-auto mb-8">
          Every route hides another story. Every ending reveals another secret.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/characters" className="btn-archive btn-archive--filled">ENTER THE ARCHIVE</Link>
          <Link href="/download" className="btn-archive btn-archive--ghost">DOWNLOAD THE GAME</Link>
        </div>
      </div>
    </section>
  );
}
