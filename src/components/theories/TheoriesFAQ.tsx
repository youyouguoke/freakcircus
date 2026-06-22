"use client";

const faqs = [
  {
    q: "Is the circus real in Freak Circus?",
    a: "The 'Circus Does Not Exist' theory suggests the circus is not a physical location but a psychological construct — a purgatorial loop created by unresolved grief. The four characters represent stages of mourning: denial (Harlequin), anger (Doctor), bargaining (Pierrot), acceptance (Columbina). The player is the one who keeps it running by continuing to play.",
  },
  {
    q: "Does Pierrot remember previous routes?",
    a: "Yes, the 'Pierrot Loop Theory' is community-accepted with 82% confidence. On the 4th playthrough, Pierrot references choices from previous routes that the player never selected in the current save. Counter value at offset 0x4A20 affects his dialogue options. He also references Columbina's hallway — a location he should not know about.",
  },
  {
    q: "Why does the Doctor know impossible information?",
    a: "The 'Doctor Is The Observer' theory proposes that The Doctor is aware of the game's script and endings before the player reaches them. His Scene 7 description of the White Room ending matches unused files found in build 1.04. Some theorists believe he represents the game's developer consciousness within the narrative — he knows impossible information because he is outside the narrative timeline.",
  },
  {
    q: "What causes timeline corruption in Freak Circus?",
    a: "The 'Memory Corruption Theory' suggests that save file corruption is not a bug but a narrative mechanic. The 'Corrupted Data' ending displays raw hex that reads 'The show is over. The audience has left. Why are you still here?' The 'Timeline Reset Theory' proposes that each route completion adds another layer to the nested loop system, and at 4+ completions, new dialogue options appear referencing previous loops.",
  },
  {
    q: "Who is controlling the loops in Freak Circus?",
    a: "No confirmed answer. The 'Circus Does Not Exist' theory suggests the player is the one keeping the loop running by continuing to play. The 'Columbina's Memory Is The Key' theory proposes she may be the orchestrator — her three-loop structure mirrors the game's overall architecture. The 'Harlequin Controls The Branches' theory suggests Harlequin influences other routes indirectly through hidden causal connections.",
  },
  {
    q: "Are all endings connected in Freak Circus?",
    a: "Yes, according to the 'Timeline Reset Theory' and 'Memory Corruption Theory.' The hidden counter at 0x4A20 increments on every route completion and affects available dialogue options. Completing all 8 confirmed endings triggers a hidden post-credits scene where all four characters discuss the player in third person, breaking the fourth wall.",
  },
  {
    q: "What is the Pierrot Loop Theory?",
    a: "The theory that Pierrot remembers player behavior across save files. Evidence: on the 4th playthrough, he references choices from previous routes that the player never selected in the current save. Counter value at offset 0x4A20 affects his dialogue options. His Eternal Silence ending post-credits narration references previous playthroughs. Community confidence: 82%.",
  },
  {
    q: "What is the Doctor Awareness Theory?",
    a: "The theory that The Doctor is aware of the player directly, breaking the fourth wall through clinical observations. Evidence: he describes the White Room ending in Scene 7 before it becomes accessible. His medical files contain dates from 2003-2007, suggesting he was a real physician. Some theorists believe he represents the game's developer consciousness. Community confidence: 67% (controversial).",
  },
  {
    q: "What is the Memory Corruption Theory?",
    a: "The theory that save file corruption is a narrative mechanic, not a bug. Evidence: the Corrupted Data ending's hex message reads 'The show is over. The audience has left. Why are you still here?' The game intentionally corrupts saves to communicate with the player. The hidden counter at 0x4A20 tracks route completions and affects dialogue. Community confidence: 76%.",
  },
  {
    q: "What is the Circus Does Not Exist Theory?",
    a: "The theory that the circus is a psychological construct — a purgatorial loop created by unresolved grief. Evidence: the four characters represent stages of mourning (denial, anger, bargaining, acceptance). The player is the one keeping it running by continuing to play. The Corrupted Data ending directly addresses the player. Community confidence: 58% (controversial).",
  },
  {
    q: "What is the Timeline Reset Theory?",
    a: "The theory that the game operates on a nested loop system. Evidence: each character route is a smaller loop within the overall circus loop. Completing a route adds another layer, not breaking the loop. At 4+ completions, new dialogue options appear referencing previous loops. The hidden counter at 0x4A20 increments on every completion. Community confidence: 85% (highest accepted theory).",
  },
  {
    q: "What is the White Room Theory?",
    a: "The theory that the White Room ending is a debug space that became part of the narrative. Evidence: The Doctor's description matches standard game engine default environments (white void, single chair, mirror for reflection testing). The room has no walls, ceiling, or floor — suggesting it is outside the game's normal geometry. Community confidence: 52% (unverified).",
  },
  {
    q: "What is the Harlequin Not Human Theory?",
    a: "The theory that Harlequin is not a scripted character but an adaptive AI construct. Evidence: her dialogue contradicts itself within the same scene. Her 'You again' line on the 4th playthrough does not appear in script files. She describes Pierrot's garden with details the player never saw. Community confidence: 61% (controversial).",
  },
  {
    q: "What is the Masks Hide The Same Face Theory?",
    a: "The theory that all four characters represent the same fractured identity. Evidence: every character's mask may represent a different response to trauma. The four characters (Pierrot, Harlequin, Doctor, Columbina) correspond to stages of mourning. The mirror in Columbina's hallway shows reflections that should not exist. Community confidence: 71%.",
  },
  {
    q: "What is the Broken Clock Theory?",
    a: "The theory that the clock in the main hall (always showing 11:47) is a hidden timer for a yet-undiscovered event. Evidence: the timestamp appears in 12 different scenes across all routes. The community has mapped its appearance to specific dialogue triggers. The time 11:47 may reference a real-world event. Community confidence: 48% (unverified).",
  },
  {
    q: "What is the Missing Day Theory?",
    a: "The theory that the game timeline has a hidden 24-hour gap between Scene 7 and Scene 8. Evidence: environmental details change (lighting shifts from day to night instantly). Data miners found a 'Day 8' folder in build 1.04 containing unused assets for a full additional day. No character references this gap. Community confidence: 55% (controversial).",
  },
  {
    q: "Why does Pierrot reference previous playthroughs?",
    a: "The Pierrot Loop Theory explains this as replay awareness. The game tracks your history across saves using a hidden counter at offset 0x4A20. On the 4th playthrough, Pierrot's dialogue changes to reference choices from previous routes. This is not random — the counter value specifically affects which dialogue options are available.",
  },
  {
    q: "What is the Null Protagonist Theory?",
    a: "The theory that a hidden route exists where the protagonist has no dialogue and characters ignore them. Evidence: data-mined from build 1.04. The route contains a single empty room with a chair facing a blank wall. Some theorists believe it is the 'true' White Room ending. Community confidence: 23% (corrupted/lowest).",
  },
  {
    q: "Does Columbina control the circus?",
    a: "The 'Columbina's Memory Is The Key' theory suggests she may be the orchestrator. Evidence: her three-loop storyline mirrors the game's overall narrative architecture. Her Truth ending requires completing all other routes first. Unused voice lines contain a conversation between her and Pierrot discussing the player in third person. Community confidence: 78%.",
  },
  {
    q: "What is the true meaning of Freak Circus?",
    a: "No confirmed answer. The 'Circus Does Not Exist' theory suggests it is a purgatorial loop created by unresolved grief. The 'Timeline Reset Theory' suggests it is a nested loop system where the player is trapped. The 'Memory Corruption Theory' suggests the game itself is aware of the player and communicates through corrupted saves. The most accepted theory is Timeline Reset (85% confidence).",
  },
  {
    q: "Are the characters real people?",
    a: "The 'Masks Hide The Same Face' theory suggests all four characters represent the same fractured identity — aspects of a single consciousness responding to trauma. The 'Doctor Is The Observer' theory suggests The Doctor was a real physician (medical files contain dates 2003-2007). The 'Harlequin Is Not Human' theory suggests she is an adaptive AI construct. No theory confirms all characters are real people.",
  },
  {
    q: "What is the significance of 11:47?",
    a: "The Broken Clock Theory suggests the clock's fixed time (11:47) is a hidden timer for a yet-undiscovered event. Evidence: it appears in 12 scenes across all routes, mapped to specific dialogue triggers. Some theorists believe 11:47 references a real-world event related to the game's development. Others suggest it is the time the 'original' circus performance ended. Community confidence: 48%.",
  },
  {
    q: "Why does the game crash in Corrupted Data ending?",
    a: "The Memory Corruption Theory suggests the crash is intentional, not a bug. The hex display reads: 'The show is over. The audience has left. Why are you still here?' This is a direct address to the player. The crash forces the player to restart, continuing the loop. Some theorists believe the only way to 'end' the game is to stop playing entirely.",
  },
  {
    q: "What is the connection between Pierrot and Columbina?",
    a: "The most theorized relationship in the game. Evidence: in the Eternal Silence ending, Pierrot's narration references Columbina's hallway — a location he should not know about. Unused voice lines contain a hidden conversation between them. Columbina's Truth ending requires completing Pierrot's route first, suggesting an unspoken dependency. The 'Masks Hide The Same Face' theory suggests they may be aspects of the same identity.",
  },
  {
    q: "What is the fourth wall in Freak Circus?",
    a: "The game breaks the fourth wall in multiple ways: The Doctor describes endings before they are accessible. Pierrot references previous playthroughs. The Corrupted Data ending addresses the player directly. The hidden post-credits scene (after all 8 endings) shows characters discussing the player in third person. The 'Doctor Is The Observer' theory suggests the fourth wall breaks are intentional narrative devices, not easter eggs.",
  },
  {
    q: "How do loops work in Freak Circus?",
    a: "According to the Timeline Reset Theory (85% confidence), the game operates on a nested loop system. Each character route is a smaller loop within the overall circus loop. Completing a route does not break the loop — it adds another layer. The hidden counter at 0x4A20 increments on every completion. At 4+ completions, new dialogue options appear referencing previous loops. Deleting all saves resets the counter.",
  },
  {
    q: "What is the significance of the masks?",
    a: "The 'Masks Hide The Same Face' theory suggests every character's mask represents the same fractured identity viewed from different angles. The four characters correspond to stages of mourning: Harlequin (denial), Doctor (anger), Pierrot (bargaining), Columbina (acceptance). The masks are not disguises — they are the truth, and the faces beneath are the performance.",
  },
  {
    q: "Is there a hidden true ending?",
    a: "No confirmed true ending exists. Community theory suggests it requires completing all four routes in a specific order (Pierrot → Harlequin → Doctor → Columbina), achieving all secret endings, and maintaining a perfect save file. Columbina's three-loop storyline may be the final piece. No player has confirmed this sequence produces a unique ending. The 'White Room' ending, referenced but never found, is theorized to be the true ending.",
  },
  {
    q: "What is the replay anomaly in Freak Circus?",
    a: "Replay anomalies are changes that occur only after multiple playthroughs. Evidence: Pierrot's dialogue changes on the 4th playthrough. Harlequin's 'You again' line appears. New dialogue options become available. The hidden counter at 0x4A20 tracks these. Four endings require replay awareness: Eternal Silence, Columbina's Truth, Doctor's Note, and Harlequin's Laughter. The game remembers your history even when you start a new save file.",
  },
  {
    q: "Why does the Doctor describe the White Room?",
    a: "The 'Doctor Is The Observer' theory suggests The Doctor knows the script before the player reaches it because he represents the developer consciousness. His Scene 7 description of the White Room matches unused files found in build 1.04. The 'White Room Is The Developer Room' theory suggests he is describing a debug space that became part of the narrative. His precognitive dialogue is the strongest evidence for meta-narrative awareness.",
  },
];

export default function TheoriesFAQ() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Theory FAQ — 30 Most Asked Questions
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete answers to the most searched questions about Freak Circus theories, lore, hidden meaning, and timeline analysis
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-surface-container border border-outline/20 group">
              <summary className="p-4 cursor-pointer font-medium text-foreground hover:text-primary transition-colors list-none flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">[+]</span>
              </summary>
              <div className="px-4 pb-4 text-on-surface-variant text-sm">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
