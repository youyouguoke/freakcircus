import Link from "next/link";

const theories = [
  {
    id: "902-A",
    title: "Theory: Is Pierrot Manipulating Every Route?",
    desc: "Recent code mining suggests dialogue trees are pruned based on a hidden 'sanity' meter not visible in the UI. Pierrot's route contains the most aggressive pruning — removing options that would lead to early endings.",
    href: "/theories/pierrot-remembers-routes",
    connections: "64 Red Threads Connected",
  },
  {
    id: "114-C",
    title: "Theory: Why Does the Mirror Hall Remember Previous Routes?",
    desc: "The Mirror Hall's layout changes between playthroughs, showing rooms from routes the player has not yet completed. The broken mirror widens after 3 routes, showing a reflection of the player's desktop.",
    href: "/lore/mirror-hall",
    spoiler: "The mirror is actually a camera.",
  },
  {
    id: "001-Z",
    title: "Theory: Is the Circus a Shared Hallucination?",
    desc: "Where did the spectators go after the 1988 accident? Archive footage shows no exits were used. The community has documented 7 distinct hall configurations, with new variations still being discovered.",
    href: "/theories",
  },
];

export default function TrendingTheories() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Trending Theories
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Active community investigations into the true nature of the circus, its characters, and the narrative loop
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {theories.map((t) => (
            <div key={t.id} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-3">
                File No: {t.id}
              </div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-3">
                {t.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                {t.desc}
              </p>
              {t.connections && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-[JetBrains_Mono] text-xs text-primary">
                    {t.connections}
                  </span>
                </div>
              )}
              {t.spoiler && (
                <div className="bg-surface border border-outline/10 p-2 mb-3">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                    SPOILER: {t.spoiler}
                  </span>
                </div>
              )}
              <Link
                href={t.href}
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Read Full Investigation →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
