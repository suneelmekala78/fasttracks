import Image from "next/image";
import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { founderInstagram, studioInstagram, whatsappHref } from "@/lib/site";

export function Founder() {
  return (
    <section className="surface-panel text-foreground">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16">
        <figure>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-black">
            <Image
              src="/images/founder.jpg"
              alt="Rakesh Kurapati, founder of Fasttracks Car Care, at the Jubilee Hills studio"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
            Rakesh Kurapati · Jubilee Hills studio
          </figcaption>
        </figure>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600] md:text-sm">
            Founder spotlight
          </p>
          <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl">
            Meet the founder
          </h2>
          <p className="mt-8 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Rakesh Kurapati
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-[#e10600]">
            Founder &amp; CEO
          </p>
          <div className="mt-5 h-0.5 w-16 bg-[#e10600]" />
          <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              What started as a childhood obsession with cars became India&apos;s biggest instant car
              modification studio. Rakesh built Fasttracks from the ground up, car by car, on one
              belief: every vehicle deserves to be extraordinary.
            </p>
            <p>
              He still runs the Jubilee Hills floor. A team of specialists transforms hundreds of
              vehicles every month, and the standard on day one is the standard today.
            </p>
          </div>
          <p className="font-script mt-8 text-5xl leading-none text-foreground md:text-6xl">Rakesh Kurapati</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={founderInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-[#e10600]"
            >
              <Instagram className="h-4 w-4 text-[#e10600]" />
              @rakesh_knv
            </a>
            <a
              href={studioInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-[#e10600]"
            >
              <Instagram className="h-4 w-4 text-[#e10600]" />
              @fasttracks_car_care
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-[#25D366]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
