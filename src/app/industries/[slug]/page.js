import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import PageHero, { ActionLink } from "@/components/PageHero";
import { industries } from "@/lib/site-data";

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  return industry
    ? { title: industry.title, description: industry.summary }
    : {};
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero description={industry.summary} eyebrow="Industry focus" title={industry.title}>
        <div className="mt-7"><ActionLink>Book a Consultation</ActionLink></div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-turquoise/20 text-teal-900"><Icon className="h-7 w-7" name={industry.icon} /></span>
            <h2 className="section-title mt-6">Make everyday operations easier to understand and improve.</h2>
            <p className="mt-4 leading-7 text-ink/65">The right solution depends on your systems, team, and goals. We begin with your specific context rather than assuming every organisation needs the same product.</p>
          </div>
          <div className="grid gap-9 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-navy">Common challenges</h3>
              <ul className="mt-5 grid gap-4">
                {industry.challenges.map((challenge) => <li className="flex gap-3 text-sm leading-6 text-ink/70" key={challenge}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise" />{challenge}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy">Relevant technology options</h3>
              <ul className="mt-5 grid gap-4">
                {industry.solutions.map((item) => <li className="flex gap-3 text-sm leading-6 text-ink/70" key={item}><span className="mt-0.5 text-teal-800">✓</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div><p className="eyebrow">Potential outcomes</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy">Better clarity for the next step.</h2></div>
          <div className="grid gap-3 sm:grid-cols-3">
            {industry.outcomes.map((outcome) => <div className="border-t-2 border-turquoise bg-paper p-5 text-sm leading-6 text-ink/75" key={outcome}>{outcome}</div>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-5 border border-navy/10 bg-[#eaf7f5] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div><p className="eyebrow">Consultation</p><h2 className="mt-2 text-2xl font-semibold text-navy">Let&apos;s discuss how your business works today.</h2></div>
          <ActionLink>Discuss Your Project</ActionLink>
        </div>
        <Link className="mt-7 inline-flex text-sm font-semibold text-teal-800 hover:text-navy" href="/industries">← All industries</Link>
      </section>
    </>
  );
}
