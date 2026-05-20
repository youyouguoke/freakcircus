import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Characters | Freak Circus Hub",
  description: "Complete character profiles for The Freak Circus visual novel. Pierrot, Harlequin, Doctor, Columbina, and more.",
};

const characters = [
  {
    name: "Pierrot",
    role: "The Jester",
    desc: "The enigmatic trickster who may be manipulating every route. His mask hides more than just a face.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOZkQzJvfNlRSE96t35D9bdp8-rJVIibJxscBbT6v98NQd9qGwZDTYEbjkK-uf0Ccu9C6yXuwB5k_yvb3JLPgXqRTZ9Wpfux2JGjCOyKo-4wcbuV6ekhDRRszXSwo5lCxkFdD1aPhfR-oYpMC2MmE4Bnl7BsB7JfSZ_FX3OW_UTloNhc8nxEqAUP__anL6er9G1TTSq0HHqeWGp3A9oTo-sHVHuct_gVffucYeHV839Z4Re_gDBVkOeYPvEUIyroqxWlawT5mSOzs",
  },
  {
    name: "Harlequin",
    role: "The Performer",
    desc: "A fractured soul caught between loyalty and obsession. Her routes reveal the darkest corners of the circus.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQjB9vgc3BOmMPSwnA7bTMTbP8gJXSrz9q8RUbzTB49cwUTvNIuANr3121MC4dWunJ7fwA6vvRP54jfdTI4uP9_5WCxl5P_uKNFI4WTMT2lVDDRk_Mw9jAoj32fDiC4RTjd_qdWg7pGsQOdk6Vfnc7j780BlTVUOhgLic7NsaIhvk4z9KmBAqXm8lL-6kNnUR0ffe-83lVi4iQMipqJeRn4Msfs7fP8eGWu_vxgGZgCWAJLTwaWBwDP5K4hOSYq1Bke6cMcAtamTg",
  },
  {
    name: "The Doctor",
    role: "The Surgeon",
    desc: "Behind the carnival medicine show lies a history of twisted experiments and forgotten patients.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW90Yhw-LrsaM8jpVoWDZQPhMucUjBmaVhVXzBkrI5se3o7P3aZhc_lDYyTd9hdbL8ow19p01RsyRgpCmpZ_wRPmLGT4VLJS0jp6k9KJ3vBonkCNziGXBHjvYdvzzOT4Z1C1TidGdYXMCKP4HTioFECT16pBqKVjcgeYI5OKeYLCIjCr5fWyWbkdbkB-WBVGsc2NkrjeUizgiv1k9A5INxGzx73CnW2sRF8jtcxL8UqTl0FDB1LzVw2ubDvlZeIMxYhkOcuKY_ynk",
  },
  {
    name: "Columbina",
    role: "The Dove",
    desc: "A silent observer who sees everything. Her endings suggest she may be the only one who truly understands the circus.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvmuABUIcHFJlSFvk5eQqd_eHoID4qlYkA9G5lSwLDU7mMTWKO5uM4StX0liSKVcZBDaBVRda-q7HZUsljPBlzgvPC7SB7QQ_83CXDfcxLyHdlb1z08CmynkFWZcCGEKaqV0DoAZkEHTIwiid02c0fSlnbTMTNwVLYxUuGQcRW2ytWXrc_PCFyW68vcK2JFB6UM__43g5HSoQrkoV9KZymRnpMYcx2Ka3XWK388wrjvXHVmk3n8pNn4EdM5sE-6UHLkWWnU9Wxhfk",
  },
];

export default function CharactersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-surface py-32 px-4 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-[Creepster] text-5xl md:text-7xl text-primary mb-4">CHARACTER ARCHIVES</h1>
          <p className="text-on-surface-variant text-lg mb-16 max-w-2xl">
            Every performer has a story. Every story has a secret. Dive into the psychological profiles of the circus inhabitants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {characters.map((char) => (
              <div key={char.name} className="bg-surface-container border-2 border-primary-container p-6 group hover:border-primary transition-colors">
                <div className="flex gap-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-primary rotate-3 overflow-hidden shrink-0">
                    <img src={char.img} alt={char.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div>
                    <span className="font-[JetBrains_Mono] text-primary text-xs uppercase">{char.role}</span>
                    <h2 className="font-[Epilogue] text-2xl font-bold text-primary mt-1 mb-3">{char.name}</h2>
                    <p className="text-on-surface-variant text-sm">{char.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
