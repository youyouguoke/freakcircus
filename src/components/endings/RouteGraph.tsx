"use client";

export default function RouteGraph() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Ending Route Tree — How to Unlock Every Ending
        </h2>
        <p className="text-on-surface-variant text-sm mb-4">
          Complete route map showing all paths from start to every ending. Red lines indicate replay-only routes requiring multiple playthroughs.
        </p>

        <div className="bg-surface-container border border-outline/20 p-8">
          {/* Tree Structure */}
          <div className="flex flex-col items-center gap-6">
            {/* START */}
            <div className="bg-surface border border-primary/30 px-8 py-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">START</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Beginning</div>
            </div>

            {/* Level 1: Routes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="bg-surface border border-primary/30 p-4 text-center">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Route A</div>
                <div className="font-[Epilogue] text-sm font-bold text-foreground">Pierrot Route</div>
              </div>
              <div className="bg-surface border border-primary/30 p-4 text-center">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Route B</div>
                <div className="font-[Epilogue] text-sm font-bold text-foreground">Harlequin Route</div>
              </div>
              <div className="bg-surface border border-primary/30 p-4 text-center">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Route C</div>
                <div className="font-[Epilogue] text-sm font-bold text-foreground">Doctor Route</div>
              </div>
              <div className="bg-surface border border-primary/30 p-4 text-center">
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Route D</div>
                <div className="font-[Epilogue] text-sm font-bold text-foreground">Columbina Route</div>
              </div>
            </div>

            {/* Level 2: Endings */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              <div className="space-y-3">
                <div className="bg-surface border border-primary/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Good Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Smile For Me</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Accept offer in Scene 9</div>
                </div>
                <div className="bg-surface border border-blood/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Secret Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Eternal Silence</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Refuse dialogue ×3</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-surface border border-primary/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Good Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Grand Finale</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Standard completion</div>
                </div>
                <div className="bg-surface border border-primary/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Joke Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Harlequin's Laughter</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">All comedic choices</div>
                </div>
                <div className="bg-surface border border-blood/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Secret Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Fractured Ending</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Fail route first</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-surface border border-primary/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Standard Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Medical Failure</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Fail to collect files</div>
                </div>
                <div className="bg-surface border border-blood/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Secret Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Doctor's Note</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Find all 5 files</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-surface border border-primary/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Standard Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Eternal Dance</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Any single loop</div>
                </div>
                <div className="bg-surface border border-blood/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Secret Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Columbina's Truth</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">3 perfect loops</div>
                </div>
              </div>
            </div>

            {/* Corrupted Endings */}
            <div className="w-full border-t border-outline/20 pt-6">
              <div className="font-[JetBrains_Mono] text-xs text-blood mb-4 text-center uppercase tracking-wider">
                Corrupted / Unverified Endings
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-surface border border-blood/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">False Ending</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">White Room</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Never found</div>
                </div>
                <div className="bg-surface border border-blood/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Corrupted</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Corrupted Data</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Hex crash</div>
                </div>
                <div className="bg-surface border border-blood/30 p-3 text-center">
                  <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Null Route</div>
                  <div className="font-[Epilogue] text-sm font-bold text-foreground">Empty Room</div>
                  <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mt-1">Data-mined only</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary"></div>
              <span className="text-xs text-on-surface-variant">Canon / Standard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blood"></div>
              <span className="text-xs text-on-surface-variant">Secret / Replay-Only</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-blood"></div>
              <span className="text-xs text-on-surface-variant">Corrupted / Unverified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
