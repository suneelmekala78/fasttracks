"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

const stats = [
  { value: "25+", label: "Years of experience" },
  { value: "365", label: "Days open every year" },
  { value: "2002", label: "Established in Hyderabad" },
  { value: "157K+", label: "On Instagram" },
];

export function StudioYears() {
  return (
    <section className="home-stage border-b border-border">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600] md:text-sm">
            The studio
          </p>
          <div className="mt-4 grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-foreground md:text-7xl">
              25+ years of transforming cars
            </h2>
            <div className="space-y-4 text-base leading-7 text-muted md:text-lg md:leading-8">
              <p>
                Fasttracks Car Care is India&apos;s most trusted and most connected car modification studio.
                From Jubilee Hills, the workshop holds the widest network of vendors, clients, and
                Tollywood&apos;s finest under one roof.
              </p>
              <p>
                From a full-body PPF job to a custom recliner in a Vellfire, every car that leaves the
                studio is a statement. Twenty-five years, and still open every day of the year.
              </p>
            </div>
          </div>
        </FadeIn>
        <Stagger className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-4" delay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <dl className="surface-card h-full px-5 py-7 md:px-7 md:py-9">
                <dt className="font-display text-4xl font-bold leading-none tracking-tight text-foreground md:text-6xl">
                  {stat.value}
                </dt>
                <dd className="mt-4 max-w-[12rem] text-xs font-bold uppercase leading-5 tracking-[0.16em] text-muted">
                  {stat.label}
                </dd>
                <span className="mt-5 block h-0.5 w-10 bg-[#e10600]" />
              </dl>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
