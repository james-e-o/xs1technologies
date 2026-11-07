import Link from "next/link";
import { industries, solutions } from "@/lib/site-data";

const FooterGroup = ({ title, links }) => (
  <div>
    <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/55">{title}</h2>
    <ul className="grid gap-3">
      {links.map(({ label, href }) => (
        <li key={href}><Link className="text-sm text-white/75 transition hover:text-turquoise" href={href}>{label}</Link></li>
      ))}
    </ul>
  </div>
);

export default function SiteFooter() {
  const solutionLinks = solutions.map((service) => ({
    label: service.shortTitle,
    href: service.href || `/solutions/${service.slug}`,
  }));
  const industryLinks = industries.slice(0, 3).map((industry) => ({
    label: industry.title,
    href: `/industries/${industry.slug}`,
  }));

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Link className="flex items-center gap-3" href="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise text-sm font-black text-navy">XS1</span>
              <span className="font-bold">XS1 Technologies</span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/65">
              Practical technology solutions that help businesses modernise operations, grow capability, and prepare for what&apos;s next.
            </p>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-turquoise hover:text-white" href="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            <FooterGroup title="Solutions" links={solutionLinks} />
            <FooterGroup title="Industries" links={industryLinks} />
            <FooterGroup title="Explore" links={[
              { label: "ZERP-8", href: "/products/zerp-8" },
              { label: "About XS1", href: "/about" },
              { label: "Training", href: "/training" },
              { label: "Contact", href: "/contact" },
            ]} />
            <div>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/55">Connect</h2>
              <p className="text-sm leading-6 text-white/60">Contact details and social links will be published here once configured.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© XS1 Technologies. All rights reserved.</p>
          <div className="flex gap-5">
            <Link className="hover:text-white" href="/privacy">Privacy placeholder</Link>
            <Link className="hover:text-white" href="/terms">Terms placeholder</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
