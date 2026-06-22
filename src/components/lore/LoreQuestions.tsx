"use client";

const faqs = [
  {
    q: "What is The Freak Circus really about?",
    a: "The Freak Circus is a psychological horror story about memory corruption, repeating timelines, and unreliable narration. The game presents itself as a visual novel with multiple character routes, but the true narrative is hidden across all routes. No single playthrough reveals the complete story. The circus is a closed system where time loops, characters remember previous playthroughs, and the player is not an observer but a participant in the loop.",
  },
  {
    q: "Is the Circus real?",
    a: "Within the game's narrative, the circus exists as a physical location that appears and disappears across different time periods. The 1945 Timeline Fracture memo describes it vanishing for 72 hours and returning with performers of different ages. However, the 'reality' of the circus is questionable — the White Room may be a metaphor for the space between routes, and the Doctor's notes suggest the circus is a construct rather than a place.",
  },
  {
    q: "Why does time repeat?",
    a: "Time repeats because of the Timeline Fracture in 1945. The fracture created a closed loop where events repeat but characters retain fragments of memory from previous loops. The hidden counter at 0x4A20 tracks how many loops the player has completed, and at 4+ completions, characters begin referencing previous loops directly. The repetition is not a bug — it is the game's central mechanic and narrative device.",
  },
  {
    q: "What happened before the game begins?",
    a: "The game begins in medias res — the circus has already existed for at least 139 years (1887-2026). The pre-game history includes: the 1887 opening, the 1892 missing child, the 1903 Mirror Hall Incident, the 1917 arrival of the Doctor, and the 1945 Timeline Fracture. These events are documented in recovered records but are never shown in gameplay. The player's first route is not the beginning of the story — it is another iteration of an ongoing loop.",
  },
  {
    q: "Who created the Circus?",
    a: "The creator of the circus is unknown. The 'Doctor Created Circus' theory suggests The Doctor is the architect, based on his medical files, the White Room description, and his precognitive dialogue. However, the 'Columbina Watches Player' theory suggests she is the true architect, as her route requires cross-route completion and her hallway gains a 4th door after 3 loops. The 'Null Performer' theory proposes an unnamed entity as the creator. No theory has been confirmed.",
  },
  {
    q: "What is the White Room?",
    a: "The White Room is a space described by The Doctor in Scene 7: 'A room with no walls, no ceiling, no floor. Only light. And in the center, a chair facing a mirror that shows nothing.' It has never been found by players. The 'White Room Is The Developer Room' theory suggests it is a debug space that became part of the narrative. The 'White Room Is The Space Between Routes' theory suggests it is a metaphor for the loading screen between playthroughs. The 'White Room Is The True Ending' theory suggests it is the final destination of all routes.",
  },
  {
    q: "Why are memories corrupted?",
    a: "Memories are corrupted because of the Timeline Fracture. The 1945 event broke the linear flow of time, causing memories to bleed between loops. Characters remember events from routes the player has not completed. The player remembers events from previous playthroughs. The hidden counter at 0x4A20 tracks this corruption — at higher values, more memories surface. The corruption is not a malfunction — it is the mechanism by which the true story is revealed.",
  },
  {
    q: "Are all routes connected?",
    a: "Yes, all routes are connected through the hidden counter at 0x4A20 and cross-route memory. Evidence: the mirror in Scene 9 reflects the previous route character, Harlequin says 'You again' on the 4th playthrough regardless of route, Pierrot references previous routes in his dialogue, and Columbina's route requires completing other routes first. The game is designed as a single narrative fragmented across multiple routes, not as separate stories.",
  },
  {
    q: "What is the true timeline?",
    a: "The true timeline is unknown. The documented timeline (1887-2026) is based on recovered records, but these records may be corrupted or fabricated. The 1945 Timeline Fracture suggests the timeline is not linear — events may occur in different orders across different loops. The 'Timeline Reset Theory' proposes that the entire game is a single loop containing smaller loops within each route. The 'True Timeline' may not exist in a form that human cognition can process.",
  },
  {
    q: "What is the meaning of the masks?",
    a: "The masks represent the roles the characters are forced to play. Every performer wears a mask, but the masks are never mentioned in dialogue. In datamined files, the mask layers are labeled 'MASK_PERMANENT' — suggesting they were never meant to be removed. The 'Mask Symbolism' theory proposes that the masks represent the separation between the character's true self and their performed identity. The player also wears a mask — the mask of 'choice' — making choices that are not truly free.",
  },
  {
    q: "What is the Red Thread?",
    a: "The Red Thread is a recurring symbol that appears in the post-credits of Pierrot's Smile For Me ending, Pierrot's garden, Harlequin's ribbon, and Columbina's bracelet. It represents the connection between the player and the circus — a thread that cannot be cut, only tangled. The thread is visible in 4 routes but mentioned in dialogue only once. Players report seeing it move in static scenes. Its movement is tied to the hidden counter, suggesting it is a physical manifestation of the player's history.",
  },
  {
    q: "What is the Mirror Hall?",
    a: "The Mirror Hall is a location referenced in the 1903 Incident Report. Seven performers entered; three exited; four remained as reflections. The mirrors were not installed until 1905, two years after the incident. The Mirror Hall is the central symbol of fractured memory — it shows not what is present, but what has been. The mirror in Scene 9 uses a variable called 'PREVIOUS_ROUTE_SPRITE', confirming that the game's mirrors are designed to show memory, not reality.",
  },
  {
    q: "What is the Null Route?",
    a: "The Null Route is a corrupted route found in datamined files. The player walks through empty corridors with no character sprites until the game soft-locks after 5 minutes. The 'Null Route Is The True White Room' theory suggests it is the space between all routes. The 'Null Route Is Cut Content' theory suggests it was removed before release. The 'Null Route Is An ARG Element' theory suggests it is intentionally hidden. No player has legitimately unlocked it.",
  },
  {
    q: "Why does the Doctor know the future?",
    a: "The Doctor's precognitive dialogue in Scene 7 describes endings before they occur. This is not foresight — it is memory. The Doctor has experienced all routes before the player. His medical files reference events from routes he is not in. The 'Doctor Awareness Theory' proposes that he is the only character who remembers all loops simultaneously. The 'Doctor Created Circus' theory proposes that he designed the loop system.",
  },
  {
    q: "What is the significance of 11:47?",
    a: "11:47 is the time shown on the broken clock in Scene 3. It appears in 3 different route files as a timestamp. The Doctor's notes mention 11:47 as 'the time when the first patient forgot their name.' The 1903 Mirror Hall Incident occurred at 11:47 PM. The time may represent the moment the Timeline Fracture began — the exact second when linear time broke and the loop started.",
  },
  {
    q: "What is the hidden counter at 0x4A20?",
    a: "The hidden counter at save offset 0x4A20 increments on every route completion. It affects dialogue options, unlocks hidden scenes, and triggers replay-aware content. At 4+ completions, new dialogue appears. The counter persists across save files — deleting saves resets it. It is the mechanism behind the 'Pierrot Loop Theory' and 'Timeline Reset Theory.' The counter is not documented in the game — it was discovered by dataminers.",
  },
  {
    q: "What is the relationship between Pierrot and Columbina?",
    a: "Pierrot and Columbina have a complex relationship that changes across loops. In the main routes, they are fellow performers. In the secret routes, they are adversaries. In the 4th-playthrough dialogue, they reference each other as if they have met outside the circus. The 'Pierrot Loop Theory' suggests they are the same entity in different loops. The 'Columbina Watches Player' theory suggests she controls Pierrot's memories.",
  },
  {
    q: "What is the White Room Is The Developer Room theory?",
    a: "This theory proposes that the White Room is a literal reference to the game's development environment. The description matches a standard Unity testing room: no walls, no ceiling, no floor, only light, a chair, and a disabled camera render. The 'mirror that shows nothing' may be a reference to a camera that is not rendering. If true, the Doctor is aware that he is in a game — making him the only character with meta-awareness.",
  },
  {
    q: "What is the true ending of The Freak Circus?",
    a: "There is no confirmed 'true ending.' The 8 verified endings are: Grand Finale, Smile For Me, Medical Failure, Doctor's Note, Eternal Silence, Eternal Dance, Columbina's Truth, and Harlequin's Laughter. The Corrupted Data ending and White Room ending are unverified. The 'True Ending' may not exist — the game may be designed as an infinite loop with no escape. The post-credits scene (all endings) shows all four characters in the White Room looking at the player, suggesting the 'true ending' is the player's realization that they are part of the loop.",
  },
  {
    q: "Why does Harlequin say 'You again'?",
    a: "On the 4th playthrough, Harlequin says 'You again' regardless of current route. This dialogue is not in her route files — it is in a shared file that all routes reference. She remembers the player across all routes, not just her own. This is evidence of cross-route memory and supports the 'Harlequin Loop Theory' — she is aware of the loop and recognizes the player as a recurring presence.",
  },
  {
    q: "What is the meaning of the 4th door?",
    a: "After 3 perfect loops in Columbina's route, her hallway gains a 4th door. The door was always in the background files but invisible. It represents the 'truth' that is hidden until the player has experienced enough of the loop. The 4th door may lead to the White Room, or to a new route that has not been discovered. Its existence confirms that the game contains content that is not accessible through normal play.",
  },
  {
    q: "Is The Freak Circus based on a true story?",
    a: "No. The Freak Circus is a fictional indie horror visual novel. However, the 'recovered records' and 'historical documents' in the lore are designed to feel authentic. The 1887 opening, 1892 missing child, and 1903 Mirror Hall Incident are fictional events created for the game. The 'realism' of the lore is a narrative device — the more authentic the records feel, the more unsettling the horror becomes.",
  },
  {
    q: "What is the relationship between the routes and the timeline?",
    a: "Each route reveals a different fragment of the timeline. Pierrot's routes focus on memory and repetition. Harlequin's routes focus on personality fracture and performance. The Doctor's routes focus on observation and medical experimentation. Columbina's routes focus on loop architecture and control. The complete timeline can only be assembled by playing all routes and connecting the fragments. The timeline is not linear — it is a network of interconnected loops.",
  },
  {
    q: "What is the significance of the post-credits scene?",
    a: "After completing all 8 endings, a hidden post-credits scene plays. It shows all four characters in the White Room, looking at the player. The scene is not in any route file — it is a separate video that triggers based on the hidden counter. The characters do not speak. They only look. This scene suggests that the 'true ending' is not a narrative conclusion but a meta-narrative realization: the player has been watched throughout all routes, and the characters are aware of the player's presence.",
  },
  {
    q: "What is the Freak Circus lore archive?",
    a: "The Freak Circus lore archive is a community-maintained encyclopedia of the game's world, history, symbols, and hidden meanings. It documents verified lore (datamined files, confirmed dialogue), contested lore (community theories with evidence), and unverified lore (rumors, speculation, ARG elements). The archive is designed to be a comprehensive resource for players who want to understand the full story — not just the surface narrative of individual routes.",
  },
];

export default function LoreQuestions() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Lore Questions — 25 Most Asked
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete answers to the most searched questions about The Freak Circus lore, story, and hidden meanings
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
