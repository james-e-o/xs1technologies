import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { solutions } from "@/lib/site-data";

export const metadata = {
  title: "Business Technology Solutions",
  description:
    "Explore XS1 Technologies services in business systems, digital transformation, custom software, e-commerce, and technology training.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        description="From improving day-to-day operations to building custom digital products, explore practical technology services shaped around your business needs."
        eyebrow="Solutions"
        title="Technology that works for your business."
      />
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-18">
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((service, index) => (
            <article className="grid gap-5 border border-navy/10 bg-white p-6 sm:grid-cols-[auto_1fr] sm:p-8" key={service.slug}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-turquoise/20 text-teal-900"><Icon name={service.icon} /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-teal-800">0{index + 1} / Solution</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy">{service.title}</h2>
                <p className="mt-3 leading-7 text-ink/65">{service.summary}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.capabilities.slice(0, 4).map((capability) => (
                    <li className="flex gap-2 text-sm text-ink/70" key={capability}><span className="text-teal-700">•</span>{capability}</li>
                  ))}
                </ul>
                <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-navy" href={service.href || `/solutions/${service.slug}`}>Explore solution <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
