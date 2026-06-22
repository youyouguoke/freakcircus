"use client";

import Link from "next/link";

const order = [
  { step: 1, route: "Pierrot Main Route", reason: "Introduces core mechanics without replay requirements", difficulty: "Beginner" },
  { step: 2, route: "Harlequin True Route", reason: "Unlocks cross-route awareness flags for later routes", difficulty: "Hard" },
  { step: 3, route: "Doctor Memory Route", reason: "Requires Harlequin completion for mirror connection", difficulty: "Hard" },
  { step: 4, route: "Columbina Fractured Route", reason: "Requires Pierrot Main and Doctor Memory for three-loop sequence", difficulty: "Very Hard" },
  { step: 5, route: "Pierrot Silent Route", reason: "Requires all previous routes for replay awareness flags", difficulty: "Very Hard" },
];

export default function RouteOrderGuide() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          Recommended Route Order
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          The optimal sequence for new players — designed to unlock cross-route awareness flags progressively
        </p>

        <div className="space-y-4">
          {order.map((o) => (
            <div key={o.step} className="bg-surface-container border border-outline/20 p-6 flex items-start gap-4">
              <div className="font-[Creepster] text-3xl text-primary w-12 shrink-0">
                {o.step}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-[Epilogue] text-lg font-bold text-foreground">{o.route}</h3>
                  <span className={`font-[JetBrains_Mono] text-xs px-2 py-1 border ${
                    o.difficulty === "Beginner" ? "border-primary text-primary" :
                    o.difficulty === "Hard" ? "border-blood text-blood" :
                    "border-blood text-blood"
                  }`}>{o.difficulty}</span>
                </div>
                <p className="text-on-surface-variant text-sm">{o.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
