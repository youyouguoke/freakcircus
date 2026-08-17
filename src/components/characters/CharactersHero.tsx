"use client";

export default function CharactersHero() {
  return (
    <section className="bg-surface min-h-[50vh] flex flex-col justify-center pt-8 pb-16 px-4 md:px-16 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/hero-corridor.jpg" alt="" className="w-full h-full object-cover object-top opacity-45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-surface/40 to-surface/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/30" />
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
          CHARACTER ARCHIVES
        </div>

        <h1 className="font-[Creepster] text-4xl md:text-6xl text-primary mb-4">
          Freak Circus Characters
        </h1>
        <h2 className="font-[Epilogue] text-xl md:text-2xl text-foreground mb-4">
          The Complete Character Archive of The Freak Circus
        </h2>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Explore every Freak Circus character — Pierrot the melancholic clown, Harlequin the chaotic performer, Jester the trickster, The Doctor the circus physician, and Columbina the ballerina. Full route guides, all endings, relationships, walkthroughs, and community theories for each performer.
        </p>
      </div>
    </section>
  );
}
