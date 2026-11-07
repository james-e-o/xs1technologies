import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Use",
  description: "Website terms of use for XS1 Technologies. Legal content is being prepared.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero description="This page is reserved for the terms governing use of the XS1 Technologies website." eyebrow="Legal information" title="Terms of use" />
      <section className="mx-auto max-w-3xl px-5 py-14 lg:py-20">
        <div className="border-l-2 border-turquoise bg-white p-6 text-sm leading-7 text-ink/70">
          <h2 className="text-lg font-semibold text-navy">Content to be provided</h2>
          <p className="mt-3">Formal terms have not yet been supplied. XS1 Technologies should review and add its applicable terms before treating this placeholder as a legal notice.</p>
        </div>
      </section>
    </>
  );
}
