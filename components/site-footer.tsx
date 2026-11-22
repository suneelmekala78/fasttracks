import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import {
  footerServices,
  footerVisit,
  hours,
  phoneDisplay,
  address,
  whatsappHref,
} from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border surface-panel text-foreground">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label="Fasttracks Car Care home" className="inline-flex items-center">
            <Image
              src="/images/full-text-logo.png"
              alt="Fasttracks"
              width={160}
              height={28}
              className="h-6 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            India&apos;s biggest instant car modification studio. Jubilee Hills,
            Hyderabad. Est. 2002.
          </p>
        </div>
        <FooterColumn title="Services" links={footerServices} />
        <FooterColumn title="Studio" links={footerVisit} />
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
            Visit
          </p>
          <p className="mt-4 text-sm leading-6 text-foreground/85">{address}</p>
          <a
            href={whatsappHref}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-[#25D366]"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            {phoneDisplay}
          </a>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {hours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {year} Fasttracks Car Care</p>
          <p>Open 365 days a year · Jubilee Hills, Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-semibold text-foreground/85 hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
