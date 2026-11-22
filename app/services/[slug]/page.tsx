import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { serviceBySlug, studioServices } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

const catalog = studioServices.filter((service) => service.slug !== "recliners");

export function generateStaticParams() {
  return catalog.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service || service.slug === "recliners") return { title: "Not found" };
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service || service.slug === "recliners") notFound();

  const related = catalog.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main id="content" className="bg-background text-foreground">
      <PageHero
        kicker={service.kicker}
        title={service.title}
        description={service.summary}
        image={service.image}
        imageAlt={service.imageAlt}
        focus={service.focus}
      />

      <section className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-6 md:py-20">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">Overview</p>
          <div className="mt-5 space-y-4 text-base leading-7 text-muted md:text-lg md:leading-8">
            {service.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-foreground">{service.price}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="rounded-3xl border border-border surface-card p-6 md:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Highlights</p>
          <ul className="mt-5 space-y-3">
            {service.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-semibold leading-6">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e10600]" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-8 inline-flex text-sm font-bold text-[#e10600] hover:underline"
          >
            All services
          </Link>
        </FadeIn>
      </section>

      {related.length ? (
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-16">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">More from the floor</h2>
            <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <StaggerItem key={item.slug}>
                  <Link href={item.href} className="group block overflow-hidden rounded-3xl border border-border surface-card">
                    <span className="relative block aspect-[16/10] bg-black">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </span>
                    <span className="block p-5">
                      <span className="font-display text-xl font-bold uppercase">{item.title}</span>
                      <span className="mt-2 block text-sm text-muted">{item.summary}</span>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}

      <CtaBand title={`Book ${service.title}`} />
    </main>
  );
}
