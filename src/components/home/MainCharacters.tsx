"use client";

import Link from "next/link";

const characters = [
  {
    name: "Pierrot",
    role: "The Melancholic Clown",
    image: "/Pierrot.jpg",
    desc: "Pierrot is often the first route players encounter, but his storyline hides the most complex mechanics in the game. The silence trigger system requires refusing dialogue for three consecutive scenes. His garden scene contains hidden choices that only appear after failing his route once. The loop theory suggests he remembers player behavior across saves, adjusting his reactions based on previous playthroughs. His route leads to the Eternal Silence ending, where the screen remains black for four minutes before credits roll.",
    href: "/characters/pierrot",
  },
  {
    name: "Harlequin",
    role: "The Chaotic Performer",
    image: "/Harlequin.jpg",
    desc: "Harlequin's dialogue shifts unpredictably between playful and menacing, creating a sense that she is not fully in control of her own narrative. Her fractured route requires specific failure conditions to unlock — players must choose aggressive options in Scene 4, then comedic options in Scene 9. Community reports document her looking directly at the screen and saying 'You again' after multiple replays, a line that does not appear in the script files. Her route interconnects with Pierrot's through the Mirror Hall.",
    href: "/characters/harlequin",
  },
  {
    name: "The Doctor",
    role: "The Circus Physician",
    image: "/Doctor.jpg",
    desc: "The Doctor's medical knowledge extends beyond medicine into territory that players find increasingly unsettling. He references endings before they occur — in Scene 7, he describes the White Room ending with disturbing accuracy, three routes before it becomes accessible. His route requires finding five hidden medical files scattered across scenes. The mirror connection only appears in Scene 9 after failing his route once. Unused voice lines suggest he was originally designed as the primary antagonist.",
    href: "/characters/doctor",
  },
  {
    name: "Columbina",
    role: "The Ballerina",
    image: "/Columbina.jpg",
    desc: "Columbina appears gentle and refined at first glance, but her route contains the most disturbing revelations about the circus's true nature. The three-loop storyline requires perfect alignment of all dialogue choices — any deviation causes a complete reset. Her hallway gains a fourth door after three loops, and memory fragments reference events from other routes that the player never selected. Many players believe she is the only character who truly understands the circus, and that her endings suggest the entire narrative is a purgatorial loop.",
    href: "/characters/columbina",
  },
];

export default function MainCharacters() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Meet The Cast
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The four main characters of The Freak Circus, each with their own route, hidden triggers, and disturbing revelations
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {characters.map((char) => (
            <div key={char.name} className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors flex flex-col">
              <div className="flex items-start gap-4 mb-3">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-16 h-16 object-cover rounded border border-outline/20 shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-[Epilogue] text-xl font-bold text-foreground">
                    {char.name}
                  </h3>
                  <span className="font-[JetBrains_Mono] text-xs text-on-surface-variant">
                    {char.role}
                  </span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1">
                {char.desc}
              </p>
              <Link
                href={char.href}
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline mt-auto"
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
