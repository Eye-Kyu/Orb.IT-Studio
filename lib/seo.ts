// Single source of truth for SEO facts + schema.org (JSON-LD) builders.
// Only state things that are true — Google penalises misleading structured data.

import { services } from "@/lib/services-data";
import type { CaseStudy } from "@/lib/work-data";

export const SITE = {
  url: "https://studiomizani.com",
  name: "Studio Mizani",
  tagline: "Web Design, Branding & App Development in Nairobi",
  description:
    "Studio Mizani is a founder-led design and tech studio in Nairobi, Kenya. We design and build websites, brands, web apps and mobile apps for businesses in Kenya and worldwide.",
  email: "hello@studiomizani.com",
  city: "Nairobi",
  country: "KE",
  founder: "Pancrass Njoroge",
  foundingDate: "2020",
  sameAs: [
    "https://www.instagram.com/studiomizan",
    "https://www.linkedin.com/company/studiomizan",
    "https://www.tiktok.com/@studiomizan",
    "https://github.com/Eye-Kyu",
  ],
};

const ORG_ID = `${SITE.url}/#organization`;

// "WEB DESIGN" -> "Web Design", keeps acronyms like "IT".
export function titleCase(s: string) {
  return s
    .toLowerCase()
    .split(" ")
    .map((w) => (w === "it" ? "IT" : w === "&" ? "&" : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/apple-icon`,
        image: `${SITE.url}/opengraph-image`,
        description: SITE.description,
        email: SITE.email,
        foundingDate: SITE.foundingDate,
        founder: { "@type": "Person", name: SITE.founder, sameAs: ["https://github.com/Eye-Kyu"] },
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressCountry: SITE.country,
        },
        areaServed: [
          { "@type": "City", name: "Nairobi" },
          { "@type": "Country", name: "Kenya" },
          "Worldwide",
        ],
        knowsAbout: [
          "Web design",
          "Web development",
          "Branding",
          "UI/UX design",
          "Mobile app development",
          "Next.js",
          "Digital marketing",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: titleCase(s.title),
              url: `${SITE.url}/solutions/${s.slug}`,
            },
          })),
        },
        sameAs: SITE.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-KE",
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${titleCase(s.title)} in Nairobi`,
    serviceType: titleCase(s.title),
    description: s.description,
    url: `${SITE.url}/solutions/${s.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: [{ "@type": "Country", name: "Kenya" }, "Worldwide"],
  };
}

export function caseStudySchema(c: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${c.client} — ${c.title}`,
    headline: c.title,
    description: c.summary,
    url: `${SITE.url}/work/${c.slug}`,
    dateCreated: c.year,
    creator: { "@id": ORG_ID },
    about: c.sector,
    keywords: c.stack.join(", "),
    ...(c.image ? { image: `${SITE.url}${c.image}` } : {}),
    ...(c.liveUrl ? { sameAs: c.liveUrl } : {}),
  };
}

// Serialise for a <script type="application/ld+json">, escaping "<" so content
// can never close the script tag.
export function ldJson(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
