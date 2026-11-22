import Link from "next/link";
import type { PageCopy } from "@/lib/pages";
import { mainNav } from "@/lib/site";

export function PlaceholderPage({
  title,
  kicker,
  description,
  badge = "Placeholder",
}: PageCopy & { badge?: string | null }) {
  return (
    <article id="content" className="flex-1 bg-background text-foreground">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e10600]">{kicker}</p>
        <h1 className="mt-3 max-w-5xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        {badge ? (
          <p className="mt-8 inline-flex rounded-full bg-foreground px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-background">
            {badge}
          </p>
        ) : null}
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#e10600] px-4 py-2 text-sm font-bold text-white hover:bg-[#c40500]"
          >
            Back to home
          </Link>
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-foreground/5"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
