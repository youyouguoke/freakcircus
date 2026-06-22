"use client";

import Link from "next/link";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is The Freak Circus?",
      answer: (
        <>
          The Freak Circus is an indie psychological horror visual novel that uses replay-aware mechanics to create a meta-narrative experience. Unlike traditional horror games, it builds dread through silence, repetition, and characters who appear to remember your choices across playthroughs. The game is rated 18+ for mature themes including psychological horror, body horror, and unsettling narrative content. <Link href="/" className="text-blood hover:underline">Full game overview →</Link>
        </>
      ),
    },
    {
      question: "Is The Freak Circus free to play?",
      answer: (
        <>
          Yes, The Freak Circus is available for free on itch.io. It runs directly in your browser without requiring download or installation. The game is rated 18+ for mature themes. Players should approach the experience prepared for disturbing imagery and text. <Link href="/" className="text-blood hover:underline">Play now →</Link>
        </>
      ),
    },
    {
      question: "How long is The Freak Circus?",
      answer: (
        <>
          A single route playthrough takes approximately 4-6 hours. However, experiencing all content requires multiple playthroughs due to replay-aware mechanics, hidden triggers, and route dependencies. A comprehensive investigation to see all endings and hidden content can take 40+ hours. <Link href="/walkthroughs" className="text-blood hover:underline">View walkthroughs →</Link>
        </>
      ),
    },
    {
      question: "How many endings are in The Freak Circus?",
      answer: (
        <>
          The exact number remains unknown. The community has confirmed 8 endings including standard routes (Grand Finale, Smile For Me, Doctor's Note), secret endings (Eternal Silence, Columbina's Truth), and corrupted endings (Corrupted Data, White Room). Some endings require specific sequences across multiple playthroughs, while others only trigger under silent refusal conditions. The community maintains an ongoing effort to catalog every outcome. <Link href="/endings" className="text-blood hover:underline">View all endings →</Link>
        </>
      ),
    },
    {
      question: "Who is Pierrot in The Freak Circus?",
      answer: (
        <>
          Pierrot is the melancholic clown and often the first route players encounter. His storyline explores themes of forgotten identity, repeated loops, and awareness that extends beyond the fourth wall. The loop theory suggests Pierrot remembers player behavior across save files, adjusting his dialogue and reactions accordingly. His garden scene contains hidden triggers, and the silence mechanic in his route leads to the Eternal Silence ending. <Link href="/characters/pierrot" className="text-blood hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is Harlequin in The Freak Circus?",
      answer: (
        <>
          Harlequin is the chaotic performer whose dialogue shifts unpredictably between playful and menacing. Her route contains some of the most discussed hidden scenes in the community, including the fractured route that requires specific failure conditions to unlock. Harlequin's memory changes across playthroughs, and players have reported her looking directly at the screen and saying "You again" after multiple replays. Her route interconnects with Pierrot's through the Mirror Hall. <Link href="/characters/harlequin" className="text-blood hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is The Doctor in The Freak Circus?",
      answer: (
        <>
          The Doctor serves as the circus physician, but his medical knowledge extends into increasingly unsettling territory. He references endings before they occur, demonstrates awareness of save file states, and describes the White Room ending in Scene 7 with disturbing accuracy. His route requires finding five hidden medical files, and the mirror connection only appears in Scene 9 after failing his route once. Unused voice lines suggest he was originally designed as the primary antagonist. <Link href="/characters/doctor" className="text-blood hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "Who is Columbina in The Freak Circus?",
      answer: (
        <>
          Columbina is the ballerina who appears gentle and refined at first glance. Her route contains some of the most disturbing revelations about the circus's true nature. The three-loop storyline requires perfect alignment of all dialogue choices, with any deviation causing a reset. Her hallway gains a fourth door after three loops, and memory fragments reference events from other routes. Many players believe she may be the only character who truly understands the circus. <Link href="/characters/columbina" className="text-blood hover:underline">Full character analysis →</Link>
        </>
      ),
    },
    {
      question: "What is the Eternal Silence ending and how do you unlock it?",
      answer: (
        <>
          Eternal Silence is a secret ending on Pierrot's route that requires refusing every major dialogue interaction during the final act. This is not a passive ending — silence becomes a deliberate choice that breaks the game's narrative contract. Players report Pierrot references previous unselected choices and the screen remains black for several minutes before credits roll. The ending suggests the only escape from the circus is to stop engaging entirely. <Link href="/endings/eternal-silence" className="text-blood hover:underline">Full walkthrough →</Link>
        </>
      ),
    },
    {
      question: "How do you unlock Columbina's Truth ending?",
      answer: (
        <>
          Columbina's Truth requires completing three perfect loops with perfect alignment of all dialogue choices. Any deviation in any loop causes a complete reset to Loop 1, Scene 1, with no warning. After three perfect loops, the hallway scene gains a fourth door containing a memory fragment that reveals the circus's true nature. This ending requires cross-route awareness and is considered the most complete revelation in the game. <Link href="/characters/columbina" className="text-blood hover:underline">Full route guide →</Link>
        </>
      ),
    },
    {
      question: "What is the White Room ending in The Freak Circus?",
      answer: (
        <>
          The White Room ending is referenced by The Doctor in Scene 7 with disturbing accuracy — "You will find yourself in a white room. No doors, no windows." — but has never been officially found by any player. Some theories suggest it requires completing all other endings first. Others believe it was cut content that remains partially accessible through file manipulation. Data miners found placeholder files in build 1.04 but no legitimate unlock path. <Link href="/characters/doctor" className="text-blood hover:underline">Doctor route analysis →</Link>
        </>
      ),
    },
    {
      question: "Is Pierrot evil in The Freak Circus?",
      answer: (
        <>
          Pierrot is not traditionally evil — he is melancholic, withdrawn, and increasingly aware of the player's presence. His route explores themes of forgotten identity and repeated loops. The "evil" interpretation comes from his post-credits scene in the Eternal Silence ending, where he addresses the player's real-world playtime with unsettling familiarity. Whether this makes him antagonistic or simply tragic is a major community debate. <Link href="/characters/pierrot" className="text-blood hover:underline">Pierrot character analysis →</Link>
        </>
      ),
    },
    {
      question: "What does the Mirror Hall mean in The Freak Circus?",
      answer: (
        <>
          The Mirror Hall is a recurring location that connects all four character routes. It appears in different forms across routes — sometimes as a hallway, sometimes as a stage backdrop. The mirrors show reflections of characters who are not present, and the architecture changes between loops. Community theories suggest the Mirror Hall represents the boundary between the player and the game world, or between different iterations of the narrative loop. <Link href="/lore/mirror-hall" className="text-blood hover:underline">Mirror Hall lore →</Link>
        </>
      ),
    },
    {
      question: "What is the Loop Theory in The Freak Circus?",
      answer: (
        <>
          The Loop Theory proposes that The Freak Circus operates on a narrative loop where characters forget but the world remembers. Evidence includes: Pierrot's replay-aware dialogue referencing previous choices, Harlequin's "You again" line on the 4th playthrough, and Columbina's memory fragments containing events from routes the player never selected. The hidden counter at save file offset 0x4A20 increments on every route completion, affecting available dialogue options. <Link href="/theories" className="text-blood hover:underline">All theories →</Link>
        </>
      ),
    },
    {
      question: "What is the true ending of The Freak Circus?",
      answer: (
        <>
          The community has not reached consensus on a "true ending." Some theories suggest Columbina's Truth represents the most complete revelation because it requires perfect alignment across three loops. Others argue the Corrupted Data ending — found in unused files but never legitimately unlocked — was intended as the true ending before being cut. The White Room ending, referenced by The Doctor in Scene 7 but never officially found, also has strong support. The ambiguity appears intentional. <Link href="/endings" className="text-blood hover:underline">All endings explained →</Link>
        </>
      ),
    },
    {
      question: "Can you get all endings in one save file?",
      answer: (
        <>
          No. The Freak Circus actively tracks player behavior across saves and playthroughs. Some endings require failing specific routes first. Others need dialogue choices from previous playthroughs to unlock new options. The game uses a hidden counter at save file offset 0x4A20 that increments on every route completion, affecting available choices. Certain endings like Corrupted Data may require modified conditions or exist only in unused game files.
        </>
      ),
    },
    {
      question: "What does the circus symbolize in The Freak Circus?",
      answer: (
        <>
          The circus operates as a multi-layered symbol throughout the narrative. The red thread represents connections between characters that persist across loops. Mirrors symbolize self-reflection and the boundary between player and protagonist. The stage curtain marks transitions between narrative layers. The recurring fire motif connects to the founding myth and suggests cyclical destruction. Community theories interpret the circus as purgatory, a psychological experiment, a simulation, or a metaphor for repeated gameplay itself. <Link href="/lore" className="text-blood hover:underline">Explore symbolism →</Link>
        </>
      ),
    },
    {
      question: "Where can I play The Freak Circus?",
      answer: (
        <>
          The Freak Circus is available on itch.io, the independent game marketplace. It runs directly in your browser without requiring download or installation. The game is rated 18+ for mature themes including psychological horror, body horror, and unsettling narrative content. Players should approach the experience prepared for disturbing imagery and text. For those who want to experience every ending without replaying repeatedly, this archive provides spoiler-safe walkthroughs and analysis. <Link href="/" className="text-blood hover:underline">Play now →</Link>
        </>
      ),
    },
    {
      question: "Is this archive spoiler-free?",
      answer: (
        <>
          No. This archive is designed for players who have already begun exploring the game or want detailed guidance. Character guides, ending explanations, and theory pages contain full spoilers. We do not use spoiler tags for basic lore because the entire purpose of the archive is to document what the community has discovered. New players should complete at least one route before browsing the archive to preserve the experience of discovery.
        </>
      ),
    },
    {
      question: "How do I start playing The Freak Circus?",
      answer: (
        <>
          Start with Pierrot's route — it is the most accessible for new players and introduces core mechanics including the dialogue choice system and the comfort/confess dynamic. A single playthrough takes 4-6 hours. Do not worry about getting the "best" ending on your first try; many hidden mechanics only activate after multiple playthroughs. After completing Pierrot's route once, explore Harlequin's route for a different tone and energy. <Link href="/characters/pierrot" className="text-blood hover:underline">Pierrot beginner guide →</Link>
        </>
      ),
    },
    {
      question: "What are the hidden medical files in The Doctor's route?",
      answer: (
        <>
          The Doctor's route contains five hidden medical files scattered across scenes: File 1 in Scene 2 (drawer), File 2 in Scene 4 (cabinet), File 3 in Scene 6 (floorboard), File 4 in Scene 8 (bookshelf), and File 5 in Scene 10 (desk). Each file contains a character profile written in clinical terminology. File 4 (The Doctor himself) is blank except for: "Subject is aware of observation." File 5 contains player behavioral analysis. <Link href="/characters/doctor" className="text-blood hover:underline">Doctor route guide →</Link>
        </>
      ),
    },
    {
      question: "What is the Corrupted Data ending?",
      answer: (
        <>
          The Corrupted Data ending is found in unused game files but has never been legitimately unlocked by any player. It displays raw hex data before crashing the game interface. Data miners discovered references in build 1.04 with memory addresses that do not match any known scene IDs. Some players believe it requires a specific sequence of failed routes across all characters. Others think it was cut content that remains partially accessible through file manipulation. <Link href="/endings" className="text-blood hover:underline">All endings catalog →</Link>
        </>
      ),
    },
    {
      question: "Why does Harlequin say 'You again' on the 4th playthrough?",
      answer: (
        <>
          On the 4th playthrough of Harlequin's route, she looks directly at the screen and says "You again." This line does not appear in the script files of any known build and was first reported by u/harlequin_hunter in 2024. Multiple players have confirmed the trigger, but data miners have not located the audio file. This suggests either a dynamically generated line or a file that only exists in specific build versions. The trigger is consistent with the hidden counter at save offset 0x4A20. <Link href="/characters/harlequin" className="text-blood hover:underline">Harlequin route analysis →</Link>
        </>
      ),
    },
    {
      question: "What is the Red Thread in The Freak Circus?",
      answer: (
        <>
          The red thread appears in multiple routes as a recurring symbol. In Pierrot's Smile For Me ending, a single red thread remains on the ground after the garden scene. In Harlequin's route, the same red thread sprite connects her scenes to Pierrot's. Community theories suggest it represents connections between characters that persist across loops, or bonds that cannot be broken even when memory is reset. The thread uses the same sprite asset across all routes, suggesting a shared narrative origin. <Link href="/lore/red-thread" className="text-blood hover:underline">Red Thread lore →</Link>
        </>
      ),
    },
    {
      question: "Is The Freak Circus connected to other games?",
      answer: (
        <>
          There is no official confirmation of connections to other games. However, community members have noted thematic similarities to several indie horror visual novels including Doki Doki Literature Club (meta-narrative and fourth-wall breaking), The Witch's House (environmental storytelling), and Ib (mirror symbolism). The developer has not commented on these comparisons. The Freak Circus appears to be a standalone work with its own narrative universe.
        </>
      ),
    },
  ];

  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Common questions about The Freak Circus, its characters, endings, and hidden mechanics — targeting People Also Ask search results
        </p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-surface-container border border-outline/20">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-foreground hover:text-primary transition-colors list-none">
                <span>{faq.question}</span>
                <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">[+]</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
