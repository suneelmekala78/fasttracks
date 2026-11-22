import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Great_Vibes, Oswald, Titillium_Web } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-titillium",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.fasttrackscarcare.in";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f1ec" },
    { media: "(prefers-color-scheme: dark)", color: "#15151e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fasttracks Car Care | India's Biggest Instant Car Modification Studio",
    template: "%s · Fasttracks Car Care",
  },
  description:
    "Fasttracks Car Care is India's biggest instant car modification studio in Jubilee Hills, Hyderabad. PPF, luxury recliners, custom audio, detailing & more. Est. 2002.",
  keywords: [
    "Fasttracks Car Care",
    "car modification Hyderabad",
    "PPF Hyderabad",
    "luxury recliners",
    "ceramic coating Hyderabad",
    "Jubilee Hills car care",
    "custom audio car",
    "vinyl wrapping Hyderabad",
  ],
  authors: [{ name: "Fasttracks Car Care" }],
  creator: "Fasttracks Car Care",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Fasttracks Car Care",
    title: "Fasttracks Car Care | India's Biggest Instant Car Modification Studio",
    description:
      "PPF, luxury recliners, custom audio, detailing and more — Jubilee Hills, Hyderabad. Est. 2002.",
    images: [
      {
        url: "/images/founder.jpg",
        width: 1200,
        height: 630,
        alt: "Fasttracks Car Care — Jubilee Hills, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fasttracks Car Care | Hyderabad",
    description:
      "India's biggest instant car modification studio in Jubilee Hills. Est. 2002.",
    images: ["/images/founder.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Fasttracks Car Care",
  url: siteUrl,
  image: `${siteUrl}/images/founder.jpg`,
  telephone: "+918019065252",
  email: "fasttrackscarcare@gmail.com",
  foundingDate: "2002",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1355/F, Road No. 45, Nandagiri Hills, Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4326,
    longitude: 78.4071,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/fasttracks_car_care/",
    "https://www.instagram.com/rakesh_knv/",
  ],
  founder: {
    "@type": "Person",
    name: "Rakesh Kurapati",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${titillium.variable} ${oswald.variable} ${script.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm font-bold focus:text-black"
          >
            Skip to content
          </a>
          <SiteHeader />
          <div className="flex min-w-0 flex-1 flex-col">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
