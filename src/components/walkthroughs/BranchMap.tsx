"use client";

export default function BranchMap() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          How Route Branching Works
        </h2>
        <p className="text-on-surface-variant text-sm mb-4">
          The Freak Circus uses a three-tier branching system. Standard routes follow the main narrative path with binary choices. Hidden routes unlock after completing prerequisites — these appear as new options in the menu after their conditions are met. Corrupted routes exist in the game files but may not be legitimately accessible through normal gameplay.
        </p>
        <p className="text-on-surface-variant text-sm mb-8">
          The key mechanic is replay awareness. After completing a route, the game updates a hidden counter in the save file. This counter affects available dialogue options in subsequent playthroughs. Some routes will not appear at all until the counter reaches a specific value.
        </p>

        <div className="bg-surface-container border border-outline/20 p-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-surface border border-primary/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Known Route</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Pierrot Main</div>
            </div>
            <div className="bg-surface border border-dashed border-blood/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Hidden / Replay-Only</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Silent Route</div>
            </div>
            <div className="bg-surface border border-blood/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Corrupted</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Null Route</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-xs text-on-surface-variant">Known Route</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 border-t border-dashed border-blood"></div>
              <span className="text-xs text-on-surface-variant">Hidden / Replay-Only</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blood"></div>
              <span className="text-xs text-on-surface-variant">Corrupted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
