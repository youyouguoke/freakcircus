export default function TrustSection() {
  return (
    <section className="bg-cream py-20 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-16">
        <div className="text-paper-heading font-[Epilogue] text-xl md:text-2xl font-semibold uppercase tracking-widest text-center border-y-2 border-paper-heading/20 py-4 w-full md:w-1/3">
          COMMUNITY-RESEARCHED <br /> LORE ARCHIVE
        </div>

        <div className="flex -space-x-4 overflow-hidden">
          <img
            className="inline-block h-20 w-20 md:h-24 md:w-24 rounded-full ring-4 ring-cream grayscale brightness-75 hover:brightness-100 transition-all"
            alt="Archival portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuClQ4uTl3OEY8n--eFYyMX1ZdVlGaFX3ZMvwjtnuPnFXndJ4iE46_--1K22z3uh-dTqzcJKdux1inWXCP9aiLboyHVQpgVh7PK-AFS7JPxYOa8iDQEvmwkAwVlfMGKFieywjrjfJoyh-iL6QvAFLgfkQ6A0pujkxdVsXIvojvhEVCVJrUhl39wyEnKYbeGzI3NNgE6ZlzPeZNWbINIeXEV5lCM9mzXc31q95e0oKjPIVG9bwjA99P0mu-FbqBPUftkFD3oxExwgyZA"
          />
          <img
            className="inline-block h-20 w-20 md:h-24 md:w-24 rounded-full ring-4 ring-cream grayscale brightness-75 hover:brightness-100 transition-all"
            alt="Archival portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIgugjDoHIOv8LE3WGn0-7L1C7VXb2AE6XH81_vVHxeG3Gt255d6yMpaD3orEe9Cv4zQxlCguiJilF_FKDP1Ul1cokUOPm_xflfWInq1gCuYBEmSLzypA68e2ydExnm0xFARdREZA1xyyPuMw21T9GD7zJwqR-cyCsJY5falWk_hysV7Y429RrMg2v5fSVtr5Idn9Q43ZXuRI42ml8xsWBcWnYg_8X4iX1USMAsr4Hi0MzSDyJOdNONqiVF6160X3yWwStfiaF7DM"
          />
          <img
            className="inline-block h-20 w-20 md:h-24 md:w-24 rounded-full ring-4 ring-cream grayscale brightness-75 hover:brightness-100 transition-all"
            alt="Archival portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLxANs39Gar3UYW31lo1pkg_cf04ep_qcUMLZuma4YYf6WU8x_2RpxRMt1FbDd1aR88a3t63rq3TtJrb1_qTlC0vnWZgXJpbbpRazu740uXHT7ClLbt5qfdjl8xlLgdA3hQsd5BpIIWQmSOmXoj4p1JZRhkHTQjsfRiDPZ5KPtFVCTTrb1Zz6aXrzYCyEoFzZTEGbqaLPXQ_ns2r_hL3bJO5bFsPasnCjSxruyFTEYqY_hd0WzgNU_yqsaTdMsaJC_IuxPvMtSFLA"
          />
          <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-cream-dark flex items-center justify-center border-2 border-dashed border-blood text-blood font-bold text-sm md:text-base">
            +8k
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/50 p-4 border border-blood/30 rotate-1 shadow-sm font-[JetBrains_Mono] text-xs text-black">
            <span className="text-blood font-bold block mb-1">LOG_774:</span>
            &quot;Data integrity maintained by the collective. We see the
            strings.&quot;
          </div>
          <div className="absolute -top-3 -right-3 w-12 h-4 bg-yellow-200/40 rotate-45 opacity-60" />
        </div>
      </div>

      <div className="ink-scratch opacity-30 mt-16" />
    </section>
  );
}
