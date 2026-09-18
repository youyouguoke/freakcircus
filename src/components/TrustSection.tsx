import {
  CHARACTERS_COUNT,
  CURRENT_VERSION,
  GAME_STATUS,
  MAIN_CHARACTERS,
  PLAYTIME_LABEL,
  RELEASED_DAYS_LABEL,
} from "@/lib/site-facts";

export default function TrustSection() {
  return (
    <section className="bg-archive-black py-16 md:py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="font-label text-circus-red text-[0.6rem] mb-3 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-circus-red" />
            ARCHIVE STATUS
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-paper">Current Build Facts</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="archive-card text-center">
            <div className="font-horror text-3xl text-paper mb-2">{CHARACTERS_COUNT}</div>
            <div className="font-label text-[0.6rem] text-faint-paper">CONFIRMED CHARACTERS</div>
            <p className="text-dim-paper text-xs mt-2">{MAIN_CHARACTERS.join(", ")}</p>
          </div>
          <div className="archive-card text-center">
            <div className="font-horror text-3xl text-paper mb-2">{GAME_STATUS.releasedDays.value.length}</div>
            <div className="font-label text-[0.6rem] text-faint-paper">RELEASED DAYS</div>
            <p className="text-dim-paper text-xs mt-2">{RELEASED_DAYS_LABEL} available</p>
          </div>
          <div className="archive-card text-center">
            <div className="font-horror text-3xl text-paper mb-2">{CURRENT_VERSION}</div>
            <div className="font-label text-[0.6rem] text-faint-paper">CURRENT VERSION</div>
            <p className="text-dim-paper text-xs mt-2">Prototype — Day 3 planned</p>
          </div>
          <div className="archive-card text-center">
            <div className="font-horror text-3xl text-paper mb-2">{PLAYTIME_LABEL}</div>
            <div className="font-label text-[0.6rem] text-faint-paper">EST. PLAYTIME</div>
            <p className="text-dim-paper text-xs mt-2">Day 1 + Day 2 combined</p>
          </div>
        </div>
      </div>
    </section>
  );
}
