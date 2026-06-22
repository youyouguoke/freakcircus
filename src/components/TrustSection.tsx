export default function TrustSection() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Community-Researched Lore Archive
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Inside This Archive — What the community has built over two years of testing and documentation
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">✓</div>
            <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
              Character Relationship Analysis
            </h3>
            <p className="text-on-surface-variant text-sm">
              How Pierrot, Harlequin, The Doctor, and Columbina interconnect across routes. Cross-route dialogue changes and shared memory triggers.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">✓</div>
            <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
              Ending Requirement Documentation
            </h3>
            <p className="text-on-surface-variant text-sm">
              Verified unlock conditions for 8+ endings. Scene-by-scene requirements, replay dependencies, and hidden trigger documentation.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">✓</div>
            <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
              Route-Specific Walkthroughs
            </h3>
            <p className="text-on-surface-variant text-sm">
              Step-by-step guides for Pierrot's silent route, Harlequin's fractured route, The Doctor's memory route, and Columbina's loop route.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">✓</div>
            <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
              Community-Discovered Theories
            </h3>
            <p className="text-on-surface-variant text-sm">
              Player-submitted investigations into loop mechanics, replay awareness, the Mirror Hall's changing architecture, and the true nature of the circus.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">✓</div>
            <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
              Timeline and Lore References
            </h3>
            <p className="text-on-surface-variant text-sm">
              Chronological event tracking, symbol analysis (red thread, mirrors, stage curtains), and the founding myth of the First Circus Fire.
            </p>
          </div>

          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-2">✓</div>
            <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
              Data Mining and File Analysis
            </h3>
            <p className="text-on-surface-variant text-sm">
              Technical documentation of unused voice lines, hidden counters in save files, corrupted endings found in game builds, and hex pattern analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
