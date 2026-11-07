import Link from "next/link";
import Icon from "@/components/Icon";
import PageHero, { ActionLink } from "@/components/PageHero";

const modules = [
  ["Products", "Organise product information as a foundation for core commerce operations."],
  ["Sales", "Support sales workflows and keep activity connected to business operations."],
  ["Inventory", "Bring stock management into clearer view across day-to-day operations."],
  ["Purchases", "Support purchasing workflows and supplier-related operations."],
];

export const metadata = {
  title: "ZERP-8 Business Management Platform",
  description:
    "Discover ZERP-8, an evolving business management platform from XS1 Technologies focused on products, sales, inventory, and purchases.",
};

export default function ZerpEightPage() {
  return (
    <>
      <PageHero
        description="A business management platform from XS1 Technologies, focused on helping businesses bring core commerce operations into better view."
        eyebrow="A product by XS1 Technologies"
        title="Meet ZERP-8."
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <ActionLink>Request a Demonstration</ActionLink>
          <ActionLink href="/contact" secondary>Discuss Implementation</ActionLink>
        </div>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Core commerce operations</p>
            <h2 className="section-title mt-3">Designed to bring essential business activity together.</h2>
            <p className="mt-5 leading-7 text-ink/70">ZERP-8 is an evolving business management platform—not a claim to cover every enterprise function. Its focus is the operational foundation of commerce: product information, sales, inventory, and purchasing.</p>
            <p className="mt-4 text-sm leading-6 text-ink/55">This overview describes the platform&apos;s current focus. Specific availability, suitability, and implementation details should be confirmed with XS1 Technologies.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map(([title, description], index) => (
              <article className="border border-navy/10 bg-white p-6" key={title}>
                <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-widest text-ink/40">0{index + 1}</span><Icon className="h-5 w-5 text-teal-800" name={["layers", "workflow", "boxes", "store"][index]} /></div>
                <h3 className="mt-8 text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><p className="eyebrow">Scope and roadmap</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy">Clear about what is—and isn&apos;t—in scope.</h2></div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="border-l-2 border-turquoise bg-mist p-5"><h3 className="font-semibold text-navy">Current product focus</h3><p className="mt-3 text-sm leading-6 text-ink/70">Products, sales, inventory, and purchases form the platform&apos;s core commerce focus. Ask XS1 about the current status of specific capabilities and deployment needs.</p></div>
            <div className="border-l-2 border-navy/20 bg-paper p-5"><h3 className="font-semibold text-navy">Planned future areas</h3><p className="mt-3 text-sm leading-6 text-ink/70">Accounting, manufacturing, CRM, and e-commerce capabilities are planned for future development and are not presented here as available modules.</p></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-5 border border-navy/10 bg-navy p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-turquoise">For distributors, retailers, and commerce teams</p><h2 className="mt-3 text-2xl font-semibold">See whether ZERP-8 fits your operations.</h2><p className="mt-2 text-sm text-white/65">Request a product conversation to discuss scope and current capabilities.</p></div>
          <ActionLink>Request a Demonstration</ActionLink>
        </div>
      </section>
    </>
  );
}
