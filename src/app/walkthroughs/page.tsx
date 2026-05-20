import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Walkthroughs | Freak Circus Hub",
  description: "Step-by-step walkthroughs for every route in The Freak Circus visual novel.",
};

const guides = [
  { route: "Harlequin Route", steps: 24, status: "Complete" },
  { route: "Pierrot Route", steps: 31, status: "Complete" },
  { route: "Doctor Route", steps: 18, status: "Complete" },
  { route: "Columbina Route", steps: 27, status: "Complete" },
  { route: "Secret Route (???)", steps: 42, status: "In Progress" },
];

export default function WalkthroughsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-surface py-32 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-[Creepster] text-5xl md:text-7xl text-primary mb-4">WALKTHROUGHS</h1>
          <p className="text-on-surface-variant text-lg mb-16 max-w-2xl">
            Frame-perfect decision maps. Every choice matters. We have mapped every branch so you don&apos;t have to guess.
          </p>

          <div className="space-y-4">
            {guides.map((guide) => (
              <div key={guide.route} className="bg-surface-container border border-primary-container p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-primary transition-colors">
                <div>
                  <h2 className="font-[Epilogue] text-xl font-bold text-primary">{guide.route}</h2>
                  <p className="text-on-surface-variant text-sm">{guide.steps} key decision points mapped</p>
                </div>
                <span className={`font-[JetBrains_Mono] text-xs uppercase px-3 py-1 border ${guide.status === "Complete" ? "border-primary text-primary" : "border-blood text-blood"}`}>
                  {guide.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
