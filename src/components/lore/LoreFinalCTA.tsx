"use client";

import Link from "next/link";

export default function LoreFinalCTA() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Continue Exploring
        </h2>
        <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
          Dive deeper into character profiles, route walkthroughs, and community theories.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/characters" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Characters
          </Link>
          <Link href="/walkthroughs" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Walkthroughs
          </Link>
          <Link href="/theories" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Theories
          </Link>
        </div>
      </div>
    </section>
  );
}
