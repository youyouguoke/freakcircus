"use client";

export default function CharactersAbout() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto text-center">
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
    </section>
  );
}
