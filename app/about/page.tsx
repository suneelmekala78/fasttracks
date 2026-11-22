import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { address, phoneDisplay, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fasttracks Car Care is India's biggest instant car modification studio in Jubilee Hills, Hyderabad. Founded by Rakesh Kurapati. Est. 2002.",
};

const stats = [
  { value: "25+", label: "Years on the floor" },
  { value: "2002", label: "Studio established" },
  { value: "365", label: "Days open each year" },
  { value: "157K+", label: "On Instagram" },
];

const knownFor = [
  {
    href: "/recliners",
    title: "Luxury recliners",
    text: "The most requested job. First-class seats in Innova Crysta, Fortuner, Vellfire, Defender, Land Cruiser, and more. Allow about a week.",
  },
  {
    href: "/services/ppf",
    title: "Paint protection",
    text: "Full-body film from ₹1 lakh to ₹2 lakh. Bonnet protection from ₹20,000. Self-healing cover for chips, scratches, and sun.",
  },
  {
    href: "/services/srs",
    title: "SRS correction",
    text: "Zero-filler paint correction with Menzerna. Swirls and oxidation brought back to a mirror, without filling the clear coat.",
  },
  {
    href: "/services/audio",
    title: "Cabins and sound",
    text: "Custom audio from ₹1 lakh. Interiors from ₹30,000 to ₹10 lakh. Tint, vinyl, alloys, and infotainment on the same floor.",
  },
];

const steps = [
  { n: "01", title: "WhatsApp the floor", text: "Message +91 80190 65252. The studio answers seven days a week." },
  { n: "02", title: "Share the car", text: "Model, colour, and the work you want. You get options, a quote, and a timeline." },
  { n: "03", title: "Come to Jubilee Hills", text: "1355/F, Road No. 45, Nandagiri Hills. Walk-ins are welcome when the bay is free." },
  { n: "04", title: "Drive it out", text: "Same-day work when the job allows. Bigger builds, including recliners, are booked ahead." },
];

export default function AboutPage() {
  return (
    <main id="content" className="bg-background text-foreground">
      <section className="home-stage border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600] md:text-sm">
            Est. 2002 · Jubilee Hills
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl">
            About the studio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            India&apos;s biggest instant car modification studio. One floor in Hyderabad for
            recliners, paint, sound, and cabins — open every day of the year.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-black">
          <Image
            src="/images/founder.jpg"
            alt="Rakesh Kurapati outside the Fasttracks studio cars"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">Founder</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
            Rakesh Kurapati
          </h2>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-muted">
            Founder &amp; CEO
          </p>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              What started as a childhood obsession with cars became the Jubilee Hills studio.
              Rakesh built Fasttracks car by car, on one belief: every vehicle deserves to be
              extraordinary.
            </p>
            <p>
              The workshop now holds the widest network of vendors, clients, and Tollywood&apos;s
              finest under one roof. He still runs the floor, and the standard on day one is the
              standard today.
            </p>
            <p>
              Fasttracks is also India&apos;s only Travo bodykit installer for the Hilux and Fortuner.
              Protection, stance, and cabin work stay in the same bay.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#e10600] px-6 py-3 text-sm font-bold text-white hover:bg-[#c40500]"
            >
              Visit the studio
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold hover:bg-foreground hover:text-background"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-border surface-panel">
        <dl className="mx-auto grid max-w-[1440px] grid-cols-2 gap-px bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="surface-panel px-5 py-8 md:px-8 md:py-10">
              <dt className="font-display text-4xl font-bold leading-none md:text-5xl">{stat.value}</dt>
              <dd className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">The floor</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
          What the studio is known for
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {knownFor.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-3xl border border-border surface-card p-6 transition hover:border-[#e10600] md:p-8"
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted md:text-base md:leading-7">{item.text}</p>
              <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.16em] text-[#e10600]">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border surface-panel">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e10600]">A booking</p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
            How a car comes in
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-3xl border border-border p-6">
                <p className="font-display text-3xl font-bold text-[#e10600]">{step.n}</p>
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-20">
        <div className="flex flex-col gap-6 rounded-3xl bg-[#e10600] px-6 py-10 text-white md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Jubilee Hills</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-bold uppercase leading-[0.95] md:text-5xl">
              The floor is open today
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/85">{address}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#15151e] hover:bg-[#f6f4f0]"
          >
            Contact the studio
          </Link>
        </div>
      </section>
    </main>
  );
}
