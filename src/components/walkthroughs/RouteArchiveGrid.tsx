"use client";

import Link from "next/link";

const routes = [
  {
    title: "Pierrot Main Route",
    character: "Pierrot",
    difficulty: "Beginner",
    ending: "Good Ending",
    unlock: "Available from start — no prerequisites",
    summary: "The standard introduction to The Freak Circus. Complete standard dialogue choices to reach the Smile For Me ending. This route teaches the game's core mechanics without requiring replay awareness.",
    playtime: "2-3 hours",
    theory: "Pierrot Loop Theory",
    href: "/walkthroughs/pierrot-main-route",
  },
  {
    title: "Pierrot Silent Route",
    character: "Pierrot",
    difficulty: "Very Hard",
    ending: "Eternal Silence (Secret)",
    unlock: "Complete Pierrot Main Route + Fail Harlequin True Route + Stay silent 3+ times",
    summary: "A replay-aware route where Pierrot begins remembering previous loops. Requires refusing all dialogue for three consecutive scenes. The ending reveals hidden narration about events the player never selected.",
    playtime: "4-6 hours (with replays)",
    theory: "Pierrot Remembers Routes",
    href: "/walkthroughs/pierrot-silent-route",
  },
  {
    title: "Harlequin True Route",
    character: "Harlequin",
    difficulty: "Hard",
    ending: "Grand Finale (Bad)",
    unlock: "Available from start — select all aggressive dialogue options",
    summary: "The aggressive route through Harlequin's storyline. Select all confrontational options to unlock her true ending. Contains 7 undocumented hidden scenes that only appear on replay.",
    playtime: "3-4 hours",
    theory: "Harlequin Loop Theory",
    href: "/walkthroughs/harlequin-true-route",
  },
  {
    title: "Doctor Memory Route",
    character: "The Doctor",
    difficulty: "Hard",
    ending: "Doctor's Note (False)",
    unlock: "Complete Doctor Main Route + Find 5 hidden medical files + Scene 9 mirror visible",
    summary: "Requires collecting 5 hidden medical files scattered across scenes. The mirror connection in Scene 9 only appears after failing the route once. The ending reveals the circus's medical experiment origins.",
    playtime: "4-5 hours (with replays)",
    theory: "Doctor Created Circus",
    href: "/walkthroughs/doctor-memory-route",
  },
  {
    title: "Columbina Fractured Route",
    character: "Columbina",
    difficulty: "Very Hard",
    ending: "Columbina's Truth (Loop)",
    unlock: "Complete Pierrot Main + Doctor Memory + Perfect choices across 3 loops",
    summary: "The most demanding route in the game. Requires perfect alignment of all dialogue choices across three consecutive loops. Any deviation causes a complete reset. The hallway gains a fourth door after the third loop.",
    playtime: "6-8 hours (with loops)",
    theory: "Columbina Watches Player",
    href: "/walkthroughs/columbina-fractured-route",
  },
  {
    title: "Null Route",
    character: "Unknown",
    difficulty: "Impossible",
    ending: "Corrupted Data (Unverified)",
    unlock: "Conditions unknown — referenced only in datamined files",
    summary: "A corrupted route found in unused game files. No character sprites appear. The player walks through empty corridors until the game soft-locks after 5 minutes. May be cut content or an intentionally hidden ARG element.",
    playtime: "Unknown",
    theory: "Null Route Investigation",
    href: "/walkthroughs/null-route",
  },
];

export default function RouteArchiveGrid() {
  return (
    <section id="archive" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Route Archive
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete walkthroughs for all verified routes — with unlock requirements, hidden triggers, and ending outcomes
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={route.title}
              className="bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors"
            >
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-1">
                {route.title}
              </h3>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-3">
                {route.character}
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Difficulty</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{route.difficulty}</div>
                </div>
                <div className="bg-surface border border-outline/20 p-2">
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant">Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">{route.ending}</div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Unlock Requirements</div>
                  <p className="text-on-surface-variant text-xs">{route.unlock}</p>
                </div>
                <div>
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Route Summary</div>
                  <p className="text-on-surface-variant text-xs">{route.summary}</p>
                </div>
                <div className="flex gap-4">
                  <div>
                    <div className="font-[JetBrains_Mono] text-xs text-primary">Playtime</div>
                    <div className="text-on-surface-variant text-xs">{route.playtime}</div>
                  </div>
                  <div>
                    <div className="font-[JetBrains_Mono] text-xs text-primary">Related Theory</div>
                    <div className="text-on-surface-variant text-xs">{route.theory}</div>
                  </div>
                </div>
              </div>

              <Link
                href={route.href}
                className="text-primary font-[JetBrains_Mono] text-xs uppercase hover:underline"
              >
                Read Full Guide →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
