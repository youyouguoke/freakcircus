"use client";

import Link from "next/link";

const allRoutes = [
  { name: "Pierrot Route", href: "#archive", type: "Main" },
  { name: "Harlequin Route", href: "#archive", type: "Main" },
  { name: "Doctor Route", href: "#archive", type: "Main" },
  { name: "Columbina Route", href: "#archive", type: "Main" },
];

const hiddenRoutes = [
  { name: "Pierrot Silent Route", href: "#archive", type: "Secret" },
  { name: "Harlequin True Route", href: "#archive", type: "Secret" },
  { name: "Doctor Memory Route", href: "#archive", type: "Secret" },
  { name: "Columbina Fractured Route", href: "#archive", type: "Secret" },
  { name: "Null Route", href: "#archive", type: "Corrupted" },
];

export default function RouteFlowchart() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
          All Routes Overview
        </h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Complete route map for The Freak Circus — main routes, secret routes, and corrupted branches
        </p>

        {/* START */}
        <div className="flex justify-center mb-8">
          <div className="bg-surface border border-primary/30 px-8 py-4 text-center">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">START</div>
            <div className="font-[Epilogue] text-sm font-bold text-foreground">Beginning</div>
          </div>
        </div>

        {/* Main Routes */}
        <div className="mb-4">
          <div className="font-[JetBrains_Mono] text-xs text-primary mb-4 text-center uppercase tracking-wider">
            Main Routes
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="bg-surface border border-primary/30 p-4 text-center hover:border-primary transition-colors"
              >
                <div className="font-[JetBrains_Mono] text-xs text-primary mb-1">{route.type}</div>
                <div className="font-[Epilogue] text-sm font-bold text-foreground">{route.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center my-6">
          <div className="text-on-surface-variant text-2xl">↓</div>
        </div>

        {/* Hidden Routes */}
        <div className="mb-4">
          <div className="font-[JetBrains_Mono] text-xs text-blood mb-4 text-center uppercase tracking-wider">
            Secret / Hidden Routes
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {hiddenRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className={`bg-surface border p-4 text-center hover:border-primary transition-colors ${
                  route.type === "Corrupted" ? "border-blood/30" : "border-blood/30"
                }`}
              >
                <div className={`font-[JetBrains_Mono] text-xs mb-1 ${route.type === "Corrupted" ? "text-blood" : "text-blood"}`}>
                  {route.type}
                </div>
                <div className="font-[Epilogue] text-sm font-bold text-foreground">{route.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center my-6">
          <div className="text-on-surface-variant text-2xl">↓</div>
        </div>

        {/* Endings */}
        <div className="font-[JetBrains_Mono] text-xs text-primary mb-4 text-center uppercase tracking-wider">
          Endings
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Good Ending", type: "Canon" },
            { name: "Bad Ending", type: "Canon" },
            { name: "Secret Ending", type: "Secret" },
            { name: "True Ending", type: "Unverified" },
          ].map((ending) => (
            <div key={ending.name} className="bg-surface border border-outline/30 p-4 text-center">
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-1">{ending.type}</div>
              <div className="font-[Epilogue] text-sm font-bold text-foreground">{ending.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
