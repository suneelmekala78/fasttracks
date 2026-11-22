"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { mainNav, serviceLinks, whatsappHref } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [servicesPath, setServicesPath] = useState<string | null>(null);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const servicesOpen = servicesPath === pathname;
  const menuOpen = menuPath === pathname;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesPath(null);
        setMenuPath(null);
      }
    }
    function onPointer(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setServicesPath(null);
        setMenuPath(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 nav-carbon text-white">
      <div className="relative mx-auto flex h-16 max-w-[1440px] items-center px-4 md:px-6">
        <Link href="/" aria-label="Fasttracks Car Care home" className="relative z-10 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Fasttracks"
            width={220}
            height={36}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[15px] font-semibold lg:flex">
          {mainNav.map((link) =>
            link.href === "/services" ? (
              <div key={link.href} className="relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 border-b-2 py-1 ${
                    isActive(pathname, "/services") || pathname === "/recliners"
                      ? "border-[#e10600]"
                      : "border-transparent hover:border-white/50"
                  }`}
                  aria-expanded={servicesOpen}
                  onClick={() => {
                    setServicesPath(servicesOpen ? null : pathname);
                    setMenuPath(null);
                  }}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen ? (
                  <div className="absolute left-0 top-[calc(100%+14px)] z-50 w-72 rounded-xl bg-white py-2 text-sm font-semibold text-[#15151e] shadow-2xl">
                    {serviceLinks.map((item) => (
                      <Link key={item.href + item.label} href={item.href} className="block px-4 py-2.5 hover:bg-[#f6f4f0]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 py-1 ${
                  isActive(pathname, link.href) ? "border-[#e10600]" : "border-transparent hover:border-white/50"
                }`}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="relative z-10 ml-auto flex items-center gap-2">
          <ThemeToggle />
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#e10600] px-3.5 py-1.5 text-[12px] font-bold text-white hover:bg-[#c40500] sm:text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book Now
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md hover:bg-white/10 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuPath(menuOpen ? null : pathname);
              setServicesPath(null);
            }}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#101014] lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-4">
            {mainNav.map((link) => (
              <Link key={link.href} href={link.href} className="py-2 text-sm font-semibold">
                {link.label}
              </Link>
            ))}
            {serviceLinks.slice(0, -1).map((link) => (
              <Link key={link.href} href={link.href} className="py-1.5 pl-3 text-sm text-white/70">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
