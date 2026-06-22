"use client";

import Link from "next/link";

const routes = [
  { id: "R_01", title: "Pierrot Main", status: "VERIFIED", icon: "route", href: "#pierrot-main" },
  { id: "R_04A", title: "Silent Route", status: "CORRUPTED", icon: "warning", href: "#silent-route" },
  { id: "R_07", title: "Memory Route", status: "UNSTABLE", icon: "route", href: "#memory-route" },
  { id: "R_??", title: "Null Path", status: "UNVERIFIED", icon: "route", href: "#null-path" },
];

export default function RouteBoard() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-8">
          Route Board // CONFIDENTIAL
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {routes.map((route) => (
            <Link
              key={route.id}
              href={route.href}
              className="block bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors group"
            >
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">
                {route.icon}
              </div>
              <div className="font-[JetBrains_Mono] text-2xl text-primary mb-1">
                {route.id}
              </div>
              <div className="font-[Epilogue] text-lg font-bold text-foreground mb-2">
                {route.title}
              </div>
              <div className={`font-[JetBrains_Mono] text-xs ${
                route.status === 'CORRUPTED' ? 'text-blood' :
                route.status === 'UNSTABLE' ? 'text-blood' :
                route.status === 'UNVERIFIED' ? 'text-on-surface-variant' :
                'text-primary'
              }`}>
                {route.status}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
