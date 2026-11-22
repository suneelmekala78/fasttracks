import type { Metadata } from "next";
import { Instagram, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import {
  address,
  hours,
  mapsEmbed,
  mapsHref,
  phoneDisplay,
  studioInstagram,
  whatsappHref,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book Fasttracks Car Care in Jubilee Hills, Hyderabad. WhatsApp +91 80190 65252. Mon–Sat 10:00 AM–9:00 PM, Sunday 10:00 AM–7:00 PM. Open 365 days.",
};

export default function ContactPage() {
  return (
    <main id="content" className="bg-background text-foreground">
      <section className="home-stage border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600] md:text-sm">
            Jubilee Hills · Open 365 days
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl">
            Contact the studio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            Message the floor on WhatsApp, or drive in. Quotes come from the studio, not a call centre.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-8 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
        <div className="space-y-4">
          <article className="rounded-3xl border border-border surface-card p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Address</p>
            <p className="mt-3 flex gap-3 text-base leading-7">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#e10600]" />
              <span>{address}</span>
            </p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-bold text-[#e10600] hover:underline"
            >
              Open in Google Maps
            </a>
          </article>
          <article className="rounded-3xl border border-border surface-card p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">WhatsApp</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-2xl font-bold tracking-tight hover:text-[#25D366]"
            >
              <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
              {phoneDisplay}
            </a>
            <a
              href={studioInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground"
            >
              <Instagram className="h-4 w-4 text-[#e10600]" />
              @fasttracks_car_care
            </a>
          </article>
          <article className="rounded-3xl border border-border surface-card p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Hours</p>
            <ul className="mt-3 space-y-2 text-sm leading-6">
              {hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-semibold text-muted">Open 365 days a year.</p>
          </article>
        </div>
        <ContactForm />
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1440px] px-4 py-10 md:px-6 md:py-14">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Find the floor
          </h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-black">
            <iframe
              title="Map of Fasttracks Car Care, Jubilee Hills"
              src={mapsEmbed}
              className="h-[360px] w-full md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
