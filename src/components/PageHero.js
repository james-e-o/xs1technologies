import Link from "next/link";

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-[radial-gradient(ellipse_at_85%_15%,rgba(29,211,201,0.2),transparent_35%),linear-gradient(115deg,#f8fbfa_0%,#f0f7f5_65%,#f7f2e9_100%)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:py-20 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-teal-800">{eyebrow}</p>}
          <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-navy sm:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">{description}</p>}
          {children}
        </div>
        <div aria-hidden="true" className="relative hidden min-h-44 overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white/70 p-5 lg:block">
          <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full border border-turquoise/50" />
          <div className="absolute -right-1 -top-11 h-40 w-40 rounded-full border border-turquoise/50" />
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
            <span className="h-2 rounded-full bg-turquoise" />
            <span className="h-2 rounded-full bg-navy/15" />
            <span className="h-2 rounded-full bg-navy/15" />
          </div>
          <div className="absolute bottom-12 left-5 h-16 w-16 rounded-2xl bg-turquoise/20" />
          <div className="absolute bottom-12 left-24 h-16 w-28 rounded-2xl border border-navy/10 bg-white" />
          <div className="absolute bottom-12 right-5 h-16 w-16 rounded-2xl bg-navy" />
        </div>
      </div>
    </section>
  );
}

export function ActionLink({ href = "/contact", children = "Discuss Your Project", secondary = false }) {
  return (
    <Link
      className={secondary
        ? "inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-turquoise hover:bg-turquoise/10"
        : "inline-flex items-center gap-2 rounded-full bg-turquoise px-5 py-3 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-[#36e0d5]"}
      href={href}
    >
      {children}<span aria-hidden="true">↗</span>
    </Link>
  );
}
