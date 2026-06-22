"use client";

export default function PlayNow() {
  return (
    <section className="bg-surface py-16 px-4 md:px-16 border-t border-outline/10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-surface-container border border-outline/20 p-8">
          <h2 className="font-[Epilogue] text-2xl md:text-3xl font-bold text-primary mb-4">
            Play The Freak Circus Online
          </h2>
          <div className="font-[JetBrains_Mono] text-xs text-on-surface-variant mb-4">
            powered by itch.io
          </div>
          <p className="text-on-surface-variant mb-6">
            The Freak Circus is rated 18+. Contains mature themes.
          </p>
          <a
            href="https://itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-surface transition-colors font-[JetBrains_Mono] text-sm uppercase"
          >
            Visit official page on itch.io →
          </a>
        </div>
      </div>
    </section>
  );
}
