import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { partners } from "@/lib/services";

export const metadata: Metadata = {
  title: "Partners",
  description: "Product and vehicle partners Fasttracks Car Care works with every week in Jubilee Hills.",
};

export default function PartnersPage() {
  return (
    <main id="content" className="bg-background text-foreground">
      <PageHero
        kicker="Studio"
        title="Our partners"
        description="The compounds, kits, and vehicles that roll through Jubilee Hills every week."
      />

      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20">
        <FadeIn>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">On the floor</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
            From Menzerna compounds to Travo bodykits and the brands our clients drive in — partners that show up in the work.
          </p>
        </FadeIn>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <StaggerItem key={partner.name}>
              <article className="h-full rounded-3xl border border-border surface-card p-6 md:p-8">
                <h3 className="font-display text-3xl font-bold uppercase tracking-tight">{partner.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{partner.note}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand title="Bring your car in" detail="Whatever the badge, the floor will tell you what the cabin and paint need." />
    </main>
  );
}
