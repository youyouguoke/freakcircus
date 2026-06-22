"use client";

const routes = [
  { name: "Pierrot Main Route", character: "Pierrot", difficulty: "Beginner", endingType: "Good", mainRoute: "Yes" },
  { name: "Pierrot Silent Route", character: "Pierrot", difficulty: "Very Hard", endingType: "Secret", mainRoute: "No" },
  { name: "Harlequin True Route", character: "Harlequin", difficulty: "Hard", endingType: "Bad", mainRoute: "Yes" },
  { name: "Doctor Memory Route", character: "The Doctor", difficulty: "Hard", endingType: "False", mainRoute: "No" },
  { name: "Columbina Fractured Route", character: "Columbina", difficulty: "Very Hard", endingType: "Loop", mainRoute: "No" },
  { name: "Null Route", character: "Unknown", difficulty: "Impossible", endingType: "False", mainRoute: "No" },
];

export default function RouteComparisonTable() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Route Comparison Table
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          All verified routes compared by difficulty, ending type, and whether they are main or hidden routes
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline/20">
                <th className="text-left p-3 text-foreground">Route</th>
                <th className="text-left p-3 text-foreground">Character</th>
                <th className="text-left p-3 text-foreground">Difficulty</th>
                <th className="text-left p-3 text-foreground">Ending Type</th>
                <th className="text-left p-3 text-foreground">Main Route</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((r) => (
                <tr key={r.name} className="border-b border-outline/10">
                  <td className="p-3 text-foreground font-bold">{r.name}</td>
                  <td className="p-3 text-on-surface-variant">{r.character}</td>
                  <td className="p-3">
                    <span className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                      r.difficulty === "Beginner" ? "border-primary text-primary" :
                      r.difficulty === "Hard" ? "border-blood text-blood" :
                      r.difficulty === "Very Hard" ? "border-blood text-blood" :
                      "border-outline/30 text-on-surface-variant"
                    }`}>{r.difficulty}</span>
                  </td>
                  <td className="p-3">
                    <span className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                      r.endingType === "Good" ? "border-primary text-primary" :
                      r.endingType === "Secret" ? "border-blood text-blood" :
                      "border-outline/30 text-on-surface-variant"
                    }`}>{r.endingType}</span>
                  </td>
                  <td className="p-3 text-on-surface-variant">{r.mainRoute}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
