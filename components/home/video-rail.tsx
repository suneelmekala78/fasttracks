"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import type { Clip } from "@/lib/content";

export function VideoRail({
  title,
  href,
  clips,
  className = "",
}: {
  title: string;
  href: string;
  clips: Clip[];
  className?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [clips]);

  function scrollBy(direction: number) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.max(el.clientWidth * 0.8, 280), behavior: "smooth" });
  }

  return (
    <section className={`mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-10 ${className}`}>
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight md:text-5xl">
          {title}
        </h2>
        <div className="flex items-center gap-4">
          <Link href={href} className="text-sm font-semibold hover:underline">
            View All
          </Link>
          <div className="flex gap-2">
            <RailButton label={`Previous ${title}`} disabled={atStart} onClick={() => scrollBy(-1)}>
              <ChevronLeft className="h-4 w-4" />
            </RailButton>
            <RailButton label={`Next ${title}`} disabled={atEnd} onClick={() => scrollBy(1)}>
              <ChevronRight className="h-4 w-4" />
            </RailButton>
          </div>
        </div>
      </div>
      <div ref={scroller} className="rail flex w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {clips.map((clip) => (
          <Link
            key={`${title}-${clip.slug}`}
            href={`/videos/${clip.slug}`}
            className="group w-[min(280px,78vw)] shrink-0 snap-start"
          >
            <span className="relative block aspect-video overflow-hidden rounded-2xl bg-black">
              <Image
                src={clip.image}
                alt={clip.imageAlt}
                fill
                sizes="280px"
                className="object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: clip.focus }}
              />
              <span className="clip-play grid place-items-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                <Play className="ml-0.5 h-6 w-6 fill-black" />
              </span>
              {clip.overlay ? (
                <span className="pointer-events-none absolute left-4 right-3 top-4 font-sans text-xl font-black italic leading-tight text-[#b8fff4] drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
                  {clip.overlay}
                </span>
              ) : null}
              <span className="absolute bottom-2 right-2 z-10 rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold tabular-nums">
                {clip.duration}
              </span>
            </span>
            <span className="mt-3 block text-sm font-semibold leading-snug group-hover:underline">
              {clip.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function RailButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid h-9 w-9 place-items-center rounded-full border border-current/30 disabled:opacity-35"
    >
      {children}
    </button>
  );
}
