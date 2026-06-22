"use client";

import Link from "next/link";

const allEndings = [
  { name: "Good Endings", href: "#categories" },
  { name: "Bad Endings", href: "#categories" },
  { name: "True Ending", href: "#categories" },
  { name: "Secret Ending", href: "#categories" },
  { name: "Hidden Ending", href: "#categories" },
];

const characterEndings = [
  { name: "Pierrot Endings", href: "#archive" },
  { name: "Harlequin Endings", href: "#archive" },
  { name: "Doctor Endings", href: "#archive" },
  { name: "Columbina Endings", href: "#archive" },
];

export default function EndingTableOfContents() {
  return (
    <section className="bg-surface py-12 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[Epilogue] text-xl md:text-2xl font-bold text-primary mb-6">
          Endings Guide Contents
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* All Endings */}
          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-4 uppercase tracking-wider">
              All Endings
            </div>
            <div className="space-y-2">
              {allEndings.map((e) => (
                <Link
                  key={e.name}
                  href={e.href}
                  className="block text-on-surface-variant hover:text-primary transition-colors text-sm py-1"
                >
                  ├ {e.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Character Endings */}
          <div className="bg-surface-container border border-outline/20 p-6">
            <div className="font-[JetBrains_Mono] text-xs text-primary mb-4 uppercase tracking-wider">
              Character Endings
            </div>
            <div className="space-y-2">
              {characterEndings.map((e) => (
                <Link
                  key={e.name}
                  href={e.href}
                  className="block text-on-surface-variant hover:text-primary transition-colors text-sm py-1"
                >
                  ├ {e.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
