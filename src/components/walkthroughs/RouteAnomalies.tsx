"use client";

const anomalies = [
  {
    id: "a01",
    title: "Dialogue Mutation",
    route: "Pierrot Silent",
    status: "Confirmed",
    desc: "Dialogue changes after remaining silent for three consecutive scenes. Characters begin to reference previous unselected choices.",
  },
  {
    id: "a02",
    title: "Precognitive References",
    route: "The Doctor",
    status: "Confirmed",
    desc: "The Doctor references endings before they occur. In Scene 7, he describes the 'White Room' ending in detail — three routes before it becomes accessible.",
  },
  {
    id: "a03",
    title: "Disappearing Choices",
    route: "Multiple",
    status: "Under Investigation",
    desc: "Some dialogue options disappear permanently after completing specific routes. Players report 'Comfort' vanishing after Harlequin's True Route.",
  },
  {
    id: "a04",
    title: "Save File Timestamp Drift",
    route: "Global",
    status: "Unverified",
    desc: "After Ending #11, save file timestamps diverge from system clock by hours or days. Some show dates that have not yet occurred.",
  },
];

export default function RouteAnomalies() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Route Anomalies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {anomalies.map((a) => (
            <div key={a.id} className="bg-surface-container border border-outline/20 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="font-[JetBrains_Mono] text-xs text-primary">
                  {a.id}
                </div>
                <div className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                  a.status === 'Confirmed' ? 'border-primary text-primary' :
                  a.status === 'Under Investigation' ? 'border-blood text-blood' :
                  'border-outline/30 text-on-surface-variant'
                }`}>
                  {a.status}
                </div>
              </div>

              <h3 className="font-[Epilogue] text-lg font-bold text-foreground mb-1">
                {a.title}
              </h3>
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-3">
                {a.route}
              </div>
              <p className="text-on-surface-variant text-sm">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
