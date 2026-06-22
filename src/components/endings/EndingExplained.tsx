"use client";

import Link from "next/link";

const endings = [
  {
    name: "The Grand Finale",
    character: "Harlequin",
    meaning: "Harlequin's final performance represents the acceptance of performance as identity. The ending suggests that the characters are trapped in eternal roles — the circus is not a place but a state of being. Her bow at the end is both a farewell and a surrender to the loop.",
    symbolism: "The stage represents the narrative itself. Harlequin's costume changes color based on player choices, suggesting identity is fluid within the circus's rules. The audience applause is silent — implying the player is the only real witness.",
    interpretation: "Many players interpret this as the 'acceptance' ending — the protagonist chooses to remain in the circus rather than escape. The loop continues, but with awareness. This aligns with the broader theme of the game: knowledge of the trap does not free you from it.",
  },
  {
    name: "Smile For Me",
    character: "Pierrot",
    meaning: "Pierrot's smile is described as 'the first genuine expression in 47 loops.' This ending suggests that trust — even in a false world — can create moments of authenticity. The garden scene where flowers wilt represents the cost of this trust: beauty fades when examined too closely.",
    symbolism: "The wilting flowers symbolize the decay of memory across loops. Each petal that falls represents a forgotten choice from a previous playthrough. Pierrot's smile is the only thing that persists — suggesting emotion outlasts narrative.",
    interpretation: "Community debate centers on whether this ending is genuinely hopeful or deeply tragic. The smile occurs in a garden that does not exist in the game's map — suggesting it may be a memory of a location from before the circus. This implies the characters had lives before the loop, a theory supported by unused voice lines.",
  },
  {
    name: "The Doctor's Note",
    character: "The Doctor",
    meaning: "The Doctor's secret ending reveals that he has been documenting the circus as a medical experiment. His note — 'Subject is aware of observation' — refers to himself, not the player. This creates an infinite regress: who watches the watcher?",
    symbolism: "The five medical files represent the five senses, each documenting a different aspect of the circus's unreality. File 4 (The Doctor himself) being blank suggests self-awareness removes you from the experiment's data. The mirror in Scene 9 shows Columbina's reflection because The Doctor has begun to see through her perspective.",
    interpretation: "This ending is widely interpreted as the 'meta-narrative' ending — The Doctor represents the game developer, documenting the player's journey through the circus. His precognitive dialogue in Scene 7 suggests he knows the script before the player reaches it, implying he exists outside the narrative timeline.",
  },
  {
    name: "Eternal Silence",
    character: "Pierrot",
    meaning: "The silence ending is the most discussed in the community. Four minutes of black screen followed by post-credits narration that references previous playthroughs. The silence is not absence — it is Pierrot's true voice. The game suggests that all his dialogue was a translation, and silence is the original language.",
    symbolism: "The four-minute duration matches the average time players spend in the garden scene on their first playthrough. This suggests the silence is a compressed version of the entire experience — all moments collapsed into absence. The post-credits narration references choices from previous saves, confirming cross-route memory.",
    interpretation: "The dominant theory is that Eternal Silence represents the 'true' Pierrot — the character stripped of narrative obligation. Without the player, he has nothing to perform. The ending is both liberation and annihilation: freed from the script, he ceases to exist as a character. The narration that follows is not Pierrot speaking, but the circus itself.",
  },
  {
    name: "Columbina's Truth",
    character: "Columbina",
    meaning: "Columbina's Truth is the most complete revelation in the game. The fourth door in her hallway contains a memory fragment showing the circus's origin: a single moment of grief, frozen and repeated. The three loops represent the three stages of mourning — denial, anger, acceptance — and the perfect alignment requirement suggests only complete emotional honesty can reveal the truth.",
    symbolism: "The hallway represents the passage of time within the loop. Each door is a memory: Door 1 (denial) shows the circus as beautiful. Door 2 (anger) shows the performers as prisoners. Door 3 (acceptance) shows the loop as necessary. Door 4 (truth) shows the moment before the circus existed — a normal world where someone lost someone they loved.",
    interpretation: "This ending is widely considered the closest to a 'true ending.' It requires completing all other routes first, suggesting the full picture only emerges after experiencing every perspective. The memory fragment in Door 4 is the same garden from Pierrot's Smile For Me ending, linking the two routes. The community theory is that the circus is a purgatorial loop created by an unresolved grief — and the player is the one who keeps it running by continuing to play.",
  },
  {
    name: "White Room",
    character: "Unknown",
    meaning: "The White Room ending is referenced but never found. The Doctor describes it in Scene 7 with disturbing accuracy: 'A room with no walls, no ceiling, no floor. Only light. And in the center, a chair facing a mirror that shows nothing.' This description matches no location in the game files, suggesting it may be a memory of a place outside the circus.",
    symbolism: "The white room represents absence of narrative — a space without story, character, or choice. The mirror that shows nothing suggests self-awareness without identity. The chair facing the mirror implies the player is meant to sit there, but no sprite exists for this action.",
    interpretation: "The leading theory is that the White Room is the 'developer room' — a debug space that became part of the narrative. The description matches standard game engine default environments: white void, single chair, mirror for reflection testing. If true, this ending would break the fourth wall most completely, revealing the circus as a digital construct.",
  },
  {
    name: "Corrupted Data",
    character: "???",
    meaning: "The Corrupted Data ending displays raw hex values before crashing. The hex, when converted to ASCII, reads: 'The show is over. The audience has left. Why are you still here?' This suggests the ending is not corrupted — it is a message from outside the narrative, directed at the player personally.",
    symbolism: "The hex display uses the same color palette as the game's debug mode. The crash is not a bug — it is a deliberate exit. The message implies the player is the one keeping the circus running, and the only way to 'end' the game is to stop playing. This creates a paradox: the guide you are reading perpetuates the loop it describes.",
    interpretation: "This is the most meta-narrative ending. The community is divided on whether it is a genuine ARG element or a clever use of debug remnants. The message's direct address to the player ('Why are you still here?') breaks the fourth wall completely. Some theorists believe this is the 'truest' ending — not because it reveals lore, but because it reveals the relationship between player and game.",
  },
  {
    name: "Harlequin's Laughter",
    character: "Harlequin",
    meaning: "Harlequin's joke ending is the only one that breaks the horror tone completely. She laughs for 30 seconds, the screen fills with confetti, and the credits roll with circus music. The community initially dismissed this as an easter egg, but analysis reveals the confetti sprites are recycled from the 'wilted flowers' in Pierrot's garden — suggesting even joy is made from sadness.",
    symbolism: "The 30-second laughter matches the duration of the silence in Eternal Silence. The confetti is made of flower petals from Pierrot's garden. The circus music is the same track played backwards in Columbina's hallway. This ending is not a break from the horror — it is the horror wearing a different mask.",
    interpretation: "The dominant interpretation is that Harlequin's Laughter represents the circus's true nature: entertainment built on suffering. The player laughs at the joke ending, not realizing the 'joke' is the entire game. Harlequin's final line — 'You always laugh at the parts that hurt me' — suggests she is aware of the player's emotional distance.",
  },
];

export default function EndingExplained() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Ending Explained — What Does Each Ending Mean?
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Deep analysis of every ending's symbolism, narrative meaning, and community interpretation
        </p>

        <div className="space-y-8">
          {endings.map((e) => (
            <div key={e.name} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-[Epilogue] text-xl font-bold text-foreground">{e.name}</h3>
                <span className="font-[JetBrains_Mono] text-xs text-primary border border-primary/30 px-2 py-1">{e.character}</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1 uppercase tracking-wider">What Does This Ending Mean?</div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{e.meaning}</p>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1 uppercase tracking-wider">Symbolism</div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{e.symbolism}</p>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1 uppercase tracking-wider">Fan Interpretation</div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{e.interpretation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
