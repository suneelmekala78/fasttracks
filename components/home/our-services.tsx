"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Armchair,
  CircleDot,
  Paintbrush,
  Shield,
  Sofa,
  Sparkles,
  Speaker,
  SunMedium,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const services: {
  title: string;
  text: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Luxury Recliners",
    text: "Custom recliners in India's most premium SUVs.",
    href: "/recliners",
    image: "/media/speed.jpg",
    imageAlt: "Performance car in motion",
    icon: Armchair,
  },
  {
    title: "Paint Protection",
    text: "Full body from ₹1L. Bonnet protection from ₹20K.",
    href: "/services/ppf",
    image: "/media/wheel.jpg",
    imageAlt: "Close view of a performance tyre",
    icon: Shield,
  },
  {
    title: "SRS Correction",
    text: "Zero-filler Menzerna paint restoration.",
    href: "/services/srs",
    image: "/media/pink.jpg",
    imageAlt: "Gloss paint on a car nose",
    icon: Sparkles,
  },
  {
    title: "Custom Audio",
    text: "Concert-hall systems built from ₹1 lakh.",
    href: "/services/audio",
    image: "/media/red.jpg",
    imageAlt: "Car running along painted kerbs",
    icon: Speaker,
  },
  {
    title: "Interiors",
    text: "Leather, suede, and light. ₹30K to ₹10L.",
    href: "/services/interior",
    image: "/media/start.jpg",
    imageAlt: "A line of cars on a street circuit",
    icon: Sofa,
  },
  {
    title: "Window Tinting",
    text: "Heat rejection, privacy, and UV film.",
    href: "/services/tint",
    image: "/media/speed.jpg",
    imageAlt: "Car accelerating through a corner",
    icon: SunMedium,
  },
  {
    title: "Vinyl Wrapping",
    text: "A new colour. The paint stays underneath.",
    href: "/services/vinyl",
    image: "/media/pink.jpg",
    imageAlt: "Front end of a finished car",
    icon: Paintbrush,
  },
  {
    title: "Alloy Wheels",
    text: "Fitment, refinishing, and powder coat.",
    href: "/services/alloys",
    image: "/media/wheel.jpg",
    imageAlt: "Wheel and tyre detail",
    icon: CircleDot,
  },
];

export function OurServices() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useLayoutEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      const viewport = viewportRef.current;
      if (!row || !viewport) return;
      setTravel(Math.max(0, row.scrollWidth - viewport.clientWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (rowRef.current) observer.observe(rowRef.current);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, []);

  if (reduce) {
    return (
      <section className="services-stage py-16">
        <ServicesHeading />
        <div className="rail mt-8 flex gap-5 overflow-x-auto px-4 pb-2 md:px-6">
          {services.map((service) => (
            <ServiceCard key={service.href + service.title} service={service} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={trackRef} className="services-stage relative" style={{ height: `calc(100vh + ${travel}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16">
        <ServicesHeading />
        <div ref={viewportRef} className="mt-8 overflow-hidden">
          <motion.div ref={rowRef} style={{ x }} className="flex w-max gap-5 px-4 md:px-6">
            {services.map((service) => (
              <ServiceCard key={service.href + service.title} service={service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesHeading() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-4 px-4 md:px-6">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">What we do</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-none tracking-tight md:text-5xl">
          Our Services
        </h2>
      </div>
      <Link
        href="/services"
        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] hover:border-[#e10600]"
      >
        View all services
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
    <article className="service-card flex w-[280px] shrink-0 flex-col rounded-2xl p-3 sm:w-[320px]">
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image src={service.image} alt={service.imageAlt} fill sizes="320px" className="object-cover" />
        </div>
        <span className="absolute bottom-0 left-1/2 grid h-12 w-12 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-[#e10600] text-white shadow-lg">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-2 pb-3 pt-8">
        <h3 className="font-display text-xl font-bold uppercase tracking-wide">{service.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{service.text}</p>
        <Link
          href={service.href}
          className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground hover:text-[#e10600]"
        >
          Learn more
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
