"use client";

import Link from "next/link";

const characters = [
  {
    title: "The Jester",
    name: "Pierrot",
    role: "Melancholic Clown / Route Guide",
    image: "/Pierrot.jpg",
    alt: "Pierrot Freak Circus Character — Melancholic Clown Route Guide",
    personality: "Withdrawn, observant, speaks in riddles",
    routeTheme: "Memory loops, replay awareness, silence mechanics",
    popularity: "Most discussed character in community forums",
    mystery: "References choices from previous playthroughs that the player never selected",
    background: "Pierrot appears as the first character most players encounter in The Freak Circus. He stands alone in the garden, surrounded by flowers that wilt as the conversation progresses. His dialogue is sparse but weighted — every line contains multiple interpretations. The community has documented 47 unique dialogue variations across different playthroughs, suggesting a complex trigger system tied to save file behavior.",
    endings: [
      { name: "Smile For Me", type: "Standard", desc: "Accept Pierrot's offer in the garden scene during Act III." },
      { name: "Eternal Silence", type: "Secret", desc: "Refuse all dialogue for 3 consecutive scenes. Screen stays black for 4 minutes." },
      { name: "Null Route", type: "Corrupted", desc: "Found in unused files. No legitimate unlock path known." },
    ],
    route: "Pierrot's route introduces the comfort/confess dialogue system. Early choices appear binary but create branching paths that only reveal themselves in Act II. The silent route requires refusing all dialogue for three consecutive scenes — not skipping, but actively refusing. This breaks the narrative contract and triggers unique post-credits narration.",
    relationship: "Pierrot's connection to Columbina is the most theorized in the community. In the Eternal Silence ending, his narration references her hallway — a location he should not know about. Unused voice lines contain a hidden conversation between them that never appears in gameplay.",
    theory: "The Loop Theory suggests Pierrot remembers player behavior across save files. Counter value at offset 0x4A20 affects his dialogue options. On the 4th playthrough, he references choices from previous routes that the player never selected in the current save.",
    href: "/characters/pierrot",
  },
  {
    title: "The Performer",
    name: "Harlequin",
    role: "Chaotic Performer / Route Guide",
    image: "/Harlequin.jpg",
    alt: "Harlequin Freak Circus Route Guide — Chaotic Performer Endings",
    personality: "Unpredictable, shifts between playful and threatening",
    routeTheme: "Fractured identity, comedic vs aggressive choices",
    popularity: "Second most popular, known for hidden scenes",
    mystery: "Says 'You again' on 4th playthrough — line not found in script files",
    background: "Harlequin performs on a stage that changes architecture between scenes. Her dialogue shifts unpredictably between playful and menacing, creating a sense that she is not fully in control of her own narrative. The community has identified 7 undocumented hidden scenes in her route, each requiring specific failure conditions to unlock.",
    endings: [
      { name: "Grand Finale", type: "Standard", desc: "Complete the Harlequin route with standard dialogue choices." },
      { name: "Harlequin's Laughter", type: "Joke", desc: "Select every comedic option in a single playthrough." },
      { name: "Fractured Ending", type: "Secret", desc: "Unlocks after failing her main route once. Contains 7 hidden scenes." },
    ],
    route: "Harlequin's fractured route requires specific failure conditions — choose aggressive options in Scene 4, then comedic options in Scene 9. This creates a personality fracture that reveals her true nature. The route contains the most aggressive dialogue pruning in the game, removing options that would lead to early endings.",
    relationship: "Harlequin's connection to Pierrot is marked by the red thread sprite that appears in both their routes. She describes his garden with details the player never saw, suggesting shared memory or a connection predating the circus. The community theory suggests they may be siblings or former partners in a previous loop iteration.",
    theory: "The Fractured Personality Theory proposes that Harlequin has multiple consciousnesses competing for control. Evidence includes dialogue that contradicts itself within the same scene, and the 'You again' line on the 4th playthrough that does not appear in script files — suggesting dynamically generated content based on player history.",
    href: "/characters/harlequin",
  },
  {
    title: "The Surgeon",
    name: "The Doctor",
    role: "Circus Physician / Route Guide",
    image: "/doctor-portrait.jpg",
    alt: "Doctor Freak Circus Ending Guide — Circus Physician Route",
    personality: "Clinical, detached, increasingly unsettling",
    routeTheme: "Medical files, mirror connections, foreknowledge",
    popularity: "Most disturbing route, high completion difficulty",
    mystery: "Describes White Room ending in Scene 7 before it becomes accessible",
    background: "The Doctor operates from a medical tent that expands into a laboratory in later scenes. His clinical demeanor masks an increasingly unsettling awareness of the game's mechanics. The community has documented his precognitive dialogue across 12 different scenes, with accuracy rates that exceed random chance by significant margins.",
    endings: [
      { name: "Doctor's Note", type: "Secret", desc: "Find all 5 hidden medical files before the final encounter." },
      { name: "White Room", type: "False", desc: "Referenced in Scene 7 but never officially found." },
      { name: "Medical Failure", type: "Standard", desc: "Fail to collect any medical files. The Doctor abandons the patient." },
    ],
    route: "The Doctor's route requires finding 5 hidden medical files scattered across scenes: File 1 in Scene 2 (drawer), File 2 in Scene 4 (cabinet), File 3 in Scene 6 (floorboard), File 4 in Scene 8 (bookshelf), File 5 in Scene 10 (desk). Each file contains a character profile written in clinical terminology. File 4 (The Doctor himself) is blank except for: 'Subject is aware of observation.'",
    relationship: "The Doctor's connection to Columbina is documented in medical files referencing 'patient C' with injuries matching her backstory. The mirror in Scene 9 shows Columbina's reflection when The Doctor looks, suggesting he sees her even when she is not present. This relationship was originally intended as a major plot point before being reduced to environmental storytelling.",
    theory: "The Precognition Theory suggests The Doctor is aware of the game's script and endings before the player reaches them. His Scene 7 description of the White Room ending matches unused files found in build 1.04. Some theorists believe he represents the game's developer consciousness within the narrative.",
    href: "/characters/doctor",
  },
  {
    title: "The Dove",
    name: "Columbina",
    role: "Ballerina / Route Guide",
    image: "/columbina-portrait.jpg",
    alt: "Columbina Freak Circus Character — Ballerina Route Endings",
    personality: "Gentle, refined, disturbingly aware",
    routeTheme: "Three-loop perfection, hallway architecture, memory fragments",
    popularity: "Highest theory-to-discussion ratio in community",
    mystery: "May be the only character who truly understands the circus",
    background: "Columbina dances in a hallway that gains architecture as the player progresses. Her gentle demeanor masks the most disturbing revelations about the circus's true nature. The community has mapped her hallway changes across 12 different loop states, documenting door spawn conditions and mirror placement patterns.",
    endings: [
      { name: "Columbina's Truth", type: "Secret", desc: "Perfect alignment across three loops. The fourth door reveals all." },
      { name: "Corrupted Data", type: "Corrupted", desc: "Found only in modified files. Screen displays raw hex before crash." },
      { name: "Eternal Dance", type: "Standard", desc: "Complete any single loop without perfect alignment." },
    ],
    route: "Columbina's three-loop storyline requires perfect alignment of all dialogue choices — any deviation causes a complete reset to Loop 1, Scene 1. Her hallway gains a fourth door after three loops, containing a memory fragment that reveals the circus's true nature. Memory fragments reference events from other routes that the player never selected, suggesting cross-route awareness.",
    relationship: "Columbina's connection to Pierrot is the most theorized relationship. Her Truth ending requires completing his route first, suggesting a dependency the game does not explicitly state. Unused voice lines contain a conversation between them discussing the player in third person — breaking the fourth wall.",
    theory: "The Orchestrator Theory proposes Columbina is the only character who truly understands the circus. Her three-loop structure mirrors the game's overall narrative architecture, suggesting the entire circus is a single loop containing smaller loops within each character route. The fourth door in her hallway may represent the true ending that requires all other routes to be completed first.",
    href: "/characters/columbina",
  },
];

export default function CharacterCards() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Freak Circus Characters
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The four central figures of The Freak Circus — Pierrot the melancholic clown, Harlequin the chaotic performer, The Doctor the circus physician, and Columbina the ballerina. Each character has their own route, hidden triggers, disturbing revelations, and multiple endings.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {characters.map((char) => (
            <div
              key={char.name}
              className="bg-surface-container border border-outline/20 p-8 hover:border-primary transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={char.image}
                  alt={char.alt}
                  className="w-20 h-20 object-cover rounded border border-outline/20"
                />
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">
                    {char.title}
                  </div>
                  <h3 className="font-[Creepster] text-3xl text-primary mb-2">
                    {char.name}
                  </h3>
                </div>
              </div>

              {/* Background Story */}
              <div className="mb-4">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">BACKGROUND</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {char.background}
                </p>
              </div>

              {/* Personality */}
              <div className="space-y-2 mb-4">
                <div className="flex gap-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Role:</span>
                  <span className="text-on-surface-variant text-xs">{char.role}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Personality:</span>
                  <span className="text-on-surface-variant text-xs">{char.personality}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Route Theme:</span>
                  <span className="text-on-surface-variant text-xs">{char.routeTheme}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Key Mystery:</span>
                  <span className="text-on-surface-variant text-xs">{char.mystery}</span>
                </div>
              </div>

              {/* All Endings */}
              <div className="mb-4">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">ALL ENDINGS</div>
                <div className="space-y-2">
                  {char.endings.map((e) => (
                    <div key={e.name} className="border-l-2 border-outline/20 pl-3">
                      <div className="flex items-center gap-2">
                        <span className="text-foreground text-sm font-medium">{e.name}</span>
                        <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">({e.type})</span>
                      </div>
                      <p className="text-on-surface-variant text-xs">{e.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Route Walkthrough */}
              <div className="mb-4">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">ROUTE WALKTHROUGH</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {char.route}
                </p>
              </div>

              {/* Relationship */}
              <div className="mb-4">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">RELATIONSHIP</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {char.relationship}
                </p>
              </div>

              {/* Fan Theory */}
              <div className="mb-4">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">TOP FAN THEORY</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {char.theory}
                </p>
              </div>

              <Link
                href={char.href}
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Explore {char.name} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}