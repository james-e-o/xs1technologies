import Link from "next/link";
import { navigation } from "@/lib/site-data";

function NavigationLink({ item, mobile = false }) {
  if (!item.children) {
    return (
      <Link
        className="text-sm font-medium text-ink/75 transition hover:text-ink"
        href={item.href}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <details className={`group relative ${mobile ? "w-full" : ""}`}>
      <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-ink/75 transition hover:text-ink [&::-webkit-details-marker]:hidden">
        <Link href={item.href}>{item.label}</Link>
        <span aria-hidden="true" className="text-[0.65rem]">⌄</span>
      </summary>
      <div
        className={
          mobile
            ? "mt-2 grid gap-1 border-l border-ink/15 pl-4"
            : "invisible absolute left-0 top-full z-30 mt-3 min-w-56 translate-y-1 rounded-xl border border-ink/10 bg-white p-2 opacity-0 shadow-xl transition group-open:visible group-open:translate-y-0 group-open:opacity-100"
        }
      >
        {item.children.map((child) => (
          <Link
            className="block rounded-lg px-3 py-2 text-sm text-ink/75 transition hover:bg-mist hover:text-ink"
            href={child.href}
            key={child.href}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link aria-label="XS1 Technologies home" className="flex shrink-0 items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-turquoise text-sm font-black tracking-tight text-navy">XS1</span>
          <span className="text-base font-bold tracking-tight text-navy sm:text-lg">XS1 <span className="font-medium text-ink/65">Technologies</span></span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => <NavigationLink item={item} key={item.label} />)}
        </nav>

        <Link className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163e5e] sm:inline-flex" href="/contact">
          Let&apos;s Talk <span aria-hidden="true" className="ml-2">↗</span>
        </Link>

        <details className="group relative lg:hidden">
          <summary aria-label="Open navigation menu" className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-lg border border-ink/15 [&::-webkit-details-marker]:hidden">
            <span className="h-0.5 w-5 bg-navy" />
            <span className="h-0.5 w-5 bg-navy" />
            <span className="h-0.5 w-5 bg-navy" />
          </summary>
          <nav aria-label="Mobile navigation" className="invisible absolute right-0 top-full mt-3 grid w-[min(90vw,22rem)] gap-4 rounded-2xl border border-ink/10 bg-paper p-5 opacity-0 shadow-xl transition group-open:visible group-open:opacity-100">
            {navigation.map((item) => <NavigationLink item={item} key={item.label} mobile />)}
            <Link className="mt-1 rounded-full bg-navy px-5 py-3 text-center text-sm font-semibold text-white" href="/contact">Let&apos;s Talk</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
