export default function EndingComparisonTable() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Confirmed Ending
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Only 1 ending has been independently verified by multiple sources
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline/20">
                <th className="text-left p-3 text-foreground">Ending</th>
                <th className="text-left p-3 text-foreground">Type</th>
                <th className="text-left p-3 text-foreground">Trigger</th>
                <th className="text-left p-3 text-foreground">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-outline/10">
                <td className="p-3 text-foreground font-bold">Missing</td>
                <td className="p-3">
                  <span className="font-[JetBrains_Mono] text-xs px-2 py-1 border border-blood text-blood">Bad Ending</span>
                </td>
                <td className="p-3 text-on-surface-variant text-xs">
                  Associated with Harlequin's route. Player character goes missing. Specific trigger conditions unverified.
                </td>
                <td className="p-3 text-on-surface-variant text-xs">
                  YouTube
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-surface-container border border-amber-500/30 p-4">
          <p className="text-on-surface-variant text-xs">
            <strong className="text-amber-400">Note:</strong> The developer has listed 4 planned endings on itch.io (Pierrot&apos;s, Harlequin&apos;s,
            Protagonist&apos;s, All together), but none are implemented in the current build. The developer states:
            &quot;the script is still a work in progress, so no endings are fully planned yet.&quot; Any ending names beyond &quot;Missing&quot;
            that appear on other sites are unverified speculation.
          </p>
        </div>
      </div>
    </section>
  );
}
