"use client";

const faqs = [
  {
    q: "How many endings are there in Freak Circus?",
    a: "The community has confirmed 8 endings, with 6 additional endings under investigation or unverified. The exact total remains unknown as data miners continue to find references to unused endings in game files. The 8 confirmed endings are: Grand Finale, Smile For Me, Doctor's Note, Eternal Silence, Columbina's Truth, White Room, Corrupted Data, and Harlequin's Laughter.",
  },
  {
    q: "What is the true ending of Freak Circus?",
    a: "No single ending is universally accepted as the true ending. The community theory suggests it requires completing all four routes in a specific order, with Columbina's three-loop storyline being the final piece. Columbina's Truth is widely considered the closest to a true ending because it reveals the circus's origin, but this remains unverified by the developer.",
  },
  {
    q: "Which ending is canon in Freak Circus?",
    a: "The Grand Finale (Harlequin) and Smile For Me (Pierrot) are the two canon endings most players see on their first playthrough. These resolve the main narrative threads without requiring special conditions. However, the developer has not officially confirmed any ending as canon, leaving the question open to interpretation.",
  },
  {
    q: "What is the hardest ending to unlock?",
    a: "Columbina's Truth requires perfect alignment across three loops with no mistakes — any deviation resets to Loop 1, Scene 1. Corrupted Data may be impossible to unlock legitimately — no player has verified conditions. The Doctor's Note is also difficult, requiring finding 5 hidden medical files across 10 scenes.",
  },
  {
    q: "Can you get all endings in one playthrough?",
    a: "No. Several endings require replay awareness and cross-route dependencies. The game tracks your history across saves using a hidden counter at offset 0x4A20. Eternal Silence requires refusing dialogue for 3 consecutive scenes. Columbina's Truth requires 3 perfect loops. These cannot be achieved in a single playthrough.",
  },
  {
    q: "How to unlock Pierrot good ending?",
    a: "Pierrot's good ending, Smile For Me, is achieved by accepting his offer during the garden scene in Act III. Approach him in Scene 3, accept his offer to 'stay a while' in Scene 6, and choose 'I trust you' in Scene 9. This is the standard ending for his route and requires no special conditions.",
  },
  {
    q: "How to unlock Pierrot secret ending?",
    a: "Pierrot's secret ending, Eternal Silence, requires refusing all dialogue for three consecutive scenes in Act III. This is not a passive ending — silence becomes a deliberate choice that breaks the game's narrative contract. The screen remains black for 4 minutes before credits roll, and post-credits narration references previous playthroughs.",
  },
  {
    q: "How to unlock Harlequin secret ending?",
    a: "Harlequin's secret ending, Fractured Ending, unlocks after failing her main route once. Choose aggressive options in Scene 4, then comedic options in Scene 9. This creates a personality fracture that reveals her true nature. The route contains 7 hidden scenes that only appear after this failure condition.",
  },
  {
    q: "How to unlock Doctor good ending?",
    a: "The Doctor does not have a traditionally 'good' ending. His standard ending (Medical Failure) results in him abandoning the patient. His secret ending (Doctor's Note) requires finding all 5 hidden medical files: File 1 in Scene 2 (drawer), File 2 in Scene 4 (cabinet), File 3 in Scene 6 (floorboard), File 4 in Scene 8 (bookshelf), File 5 in Scene 10 (desk).",
  },
  {
    q: "How to unlock Columbina true ending?",
    a: "Columbina's Truth requires perfect alignment across three loops. Loop 1: choose all 'gentle' responses. Loop 2: choose all 'truthful' responses. Loop 3: choose all 'accepting' responses. Any deviation resets to Loop 1, Scene 1. After three perfect loops, her hallway gains a fourth door in Scene 12 containing the memory fragment.",
  },
  {
    q: "What is Corrupted Data ending?",
    a: "A rumored ending found in unused game files. The screen displays raw hex before crashing. The hex, when converted to ASCII, reads: 'The show is over. The audience has left. Why are you still here?' It may be a debug remnant, ARG element, or intentionally hidden ending directed at the player.",
  },
  {
    q: "Is Null Route real?",
    a: "Null Route was discovered through data mining — a branch with no characters that soft-locks after 5 minutes. No player has legitimately unlocked it. The route contains a single empty room with a chair facing a blank wall. Some theorists believe it is the 'true' White Room ending, but this is unverified.",
  },
  {
    q: "What is the White Room Ending?",
    a: "Mentioned in patch notes 1.03 but never officially found. The Doctor describes it in Scene 7 with disturbing accuracy: 'A room with no walls, no ceiling, no floor. Only light. And in the center, a chair facing a mirror that shows nothing.' This description matches no location in the game files.",
  },
  {
    q: "Do endings change after replaying?",
    a: "Yes. Four endings require replay awareness: Eternal Silence, Columbina's Truth, The Doctor's Note, and Harlequin's Laughter. Pierrot's dialogue changes after repeated playthroughs. On the 4th playthrough, he references choices from previous routes that the player never selected in the current save.",
  },
  {
    q: "Does save data affect endings?",
    a: "Yes. A hidden counter at offset 0x4A20 increments on every route completion and affects available dialogue options. Deleting all saves resets this counter. This is why some endings require multiple playthroughs — the game remembers your history even when you start a new save file.",
  },
  {
    q: "Can you save The Doctor?",
    a: "The Doctor's route does not have a 'save' ending. His standard ending (Medical Failure) ends with him abandoning the patient. His secret ending (Doctor's Note) reveals he is documenting the circus as a medical experiment. The White Room ending, referenced but never found, may represent the closest to a 'saved' state.",
  },
  {
    q: "Can Pierrot survive?",
    a: "Pierrot's Smile For Me ending is the closest to survival — he smiles genuinely for the first time in 47 loops. However, his Eternal Silence ending suggests that without the player's dialogue, he ceases to exist as a character. Whether 'survival' means continuing the loop or escaping it is the central question of his route.",
  },
  {
    q: "Are there secret endings?",
    a: "Yes, three confirmed secret endings: Eternal Silence (Pierrot), The Doctor's Note (The Doctor), and Columbina's Truth (Columbina). Harlequin's Fractured Ending is also considered secret by some community members. Additionally, Corrupted Data and White Room may be secret endings that have not been legitimately unlocked.",
  },
  {
    q: "How long does it take to get all endings?",
    a: "A single playthrough takes 2-3 hours. Getting all confirmed endings requires at least 4 playthroughs due to replay dependencies. Columbina's Truth alone requires 3 perfect loops, each taking 2+ hours. The total time to see all 8 confirmed endings is estimated at 15-20 hours. Unverified endings may require additional time.",
  },
  {
    q: "What is the ending order?",
    a: "The recommended ending order is: 1) Grand Finale (Harlequin, canon), 2) Smile For Me (Pierrot, canon), 3) Harlequin's Laughter (joke), 4) Doctor's Note (secret), 5) Eternal Silence (secret), 6) Columbina's Truth (secret). Corrupted Data and White Room are unverified and may not be achievable.",
  },
  {
    q: "Which ending should I get first?",
    a: "New players should start with The Grand Finale (Harlequin route) or Smile For Me (Pierrot route). These are canon endings with no special requirements and provide the foundational narrative. Avoid secret endings on your first playthrough — they contain spoilers that diminish the impact of the standard endings.",
  },
  {
    q: "What is the easiest ending?",
    a: "The Grand Finale (Harlequin) and Smile For Me (Pierrot) are the easiest endings — they are the standard conclusions for their respective routes and require no special conditions. Simply complete the route with normal dialogue choices. Both are achievable on the first playthrough.",
  },
  {
    q: "What is the best ending?",
    a: "'Best' is subjective. Smile For Me is the most hopeful. Columbina's Truth is the most complete. Eternal Silence is the most discussed. Harlequin's Laughter is the most entertaining. The community consensus is that Columbina's Truth provides the most satisfying narrative closure, but it requires completing all other routes first.",
  },
  {
    q: "Does Freak Circus have a bad ending?",
    a: "Medical Failure (The Doctor) is the closest to a 'bad' ending — he abandons the patient. Corrupted Data is also negative — the game crashes. However, Eternal Silence is arguably the most tragic: Pierrot ceases to exist without the player's dialogue, and the post-credits narration suggests the circus continues without him.",
  },
  {
    q: "What happens after all endings?",
    a: "After completing all 8 confirmed endings, a hidden post-credits scene plays. The scene shows all four characters in a single room, discussing the player in third person. This breaks the fourth wall and suggests the characters are aware of being in a game. The scene only plays once and cannot be re-watched.",
  },
  {
    q: "Can you skip endings?",
    a: "No, endings cannot be skipped. However, you can speed-run to specific endings by making the required choices quickly. The community has documented minimum playthrough times: Grand Finale (45 minutes), Smile For Me (50 minutes), Doctor's Note (2 hours), Eternal Silence (1.5 hours), Columbina's Truth (6+ hours due to loop requirements).",
  },
  {
    q: "Are endings different on replay?",
    a: "Yes, four endings are replay-aware: Eternal Silence, Columbina's Truth, Doctor's Note, and Harlequin's Laughter. On subsequent playthroughs, dialogue options change, hidden scenes appear, and ending conditions become easier or harder depending on your previous choices. The game tracks this using a hidden counter at offset 0x4A20.",
  },
  {
    q: "What is the ending timeline?",
    a: "The chronological order of ending discovery by the community: 2024 — Grand Finale, Smile For Me. 2025 — Eternal Silence, Doctor's Note, Harlequin's Laughter, White Room mentioned. 2026 — Columbina's Truth, Corrupted Data, Null Route discovered. This timeline reflects community verification, not in-game chronology.",
  },
  {
    q: "How to unlock the true ending?",
    a: "The true ending remains unverified. Community theory suggests: complete all four routes in order (Pierrot → Harlequin → Doctor → Columbina), achieve all secret endings, and maintain a perfect save file. Columbina's three-loop storyline may be the final piece. No player has confirmed this sequence produces a unique ending.",
  },
  {
    q: "What is the ending explained?",
    a: "Each ending has multiple layers of meaning. The canon endings (Grand Finale, Smile For Me) represent acceptance of the loop. The secret endings (Eternal Silence, Doctor's Note, Columbina's Truth) reveal the circus's true nature. The corrupted endings (Corrupted Data, White Room) break the fourth wall. The joke ending (Harlequin's Laughter) subverts the horror tone while reinforcing it. See the 'Ending Explained' section above for detailed analysis of each ending's symbolism and interpretation.",
  },
];

export default function EndingsFAQ() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Ending FAQ — 30 Most Asked Questions
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete answers to the most searched questions about Freak Circus endings, unlock conditions, and walkthroughs
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
