import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Play } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion";
import {
  allVideos,
  videoBySlug,
  youtubeChannelUrl,
  youtubeEmbedUrl,
  youtubeWatchUrl,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allVideos.map((video) => ({ slug: video.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const video = videoBySlug(slug);
  if (!video) return { title: "Not found" };
  return { title: video.title, description: video.excerpt };
}

export default async function VideoDetailPage({ params }: Props) {
  const { slug } = await params;
  const video = videoBySlug(slug);
  if (!video) notFound();

  const more = allVideos.filter((item) => item.slug !== video.slug).slice(0, 4);

  return (
    <main id="content" className="bg-background text-foreground">
      <section className="relative isolate min-h-[70vh] overflow-hidden">
        <Image
          src={video.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: video.focus }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-[#15151e]" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-end px-4 py-16 text-white md:px-6 md:py-20">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff4d4d]">
              Film · {video.duration}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
              {video.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{video.excerpt}</p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-20">
        <FadeIn>
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-black">
            <iframe
              src={youtubeEmbedUrl(video.youtubeId)}
              title={video.title}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">About this film</p>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">{video.excerpt}</p>
          <p className="mt-6 text-sm text-muted">
            From the Fasttracks Car Care Hyderabad YouTube channel.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <a
              href={youtubeWatchUrl(video.youtubeId)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-bold text-[#e10600] hover:underline"
            >
              Watch on YouTube
            </a>
            <Link href="/videos" className="inline-flex text-sm font-bold text-[#e10600] hover:underline">
              All studio films
            </Link>
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-bold text-[#e10600] hover:underline"
            >
              Channel videos
            </a>
          </div>
        </FadeIn>
      </section>

      {more.length ? (
        <section className="border-t border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight">More films</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {more.map((clip) => (
                <Link key={clip.slug} href={`/videos/${clip.slug}`} className="group block">
                  <span className="relative block aspect-video overflow-hidden rounded-2xl bg-black">
                    <Image
                      src={clip.image}
                      alt={clip.imageAlt}
                      fill
                      sizes="25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="clip-play grid place-items-center rounded-full bg-white text-black shadow-lg">
                      <Play className="ml-0.5 h-5 w-5 fill-black" />
                    </span>
                    <span className="absolute bottom-2 right-2 z-10 rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums text-white">
                      {clip.duration}
                    </span>
                  </span>
                  <span className="mt-3 block text-sm font-semibold group-hover:underline">{clip.title}</span>
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
