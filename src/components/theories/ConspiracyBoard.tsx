"use client";

export default function ConspiracyBoard() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Connected Evidence Map
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Hover over any node to reveal which theories share evidence. Red lines connect characters, endings, symbols, and community investigations.
        </p>

        <div className="bg-surface-container border border-outline/20 p-8">
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-surface border border-primary/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Character</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Pierrot</div>
            </div>
            <div className="bg-surface border border-primary/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Theory</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Loop</div>
            </div>
            <div className="bg-surface border border-primary/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Ending</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Eternal</div>
            </div>
            <div className="bg-surface border border-primary/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Symbol</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Mask</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary"></div>
              <span className="text-xs text-on-surface-variant">Connection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blood"></div>
              <span className="text-xs text-on-surface-variant">Corrupted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
