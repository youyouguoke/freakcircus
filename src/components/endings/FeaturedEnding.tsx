"use client";

export default function FeaturedEnding() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
          // Featured Investigation — Weekly Rotation
        </div>

        <div className="bg-surface-container border border-blood/30 p-8">
          <div className="font-[JetBrains_Mono] text-xs text-blood mb-2">
            CORRUPTED DATA
          </div>
          <div className="font-[JetBrains_Mono] text-xs text-primary mb-4">
            ENDING #07 — IMPOSSIBLE DIFFICULTY
          </div>

          <h2 className="font-[Creepster] text-3xl md:text-5xl text-primary mb-4">
            Corrupted Data
          </h2>

          <p className="text-on-surface-variant mb-8 max-w-2xl">
            A rumored ending hidden inside unused game files. The screen displays raw hex data before the application crashes. No player has verified legitimate unlock conditions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-4">
                Unlock Clues
              </h3>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="text-primary">■</span>
                  <span>Data miners found references to a 13th ending in build 1.04. File names suggest a route with no characters present.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">■</span>
                  <span>Memory addresses referenced in crash logs do not match any known scene IDs. Possible debug remnant or intentionally planted artifact.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">Data Mining</span>
                <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">Crash Analysis</span>
                <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">Hex Dump</span>
                <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-outline/30 text-on-surface-variant">ARG Theory</span>
              </div>
            </div>

            <div>
              <div className="bg-surface border border-outline/20 p-4 mb-4">
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">
                  Crash Fragment // Hex Dump
                </div>
                <div className="font-[JetBrains_Mono] text-xs text-primary space-y-1">
                  <div>7F 45 4C 46 02 01 01 00 00 00 00 00 00 00 00 00</div>
                  <div>03 00 3E 00 01 00 00 00 C0 1A 00 00 00 00 00 00</div>
                  <div>40 00 00 00 00 00 00 00 00 20 03 00 00 00 00 00</div>
                  <div>FF FF FF FF 00 00 00 00 — ENDING_13_PTR</div>
                  <div>00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00</div>
                </div>
              </div>

              <div className="bg-surface border border-blood/30 p-4">
                <div className="font-[JetBrains_Mono] text-xs text-blood mb-2">
                  MEMORY_CORRUPTION_DETECTED
                </div>
                <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant space-y-1">
                  <div>[00:14:22] Scene load initiated: unknown_id</div>
                  <div>[00:14:23] WARNING: Character manifest empty</div>
                  <div>[00:14:23] WARNING: Dialogue bank null</div>
                  <div>[00:14:24] FATAL: Render target invalid</div>
                  <div>[00:14:24] Crash dump saved to: /logs/crash_13.dat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
