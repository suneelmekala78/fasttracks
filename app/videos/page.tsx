import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { allVideos, youtubeChannelUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Studio films",
  description: "Recliner installs, PPF jobs, wraps, and cabin builds from Fasttracks Car Care, Jubilee Hills.",
};

export default function VideosPage() {
  return (
    <main id="content" className="bg-background text-foreground">
      <PageHero
        kicker="Watch"
        title="Studio films"
        description="Builds from the Fasttracks Car Care Hyderabad YouTube channel — the floor on camera."
        image="/images/recliners.jpg"
        video
      />

      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20">
        <FadeIn className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">All films</h2>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#e10600] hover:underline"
          >
            YouTube channel
          </a>
        </FadeIn>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {allVideos.map((clip) => (
            <StaggerItem key={clip.slug}>
              <Link href={`/videos/${clip.slug}`} className="group block">
                <span className="relative block aspect-video overflow-hidden rounded-2xl bg-black">
                  <Image
                    src={clip.image}
                    alt={clip.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 30vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: clip.focus }}
                  />
                  <span className="clip-play grid place-items-center rounded-full bg-white text-black shadow-lg">
                    <Play className="ml-0.5 h-5 w-5 fill-black" />
                  </span>
                  <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums text-white">
                    {clip.duration}
                  </span>
                </span>
                <span className="mt-3 block text-base font-semibold leading-snug group-hover:underline">
                  {clip.title}
                </span>
                <span className="mt-1 block text-sm text-muted">{clip.excerpt}</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand title="Want your build filmed?" detail="Ask when you book. The studio can shoot the install for your car." />
    </main>
  );
}
