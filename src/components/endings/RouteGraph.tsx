"use client";

export default function RouteGraph() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
          What We Know About Ending Routes
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The exact route-to-ending mapping has not been fully verified. Here is what community sources have confirmed:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-display text-lg text-green-500 mb-3">✓ Confirmed</h3>
            <ul className="space-y-3 text-on-surface/60 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>&quot;Missing&quot;</strong> — Bad Ending, associated with Harlequin&apos;s route</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>3 open endings</strong> exist but are unnamed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Pierrot and Harlequin</strong> are the two main character routes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Day 1</strong> establishes initial character introductions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span><strong>Day 2</strong> features tent routes and the Columbina legend</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-display text-lg text-yellow-500 mb-3">? Unverified</h3>
            <ul className="space-y-3 text-on-surface/50 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">?</span>
                <span>Which specific open ending is tied to which route</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">?</span>
                <span>Whether a &quot;true ending&quot; exists requiring 100% completion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">?</span>
                <span>Exact choice combinations for each ending</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">?</span>
                <span>Whether Doctor and Jester have dedicated endings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">?</span>
                <span>What Day 3 will add to the ending structure</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 glass-card p-6 border-l-4 border-l-yellow-500">
          <h3 className="font-display text-lg text-on-surface mb-2">Why We Don&apos;t Have a Route Map</h3>
          <p className="text-on-surface/50 text-sm">
            Unlike many visual novels, The Freak Circus has not had its full route tree publicly documented.
            The game is still in active development (v0.2), and Day 3 has not been released.
            Community members have shared partial findings, but no comprehensive route-to-ending mapping
            has been independently verified.
          </p>
        </div>
      </div>
    </section>
  );
}
