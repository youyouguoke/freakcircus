"use client";

const timeline = [
  { year: "Year 0", event: "Circus Founded", desc: "The original circus is established as a medical facility called 'Project Continuity.' The first performers are test subjects in a consciousness preservation experiment." },
  { year: "Year 3", event: "First Circus Fire", desc: "The facility burns down under mysterious circumstances. No bodies are recovered, yet all performers return for the next show. Conflicting records suggest the fire both happened and did not happen." },
  { year: "Year 5", event: "Mirror Hall Opens", desc: "The Mirror Hall is constructed as part of the rebuilt circus. The Hall's mirrors are designed to show different versions of reality, reflecting the project's goal of preserving multiple consciousness states simultaneously." },
  { year: "Year 8", event: "Null Performer Appears", desc: "A sixth performer is sighted in background scenes. This entity has no dialogue, no name, and disappears when approached. Some believe it is the project's director observing the experiment." },
  { year: "Current Timeline", event: "Game Begins", desc: "The player enters the circus. The current performers are reconstructions of the original test subjects, created through the memory preservation system. The game documents the player's interactions with these reconstructed personalities." },
];

export default function LoreTimeline() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Historical Timeline
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The complete chronological history of The Freak Circus — from founding to current timeline
        </p>

        <div className="space-y-6">
          {timeline.map((item, i) => (
            <div key={i} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="font-[Creepster] text-2xl text-primary">
                  {item.year}
                </div>
                <div className="h-px flex-1 bg-outline/20"></div>
              </div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {item.event}
              </h3>
              <p className="text-on-surface-variant text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
