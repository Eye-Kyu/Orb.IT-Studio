import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import "@radix-ui/themes/styles.css";
import Footer from "@/components/ui/footer";
import SmoothScroll from "../components/ui/smoothscroll";

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
  metadataBase: new URL("https://studiomizan.com"),
  title: {
    default: "Studio Mizan | Digital Design & Tech Studio — Nairobi",
    template: "%s | Studio Mizan",
  },
  description:
    "Studio Mizan is a Digital Design and Tech Studio based in Nairobi. We build brands, create digital experiences, and shape the stories of tomorrow through web design, branding, and digital marketing.",
  keywords: [
    "Studio Mizan",
    "digital design studio Nairobi",
    "web design Kenya",
    "branding agency Nairobi",
    "graphic design Kenya",
    "digital marketing Nairobi",
    "tech studio Kenya",
    "mobile app development Nairobi",
    "UX design Kenya",
    "creative agency Nairobi",
  ],
  authors: [{ name: "Studio Mizan", url: "https://studiomizan.com" }],
  creator: "Studio Mizan",
  publisher: "Studio Mizan",
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
    url: "https://studiomizan.com",
    siteName: "Studio Mizan",
    title: "Studio Mizan | Digital Design & Tech Studio — Nairobi",
    description:
      "We build brands, create digital experiences, and shape the stories of tomorrow. A Digital Design and Tech Studio based in Nairobi, Kenya.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Mizan — Digital Design & Tech Studio Nairobi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Mizan | Digital Design & Tech Studio — Nairobi",
    description:
      "We build brands, create digital experiences, and shape the stories of tomorrow.",
    images: ["/og-image.jpg"],
    creator: "@studiomizan",
  },
  alternates: {
    canonical: "https://studiomizan.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Studio Mizan",
  url: "https://studiomizan.com",
  logo: "https://studiomizan.com/og-image.jpg",
  description:
    "Studio Mizan is a Digital Design and Tech Studio based in Nairobi, Kenya. We build brands, create digital experiences, and shape the stories of tomorrow.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Web Design",
    "Web Development",
    "Brand Design",
    "Graphic Design",
    "Digital Marketing",
    "Mobile App Development",
    "IT Consulting",
  ],
  sameAs: [
    "https://www.instagram.com/studiomizan",
    "https://www.linkedin.com/company/studiomizan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
