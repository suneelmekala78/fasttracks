"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { reviews, type Review } from "@/lib/reviews";

const rows: { items: Review[]; direction: "rtl" | "ltr"; duration: string }[] = [
  { items: [reviews[0], reviews[1], reviews[2], reviews[3]], direction: "rtl", duration: "40s" },
  { items: [reviews[4], reviews[5], reviews[0], reviews[2]], direction: "ltr", duration: "46s" },
  { items: [reviews[1], reviews[3], reviews[5], reviews[4]], direction: "rtl", duration: "44s" },
];

export function Reviews() {
  return (
    <section className="home-stage border-t border-border text-foreground">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600] md:text-sm">
            Client voices
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-6xl">
            Reviews from the floor
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Recliners, PPF, SRS, and cabin builds — what clients say after they drive out of Jubilee Hills.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-4 pb-16 md:pb-24">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="reviews-marquee">
            <div
              className={`reviews-track ${row.direction === "rtl" ? "reviews-track-rtl" : "reviews-track-ltr"}`}
              style={{ animationDuration: row.duration }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
                  {row.items.map((review) => (
                    <ReviewCard key={`${copy}-${rowIndex}-${review.name}`} review={review} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex w-[min(86vw,360px)] shrink-0 flex-col rounded-3xl border border-border surface-card p-6 md:w-[380px] md:p-7">
      <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-[#e10600] text-[#e10600]" />
        ))}
      </div>
      <p className="mt-5 flex-1 text-base leading-7 text-foreground/90">“{review.quote}”</p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-black/10 ring-1 ring-border">
          <Image src={review.avatar} alt="" fill sizes="48px" className="object-cover" />
        </span>
        <div className="min-w-0">
          <p className="font-display text-lg font-bold uppercase tracking-tight">{review.name}</p>
          <p className="mt-0.5 truncate text-sm text-muted">
            {review.role}
            <span className="mx-2 text-foreground/30">·</span>
            {review.car}
          </p>
        </div>
      </div>
    </article>
  );
}
