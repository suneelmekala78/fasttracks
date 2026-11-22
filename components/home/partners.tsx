import Link from "next/link";
import { partners } from "@/lib/services";

export function Partners() {
  return (
    <section className="overflow-hidden border-t border-border bg-background text-foreground">
      <div className="mx-auto flex max-w-[1440px] items-end justify-between gap-4 px-4 pt-12 md:px-6 md:pt-16">
        <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight md:text-5xl">
          Our Partners
        </h2>
        <Link href="/partners" className="text-sm font-semibold hover:underline">
          View all
        </Link>
      </div>
      <div className="marquee-mask mt-10 pb-14">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex items-center gap-16 pr-16" aria-hidden={copy === 1}>
              {partners.map((partner) => (
                <li
                  key={`${copy}-${partner.name}`}
                  className="font-display text-2xl font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--partner-text)" }}
                >
                  {partner.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
