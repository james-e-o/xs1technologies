import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { industries } from "@/lib/site-data";

export const metadata = {
  title: "Industries",
  description:
    "Business technology for distribution and wholesale, retail, e-commerce, and other organisations.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        description="Different businesses have different pressures. We focus on understanding your operations before recommending the technology that may help."
        eyebrow="Industries"
        title="Technology for the realities of your industry."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {industries.map((industry, index) => (
            <Link className="group border border-navy/10 bg-white p-7 transition hover:border-turquoise sm:p-9" href={`/industries/${industry.slug}`} key={industry.slug}>
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-turquoise/20 text-teal-900"><Icon name={industry.icon} /></span>
                <span className="text-xs font-bold tracking-widest text-ink/40">0{index + 1}</span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-navy">{industry.title}</h2>
              <p className="mt-3 max-w-xl leading-7 text-ink/65">{industry.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-800">Explore industry <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
