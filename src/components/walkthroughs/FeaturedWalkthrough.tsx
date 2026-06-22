"use client";

import Link from "next/link";

export default function FeaturedWalkthrough() {
  return (
    <section id="featured" className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-8">
          Featured Route
        </h2>
        <div className="bg-surface-container border border-primary/30 p-8">
          <h3 className="font-[Epilogue] text-xl font-bold text-foreground mb-2">Pierrot Silent Route</h3>
          <p className="text-on-surface-variant mb-4">
            The most technically demanding route. Requires frame-perfect silence conditions and unlocks the deepest lore connections.
          </p>
          <Link href="/walkthroughs/pierrot-silent-route" className="inline-block px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors text-sm font-[JetBrains_Mono] uppercase">
            View Walkthrough
          </Link>
        </div>
      </div>
    </section>
  );
}
