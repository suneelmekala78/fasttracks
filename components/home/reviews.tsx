"use client";

import { Star } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { reviews } from "@/lib/reviews";

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

        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem key={review.name}>
              <article className="flex h-full flex-col rounded-3xl border border-border surface-card p-6 md:p-7">
                <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-[#e10600] text-[#e10600]" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-base leading-7 text-foreground/90">“{review.quote}”</p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-lg font-bold uppercase tracking-tight">{review.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {review.role}
                    <span className="mx-2 text-foreground/30">·</span>
                    {review.car}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
