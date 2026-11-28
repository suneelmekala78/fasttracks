import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { whatsappHref } from "@/lib/site";
import { reclinerVehicles } from "@/lib/services";

export const metadata: Metadata = {
  title: "Luxury Recliners",
  description:
    "Custom luxury recliners for Innova, Fortuner, Vellfire, Defender, Land Cruiser, and more. Book about a week ahead at Fasttracks Jubilee Hills.",
};

const steps = [
  { n: "01", title: "WhatsApp the brief", text: "Share the car model, colour, and timing. Recliners need about a week of notice." },
  { n: "02", title: "Confirm fitment", text: "We confirm the cabin layout and finishes before the bay is booked." },
  { n: "03", title: "Install on the floor", text: "The job runs in Jubilee Hills. You get a clear timeline before work starts." },
  { n: "04", title: "Drive first class", text: "Leave with lounge seats that feel built for the cabin — not bolted in as an afterthought." },
];

export default function ReclinersPage() {
  return (
    <main id="content" className="bg-background text-foreground">
      <PageHero
        kicker="Most requested"
        title="Luxury recliners"
        description="First-class lounge seats for India's premium SUVs and MPVs. India's biggest instant modification studio, Jubilee Hills."
        image="/images/recliners.jpg"
        imageAlt="Luxury recliner cabin work at Fasttracks"
        video
      />

      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">The recliner experience</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl">
              A cabin that sits like first class
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-muted md:text-lg md:leading-8">
              <p>
                Our most iconic and most requested service. We install luxury recliners that turn an SUV into a lounge on
                wheels — leather, stance, and fitment built around the cabin.
              </p>
              <p>
                Allow about a week of notice. Walk-ins for quotes are welcome; installs are scheduled so the bay is ready
                when the car arrives.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-3xl border border-border surface-card p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Good to know</p>
            <ul className="mt-5 space-y-3 text-sm font-semibold leading-6">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e10600]" />About one week of notice</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e10600]" />Premium SUV &amp; MPV fitments</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e10600]" />Custom leather and finishes</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e10600]" />Done on the Jubilee Hills floor</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border surface-panel">
        <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-16">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">We do recliners for</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">Vehicles</h2>
          </FadeIn>
          <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {reclinerVehicles.map((vehicle) => (
              <StaggerItem key={vehicle.name}>
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-2xl bg-black"
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: vehicle.focus || "center" }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/45" />
                  <span className="absolute left-4 top-4 max-w-[70%] text-lg font-semibold leading-tight text-white md:text-xl">
                    {vehicle.name}
                  </span>
                  <span
                    className={`absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full transition group-hover:scale-105 ${
                      vehicle.accent
                        ? "bg-[#e10600] text-white"
                        : "bg-white text-[#15151e]"
                    }`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">Process</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">How a recliner comes in</h2>
        </FadeIn>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.n}>
              <div className="h-full rounded-3xl border border-border surface-card p-6">
                <p className="font-display text-3xl font-bold text-[#e10600]">{step.n}</p>
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand
        title="Book a recliner install"
        detail="Message the car model and preferred week. The floor will confirm fitment and timing."
      />
    </main>
  );
}
