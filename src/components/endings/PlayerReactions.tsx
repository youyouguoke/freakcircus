"use client";

const reactions = [
  {
    quote: "I thought my game froze during Eternal Silence. I waited four minutes before realizing it was intentional.",
    source: "Steam Review",
  },
  {
    quote: "The Doctor remembered choices from my previous save. I checked twice — I had never selected those options.",
    source: "Reddit /r/FreakCircus",
  },
  {
    quote: "I still don't know if Corrupted Data is real. I've been trying for six months and I'm starting to question my own memory.",
    source: "Discord #theories",
  },
  {
    quote: "After my third playthrough, Harlequin looked directly at the screen and said 'You again.' I haven't played since.",
    source: "Twitter / @vn_horror",
  },
];

export default function PlayerReactions() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Player Reactions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reactions.map((r, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <div className="text-4xl text-primary mb-4">"</div>
              <blockquote className="text-on-surface-variant italic mb-4">
                {r.quote}
              </blockquote>
              <footer className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                — {r.source}
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
