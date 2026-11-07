import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PageHero, { ActionLink } from "@/components/PageHero";
import { solutions } from "@/lib/site-data";

const servicePages = solutions.filter((service) => !service.href);

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  return service
    ? { title: service.title, description: service.summary }
    : {};
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero description={service.summary} eyebrow="XS1 solution" title={service.title}>
        <div className="mt-7"><ActionLink>Discuss Your Project</ActionLink></div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-turquoise/20 text-teal-900"><Icon className="h-7 w-7" name={service.icon} /></span>
            <h2 className="section-title mt-6">Technology shaped around the way you work.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-ink/70">{service.intro}</p>
            <div className="mt-9 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-navy">Common challenges we help solve</h3>
                <ul className="mt-4 grid gap-3">
                  {service.challenges.map((challenge) => <li className="flex gap-3 text-sm leading-6 text-ink/70" key={challenge}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />{challenge}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">How we can help</h3>
                <ul className="mt-4 grid gap-3">
                  {service.capabilities.map((capability) => <li className="flex gap-3 text-sm leading-6 text-ink/70" key={capability}><span className="mt-0.5 text-teal-800">✓</span>{capability}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div><p className="eyebrow">Potential outcomes</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy">Progress you can put to work.</h2></div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.outcomes.map((outcome) => <li className="border-l-2 border-turquoise bg-paper px-4 py-4 text-sm leading-6 text-ink/75" key={outcome}>{outcome}</li>)}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-5 border border-navy/10 bg-[#eaf7f5] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div><p className="eyebrow">Let&apos;s talk</p><h2 className="mt-2 text-2xl font-semibold text-navy">Explore what makes sense for your organisation.</h2></div>
          <ActionLink>Discuss Your Project</ActionLink>
        </div>
        <Link className="mt-7 inline-flex text-sm font-semibold text-teal-800 hover:text-navy" href="/solutions">← All solutions</Link>
      </section>
    </>
  );
}
