// Case studies — sourced from the public GitHub portfolio (github.com/Eye-Kyu)
// and the live deployments. Everything here is factual about what was built.
//
// `outcomes` is intentionally empty: add real numbers only when a client has
// shared them (e.g. "Quote requests up 3x in the first month"). Pages hide the
// outcomes block when the list is empty.

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  sector: string;
  year: string;
  services: string[]; // slugs from lib/services-data.ts
  summary: string;
  challenge: string;
  approach: string[];
  built: string[];
  stack: string[];
  image?: string; // screenshot in /public/work
  accent: string; // brand colour used for the cover when there's no image
  liveUrl?: string;
  repoUrl?: string;
  outcomes: string[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bravair-logistics",
    client: "Bravair Logistics",
    title: "From farm to global market",
    sector: "Export logistics",
    year: "2026",
    services: ["web-design", "branding"],
    summary:
      "A lead-generation site for an export coordinator moving Kenyan horticulture and floriculture produce to buyers worldwide.",
    challenge:
      "Bravair sells trust to two very different audiences: overseas buyers who need confidence in the cold chain, and local farmers who need a reason to join the network. One site had to speak to both without diluting either.",
    approach: [
      "Split the journey into two clear paths — buyers (quote request) and farmers (sourcing registration) — each with its own form.",
      "Built an interactive transit-time estimator so buyers get a useful answer before they ever talk to sales.",
      "Gave trust its own page: how produce is vetted, tracked and handled at every leg.",
      "Kept all content in plain data files so the team can update copy without touching page code.",
    ],
    built: [
      "13-page marketing site: services, horticulture, floriculture, how it works, trust, FAQ, legal",
      "Quote request and farmer registration forms",
      "Shipping transit-time estimator tool",
      "Sticky header with a 24/7 cargo hotline strip",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4"],
    image: "/work/bravair.png",
    accent: "#1e2a78",
    liveUrl: "https://sky-fresh-logistics.vercel.app",
    repoUrl: "https://github.com/Eye-Kyu/SkyFreshLogistics",
    outcomes: [],
    featured: true,
  },
  {
    slug: "wanderer-tribe",
    client: "Wanderer Tribe",
    title: "Journeys worth leaving home for",
    sector: "Travel & tourism",
    year: "2026",
    services: ["web-design", "digital-marketing"],
    summary:
      "An immersive travel site for a company curating journeys across Africa, Asia and the Middle East.",
    challenge:
      "Travel is bought on feeling. The site had to make someone want to be somewhere before they'd read a single itinerary — then make enquiring effortless.",
    approach: [
      "Led with full-bleed cinematic video so the destination does the selling.",
      "Used motion (GSAP, smooth scrolling, parallax tilt) to pace the story without slowing the page.",
      "Put a travel-enquiry call to action and WhatsApp chat one tap away on every screen.",
      "Wired enquiries straight to email and added analytics and speed monitoring from day one.",
    ],
    built: [
      "Destination and experience pages with masonry galleries",
      "Travel enquiry flow with email delivery",
      "WhatsApp quick-chat button",
      "Sitemap, analytics and Core Web Vitals monitoring",
    ],
    stack: ["Next.js", "TypeScript", "GSAP", "Framer Motion", "Lenis", "Resend"],
    image: "/work/wanderer-tribe.png",
    accent: "#0f766e",
    liveUrl: "https://tribe-wander.vercel.app",
    repoUrl: "https://github.com/Eye-Kyu/Wanderer-Tribe",
    outcomes: [],
    featured: true,
  },
  {
    slug: "county-supermarket",
    client: "County Supermarket",
    title: "A local chain, online",
    sector: "Retail",
    year: "2026",
    services: ["web-design", "branding"],
    summary:
      "The online home of a supermarket chain serving Murang'a, Kirinyaga, Kiambu and Nairobi.",
    challenge:
      "Shoppers wanted to know what's in store, which branch is closest and whether it's open — on a phone, often on a slow connection.",
    approach: [
      "Mobile-first layouts, because most shoppers arrive on a phone.",
      "Organised everything by department — fresh, bakery, butchery, electronics, household.",
      "Branch information front and centre, across all four counties.",
    ],
    built: [
      "Department and branch pages",
      "Responsive, lightweight front end with motion where it helps",
      "Analytics to see what shoppers look for",
    ],
    stack: ["Next.js", "TypeScript", "shadcn/ui", "GSAP"],
    image: "/work/county-supermarket.png",
    accent: "#b91c1c",
    liveUrl: "https://county-supermarket.vercel.app",
    repoUrl: "https://github.com/Eye-Kyu/County-supermarket",
    outcomes: [],
    featured: true,
  },
  {
    slug: "school-manager",
    client: "School Manager",
    title: "One platform for the whole school",
    sector: "Education · SaaS",
    year: "2026",
    services: ["app-development", "it-consulting"],
    summary:
      "A multi-tenant school management platform for parents, students, teachers and admins.",
    challenge:
      "Schools juggle WhatsApp groups, paper and spreadsheets. Any replacement must keep each school's data strictly separate and work for parents who only have a phone.",
    approach: [
      "Designed for multi-tenancy from day one, with row-level security in the database so one school can never see another's data.",
      "Shipped as an installable PWA first, with a React Native app on the roadmap.",
      "Organised as a monorepo with shared types and UI, plus written architecture decisions and runbooks.",
    ],
    built: [
      "Role-based portals for parents, students, teachers and admins",
      "Assignment submissions, avatars and a document library",
      "NestJS API with PostgreSQL and row-level security",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Supabase", "Turborepo"],
    image: "/work/school-manager.png",
    accent: "#111827",
    liveUrl: "https://school-management-web-teal.vercel.app",
    repoUrl: "https://github.com/Eye-Kyu/School-Management",
    outcomes: [],
    featured: true,
  },
  {
    slug: "mwakie-visuals",
    client: "Mwakie Visuals",
    title: "A portfolio that gets out of the way",
    sector: "Photography",
    year: "2025",
    services: ["web-design"],
    summary: "A portfolio site for a Nairobi photographer, built to let the work lead.",
    challenge:
      "Photographers are judged on their images. The site had to load large galleries quickly and keep the interface quiet.",
    approach: [
      "Gallery-first layout with minimal chrome.",
      "Optimised image loading so big portfolios stay fast on mobile.",
    ],
    built: ["Portfolio galleries", "About and booking contact"],
    stack: ["JavaScript", "HTML", "CSS"],
    accent: "#a16207",
    repoUrl: "https://github.com/Eye-Kyu/Mwakie-Visuals",
    outcomes: [],
    featured: false,
  },
  {
    slug: "smart-pos",
    client: "Smart POS",
    title: "Checkout in a browser",
    sector: "Retail tech",
    year: "2026",
    services: ["app-development"],
    summary:
      "A web-based point-of-sale system that uses the device camera as a barcode and QR scanner.",
    challenge:
      "Small shops can't always afford dedicated POS hardware. This one runs on any phone, tablet or laptop they already own.",
    approach: [
      "Camera-based barcode and QR scanning instead of a separate scanner.",
      "Simple, fast checkout screens built for the counter.",
    ],
    built: ["Product scanning", "Cart and checkout flow"],
    stack: ["React", "JavaScript"],
    accent: "#047857",
    repoUrl: "https://github.com/Eye-Kyu/Smart-POS",
    outcomes: [],
    featured: false,
  },
  {
    slug: "fleetstar-cars",
    client: "Fleetstar Cars",
    title: "Car hire, booked and paid",
    sector: "Mobility",
    year: "2025",
    services: ["web-design", "app-development"],
    summary: "A car-hire site where customers browse the fleet and pay online.",
    challenge:
      "Car hire runs on phone calls and back-and-forth. Customers wanted to see what's available and book it in one go.",
    approach: ["Fleet browsing with clear pricing.", "Online payment built into the booking flow."],
    built: ["Fleet catalogue", "Booking with card payments via Stripe"],
    stack: ["React", "JavaScript", "Stripe"],
    accent: "#1d4ed8",
    repoUrl: "https://github.com/Eye-Kyu/Fleetstar-Cars",
    outcomes: [],
    featured: false,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
}

export function getCaseStudiesForService(serviceSlug: string) {
  return caseStudies.filter((c) => c.services.includes(serviceSlug));
}
