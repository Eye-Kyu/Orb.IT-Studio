export interface ServiceProcess {
  step: number;
  heading: string;
  body: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  img: string;
  subservices: string[];
  process: ServiceProcess[];
}

export const services: Service[] = [
  {
    slug: "web-design",
    title: "WEB DESIGN",
    tagline: "Websites that work as hard as you do.",
    description:
      "We build custom, mobile-friendly websites that are fast, functional, and SEO-ready. Our web design and development services blend modern design with clean code to deliver high-performing websites tailored to your business goals. Whether you need a company site, portfolio, or e-commerce platform — we'll help you stand out online.",
    img: "/static/web-dev.png",
    subservices: [
      "E-commerce websites",
      "Website redesign",
      "Website development",
      "UI/UX design",
      "Performance optimization",
    ],
    process: [
      {
        step: 1,
        heading: "Discovery",
        body: "We learn your business, goals, and audience. A thorough brief becomes our north star.",
      },
      {
        step: 2,
        heading: "Wireframes",
        body: "We map out the structure and user flows before a single line of code is written.",
      },
      {
        step: 3,
        heading: "Design",
        body: "High-fidelity mockups in Figma — pixel-perfect, on-brand, and ready for feedback.",
      },
      {
        step: 4,
        heading: "Development",
        body: "Clean, semantic code. Fast builds. Responsive across every screen size.",
      },
      {
        step: 5,
        heading: "Launch",
        body: "Thorough QA, SEO setup, and a smooth handoff. We don't ship anything we're not proud of.",
      },
    ],
  },
  {
    slug: "graphic-design",
    title: "GRAPHIC DESIGN",
    tagline: "Visuals that stop the scroll.",
    description:
      "Capture attention with professional graphic design tailored to your brand. We create eye-catching designs for social media, marketing materials, packaging, and digital campaigns. Every design communicates your message clearly and leaves a lasting impression — for print or digital.",
    img: "/static/graphic-design.png",
    subservices: ["Logo Design", "Posters & Brochures", "Motion Graphics", "Social Media Assets"],
    process: [
      {
        step: 1,
        heading: "Brief",
        body: "We understand your audience, message, and the context the design will live in.",
      },
      {
        step: 2,
        heading: "Concept",
        body: "Three distinct creative directions. You pick the energy that fits your brand.",
      },
      {
        step: 3,
        heading: "Refine",
        body: "Two rounds of revisions to get it exactly right. No more guessing.",
      },
      {
        step: 4,
        heading: "Deliver",
        body: "Final files in every format you'll need — print-ready, web-ready, future-ready.",
      },
    ],
  },
  {
    slug: "branding",
    title: "BRANDING",
    tagline: "Your story told with clarity and style.",
    description:
      "We craft brand identities that are impossible to ignore. From logo design to brand strategy, we build cohesive visual systems that resonate with your audience and stand out in crowded markets. Whether launching a new venture or refreshing an old brand — we'll make your brand speak with purpose.",
    img: "/branding-image.jpg",
    subservices: [
      "Brand Identity",
      "Packaging Design",
      "Visual Identity System",
      "Brand Consulting",
      "Brand Strategy",
      "Motion Graphics",
    ],
    process: [
      {
        step: 1,
        heading: "Audit",
        body: "We examine where you stand today — your current perception vs. your desired position.",
      },
      {
        step: 2,
        heading: "Strategy",
        body: "Positioning, tone of voice, personality pillars. The DNA of your brand.",
      },
      {
        step: 3,
        heading: "Identity",
        body: "Logo, typography, color palette, icon system — every element designed with intention.",
      },
      {
        step: 4,
        heading: "Guidelines",
        body: "A living brand book your whole team can use. Consistency at every touchpoint.",
      },
      {
        step: 5,
        heading: "Rollout",
        body: "We apply the brand across key collateral — business cards, decks, social templates.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "APP DEVELOPMENT",
    tagline: "Scalable apps that users actually love.",
    description:
      "Turn ideas into reality with mobile and web app development for iOS and Android. We build scalable, user-friendly apps with modern UI/UX, backend support, and post-launch maintenance. Whether you're a startup or enterprise — our apps are designed to engage users, streamline services, and drive results.",
    img: "/static/Web-Design.png",
    subservices: [
      "Android App Development",
      "iOS App Development",
      "Hybrid App Development",
      "Web App Development",
      "Software Development",
    ],
    process: [
      {
        step: 1,
        heading: "Scoping",
        body: "Feature list, tech stack, and project timeline agreed upfront. No surprises.",
      },
      {
        step: 2,
        heading: "UX Design",
        body: "User flows, prototypes, and usability testing before development begins.",
      },
      {
        step: 3,
        heading: "Sprint Build",
        body: "Agile sprints with regular demos. You see progress every two weeks.",
      },
      {
        step: 4,
        heading: "QA & Testing",
        body: "Device testing, edge-case handling, performance profiling, security audits.",
      },
      {
        step: 5,
        heading: "Launch & Support",
        body: "Store submission, onboarding, and ongoing maintenance included.",
      },
    ],
  },
  {
    slug: "it-consulting",
    title: "IT CONSULTING",
    tagline: "Technology decisions made with confidence.",
    description:
      "Our IT consulting services help businesses grow smarter. Cloud solutions, IT strategy, system integration, and digital transformation support — all tailored to your context. Whether you're a startup or scaling enterprise, we turn tech confusion into confident progress.",
    img: "/static/Consultation.png",
    subservices: ["Consulting Services", "Training & Development", "Cloud Migration", "Systems Integration"],
    process: [
      {
        step: 1,
        heading: "Assessment",
        body: "We audit your current tech stack, workflows, and pain points.",
      },
      {
        step: 2,
        heading: "Roadmap",
        body: "A prioritized technology plan aligned with your business objectives.",
      },
      {
        step: 3,
        heading: "Implementation",
        body: "Hands-on support through migrations, integrations, and new tool rollouts.",
      },
      {
        step: 4,
        heading: "Training",
        body: "Your team walks away capable and confident. We don't create dependency.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "DIGITAL MARKETING",
    tagline: "Grow where your customers already are.",
    description:
      "Results-driven digital marketing that increases visibility, drives traffic, and converts leads. From SEO and content creation to social media and paid ads — data-backed, creative, and always audience-focused. We help you connect and convert where it matters most.",
    img: "/static/digital-marketing.webp",
    subservices: [
      "Social Media Management",
      "SEO",
      "Email Marketing",
      "Paid Advertising",
      "Content Marketing",
      "Analytics & Reporting",
    ],
    process: [
      {
        step: 1,
        heading: "Audit",
        body: "We baseline your current digital presence and identify the highest-leverage opportunities.",
      },
      {
        step: 2,
        heading: "Strategy",
        body: "Channel mix, content calendar, KPIs. Every decision tied to a business outcome.",
      },
      {
        step: 3,
        heading: "Execute",
        body: "We create, publish, and optimise — at a pace your audience will feel.",
      },
      {
        step: 4,
        heading: "Report",
        body: "Monthly reports you'll actually read. Clear data, honest commentary, next steps.",
      },
    ],
  },
  {
    slug: "support-maintenance",
    title: "SUPPORT & MAINTENANCE",
    tagline: "Always on, so you never have to worry.",
    description:
      "Keep your website secure, updated, and running smoothly. We handle updates, backups, bug fixes, and real-time monitoring — so you can focus on business while we handle the tech. Reliable, responsive, and peace-of-mind included.",
    img: "/static/IT-Maintenance-Support.avif",
    subservices: ["Troubleshooting", "Security Patches", "Performance Monitoring", "Backup & Recovery"],
    process: [
      {
        step: 1,
        heading: "Onboard",
        body: "We gain access and document your stack. No stone left unturned.",
      },
      {
        step: 2,
        heading: "Baseline",
        body: "Speed test, security scan, and uptime monitoring configured from day one.",
      },
      {
        step: 3,
        heading: "Maintain",
        body: "Regular updates, proactive fixes, and monthly health reports.",
      },
      {
        step: 4,
        heading: "Respond",
        body: "When something breaks, we fix it fast. Average response: under 4 hours.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, count);
}
