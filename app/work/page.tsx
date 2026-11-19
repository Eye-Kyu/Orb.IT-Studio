import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/work-data";
import WorkCard from "@/components/ui/work-card";

export const metadata: Metadata = {
  title: "Portfolio — Websites & Apps Built in Nairobi",
  description:
    "Case studies from Studio Mizani: websites, web apps and platforms designed and built in Nairobi for logistics, travel, retail, education and more.",
  openGraph: {
    title: "Work | Studio Mizani",
    description: "Websites, platforms and products built in Nairobi.",
    url: "https://studiomizani.com/work",
  },
  alternates: { canonical: "https://studiomizani.com/work" },
};

export default function WorkIndex() {
  const featured = caseStudies.filter((c) => c.featured);
  const more = caseStudies.filter((c) => !c.featured);

  return (
    <main id="main" className="w-full overflow-x-hidden">
      <section className="px-4 lg:px-14 pt-28 lg:pt-36 pb-12 lg:pb-20">
        <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-6 lg:text-[13px]">Studio Mizani / Work</p>
        <h1
          className="text-[clamp(3.5rem,12vw,150px)] leading-[0.9] tracking-tight"
          style={{ fontFamily: "borish" }}
        >
          THE WORK.
        </h1>
        <p className="max-w-xl mt-8 text-base lg:text-lg opacity-60 leading-relaxed">
          No stock mock-ups. These are real sites and products, live or in active development — every
          one designed and built here in Nairobi.
        </p>
      </section>

      <section className="px-4 lg:px-14 pb-20 lg:pb-28 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {featured.map((c, i) => (
          <WorkCard key={c.slug} study={c} index={i} />
        ))}
      </section>

      {more.length > 0 && (
        <section className="px-4 lg:px-14 pb-24 lg:pb-32">
          <div className="w-full h-px bg-foreground/10 mb-10" />
          <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-8 lg:text-[13px]">More from the archive</p>
          <ul className="flex flex-col">
            {more.map((c) => (
              <li key={c.slug} className="border-b border-foreground/10">
                <Link
                  href={`/work/${c.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-6"
                >
                  <span className="text-2xl lg:text-4xl group-hover:text-[#EAB308] transition-colors" style={{ fontFamily: "borish" }}>
                    {c.client}
                  </span>
                  <span className="text-xs tracking-[0.18em] uppercase opacity-50 lg:text-sm">
                    {c.sector} · {c.year} <span aria-hidden className="ml-2">↗</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="px-4 lg:px-14 pb-28 flex flex-col items-start gap-6">
        <p className="text-2xl lg:text-4xl max-w-2xl leading-tight">
          Want yours here next?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase border border-foreground/30 px-6 py-3 hover:border-[#EAB308] hover:text-[#EAB308] transition-colors lg:text-sm"
        >
          Build a brief <span aria-hidden>→</span>
        </Link>
      </section>
    </main>
  );
}
