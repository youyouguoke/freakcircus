"use client";

import { CURRENT_VERSION, ENDINGS_PLANNED } from "@/lib/site-facts";

export default function EndingOverview() {
  return (
    <section className="py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-primary uppercase tracking-widest mb-4">
          Ending Overview
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-bold text-foreground mb-2">Which ending is considered the true ending?</h3>
            <p>No single ending is universally accepted as the &quot;true ending.&quot; The developer has not confirmed a canonical ending. The current build has only 1 confirmed ending (&quot;Missing&quot;). The developer has planned 4 additional endings, but none are implemented yet.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">What endings exist in the current build?</h3>
            <p>The current build ({CURRENT_VERSION}) has 1 confirmed ending: &quot;Missing&quot; (Bad Ending), associated with Harlequin&apos;s route. The specific trigger conditions have not been independently verified.</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-2">What endings are planned?</h3>
            <p>The developer has listed {ENDINGS_PLANNED} planned endings on itch.io: Pierrot&apos;s ending, Harlequin&apos;s ending, Protagonist&apos;s ending, and &quot;All together&quot; (MC with both Pierrot and Harlequin). The developer also states: &quot;the script is still a work in progress, so no endings are fully planned yet.&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
