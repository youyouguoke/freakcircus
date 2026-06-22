"use client";

const symbols = [
  {
    name: "Red Thread",
    meanings: [
      { title: "Obsession", desc: "The unbreakable connections between characters across collapsing timelines. In Pierrot's route, the red thread appears as a physical object that binds him to the player. In Harlequin's route, it represents her obsessive attachment. The thread's color matches the blood-red accents in the game's UI, suggesting a visual connection between the narrative symbol and the interface design." },
      { title: "Emotional Control", desc: "Whoever holds the thread controls the performance — and the performer. The Doctor's medical files describe the thread as a 'control mechanism' used in Project Continuity. The thread appears in the hands of different characters depending on which route the player is on, suggesting it represents narrative control rather than a physical object." },
      { title: "Connected Timelines", desc: "Every route is tied to every other route by invisible narrative threads. Data miners found references to 'thread connections' in the game's code that link dialogue trees across routes. The thread symbolizes how the game's narrative is not a branching tree but a web of interconnected stories." },
    ],
    appearances: "Appears in Pierrot's route (physical object), Harlequin's route (obsession metaphor), and The Doctor's files (control mechanism)",
  },
  {
    name: "Masks",
    meanings: [
      { title: "Fractured Identity", desc: "Every character's mask may represent the same fractured identity viewed from different angles. The four main characters' masks share design elements — Pierrot's tear matches Harlequin's smile, The Doctor's glasses match Columbina's veil. Some theorists believe all characters are aspects of a single fractured personality." },
      { title: "Emotional Concealment", desc: "What the characters hide may be more real than what they show. Each mask conceals a specific emotion: Pierrot hides sadness, Harlequin hides anger, The Doctor hides guilt, Columbina hides knowledge. The masks never come off in the game, suggesting the characters are defined by what they conceal rather than what they reveal." },
      { title: "Performed Personality", desc: "The circus as theater — every interaction is staged for an unseen audience. The masks represent the characters' performed identities, while their true selves remain hidden. This ties into the theory that the circus is a purgatorial system where characters must perform their assigned roles to maintain their existence." },
    ],
    appearances: "All characters wear masks throughout the game. Mask designs appear in the title screen, loading screens, and ending credits.",
  },
  {
    name: "Mirrors",
    meanings: [
      { title: "Replay Awareness", desc: "Characters who seem to recognize the player from previous attempts. The mirrors in the Mirror Hall show events from other routes, suggesting the characters exist simultaneously across all timelines. When Pierrot looks in a mirror, he sometimes sees the player instead of his own reflection." },
      { title: "Alternate Selves", desc: "The protagonist may not be the same person across different routes. Mirror reflections show different versions of the protagonist — different clothes, different expressions, sometimes different genders. This supports the theory that the player is not a single character but a variable that changes between playthroughs." },
      { title: "Memory Loops", desc: "Each reflection shows a different version of the same truth. The mirrors do not show the present — they show possible futures, pasts that never happened, and events from deleted saves. This makes them the most reliable source of lore in the game, as they reveal information that cannot be found through normal gameplay." },
    ],
    appearances: "Mirror Hall contains 7 mirrors. Mirrors also appear in The Doctor's Ward, Harlequin's dressing room, and the Basement Stage.",
  },
  {
    name: "Stage Curtains",
    meanings: [
      { title: "Narrative Control", desc: "Someone — or something — is deciding when the curtain rises and falls. The curtains appear in every scene transition, suggesting an unseen director controls the narrative. Unused audio files contain a voice saying 'Cut' and 'Action' that does not match any character's voice profile." },
      { title: "Hidden Truth", desc: "What happens behind the curtain may be the real story. Characters occasionally reference events that happen 'backstage' — events the player never sees. The curtains sometimes part to reveal empty spaces where characters should be, suggesting the performers are not always present when the story requires them." },
      { title: "False Endings", desc: "Every curtain fall marks a timeline shift or memory reset. The game's endings all involve curtains falling, but the curtains in the Eternal Silence ending fall upward instead of down — a visual glitch that suggests the ending is not a conclusion but a reversal. This supports the loop theory that the game has no true ending, only repeated performances." },
    ],
    appearances: "Appear in every scene transition. Special curtain behavior in Eternal Silence ending (falls upward).",
  },
];

export default function SymbolArchive() {
  return (
    <section id="symbols" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Symbol Archive
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Recurring symbols across The Freak Circus — their meanings, appearances, and narrative significance
        </p>

        <div className="space-y-8">
          {symbols.map((symbol) => (
            <div key={symbol.name} className="bg-surface-container border border-outline/20 p-6">
              <h3 className="font-[Creepster] text-2xl text-primary mb-4">
                {symbol.name} Meaning
              </h3>

              <div className="space-y-4 mb-4">
                {symbol.meanings.map((meaning, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4">
                    <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">
                      Layer {i + 1}
                    </div>
                    <div className="font-[Epilogue] text-sm font-bold text-foreground mb-1">
                      {meaning.title}
                    </div>
                    <div className="text-sm text-on-surface-variant">
                      {meaning.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-surface border border-outline/20 p-4">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">
                  Key Appearances
                </div>
                <div className="text-sm text-on-surface-variant">
                  {symbol.appearances}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
