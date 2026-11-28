import { Facebook, Instagram, Link2, Youtube } from "lucide-react";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { socialLinks } from "@/lib/site";

const icons: Record<(typeof socialLinks)[number]["label"], ReactNode> = {
  Facebook: <Facebook className="h-4 w-4" />,
  Instagram: <Instagram className="h-4 w-4" />,
  WhatsApp: <WhatsAppIcon className="h-4 w-4" />,
  YouTube: <Youtube className="h-4 w-4" />,
  Linktree: <Link2 className="h-4 w-4" />,
};

export function SocialLinks({
  className = "",
  iconClassName = "",
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className={`grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/80 transition hover:border-[#e10600] hover:text-[#e10600] ${iconClassName}`}
          >
            {icons[link.label]}
          </a>
        </li>
      ))}
    </ul>
  );
}
