"use client";

import Link from "next/link";
import { SINGLE_ROUTE_HOURS, TOTAL_COMPLETION_HOURS } from "@/lib/site-facts";

export default function AboutTheGame() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          About The Freak Circus
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-surface-container border border-outline/20 p-6">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              What Is The Freak Circus?
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Many players first discover The Freak Circus through TikTok clips featuring Pierrot's route. What initially appears to be a simple horror visual novel quickly turns into a community-wide investigation into hidden dialogue, route memory, and contradictory endings. The game has no traditional jump scares — it builds dread through silence, repetition, and the growing realization that the characters know more than they should.
            </p>
            <p className="text-on-surface-variant text-sm">
              The community has spent over two years mapping routes, and new triggers are still being found. This archive collects everything verified by multiple players, separating confirmed mechanics from speculation.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              Why We Think The Game Works
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Unlike most horror visual novels, The Freak Circus turns replaying into part of the narrative itself. The game encourages players to question whether they are discovering new content or remembering content that was always there.
            </p>
            <p className="text-on-surface-variant text-sm">
              The replay-aware mechanics are narrative devices. When Pierrot references a choice you made three routes ago, the game suggests that the circus exists outside the save file system, and that the characters have always been watching.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              The Cast at a Glance
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Four main characters anchor the experience: Pierrot the melancholic clown, Harlequin the chaotic performer, The Doctor the unsettling physician, and Columbina the ballerina with a three-loop route. Two additional figures — Jester and Ticket Taker — operate at the narrative's edges.
            </p>
            <Link href="/characters" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
              Explore all characters →
            </Link>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              How Many Endings Are There?
            </h3>
            <p className="text-on-surface-variant text-sm mb-4">
              The community has confirmed 8 endings through repeated testing. Standard routes include Grand Finale, Smile For Me, and Doctor's Note. Secret endings like Eternal Silence and Columbina's Truth require specific conditions across multiple playthroughs. Corrupted endings break the game interface.
            </p>
            <Link href="/endings" className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline">
              View all endings →
            </Link>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6 md:col-span-2">
            <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-4">
              Where Can You Play The Freak Circus?
            </h3>
            <p className="text-on-surface-variant text-sm">
              The game is available on itch.io and runs directly in your browser without installation. It is rated 18+ for psychological horror, body horror, and unsettling narrative content. A single route takes {SINGLE_ROUTE_HOURS}, but full completion requires {TOTAL_COMPLETION_HOURS}. All content here is compiled from player testing and documented route verification, not from leaked materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
