"use client";

const files = [
  {
    id: "FILE_NULL",
    category: "Data-mined",
    title: "The Null Performer",
    summary: "A missing performer referenced in 14 separate dialogue files but absent from all character rosters. Some investigators believe this entity controls route branching.",
    evidence: "Found in dialogue files for scenes 3, 7, 11, and 14. Characters refer to 'the one who watches' or 'the empty costume.' The entity has no sprite, no voice file, and no name in the character database.",
    interpretation: "The community is divided on the Null Performer's identity. Some believe it is the game's director or narrator, watching the player's progress. Others suggest it represents the player themselves — a performer who exists in the circus but has no scripted role. A third theory suggests the Null Performer is a cut character whose data was partially removed but whose references remain in the dialogue files.",
  },
  {
    id: "OBSERVER_REC",
    category: "Unused Files",
    title: "The Observer Record",
    summary: "An unnamed entity may be watching route progression directly. Unused audio files contain breathing sounds that do not match any character's voice profile.",
    evidence: "Audio file OBS_03.wav contains 45 seconds of breathing at 12 BPM. The file is not referenced in any scene script but plays at random during loading screens. Voice analysis confirms the breathing does not match any of the four main characters or the narrator.",
    interpretation: "The Observer Record suggests an unseen entity is monitoring the player's progress. Some theorists believe this is the 'Director' referenced in unused files — a fifth character who controls the circus from outside the narrative. Others suggest the breathing represents the player's own presence within the game world, creating a recursive loop where the player is both observer and observed.",
  },
  {
    id: "LOOP_13",
    category: "Referenced",
    title: "The Unending Loop",
    summary: "A hidden timeline where no ending can trigger. The game continues indefinitely, with characters gradually forgetting the protagonist exists.",
    evidence: "Referenced in 3 dialogue files and 1 scene script. The script describes a state where 'all endings are disabled' and 'characters respond to the player as if they are a stranger.' Data miners found a flag called LOOP_INFINITY that is never set during normal gameplay.",
    interpretation: "The Unending Loop may be a punishment state for players who attempt to break the game mechanics. Some theorists believe it is the 'true' state of the circus — a purgatorial system where characters are trapped in endless repetition. Others suggest it is a debug mode left by developers for testing infinite gameplay scenarios.",
  },
  {
    id: "FIRE_00",
    category: "Corrupted",
    title: "The Fire That Wasn't",
    summary: "Conflicting records suggest the circus both burned and did not burn. Some files reference fire damage that does not appear in any visual asset.",
    evidence: "Newspaper fragments found in 3 scenes reference a fire in 1923, 1954, and 1987 simultaneously. No burn marks appear on current circus architecture. The Doctor's files describe 'reconstruction' rather than 'recovery,' suggesting the circus was rebuilt rather than repaired after the fire.",
    interpretation: "The Fire That Wasn't is the central paradox of The Freak Circus's lore. Some theorists believe the fire is a metaphor for memory erasure — each 'burning' represents a reset of the characters' memories. Others suggest the circus exists in multiple timelines simultaneously, and the fire happened in some but not others. A third theory suggests the fire is a future event that the characters are predicting through precognitive dialogue.",
  },
];

export default function RestrictedFiles() {
  return (
    <section id="restricted" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary">
            Restricted Archive Files
          </h2>
          <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-blood text-blood">
            CLASSIFIED
          </span>
        </div>
        <p className="text-on-surface-variant text-sm mb-8">
          Forbidden records with archive summaries, evidence, and community interpretations
        </p>

        <div className="space-y-6">
          {files.map((file) => (
            <div key={file.id} className="bg-surface-container border border-blood/30 p-6">
              <div className="flex justify-between items-start mb-2">
                <div className="font-[JetBrains_Mono] text-xs text-primary">
                  {file.id}
                </div>
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                  {file.category}
                </div>
              </div>

              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
                {file.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">
                    Archive Summary
                  </div>
                  <p className="text-on-surface-variant text-sm">
                    {file.summary}
                  </p>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">
                    Evidence
                  </div>
                  <p className="text-on-surface-variant text-sm">
                    {file.evidence}
                  </p>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">
                    Community Interpretation
                  </div>
                  <p className="text-on-surface-variant text-sm">
                    {file.interpretation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
