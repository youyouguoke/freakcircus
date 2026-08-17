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
                  Trust thresholds not met by end of Day 2. Player character goes missing.
                </td>
                <td className="p-3 text-on-surface-variant text-xs">
                  thefreakcircus.wiki, YouTube, thefreakcircus.org
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 bg-surface-container border border-amber-500/30 p-4">
          <p className="text-on-surface-variant text-xs">
            <strong className="text-amber-400">Note:</strong> The developer has confirmed 3 additional open endings exist,
            but no source has named them. Ending names like &quot;Grand Finale&quot;, &quot;Eternal Silence&quot;, etc.
            that appear on other sites are unverified speculation.
          </p>
        </div>
      </div>
    </section>
  );
}
