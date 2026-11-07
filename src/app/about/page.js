import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About XS1 Technologies",
  description:
    "Learn about XS1 Technologies and its practical, business-focused approach to technology and digital transformation.",
};

const values = [
  ["Practicality", "Choose technology for the real problem it can solve, not for novelty alone."],
  ["Clarity", "Make complex choices easier to understand and act on."],
  ["Partnership", "Listen, work collaboratively, and respect the context of each organisation."],
  ["Progress", "Build capability and improve solutions iteratively as needs evolve."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="XS1 Technologies helps businesses and individuals navigate a changing digital world with practical solutions, business understanding, and a focus on lasting usefulness."
        eyebrow="About XS1 Technologies"
        title="Technology should make progress possible."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr]">
          <div><p className="eyebrow">Who we are</p><h2 className="section-title mt-3">A technology partner focused on business realities.</h2></div>
          <div className="space-y-5 text-lg leading-8 text-ink/70">
            <p>XS1 Technologies works across business technology, digital transformation, custom software, e-commerce, and professional technology training.</p>
            <p>We combine technology with practical business understanding to help organisations address operational challenges and make thoughtful progress toward their goals.</p>
          </div>
        </div>
      </section>
      <section className="bg-navy py-14 text-white lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 lg:px-8">
          <div className="border-l-2 border-turquoise pl-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-turquoise">Our mission</p><h2 className="mt-4 text-2xl font-medium leading-9">To empower businesses and individuals through practical technology solutions that improve efficiency, encourage innovation, and create opportunities for growth.</h2></div>
          <div className="border-l-2 border-white/25 pl-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-turquoise">Our vision</p><h2 className="mt-4 text-2xl font-medium leading-9">To become a trusted technology partner helping businesses and individuals navigate an increasingly digital world.</h2></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="mb-8"><p className="eyebrow">What guides us</p><h2 className="section-title mt-3">Our values in practice.</h2></div>
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, description], index) => <article className="border-t border-navy/15 px-5 py-5 first:pl-0" key={title}><span className="text-xs font-bold tracking-widest text-teal-800">0{index + 1}</span><h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/65">{description}</p></article>)}
        </div>
      </section>
      <section className="border-t border-navy/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-12 md:flex-row md:items-center md:justify-between lg:px-8"><div><p className="eyebrow">Work with XS1</p><h2 className="mt-2 text-2xl font-semibold text-navy">Start with a conversation about your goals.</h2></div><Link className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-navy" href="/contact">Contact XS1 Technologies <span aria-hidden="true">→</span></Link></div>
      </section>
    </>
  );
}
