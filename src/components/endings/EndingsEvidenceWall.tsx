"use client";

import Link from "next/link";

const endings = [
  { id: "ENDING #04", title: "Eternal Silence", status: "VERIFIED", href: "#ending-04" },
  { id: "ENDING #07", title: "Doctor's Note", status: "CORRUPTED", href: "#ending-07" },
  { id: "ENDING #09", title: "Columbina's Truth", status: "UNSTABLE", href: "#ending-09" },
  { id: "ENDING #??", title: "Null Route", status: "UNVERIFIED", href: "#ending-null" },
];

export default function EndingsEvidenceWall() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-8">
          Evidence Wall // CONFIDENTIAL
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {endings.map((ending) => (
            <Link key={ending.id} href={ending.href} className="block bg-surface-container border border-outline/20 p-6 hover:border-primary transition-colors">
              <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-2">{ending.id}</div>
              <div className="font-[Epilogue] text-lg font-bold text-foreground mb-2">{ending.title}</div>
              <div className={`font-[JetBrains_Mono] text-xs px-2 py-1 border inline-block ${
                ending.status === 'VERIFIED' ? 'border-primary text-primary' :
                ending.status === 'CORRUPTED' ? 'border-blood text-blood' :
                'border-outline/30 text-on-surface-variant'
              }`}>{ending.status}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
