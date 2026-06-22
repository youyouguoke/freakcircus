"use client";

const faqs = [
  {
    q: "What is the recommended route order for Freak Circus?",
    a: "The recommended route order is: 1) Pierrot Main Route (Smile For Me ending), 2) Harlequin Main Route (Grand Finale ending), 3) Doctor Main Route (Medical Failure ending), 4) Harlequin True Route (Fractured Ending), 5) Doctor Memory Route (Doctor's Note ending), 6) Pierrot Silent Route (Eternal Silence ending), 7) Columbina Main Route (Eternal Dance ending), 8) Columbina Fractured Route (Columbina's Truth ending). This order minimizes spoilers and ensures you have the prerequisites for secret routes.",
  },
  {
    q: "How long is a Freak Circus playthrough?",
    a: "A single playthrough takes 2-3 hours for a main route. Secret routes take 4-6 hours due to replay requirements. Columbina's Fractured Route takes 6-8 hours due to the 3-loop perfection requirement. Speed-run minimums: Grand Finale (45 min), Smile For Me (50 min), Doctor's Note (2 hours), Eternal Silence (1.5 hours), Columbina's Truth (6+ hours).",
  },
  {
    q: "Which route should I play first?",
    a: "Start with Pierrot Main Route or Harlequin Main Route. Both are beginner-friendly, require no prerequisites, and teach the game's core mechanics. Avoid secret routes on your first playthrough — they contain spoilers that diminish the impact of standard endings. The Pierrot route introduces the comfort/confess dialogue system, while Harlequin's route demonstrates the comedic/aggressive choice branching.",
  },
  {
    q: "How do I unlock the Pierrot Silent Route?",
    a: "Complete Pierrot Main Route first, then fail Harlequin True Route once. In your next playthrough of Pierrot's route, refuse all dialogue for three consecutive scenes in Act III (Scenes 10-12). This is not passive — you must actively select '...' or silence options. The screen stays black for 4 minutes before the Eternal Silence ending plays.",
  },
  {
    q: "How do I unlock the Doctor Memory Route?",
    a: "Complete Doctor Main Route first. In your next playthrough, find all 5 hidden medical files: File 1 in Scene 2 (drawer), File 2 in Scene 4 (cabinet), File 3 in Scene 6 (floorboard), File 4 in Scene 8 (bookshelf), File 5 in Scene 10 (desk). The mirror in Scene 9 only becomes interactive after failing the route once. Collecting all files unlocks the Doctor's Note ending.",
  },
  {
    q: "How do I unlock Columbina's Truth ending?",
    a: "Complete Pierrot Main Route, Doctor Memory Route, and Harlequin True Route first. Then start Columbina's route and achieve perfect alignment across three loops: Loop 1 — choose all 'gentle' responses, Loop 2 — choose all 'truthful' responses, Loop 3 — choose all 'accepting' responses. Any deviation resets to Loop 1, Scene 1. After three perfect loops, her hallway gains a fourth door in Scene 12.",
  },
  {
    q: "What happens if I choose the wrong option?",
    a: "Wrong choices affect affection points and may lock you out of certain endings. However, no choice permanently blocks content — you can always replay the route. Some 'wrong' choices actually unlock hidden content: failing Harlequin's route once unlocks her True Route, and refusing Doctor's examination unlocks a unique dialogue branch. The game tracks your history across saves, so previous 'failures' can become prerequisites for secret routes.",
  },
  {
    q: "Can I get all endings in one playthrough?",
    a: "No. Several endings require replay awareness and cross-route dependencies. Eternal Silence requires refusing dialogue for 3 consecutive scenes. Columbina's Truth requires 3 perfect loops. The Doctor's Note requires finding 5 hidden files across 10 scenes. These cannot be achieved in a single playthrough. The game tracks your history across saves using a hidden counter at offset 0x4A20.",
  },
  {
    q: "What is the easiest route in Freak Circus?",
    a: "Pierrot Main Route and Harlequin Main Route are the easiest. Both require no special conditions — simply complete the route with standard dialogue choices. Pierrot's route is slightly more straightforward (2-3 hours), while Harlequin's introduces comedic/aggressive branching but still leads to a standard ending without prerequisites.",
  },
  {
    q: "What is the hardest route in Freak Circus?",
    a: "Columbina's Fractured Route is the hardest, requiring perfect alignment across three loops with any deviation causing a complete reset. Pierrot's Silent Route is the second hardest, requiring replay awareness and silence mechanics. The Doctor's Memory Route is third, requiring finding 5 hidden files across 10 scenes. The Null Route is technically impossible — no player has legitimately unlocked it.",
  },
  {
    q: "How do hidden triggers work?",
    a: "Hidden triggers are conditions that unlock secret content, routes, or dialogue. They include: replay awareness (4th playthrough changes), cross-route dependencies (completing one route unlocks content in another), failure conditions (failing a route once unlocks a better route), environmental interactions (examining specific objects in specific scenes), and save file behavior (the hidden counter at 0x4A20).",
  },
  {
    q: "What is the Null Route?",
    a: "A corrupted route found in data-mined files but never legitimately unlocked. The player walks through empty corridors with no character sprites until the game soft-locks after 5 minutes. Some theorists believe it is the 'true' White Room ending. Conditions are unknown and may require impossible prerequisites. Community confidence: 23%.",
  },
  {
    q: "How do I find hidden medical files?",
    a: "There are 5 hidden medical files in the Doctor's route: File 1 — Scene 2, search the drawer in the medical tent. File 2 — Scene 4, check the cabinet behind the curtain. File 3 — Scene 6, look under the floorboard near the bed. File 4 — Scene 8, examine the bookshelf (blank file: 'Subject is aware of observation'). File 5 — Scene 10, check the desk drawer in the laboratory. All files must be found before the final encounter to unlock the Doctor's Note ending.",
  },
  {
    q: "What are the missable CGs?",
    a: "Missable CGs include: CG #1 — Pierrot's Garden (ask about flowers in Scene 2), CG #2 — Harlequin's First Performance (accept invitation in Scene 4), CG #3 — Doctor's Medical File #1 (search drawer in Scene 2), CG #4 — Columbina's First Dance (enter first door in Scene 3), CG #5 — Mirror Reflection (look into mirror in Scene 9, requires Doctor failure), CG #6 — Eternal Silence Black Screen (refuse dialogue ×3 in Scene 12). See the Missable Content section above for the complete list.",
  },
  {
    q: "How do I get 100% completion?",
    a: "100% completion requires: all 8 confirmed endings (Grand Finale, Smile For Me, Medical Failure, Doctor's Note, Eternal Silence, Eternal Dance, Columbina's Truth, Harlequin's Laughter), all 5 hidden medical files, all 6 missable CGs, all 5 achievements (Smile For Me, The Show Must Go On, Medical History, Eternal Silence, Columbina's Truth), the hidden post-credits scene (after all endings), and 4th playthrough dialogue changes. Optional: Corrupted Data ending, White Room ending, Null Route. Total estimated time: 15-20 hours.",
  },
  {
    q: "What is the best ending to get first?",
    a: "For new players, Smile For Me (Pierrot) or Grand Finale (Harlequin) are the best first endings. Both are canon endings with no special requirements, provide foundational narrative, and introduce core mechanics. Avoid secret endings on your first playthrough — they contain spoilers that diminish the impact of standard endings. The recommended first route is Pierrot Main.",
  },
  {
    q: "Do choices affect other routes?",
    a: "Yes, choices in one route can affect others through the hidden counter at 0x4A20. Completing a route increments the counter and unlocks new dialogue options in subsequent playthroughs. Some routes require completing others first: Columbina's Truth requires Pierrot Main + Doctor Memory + Harlequin True. Pierrot's Silent Route requires failing Harlequin True once. The game remembers your history even when you start a new save file.",
  },
  {
    q: "What is the hidden counter at 0x4A20?",
    a: "A hidden save file counter that increments on every route completion. It affects available dialogue options, unlocks hidden scenes, and triggers replay-aware content. At 4+ completions, new dialogue options appear referencing previous loops. Deleting all saves resets this counter. The counter is the mechanism behind the 'Pierrot Loop Theory' and 'Timeline Reset Theory.'",
  },
  {
    q: "How do I speed-run Freak Circus?",
    a: "Speed-run strategies: skip all optional dialogue, use the fastest text speed setting, and make only required choices. Documented minimums: Grand Finale (45 minutes), Smile For Me (50 minutes), Doctor's Note (2 hours), Eternal Silence (1.5 hours), Columbina's Truth (6+ hours due to loop requirements). Secret routes cannot be speed-run effectively due to replay prerequisites.",
  },
  {
    q: "What is replay awareness?",
    a: "Replay awareness is the game's mechanic of tracking your playthrough history and changing content accordingly. Evidence: Pierrot references previous routes on the 4th playthrough. Harlequin's 'You again' line appears. New dialogue options unlock. Hidden scenes appear. The hidden counter at 0x4A20 tracks this. Four endings require replay awareness: Eternal Silence, Columbina's Truth, Doctor's Note, and Harlequin's Laughter.",
  },
  {
    q: "Can I skip scenes?",
    a: "No, scenes cannot be skipped on your first playthrough. However, after completing a route once, you can fast-forward through previously seen dialogue. This is useful for replaying routes to unlock secret endings. The fast-forward option appears in the settings menu after your first route completion.",
  },
  {
    q: "What are the route difficulty rankings?",
    a: "Easy: Pierrot Main, Harlequin Main. Medium: Doctor Main. Hard: Harlequin True, Doctor Memory. Very Hard: Pierrot Silent, Columbina Main. Impossible: Columbina Fractured, Null Route. The difficulty rankings are based on: prerequisite complexity, number of required actions, precision needed (perfect loops), and replay requirements.",
  },
  {
    q: "How do I unlock Harlequin's True Route?",
    a: "Complete Harlequin Main Route first, then fail it once by selecting all aggressive options in a second playthrough. In your third playthrough, choose aggressive options in Scene 4, then comedic options in Scene 9. This creates a 'personality fracture' that unlocks the True Route with 7 hidden scenes. The Fractured Ending is the secret ending for this route.",
  },
  {
    q: "What is the White Room?",
    a: "The White Room is an ending referenced in patch notes 1.03 but never officially found. The Doctor describes it in Scene 7: 'A room with no walls, no ceiling, no floor. Only light. And in the center, a chair facing a mirror that shows nothing.' The 'White Room Is The Developer Room' theory suggests it is a debug space that became part of the narrative. No player has unlocked it legitimately.",
  },
  {
    q: "Are there any game-breaking bugs?",
    a: "The Corrupted Data ending displays raw hex and crashes the game. This is intentional, not a bug — the hex reads 'The show is over. The audience has left. Why are you still here?' Some players report soft-locks in the Null Route (empty corridors, no exit). The 4-minute black screen in Eternal Silence is intentional. No confirmed game-breaking bugs exist in the standard routes.",
  },
  {
    q: "What is the fastest way to get all endings?",
    a: "The fastest path to all endings: 1) Pierrot Main (50 min), 2) Harlequin Main (45 min), 3) Doctor Main (1.5 hours), 4) Harlequin True (3 hours, requires failure), 5) Doctor Memory (2 hours, requires file hunt), 6) Pierrot Silent (1.5 hours, requires silence), 7) Columbina Main (2 hours), 8) Columbina Fractured (6+ hours, requires 3 loops). Total: ~17 hours minimum. Add 3-5 hours for optional endings and missable content.",
  },
  {
    q: "How do I know if I missed something?",
    a: "Check the 100% Completion Checklist above. Common missables: CG #1 (ask about flowers), CG #5 (mirror interaction, requires Doctor failure), File 4 (blank file in bookshelf), 4th-playthrough dialogue changes, hidden post-credits scene. The game does not track completion percentage, so use external checklists. The community maintains a comprehensive missable content guide.",
  },
  {
    q: "What is the difference between routes and endings?",
    a: "A route is the path you take through the game (Pierrot, Harlequin, Doctor, Columbina). An ending is the conclusion of that route. Each route has multiple endings: main routes have 2-3 endings (standard + secret), and some routes have additional joke or corrupted endings. The total is 8 confirmed endings across 6 verified routes. Routes are the journey; endings are the destination.",
  },
  {
    q: "Can I save mid-route?",
    a: "Yes, the game allows saving at the end of each scene. However, some secret routes require completing the entire route without saving (Eternal Silence requires continuous silence across 3 scenes). The game auto-saves at key decision points. Save files are stored locally and can be backed up manually. Deleting saves resets the hidden counter at 0x4A20.",
  },
  {
    q: "What is the most important choice in the game?",
    a: "The most consequential choice is in Scene 9 (The Mirror): looking into the mirror reveals cross-route awareness, breaking the mirror unlocks File 4, and ignoring it locks you out of several secret endings. This choice affects multiple routes and is the pivot point for the Timeline Reset Theory. However, no single choice permanently blocks content — you can always replay.",
  },
];

export default function WalkthroughFAQ() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Walkthrough FAQ — 30 Most Asked Questions
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete answers to the most searched questions about Freak Circus routes, walkthroughs, choices, and hidden triggers
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