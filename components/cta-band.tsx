"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { phoneDisplay, whatsappHref } from "@/lib/site";

export function CtaBand({
  kicker = "Jubilee Hills",
  title = "Ready to transform your car?",
  detail = "Message the floor on WhatsApp. Quotes come from the studio, not a call centre.",
}: {
  kicker?: string;
  title?: string;
  detail?: string;
}) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-20">
      <div className="flex flex-col gap-6 rounded-3xl bg-[#e10600] px-6 py-10 text-white transition hover:-translate-y-0.5 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">{kicker}</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-bold uppercase leading-[0.95] md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/85">{detail}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#15151e] hover:bg-[#f6f4f0]"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            {phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Contact page
          </Link>
        </div>
      </div>
    </section>
  );
}
