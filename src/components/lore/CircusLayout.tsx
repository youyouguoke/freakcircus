"use client";

export default function CircusLayout() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Recovered Circus Layout
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Hover over any location to reveal connected endings, related theories, and hidden events. Some areas may shift or disappear.
        </p>

        <div className="bg-surface-container border border-outline/20 p-8">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-surface border border-outline/20 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Public</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Main Tent</div>
            </div>
            <div className="bg-surface border border-blood/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Hidden</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Mirror Hall</div>
            </div>
            <div className="bg-surface border border-blood/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Restricted</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Doctor's Ward</div>
            </div>
            <div className="bg-surface border border-outline/20 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Public</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Stage</div>
            </div>
            <div className="bg-surface border border-blood/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-blood mb-1">Corrupted</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Basement</div>
            </div>
            <div className="bg-surface border border-outline/20 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">Public</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">Exit</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-outline/20 bg-surface"></div>
              <span className="text-xs text-on-surface-variant">Public</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-blood/30 bg-surface"></div>
              <span className="text-xs text-on-surface-variant">Hidden</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-blood/30 bg-surface"></div>
              <span className="text-xs text-on-surface-variant">Restricted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-blood/30 bg-surface"></div>
              <span className="text-xs text-on-surface-variant">Corrupted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
