import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy",
  description: "Privacy information for XS1 Technologies. Legal content is being prepared.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero description="This page is reserved for XS1 Technologies' privacy information." eyebrow="Legal information" title="Privacy notice" />
      <section className="mx-auto max-w-3xl px-5 py-14 lg:py-20">
        <div className="border-l-2 border-turquoise bg-white p-6 text-sm leading-7 text-ink/70">
          <h2 className="text-lg font-semibold text-navy">Content to be provided</h2>
          <p className="mt-3">The formal privacy notice has not yet been supplied. Before publishing this website for public enquiries, XS1 Technologies should add its applicable data handling, retention, and contact information here. The enquiry form currently does not transmit or store submissions.</p>
        </div>
      </section>
    </>
  );
}
