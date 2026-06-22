"use client";

const relationships = [
  {
    pair: "Pierrot & Harlequin",
    theme: "OBSESSION",
    desc: "One of the most debated relationships in The Freak Circus. Harlequin's route contains multiple references to Pierrot that only appear after completing his route first. In Scene 7, she describes his garden with details the player never saw. The community theory suggests that Harlequin and Pierrot share a hidden connection that predates the circus — possibly siblings or former partners in a previous iteration of the loop. The red thread that appears in both their routes uses the same sprite asset, suggesting a shared narrative origin.",
  },
  {
    pair: "Pierrot & Columbina",
    theme: "SILENCE",
    desc: "Many theories suggest that Columbina is the only character Pierrot truly trusts. In the Eternal Silence ending, Pierrot's narration references Columbina's hallway — a location he should not know about. The three-loop storyline requires completing Pierrot's route before Columbina's becomes fully accessible, suggesting a dependency that the game does not explicitly state. Unused voice lines found in build 1.04 contain a conversation between Pierrot and Columbina that never appears in gameplay.",
  },
  {
    pair: "The Doctor & Columbina",
    theme: "BETRAYAL",
    desc: "Several hidden files imply that The Doctor and Columbina share a history that neither acknowledges directly. In the medical files scattered across The Doctor's route, one entry references a 'patient C' with injuries matching Columbina's backstory. The mirror connection in Scene 9 shows Columbina's reflection when The Doctor looks into it, suggesting that he sees her even when she is not present. Community analysis suggests this relationship was originally intended to be a major plot point before being reduced to environmental storytelling.",
  },
  {
    pair: "Harlequin & The Doctor",
    theme: "MANIPULATION",
    desc: "Harlequin's comedic route contains the most aggressive dialogue pruning — removing options that would lead to early endings. The Doctor's medical files reference a 'patient H' with symptoms that match Harlequin's fractured personality. In the hidden scene that unlocks after failing both routes, Harlequin and The Doctor appear together in the Mirror Hall, discussing the player in third person. This scene breaks the fourth wall and suggests both characters are aware of the replay mechanics.",
  },
];

export default function CharacterRelationships() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Character Relationships
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          How the four central figures connect across routes, hidden scenes, and shared narrative threads
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {relationships.map((rel) => (
            <div key={rel.pair} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">
                  {rel.theme}
                </span>
              </div>
              <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-3">
                {rel.pair}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {rel.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
