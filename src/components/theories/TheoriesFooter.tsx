"use client";

import Link from "next/link";

export default function TheoriesFooter() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap gap-3 justify-center mb-4">
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            BRANCH_09
          </span>
          <span className="font-[JetBrains_Mono] text-xs px-3 py-1 border border-outline/30 text-on-surface-variant">
            LOOP_FAILED
          </span>
        </div>

        <h2 className="font-[Creepster] text-3xl md:text-5xl text-primary mb-4">
          Some Theories Explain Too Much
        </h2>

        <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
          Investigate hidden routes, replay anomalies, and psychological patterns buried inside The Freak Circus archive.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link href="/lore" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase">
            Continue the Investigation
          </Link>
        </div>

        <div className="border-t border-outline/10 pt-8">
          <div className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
            About This Archive
          </div>
          <p className="text-on-surface-variant text-sm max-w-2xl mx-auto mb-4">
            Freak Circus Hub is a fan-maintained archive documenting characters, endings, theories, and hidden routes discovered by the community.
          </p>
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
            Last Updated: June 2026
          </div>
        </div>
      </div>
    </section>
  );
}
