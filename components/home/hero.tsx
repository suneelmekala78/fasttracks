"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { whatsappHref } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const content = (
    <>
      <p className="text-sm font-bold uppercase tracking-[0.34em] text-white/85 md:text-base">
        Jubilee Hills, Hyderabad
      </p>
      <Image
        src="/images/full-text-logo.png"
        alt="Fasttracks Car Care"
        width={1200}
        height={150}
        priority
        className="mt-8 h-auto w-[min(1120px,94vw)]"
      />
      <p className="mt-6 font-display text-3xl font-bold uppercase tracking-[0.38em] text-white md:text-5xl">
        Car Care
      </p>
      <div className="mt-6 h-1 w-24 bg-[#e10600]" />
      <p className="mt-6 max-w-3xl text-xl font-semibold leading-snug text-white/90 md:text-3xl">
        India&apos;s Biggest Instant Car Modification Studio
        <span className="mx-3 text-white/40">·</span>
        Est. 2002
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#e10600] px-8 py-4 text-base font-bold text-white hover:bg-[#c40500]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Book Now on WhatsApp
        </a>
        <Link
          href="/services"
          className="rounded-full border border-white/70 px-8 py-4 text-base font-bold text-white hover:bg-white hover:text-black"
        >
          Explore Services
        </Link>
      </div>
    </>
  );

  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/speed.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col items-center justify-center px-4 py-16 text-center">
        {reduce ? (
          content
        ) : (
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {content}
          </motion.div>
        )}
      </div>
    </section>
  );
}
