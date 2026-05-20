import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="bg-surface py-24 md:py-32 px-4 md:px-16 space-y-24 md:space-y-32">
      {/* Feature 1: Walkthroughs */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img
              className="w-full h-[400px] md:h-[500px] object-cover border-4 border-primary-container grayscale"
              alt="A chaotic desk covered in handwritten notes and red string connections"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5uxL0DpmNeO8XqRLL-wPBFE7adxHcAp7d_Nx6vdMbfstPxmm2vE6gtUZ0n3TmvgwfP-TElXSCnCjEW0AK1Zq1XS5hcVscBjbIgmmpYWVZqSDDnZlmoeoAU7l3sAbBB-S1ICiprEQYXvwaL2SFEOck3AjPP1w37kgaulscMixlDeKjI7wJ1-TeAi5HJ7iX9k7v04rNqIzEJWgt2DYVdLWnkWKbgY1ZlZKAAV4M2MdEOHaubmPEKPVJ45shqn0Dj3ClRLAJ4H1l_30"
            />
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-surface-container p-4 md:p-6 border-2 border-primary shadow-2xl max-w-xs">
              <span className="font-[JetBrains_Mono] text-primary block mb-2 text-xs">
                // BRANCH_ID: 99x
              </span>
              <p className="text-sm italic">
                &quot;I followed the left path 50 times. It only changes when you
                refuse to speak.&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-[Epilogue] text-3xl md:text-5xl font-bold text-primary mb-6">
            BRANCH-BY-BRANCH <br /> WALKTHROUGHS
          </h2>
          <p className="text-on-surface-variant text-lg mb-8">
            Stop guessing. Our archive contains every frame-perfect decision
            needed to trigger the &apos;Eternal Silence&apos; ending. Scanned
            directly from internal design docs found on the developer&apos;s
            server.
          </p>
          <ul className="space-y-4 font-[JetBrains_Mono] text-primary text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined">check_box</span> 48+
              Detailed Decision Maps
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined">check_box</span>{" "}
              Hidden Dialogue Trigger Points
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined">check_box</span>{" "}
              Secret Item Locations
            </li>
          </ul>
        </div>
      </div>

      {/* Feature 2: Character Breakdowns */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img
              className="w-full h-[400px] md:h-[500px] object-cover border-4 border-primary-container grayscale"
              alt="A shadowy silhouette in a derelict circus corridor"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSUqHb_RHOSJFvBMu3FiRm0aetM9mXJMK1JatLmgQg4LpTd1zDsjPed9tk5MBQwA79QPc6U3EmYB5tCcvQn5C3iH9FKBDQG7BOBre7GkyMgp3MB74e99nbBlKMqCOTc2tNBn06GIuCQnt0ctiw5ikYmSHGLwrldVo3ZwxfQEdMxFTOd0tuKUDeibG5_ieC2vVX4hJyjyXVApat5ZFUJcQKfnUgoBSLG_bmObUg--PX6eD6VqOJ0Xq-k9g11dfY_iv-diX4IQ1vgI"
            />
            <div className="absolute -top-6 -left-4 md:-top-10 md:-left-10 bg-secondary-container p-4 md:p-6 border-2 border-on-secondary shadow-2xl max-w-xs">
              <span className="font-[JetBrains_Mono] text-on-secondary-container block mb-2 text-xs">
                // PROFILE: PIERROT
              </span>
              <p className="text-sm italic text-on-secondary-container">
                &quot;The mask doesn&apos;t hide his face; it hides the fact that
                he doesn&apos;t have one.&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:text-right">
          <h2 className="font-[Epilogue] text-3xl md:text-5xl font-bold text-primary mb-6">
            CHARACTER MOTIVE <br /> BREAKDOWNS
          </h2>
          <p className="text-on-surface-variant text-lg mb-8">
            Why does the Ringmaster weep when you reach for the key? Dive into
            the psychological trauma files that explain the actions of every
            freak and performer in the circus.
          </p>
          <div className="flex flex-wrap md:justify-end gap-3">
            <span className="bg-surface-container-highest px-4 py-2 text-xs font-[JetBrains_Mono] text-primary-fixed border border-primary/20 -rotate-2">
              Trauma History
            </span>
            <span className="bg-surface-container-highest px-4 py-2 text-xs font-[JetBrains_Mono] text-primary-fixed border border-primary/20 rotate-3">
              Subconscious Drifts
            </span>
            <span className="bg-surface-container-highest px-4 py-2 text-xs font-[JetBrains_Mono] text-primary-fixed border border-primary/20 -rotate-1">
              Redacted Past
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
