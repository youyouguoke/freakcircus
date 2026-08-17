"use client";

import Link from "next/link";
import { CHARACTERS_COUNT } from "@/lib/site-facts";

const characters = [
  {
    title: "The Silent Yandere",
    name: "Pierrot",
    role: "Main Character (Day 1)",
    image: "/Pierrot.jpg",
    alt: "Pierrot — Silent Yandere",
    personality: "Quiet, watchful, deeply possessive",
    description: "Pierrot rarely says more than necessary, yet his presence is impossible to ignore. From the moment your paths cross, his attachment feels less like romance and more like a claim. He stands alone in the garden, surrounded by flowers that wilt as the conversation progresses.",
    verified: [
      "Introduced in Day 1 as one of the two main characters",
      "Silent yandere — obsessive and possessive toward the player",
      "Rivalry with Harlequin driven by the Columbina legend",
      "Day 2 tent routes deepen his story",
      "YouTube: 'Good Pierrot ending' confirmed to exist",
      "YouTube: jealousy scene when Pierrot catches player with Harlequin",
    ],
    unverified: [
      "Community reports of dialogue changes after multiple playthroughs",
      "Specific ending conditions beyond the confirmed 'Missing'",
    ],
    href: "/characters/pierrot",
  },
  {
    title: "The Seductive Rival",
    name: "Harlequin",
    role: "Main Character (Day 1)",
    image: "/Harlequin.jpg",
    alt: "Harlequin — Seductive Rival",
    personality: "Charismatic, manipulative, unpredictable",
    description: "Harlequin turns every interaction into a dangerous test. His seductive rivalry with Pierrot creates a complex triangle of desire, manipulation, and psychological tension. He is the chaotic performer whose dialogue shifts between playful and menacing.",
    verified: [
      "Introduced in Day 1 as Pierrot's rival",
      "Killed Columbina — drives the central conflict",
      "The 'Missing' bad ending is associated with his route",
      "Day 2 tent routes expand his story (YouTube: 'Harlequin Tent Scene')",
      "Male (confirmed by thefreakcircus.org, VNDB)",
    ],
    unverified: [
      "Community reports of 'aggressive vs comedic' choice system",
      "Specific ending conditions beyond 'Missing'",
    ],
    href: "/characters/harlequin",
  },
  {
    title: "The Circus Physician",
    name: "The Doctor",
    role: "Day 2 Character",
    image: "/doctor-portrait.jpg",
    alt: "The Doctor — Circus Physician",
    personality: "Clinical, detached, unsettling",
    description: "The Doctor was introduced in the Day 2 update (December 3, 2025). He appears in tent-based horror scenes alongside Ticket Taker. His clinical demeanor masks an increasingly unsettling presence in the circus.",
    verified: [
      "Introduced in Day 2 tent routes",
      "One of three new characters added in the Day 2 update",
      "Appears in tent-based horror scenes alongside Ticket Taker",
    ],
    unverified: [
      "Community speculation about meta-awareness or hidden knowledge",
      "Whether he has a dedicated route or specific endings",
    ],
    href: "/characters/doctor",
  },
  {
    title: "The Storyteller",
    name: "Jester",
    role: "Day 2 Character",
    image: "/Jester2.png",
    alt: "Jester — Storyteller",
    personality: "Playful, manipulative, unpredictable",
    description: "Jester was introduced in the Day 2 update. He operates at the edges of the narrative, appearing in tent routes alongside other characters. His limited screen time has made every appearance a focus of community analysis.",
    verified: [
      "Introduced in Day 2 alongside Doctor and Ticket Taker",
      "Described as a storyteller in the tent routes",
      "YouTube: 'Two Yandere Jesters' videos (100K+ views) confirm his presence",
    ],
    unverified: [
      "Community speculation about meta-awareness",
      "Whether he has a dedicated route or endings",
    ],
    href: "/characters/jester",
  },
  {
    title: "The Gatekeeper",
    name: "Ticket Taker",
    role: "Day 1-2 Character",
    image: "/tickettaker.jpg",
    alt: "Ticket Taker — Gatekeeper",
    personality: "Silent, imposing, enigmatic",
    description: "The Ticket Taker stands as the enigmatic sentinel at the threshold of the Freak Circus. Players first encounter them at the café, where they deliver the first of many ominous warnings. Present in both Day 1 and Day 2 content.",
    verified: [
      "First character the player meets in Day 1 at the café",
      "Present in both Day 1 and Day 2 content",
      "Delivers the pink ticket to the player",
      "Appears in Day 2 tent routes alongside Doctor",
    ],
    unverified: [
      "Whether the mirror scene has hidden mechanics",
      "Whether Ticket Taker has a dedicated route",
    ],
    href: "/ticket-taker",
  },
];

export default function CharacterCards() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
          Freak Circus Characters
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The {CHARACTERS_COUNT} characters of The Freak Circus — a {`GAME_GENRE`}. Pierrot and Harlequin are the two main
          characters introduced in Day 1. Doctor, Jester, and Ticket Taker were added in the Day 2 update
          (December 3, 2025). Columbina is a deceased character — not playable.
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
                  <div className="font-mono text-xs text-primary mb-1">
                    {char.title}
                  </div>
                  <h3 className="font-display text-3xl text-primary mb-2">
                    {char.name}
                  </h3>
                </div>
              </div>

              <div className="flex gap-2 mb-2">
                <span className="font-mono text-xs text-on-surface-variant">Role:</span>
                <span className="text-on-surface-variant text-xs">{char.role}</span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="font-mono text-xs text-on-surface-variant">Personality:</span>
                <span className="text-on-surface-variant text-xs">{char.personality}</span>
              </div>

              <p className="text-on-surface/60 text-sm mb-4">{char.description}</p>

              <div className="mb-4">
                <div className="font-mono text-xs text-green-500 mb-2">✓ VERIFIED</div>
                <ul className="space-y-1">
                  {char.verified.map((item, i) => (
                    <li key={i} className="text-on-surface-variant text-xs flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="font-mono text-xs text-yellow-500 mb-2">? UNVERIFIED</div>
                <ul className="space-y-1">
                  {char.unverified.map((item, i) => (
                    <li key={i} className="text-on-surface/50 text-xs flex items-start gap-2">
                      <span className="text-yellow-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={char.href}
                className="text-primary font-mono text-xs uppercase hover:underline"
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
