import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Play } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion";
import { allVideos, videoBySlug } from "@/lib/content";
import { withBasePath } from "@/lib/paths";

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
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={video.image}
        >
          <source src={withBasePath("/videos/hero.mp4")} type="video/mp4" />
        </video>
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
            <Image
              src={video.image}
              alt={video.imageAlt}
              fill
              sizes="60vw"
              className="object-cover"
              style={{ objectPosition: video.focus }}
            />
            <span className="clip-play grid place-items-center rounded-full bg-white text-black shadow-lg">
              <Play className="ml-0.5 h-6 w-6 fill-black" />
            </span>
            <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-1 text-xs font-semibold text-white">
              {video.duration}
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">About this film</p>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">{video.excerpt}</p>
          <p className="mt-6 text-sm text-muted">
            Full playback will live here. Until then, the studio reel runs as ambient background on this page.
          </p>
          <Link href="/videos" className="mt-8 inline-flex text-sm font-bold text-[#e10600] hover:underline">
            All studio films
          </Link>
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
