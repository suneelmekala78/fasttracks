"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
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
  const menuId = useId();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [navPath, setNavPath] = useState(pathname);

  if (navPath !== pathname) {
    setNavPath(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
        setMobileServicesOpen(false);
      }
    }
    function onPointer(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((open) => {
      const next = !open;
      if (next) setServicesOpen(false);
      else setMobileServicesOpen(false);
      return next;
    });
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 nav-carbon">
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

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[15px] font-semibold text-nav-fg lg:flex">
          {mainNav.map((link) =>
            link.href === "/services" ? (
              <div key={link.href} className="relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 border-b-2 py-1 ${
                    isActive(pathname, "/services") || pathname === "/recliners"
                      ? "border-[#e10600]"
                      : "border-transparent hover:border-nav-fg/40"
                  }`}
                  aria-expanded={servicesOpen}
                  onClick={() => {
                    setServicesOpen((open) => !open);
                    setMenuOpen(false);
                  }}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen ? (
                  <div className="absolute left-0 top-[calc(100%+14px)] z-50 w-72 rounded-xl border border-border bg-card py-2 text-sm font-semibold text-card-foreground shadow-2xl">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href + item.label}
                        href={item.href}
                        className="block px-4 py-2.5 hover:bg-foreground/5"
                        onClick={() => setServicesOpen(false)}
                      >
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
                  isActive(pathname, link.href) ? "border-[#e10600]" : "border-transparent hover:border-nav-fg/40"
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
            className="grid h-10 w-10 place-items-center rounded-md hover:bg-[var(--nav-hover)] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={toggleMenu}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-16 z-40 lg:hidden ${
          menuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
        aria-hidden={!menuOpen}
        {...(!menuOpen ? { inert: true as unknown as undefined } : {})}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />
        <nav
          id={menuId}
          className={`absolute inset-x-0 top-0 flex max-h-[calc(100dvh-4rem)] flex-col border-b border-nav-border bg-nav shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition-[transform,visibility] duration-300 ease-out ${
            menuOpen ? "translate-y-0" : "-translate-y-[110%]"
          }`}
        >
          <div className="overflow-y-auto px-4 py-5">
            <div className="flex flex-col gap-1">
              {mainNav.map((link) =>
                link.href === "/services" ? (
                  <div key={link.href} className="rounded-2xl border border-nav-border/80">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-semibold text-nav-fg"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((open) => !open)}
                    >
                      Services
                      <ChevronDown
                        className={`h-4 w-4 transition ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-1 border-t border-nav-border px-2 py-2">
                          {serviceLinks.map((item) => (
                            <Link
                              key={item.href + item.label}
                              href={item.href}
                              className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-nav-muted hover:bg-[var(--nav-hover)] hover:text-nav-fg"
                              onClick={closeMenu}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-2xl px-4 py-3.5 text-base font-semibold ${
                      isActive(pathname, link.href)
                        ? "bg-[var(--nav-hover)] text-nav-fg"
                        : "text-nav-fg hover:bg-[var(--nav-hover)]"
                    }`}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            <div className="mt-6 border-t border-nav-border pt-5">
              <p className="px-1 text-[11px] font-bold uppercase tracking-[0.18em] text-nav-muted">
                Follow Fasttracks
              </p>
              <SocialLinks className="mt-3" iconClassName="border-nav-border text-nav-fg" />
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e10600] px-4 py-3.5 text-sm font-bold text-white"
              onClick={closeMenu}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book Now on WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
