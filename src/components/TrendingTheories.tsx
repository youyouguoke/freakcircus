export default function TrendingTheories() {
  return (
    <section className="bg-cream py-24 px-4 md:px-16">
      <h2 className="font-[Epilogue] text-3xl md:text-5xl font-bold text-paper-heading mb-16 underline decoration-blood decoration-4 underline-offset-8">
        TRENDING THEORIES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Theory Card 1 */}
        <div className="bg-cream-dark p-8 border-2 border-paper-heading/10 relative group hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_#7A1E1E]">
          <div className="absolute -top-3 left-4 bg-blood text-white px-3 py-1 font-[JetBrains_Mono] text-[10px] uppercase">
            File No: 902-A
          </div>
          <h3 className="font-[Epilogue] text-xl font-semibold text-paper-heading mb-4">
            Is Pierrot manipulating every route?
          </h3>
          <p className="text-paper-text mb-6">
            Recent code mining suggests dialogue trees are pruned based on a
            hidden &apos;sanity&apos; meter not visible in the UI...
          </p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blood">link</span>
            <span className="text-blood font-bold text-sm uppercase">
              64 Red Threads Connected
            </span>
          </div>
          <div className="absolute bottom-2 right-2 opacity-20 pointer-events-none -rotate-12">
            <span className="material-symbols-outlined text-8xl">
              verified_user
            </span>
          </div>
        </div>

        {/* Theory Card 2 */}
        <div className="bg-cream-dark p-8 border-2 border-paper-heading/10 relative group hover:rotate-1 transition-transform shadow-[8px_8px_0px_#14121a] mt-0 md:mt-8">
          <div className="absolute -top-3 left-4 bg-blood text-white px-3 py-1 font-[JetBrains_Mono] text-[10px] uppercase">
            File No: 114-C
          </div>
          <h3 className="font-[Epilogue] text-xl font-semibold text-paper-heading mb-4">
            The &apos;Broken Mirror&apos; Metaphor
          </h3>
          <p className="text-paper-text mb-6">
            Every shard represents a player decision. Have you noticed the
            reflection in the carnival&apos;s entrance changing?
          </p>
          <div className="redact-reveal relative cursor-help">
            <span className="text-black bg-black px-1 rounded redact-ink transition-all inline-block w-full">
              SPOILER: The mirror is actually a camera.
            </span>
            <span className="absolute left-1 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
              The mirror is actually a camera.
            </span>
          </div>
        </div>

        {/* Theory Card 3 */}
        <div className="bg-cream-dark p-8 border-2 border-paper-heading/10 relative group hover:-rotate-1 transition-transform shadow-[8px_8px_0px_#7A1E1E] md:-mt-4">
          <div className="absolute -top-3 left-4 bg-blood text-white px-3 py-1 font-[JetBrains_Mono] text-[10px] uppercase">
            File No: 001-Z
          </div>
          <img
            className="w-full h-40 object-cover grayscale mb-4 brightness-90 border-2 border-white"
            alt="Vintage Polaroid of an empty circus ring"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvmuABUIcHFJlSFvk5eQqd_eHoID4qlYkA9G5lSwLDU7mMTWKO5uM4StX0liSKVcZBDaBVRda-q7HZUsljPBlzgvPC7SB7QQ_83CXDfcxLyHdlb1z08CmynkFWZcCGEKaqV0DoAZkEHTIwiid02c0fSlnbTMTNwVLYxUuGQcRW2ytWXrc_PCFyW68vcK2JFB6UM__43g5HSoQrkoV9KZymRnpMYcx2Ka3XWK388wrjvXHVmk3n8pNn4EdM5sE-6UHLkWWnU9Wxhfk"
          />
          <h3 className="font-[Epilogue] text-xl font-semibold text-paper-heading mb-2">
            The Missing Audience
          </h3>
          <p className="text-paper-text">
            Where did the spectators go after the 1988 accident? Archive footage
            shows no exits were used.
          </p>
        </div>
      </div>
    </section>
  );
}
