"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const services: {
  title: string;
  text: string;
  href: string;
  image: string;
  imageAlt: string;
  tag: string;
  categories: string[];
}[] = [
  {
    title: "Luxury Recliners",
    text: "Custom recliners in India's most premium SUVs.",
    href: "/recliners",
    image: "/media/speed.jpg",
    imageAlt: "Performance car in motion",
    tag: "Most requested",
    categories: ["Cabin", "Fitment"],
  },
  {
    title: "Paint Protection",
    text: "Full body from ₹1L. Bonnet protection from ₹20K.",
    href: "/services/ppf",
    image: "/media/wheel.jpg",
    imageAlt: "Close view of a performance tyre",
    tag: "PPF",
    categories: ["Protection", "Film"],
  },
  {
    title: "SRS Correction",
    text: "Zero-filler Menzerna paint restoration.",
    href: "/services/srs",
    image: "/media/pink.jpg",
    imageAlt: "Gloss paint on a car nose",
    tag: "Signature",
    categories: ["Paint", "Correction"],
  },
  {
    title: "Custom Audio",
    text: "Concert-hall systems built from ₹1 lakh.",
    href: "/services/audio",
    image: "/media/red.jpg",
    imageAlt: "Car running along painted kerbs",
    tag: "From ₹1L",
    categories: ["Sound", "Cabin"],
  },
  {
    title: "Interiors",
    text: "Leather, suede, and light. ₹30K to ₹10L.",
    href: "/services/interior",
    image: "/media/start.jpg",
    imageAlt: "A line of cars on a street circuit",
    tag: "Bespoke",
    categories: ["Leather", "Lighting"],
  },
  {
    title: "Window Tinting",
    text: "Heat rejection, privacy, and UV film.",
    href: "/services/tint",
    image: "/media/speed.jpg",
    imageAlt: "Car accelerating through a corner",
    tag: "₹15K–₹65K",
    categories: ["Heat", "Privacy"],
  },
  {
    title: "Vinyl Wrapping",
    text: "A new colour. The paint stays underneath.",
    href: "/services/vinyl",
    image: "/media/pink.jpg",
    imageAlt: "Front end of a finished car",
    tag: "Reversible",
    categories: ["Colour", "Wrap"],
  },
  {
    title: "Alloy Wheels",
    text: "Fitment, refinishing, and powder coat.",
    href: "/services/alloys",
    image: "/media/wheel.jpg",
    imageAlt: "Wheel and tyre detail",
    tag: "Wheels",
    categories: ["Fitment", "Finish"],
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
        <div className="rail mt-8 flex gap-4 overflow-x-auto px-4 pb-2 md:gap-5 md:px-6">
          {services.map((service) => (
            <ServiceCard key={service.href + service.title} service={service} compact />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={trackRef} className="services-stage relative" style={{ height: `calc(100svh + ${travel}px)` }}>
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden pt-16 pb-5">
        <div className="shrink-0">
          <ServicesHeading />
        </div>
        <div ref={viewportRef} className="mt-4 min-h-0 flex-1 overflow-hidden">
          <motion.div ref={rowRef} style={{ x }} className="flex h-full w-max gap-4 px-4 md:gap-5 md:px-6">
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

function ServiceCard({
  service,
  compact = false,
}: {
  service: (typeof services)[number];
  compact?: boolean;
}) {
  return (
    <Link
      href={service.href}
      className={`group relative flex w-[min(84vw,680px)] shrink-0 flex-col overflow-hidden bg-[#0b1220] text-white shadow-[0_20px_50px_rgba(0,0,0,0.28)] ${
        compact ? "h-auto" : "h-full"
      }`}
    >
      <span
        className={`relative block overflow-hidden bg-black ${
          compact ? "aspect-[16/10]" : "min-h-0 flex-1"
        }`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 768px) 680px, 84vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </span>
      <span className="relative shrink-0 bg-[#0b1220] px-5 py-4 sm:px-6 sm:py-5">
        <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="inline-flex border border-white/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/90">
            {service.tag}
          </span>
          <span className="flex flex-wrap gap-x-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
            {service.categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </span>
        </span>
        <span className="mt-4 flex items-end justify-between gap-4">
          <span className="min-w-0">
            <span className="block font-display text-3xl font-bold uppercase leading-[0.92] tracking-tight sm:text-4xl md:text-5xl">
              {service.title}
            </span>
            <span className="mt-2 block max-w-md text-sm leading-6 text-white/60">{service.text}</span>
          </span>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#0b1220] transition group-hover:bg-[#e10600] group-hover:text-white sm:h-12 sm:w-12">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </span>
      </span>
    </Link>
  );
}
