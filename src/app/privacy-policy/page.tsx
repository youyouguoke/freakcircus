import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Freak Circus Hub",
  description: "Privacy policy for Freak Circus Hub.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="bg-cream py-32 px-4 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[Epilogue] text-4xl md:text-5xl font-bold text-paper-heading mb-8 underline decoration-blood decoration-4">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-paper-text">
            <p className="italic">
              Last updated: January 2025. This document has been reviewed by the
              Archivist.
            </p>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              1. Information We Collect
            </h2>
            <p>
              Freak Circus Hub is a static informational archive. We do not
              require user accounts or collect personal data for core
              functionality. When you browse our site, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anonymous analytics data (page views, traffic sources)</li>
              <li>Browser type and device information for optimization</li>
              <li>IP address (anonymized where possible)</li>
            </ul>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              2. How We Use Information
            </h2>
            <p>
              Any data collected is used solely for improving the archive
              experience and understanding which lore sections need expansion. We
              do not sell, trade, or share personal data with third parties.
            </p>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              3. Cookies
            </h2>
            <p>
              We use minimal cookies for site functionality and analytics. You
              can disable cookies in your browser settings, though this may
              affect certain features.
            </p>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              4. Third-Party Services
            </h2>
            <p>
              We may embed content from external platforms (YouTube, Reddit) or
              use analytics services. These services have their own privacy
              policies.
            </p>

            <h2 className="font-[Epilogue] text-2xl font-semibold text-paper-heading mt-8">
              5. Contact
            </h2>
            <p>
              For privacy concerns, contact{" "}
              <a
                href="mailto:hello@freak-circus.com"
                className="text-blood underline"
              >
                hello@freak-circus.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
