import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { allStories, storyBySlug } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allStories.map((story) => ({ slug: story.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = storyBySlug(slug);
  if (!story) return { title: "Not found" };
  return { title: story.title, description: story.excerpt };
}

export default async function NewsStoryPage({ params }: Props) {
  const { slug } = await params;
  const story = storyBySlug(slug);
  if (!story) notFound();

  const more = allStories.filter((item) => item.slug !== story.slug);

  return (
    <main id="content" className="bg-background text-foreground">
      <PageHero
        kicker={story.kicker}
        title={story.title}
        description={story.excerpt}
        image={story.image}
        imageAlt={story.imageAlt}
        focus={story.focus}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
        <FadeIn className="space-y-5 text-base leading-8 text-muted md:text-lg">
          <p>{story.excerpt}</p>
          <p>
            This story lives on the Fasttracks floor in Jubilee Hills — the same bay that runs recliners, PPF, SRS,
            audio, and cabin builds every day of the year.
          </p>
          <p>
            Walk in for a quote, or message the studio on WhatsApp with your car model and the work you want. The team
            answers from the floor, not a call centre.
          </p>
        </FadeIn>
        <Link href="/" className="mt-10 inline-flex text-sm font-bold text-[#e10600] hover:underline">
          Back to home
        </Link>
      </section>

      {more.length ? (
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight">From the studio</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {more.map((item) => (
                <Link key={item.slug} href={`/news/${item.slug}`} className="group block">
                  <span className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-black">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-3 block text-[11px] font-bold uppercase tracking-[0.16em] text-[#e10600]">
                    {item.kicker}
                  </span>
                  <span className="mt-1 block text-lg font-bold leading-snug group-hover:underline">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </main>
  );
}
