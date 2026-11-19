import Image from "next/image";
import Link from "next/link";

// Founder details. Drop a square photo at /public/team/founder.jpg and set
// FOUNDER.photo to show it; until then a monogram is used.
const FOUNDER = {
  name: "Pancrass Njoroge",
  role: "Founder · Design & Engineering",
  photo: "" as string, // e.g. "/team/founder.jpg"
  bio: "I started Studio Mizani to give businesses here the kind of craft usually reserved for big-budget brands abroad. I design and build every project myself, from the first sketch to the last deploy — so the person you brief is the person who ships.",
  links: [
    { label: "GitHub", href: "https://github.com/Eye-Kyu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/studiomizan" },
  ],
};

// The specialist bench — contracted per project. Describe the roles, not names,
// unless a collaborator has agreed to be listed.
const BENCH = [
  { role: "Brand & visual design", note: "Identity systems, illustration, art direction" },
  { role: "Motion & video", note: "Product films, social content, animation" },
  { role: "Photography", note: "Product, people and place — shot in Kenya" },
  { role: "Copy & content", note: "English and Swahili, web and campaign" },
  { role: "Growth marketing", note: "Paid social, SEO, analytics" },
  { role: "Mobile engineering", note: "React Native and native builds" },
];

export default function Team() {
  const initials = FOUNDER.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section className="px-4 lg:px-14 py-16 lg:py-24">
      <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-10 lg:text-[13px]">Who you&apos;ll work with</p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 lg:gap-20 items-start">
        {/* Founder */}
        <div className="flex flex-col gap-6">
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-sm bg-[#004238]">
            {FOUNDER.photo ? (
              <Image src={FOUNDER.photo} alt={FOUNDER.name} fill sizes="(min-width:1024px) 30vw, 90vw" className="object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#EAB308] text-[clamp(5rem,12vw,160px)] leading-none" style={{ fontFamily: "borish" }}>
                  {initials}
                </span>
              </div>
            )}
          </div>
          <div>
            <p className="text-2xl lg:text-3xl leading-tight" style={{ fontFamily: "borish" }}>
              {FOUNDER.name}
            </p>
            <p className="text-xs tracking-[0.18em] uppercase opacity-50 mt-1 lg:text-sm">{FOUNDER.role}</p>
          </div>
        </div>

        {/* Bio + bench */}
        <div className="flex flex-col gap-12">
          <p className="text-xl lg:text-2xl leading-snug">{FOUNDER.bio}</p>
          <div className="flex gap-6">
            {FOUNDER.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase border-b border-foreground/30 pb-1 hover:border-[#EAB308] hover:text-[#EAB308] transition-colors lg:text-sm"
              >
                {l.label} ↗
              </a>
            ))}
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-2 lg:text-[13px]">The bench</p>
            <p className="text-sm opacity-60 mb-6 max-w-lg lg:text-base">
              Bigger projects get a hand-picked crew. Each specialist is contracted for the job, and
              briefed and managed by me — so you get the depth of an agency with one point of contact.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-foreground/10">
              {BENCH.map((b) => (
                <li key={b.role} className="py-4 border-b border-foreground/10 sm:odd:pr-6">
                  <p className="text-sm lg:text-base">{b.role}</p>
                  <p className="text-xs opacity-45 mt-1 lg:text-sm">{b.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 w-fit text-xs tracking-[0.22em] uppercase border border-foreground/30 px-5 py-3 hover:border-[#EAB308] hover:text-[#EAB308] transition-colors lg:text-sm"
          >
            See what we&apos;ve shipped <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
