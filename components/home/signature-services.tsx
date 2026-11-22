import Link from "next/link";

const signatures = [
  {
    href: "/services/ppf",
    place: "Protection",
    title: "Paint Protection Film",
    detail: "Full body ₹1L–₹2L · Bonnet from ₹20K",
    className: "min-h-[300px] bg-[#1a1a1a] md:min-h-[340px]",
    order: "order-2 md:order-1",
  },
  {
    href: "/recliners",
    place: "Most requested",
    title: "Luxury Recliners",
    detail: "Innova, Fortuner, Vellfire, Defender, and more",
    className: "min-h-[340px] bg-[#e10600] md:min-h-[420px]",
    order: "order-1 md:order-2",
  },
  {
    href: "/services/srs",
    place: "Signature",
    title: "SRS Correction",
    detail: "Zero-filler Menzerna paint restoration",
    className: "min-h-[300px] bg-[#3a0008] md:min-h-[340px]",
    order: "order-3",
  },
];

export function SignatureServices() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 md:px-6 md:py-16">
      <h2 className="font-display text-5xl font-bold uppercase leading-none tracking-tight md:text-6xl">
        The Studio
      </h2>
      <p className="mt-3 max-w-xl text-sm font-semibold text-black/60">
        From factory floor to show stopper. Every transformation leaves Jubilee Hills as a statement.
      </p>
      <div className="mt-8 grid items-end gap-4 md:grid-cols-3 md:gap-5">
        {signatures.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex flex-col overflow-hidden rounded-[22px] p-6 text-white shadow-lg transition hover:-translate-y-1 ${item.className} ${item.order}`}
          >
            <span className="dot-field pointer-events-none absolute inset-0" />
            <span className="relative font-display text-sm font-bold uppercase tracking-[0.16em] text-white/80">
              {item.place}
            </span>
            <span className="relative mt-6 font-display text-4xl font-bold uppercase leading-[0.95] md:text-5xl">
              {item.title}
            </span>
            <span className="relative mt-auto pt-8 text-sm font-semibold text-white/90">{item.detail}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
