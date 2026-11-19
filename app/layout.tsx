import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import "@radix-ui/themes/styles.css";
import Footer from "@/components/ui/footer";
import SmoothScroll from "../components/ui/smoothscroll";
import ThemeProvider from "@/components/ui/theme-provider";
import ScrollColorProvider from "@/components/ui/scroll-color-provider";
import Cursor from "@/components/ui/cursor";
import JsonLd from "@/components/ui/json-ld";
import { SITE, organizationSchema } from "@/lib/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://studiomizani.com"),
  title: {
    default: "Studio Mizani | Web Design, Branding & App Development in Nairobi",
    template: "%s | Studio Mizani",
  },
  description:
    SITE.description,
  keywords: [
    "Studio Mizani",
    "digital design studio Nairobi",
    "web design Kenya",
    "branding agency Nairobi",
    "graphic design Kenya",
    "digital marketing Nairobi",
    "tech studio Kenya",
    "mobile app development Nairobi",
    "UX design Kenya",
    "creative agency Nairobi",
    "web design agency Nairobi",
    "website developer Kenya",
    "Next.js developer Kenya",
    "e-commerce website Kenya",
  ],
  authors: [{ name: "Studio Mizani", url: "https://studiomizani.com" }],
  creator: "Studio Mizani",
  publisher: "Studio Mizani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://studiomizani.com",
    siteName: "Studio Mizani",
    title: "Studio Mizani | Web Design, Branding & App Development in Nairobi",
    description:
      "We build brands, create digital experiences, and shape the stories of tomorrow. A Digital Design and Tech Studio based in Nairobi, Kenya.",
    // Image is supplied automatically by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Mizani | Web Design, Branding & App Development in Nairobi",
    description:
      "We build brands, create digital experiences, and shape the stories of tomorrow.",
    // Image is supplied automatically by app/opengraph-image.tsx
    creator: "@studiomizan",
  },
  alternates: {
    canonical: "https://studiomizani.com",
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to the code from Google Search Console.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE">
      <head>
        <JsonLd data={organizationSchema()} />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var c=document.documentElement.classList;c.toggle('dark',t==='dark');c.toggle('light',t!=='dark')}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:bg-[#EAB308] focus:text-black focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <Cursor />
          <ScrollColorProvider />
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
