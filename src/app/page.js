import Link from "next/link";
import Icon from "@/components/Icon";
import { ActionLink } from "@/components/PageHero";
import { industries, solutions } from "@/lib/site-data";

const approach = [
  ["01", "Discover", "Understand your business, people, processes, and challenges."],
  ["02", "Strategise", "Identify the right technology and a realistic implementation path."],
  ["03", "Implement", "Build, configure, or integrate a solution around the agreed needs."],
  ["04", "Support", "Help teams onboard and keep improving as the business evolves."],
];

export const metadata = {
  title: "XS1 Technologies | Technology Solutions for a Smarter Business Future",
  description:
    "Business technology, digital transformation, custom software, e-commerce solutions, and practical technology training from XS1 Technologies.",
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_48%,rgba(29,211,201,0.2),transparent_30%),linear-gradient(115deg,#f8fbfa_0%,#f0f7f5_60%,#f7f2e9_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal-900">
              <span className="h-2 w-2 rounded-full bg-turquoise" /> Technology, with business in mind
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-navy sm:text-6xl lg:text-[4.5rem]">
              Technology Solutions for a <span className="font-serif font-medium italic text-teal-800">Smarter Business Future.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70">
              We help businesses streamline operations, embrace digital transformation, and unlock new opportunities through innovative software, e-commerce solutions, and technology training.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink>Discuss Your Project</ActionLink>
              <ActionLink href="/solutions" secondary>Explore Our Solutions</ActionLink>
            </div>
            <p className="mt-8 text-sm text-ink/55">Practical technology. Clear business outcomes. A thoughtful way forward.</p>
          </div>

          <div aria-label="Illustration of connected business technology workflows" className="relative mx-auto aspect-[1.08] w-full max-w-[550px]">
            <div className="absolute inset-[8%] rounded-[2rem] border border-navy/10 bg-white/55 p-5 shadow-[0_24px_70px_rgba(16,42,67,0.09)] backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-navy/10 pb-4">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-ink/50">Business operations</p>
                  <p className="mt-1 text-sm font-semibold text-navy">A clearer view of your work</p>
                </div>
                <span className="h-3 w-3 rounded-full bg-turquoise ring-4 ring-turquoise/20" />
              </div>
              <div className="mt-5 grid grid-cols-[0.8fr_1.2fr] gap-3">
                <div className="space-y-3">
                  {["Products", "Inventory", "Purchases", "Sales"].map((item, index) => (
                    <div className={`flex items-center gap-2 rounded-xl border border-navy/10 p-3 text-xs font-medium text-navy ${index === 1 ? "bg-turquoise/15" : "bg-white/70"}`} key={item}>
                      <span className={`h-2 w-2 rounded-full ${index === 1 ? "bg-teal-700" : "bg-navy/20"}`} />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-navy/10 bg-white p-4">
                  <div className="flex items-start justify-between">
                    <div><p className="text-[0.62rem] uppercase tracking-[0.16em] text-ink/45">Operational snapshot</p><p className="mt-1 text-sm font-semibold text-navy">Connected workflows</p></div>
                    <span className="rounded-full bg-turquoise/20 px-2 py-1 text-[0.6rem] font-semibold text-teal-900">Illustrative</span>
                  </div>
                  <div className="mt-7 flex h-28 items-end gap-2">
                    {[38, 58, 48, 72, 56, 88, 68, 96].map((height, index) => (
                      <div className={`flex-1 rounded-t-md ${index === 5 ? "bg-turquoise" : "bg-navy/15"}`} key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-[0.6rem] text-ink/45"><span>Visibility</span><span>Processes</span></div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-navy px-4 py-3 text-white">
                <span className="text-xs font-medium">Technology aligned to your business</span>
                <span aria-hidden="true" className="text-turquoise">↗</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -left-1 flex h-16 w-16 items-center justify-center rounded-2xl bg-turquoise text-navy shadow-lg shadow-teal-900/10">
              <Icon className="h-8 w-8" name="workflow" />
            </div>
            <div className="absolute -right-2 top-[16%] rounded-xl border border-navy/10 bg-white px-4 py-3 text-xs font-semibold text-navy shadow-lg shadow-navy/5">
              Built around real work <span className="ml-1 text-teal-700">✦</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="eyebrow">Business understanding, practical technology</p>
            <h2 className="section-title mt-3">Technology That Moves Businesses Forward.</h2>
          </div>
          <div className="max-w-2xl md:pt-8">
            <p className="text-lg leading-8 text-ink/70">
              Better technology starts with understanding the work. XS1 Technologies combines practical business thinking with thoughtful implementation to solve operational challenges—not add complexity.
            </p>
            <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-navy" href="/about">Get to know XS1 <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20" id="solutions">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div><p className="eyebrow">What we do</p><h2 className="section-title mt-3">Technology for the challenges behind the work.</h2></div>
            <Link className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-navy" href="/solutions">All solutions <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {solutions.map((service, index) => (
              <Link className="group flex min-h-64 flex-col border-t-2 border-navy/10 bg-paper/60 p-5 transition hover:-translate-y-1 hover:border-turquoise hover:bg-mist" href={service.href || `/solutions/${service.slug}`} key={service.slug}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-ink/40">0{index + 1}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-turquoise/20 text-teal-900"><Icon name={service.icon} /></span>
                </div>
                <h3 className="mt-7 text-lg font-semibold leading-snug text-navy">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-ink/65">{service.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">Explore <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-9 max-w-2xl">
          <p className="eyebrow">Who we work with</p>
          <h2 className="section-title mt-3">Solutions for the Way Businesses Operate.</h2>
          <p className="mt-4 leading-7 text-ink/65">From stock visibility to online orders, we focus on the operational details that keep businesses moving.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {industries.slice(0, 3).map((industry) => (
            <Link className="group grid grid-cols-[auto_1fr] gap-4 border border-navy/10 bg-white p-6 transition hover:border-turquoise" href={`/industries/${industry.slug}`} key={industry.slug}>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-turquoise"><Icon name={industry.icon} /></span>
              <div><h3 className="font-semibold text-navy">{industry.title}</h3><p className="mt-2 text-sm leading-6 text-ink/65">{industry.summary}</p><span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">See how we help <span aria-hidden="true">→</span></span></div>
            </Link>
          ))}
        </div>
        <Link className="mt-5 inline-flex text-sm font-semibold text-teal-800 hover:text-navy" href="/industries/other-businesses">For other businesses and organisations →</Link>
      </section>

      <section className="bg-navy py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">A product from XS1 Technologies</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Introducing <span className="text-turquoise">ZERP-8.</span></h2>
            <p className="mt-5 max-w-xl leading-7 text-white/70">A business management platform designed to help businesses bring core commerce operations—products, sales, inventory, and purchases—together.</p>
            <Link className="mt-7 inline-flex items-center gap-2 rounded-full bg-turquoise px-5 py-3 text-sm font-semibold text-navy hover:bg-white" href="/products/zerp-8">Explore ZERP-8 <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Products", "Sales", "Inventory", "Purchases"].map((module, index) => (
              <div className="min-h-32 border border-white/15 bg-white/[0.04] p-5" key={module}>
                <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-widest text-white/40">0{index + 1}</span><span className="h-2 w-2 rounded-full bg-turquoise" /></div>
                <h3 className="mt-7 text-lg font-semibold">{module}</h3>
              </div>
            ))}
            <p className="sm:col-span-2 text-xs leading-5 text-white/50">Illustrative module overview, not product screenshots. Additional capabilities are under consideration or planned and are not represented as available here.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="eyebrow">How we work</p><h2 className="section-title mt-3">A thoughtful path from challenge to change.</h2><p className="mt-4 leading-7 text-ink/65">The right solution depends on your context. Our process keeps the business need in focus at every stage.</p></div>
          <div className="grid gap-0 sm:grid-cols-2">
            {approach.map(([number, title, detail]) => (
              <div className="border-t border-navy/15 py-5 sm:px-5 sm:first:pl-0" key={number}>
                <p className="text-xs font-bold tracking-widest text-teal-800">{number}</p>
                <h3 className="mt-3 text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-ink/65">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-[#eaf7f5]">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-12 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div><p className="eyebrow">Technology training</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy">Building Skills for the Digital Future.</h2><p className="mt-3 max-w-2xl leading-7 text-ink/70">Practical learning in web development, AI tools, digital productivity, and business technology—designed for individuals and teams.</p></div>
          <ActionLink href="/training">Explore Training</ActionLink>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6 border-l-4 border-turquoise bg-white px-6 py-8 shadow-[0_10px_45px_rgba(16,42,67,0.06)] md:flex-row md:items-center md:justify-between md:px-10">
          <div><p className="eyebrow">Start a conversation</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy">Let&apos;s Build a Smarter Way Forward.</h2><p className="mt-3 max-w-2xl leading-7 text-ink/65">Whether you&apos;re modernising operations, developing a digital product, or building your team&apos;s technology skills, let&apos;s explore the right next step.</p></div>
          <ActionLink>Start a Conversation</ActionLink>
        </div>
      </section>
    </>
  );
}
