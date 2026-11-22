import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { studioServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Recliners, PPF, SRS, audio, interiors, tint, vinyl, alloys, suspension, hydro dipping, deep cleaning, and infotainment — one roof in Jubilee Hills.",
};

export default function ServicesPage() {
  return (
    <main id="content" className="bg-background text-foreground">
      <PageHero
        kicker="One roof"
        title="Our services"
        description="From a recliner install to full-body PPF, every transformation leaves Jubilee Hills as a statement."
      />

      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">The floor</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl">
            Every job under one roof
          </h2>
        </FadeIn>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {studioServices.map((service) => (
            <StaggerItem key={service.href}>
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border surface-card transition hover:-translate-y-1 hover:border-[#e10600]"
              >
                <span className="relative block aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 30vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: service.focus || "center" }}
                  />
                </span>
                <span className="flex flex-1 flex-col p-5 md:p-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e10600]">
                    {service.kicker}
                  </span>
                  <span className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">
                    {service.title}
                  </span>
                  <span className="mt-2 text-sm leading-6 text-muted">{service.summary}</span>
                  <span className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-foreground/70">
                    {service.price}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#e10600]">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand title="Not sure which service?" detail="Send the car model and what you want. The floor will guide the quote." />
    </main>
  );
}
