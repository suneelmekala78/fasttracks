"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion";

export function PageHero({
  kicker,
  title,
  description,
  image,
  imageAlt,
  focus = "center",
  video,
}: {
  kicker: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  focus?: string;
  video?: boolean;
}) {
  const media = Boolean(image || video);

  return (
    <section className={`relative overflow-hidden border-b border-border ${media ? "min-h-[52vh]" : "home-stage"}`}>
      {video ? (
        <>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={image || "/media/speed.jpg"}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
        </>
      ) : image ? (
        <>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: focus }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        </>
      ) : null}

      <div
        className={`relative z-10 mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24 ${
          media ? "flex min-h-[52vh] flex-col justify-end text-white" : ""
        }`}
      >
        <FadeIn>
          <p
            className={`text-xs font-bold uppercase tracking-[0.28em] md:text-sm ${
              media ? "text-[#ff4d4d]" : "text-[#e10600]"
            }`}
          >
            {kicker}
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl">
            {title}
          </h1>
          {description ? (
            <p
              className={`mt-6 max-w-2xl text-lg leading-8 md:text-xl ${
                media ? "text-white/80" : "text-muted"
              }`}
            >
              {description}
            </p>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
