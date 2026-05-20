import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Freak Circus Hub",
  description: "Terms of service for Freak Circus Hub.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-cream py-32 px-4 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[Epilogue] text-4xl md:text-5xl font-bold text-paper-heading mb-8 underline decoration-blood decoration-4">
            Terms of Service
          </h1>
          <div className="space-y-6 text-paper-text">
            <p className="italic">
              By accessing Freak Circus Hub, you agree to the following terms.
            </p>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              1. Content Ownership
            </h2>
            <p>
              All original content on Freak Circus Hub is created by the
              community for educational and entertainment purposes. Game assets,
              characters, and story elements belong to their respective
              copyright holders.
            </p>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              2. Spoiler Warning
            </h2>
            <p>
              This site contains extensive spoilers for The Freak Circus visual
              novel. By continuing to browse, you acknowledge that you may
              encounter plot details, ending explanations, and hidden lore.
            </p>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              3. User Conduct
            </h2>
            <p>
              When submitting theories, comments, or fan content, users agree
              to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respect other community members</li>
              <li>Not post harmful or illegal content</li>
              <li>Not attempt to distribute pirated game files</li>
              <li>Credit sources when referencing external theories</li>
            </ul>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              4. Disclaimer
            </h2>
            <p>
              Freak Circus Hub is a fan project and is not affiliated with the
              official game developers or publishers. Information provided is
              based on community research and may contain inaccuracies.
            </p>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              5. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Continued
              use of the site constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
