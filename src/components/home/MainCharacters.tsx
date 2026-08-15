"use client";

import Link from "next/link";

const characters = [
  {
    name: "Pierrot",
    role: "The Melancholic Clown",
    image: "/Pierrot.jpg",
    desc: "Often the first route players encounter. His silence mechanic and replay-aware dialogue make him the center of the Loop Theory debate.",
    href: "/characters/pierrot",
  },
  {
    name: "Harlequin",
    role: "The Chaotic Performer",
    image: "/Harlequin.jpg",
    desc: "Her dialogue shifts between playful and menacing. Players report her saying \"You again\" on the 4th playthrough — a line not found in any script file.",
    href: "/characters/harlequin",
  },
  {
    name: "The Doctor",
    role: "The Circus Physician",
    image: "/Doctor.jpg",
    desc: "References endings before they occur. His five hidden medical files and the White Room prediction in Scene 7 remain deeply unsettling.",
    href: "/characters/doctor",
  },
  {
    name: "Columbina",
    role: "The Ballerina",
    image: "/Columbina.jpg",
    desc: "Her three-loop route requires perfect dialogue alignment. Any deviation resets everything. Many believe she is the only character who truly understands the circus.",
    href: "/characters/columbina",
  },
  {
    name: "Jester",
    role: "The Trickster",
    image: "/Jester2.png",
    desc: "Operates at the edges of the narrative — watching, commenting, and delivering lines dense with double meanings that fuel theory-crafting.",
    href: "/characters/jester",
  },
  {
    name: "Ticket Taker",
    role: "The Gatekeeper",
    image: "/tickettaker.jpg",
    desc: "The enigmatic sentinel at the threshold. The mirror scene where the player sees themselves wearing the mask spawned the Time-Loop Theory.",
    href: "/ticket-taker",
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
          The six central figures of The Freak Circus, each with their own route, hidden triggers, and disturbing revelations
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
