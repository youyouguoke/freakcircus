"use client";

export default function CommunityInvestigations() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Community Discussion
        </h2>
        <p className="text-on-surface/50 text-sm mb-8">
          The Freak Circus community is active on Reddit (r/TheFreakCircus), YouTube, and Discord.
          Here are the main topics of discussion:
        </p>
        <div className="space-y-4">
          {[
            {
              topic: "What are the 3 open endings?",
              desc: "The most discussed question. The developer confirmed 3 open endings exist but hasn't named them. Community members have proposed various names but none are verified.",
            },
            {
              topic: "Mirror scene significance",
              desc: "The mirror scene in Day 2 is confirmed to exist. Community members debate its narrative significance and whether it has hidden mechanics.",
            },
            {
              topic: "Day 3 expectations",
              desc: "With Day 3 confirmed as planned, the community speculates about what new content, endings, and story revelations it will bring.",
            },
            {
              topic: "Columbina's full story",
              desc: "While Columbina's death is confirmed, the full details of her story and its impact on the game's narrative remain subjects of community investigation.",
            },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="font-display text-lg text-on-surface mb-2">{item.topic}</h3>
              <p className="text-on-surface/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
