import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, getNextCaseStudy } from "@/lib/work-data";
import { services } from "@/lib/services-data";
import { WorkCover } from "@/components/ui/work-card";
import JsonLd from "@/components/ui/json-ld";
import { breadcrumbSchema, caseStudySchema } from "@/lib/seo";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: PageProps): Metadata {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  return {
    title: `${c.client} Case Study — ${c.sector}`,
    description: c.summary,
    openGraph: {
      title: `${c.client} | Studio Mizani`,
      description: c.summary,
      url: `https://studiomizani.com/work/${c.slug}`,
      ...(c.image ? { images: [{ url: c.image }] } : {}),
    },
    alternates: { canonical: `https://studiomizani.com/work/${c.slug}` },
  };
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-4 lg:text-[13px]">{children}</p>;
}

export default function CaseStudyPage({ params }: PageProps) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();
  const next = getNextCaseStudy(c.slug);
  const serviceNames = c.services
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean)
    .map((s) => s!);

  return (
    <main id="main" className="w-full overflow-x-hidden">
      <JsonLd data={caseStudySchema(c)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: c.client, path: `/work/${c.slug}` },
        ])}
      />
      {/* Header */}
      <section className="px-4 lg:px-14 pt-28 lg:pt-36 pb-10">
        <Link href="/work" className="text-[10px] tracking-[0.25em] uppercase opacity-40 hover:opacity-100 lg:text-[13px]">
          ← All work
        </Link>
        <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mt-8 mb-4 lg:text-[13px]">
          {c.client} · {c.sector} · {c.year}
        </p>
        <h1
          className="text-[clamp(3rem,9vw,120px)] leading-[0.92] tracking-tight max-w-5xl"
          style={{ fontFamily: "borish" }}
        >
          {c.title}
        </h1>
        <p className="max-w-2xl mt-8 text-base lg:text-xl opacity-65 leading-relaxed">{c.summary}</p>

        <div className="flex flex-wrap gap-4 mt-10">
          {c.liveUrl && (
            <a
              href={c.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase bg-[#EAB308] text-black px-5 py-3 hover:bg-yellow-400 transition-colors lg:text-sm"
            >
              Visit live site <span aria-hidden>↗</span>
            </a>
          )}
          {c.repoUrl && (
            <a
              href={c.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase border border-foreground/30 px-5 py-3 hover:border-[#EAB308] hover:text-[#EAB308] transition-colors lg:text-sm"
            >
              See the code <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </section>

      {/* Cover */}
      <section className="px-4 lg:px-14">
        <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-foreground/5 border border-foreground/10">
          <WorkCover study={c} priority />
        </div>
      </section>

      {/* Facts */}
      <section className="px-4 lg:px-14 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-foreground/10">
        <div>
          <Label>Client</Label>
          <p className="text-sm lg:text-base">{c.client}</p>
        </div>
        <div>
          <Label>Sector</Label>
          <p className="text-sm lg:text-base">{c.sector}</p>
        </div>
        <div>
          <Label>Services</Label>
          <ul className="text-sm flex flex-col gap-1 lg:text-base">
            {serviceNames.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="hover:text-[#EAB308] capitalize">
                  {s.title.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Label>Stack</Label>
          <p className="text-sm opacity-80 lg:text-base">{c.stack.join(" · ")}</p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 lg:px-14 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
        <Label>The challenge</Label>
        <p className="text-xl lg:text-3xl leading-snug">{c.challenge}</p>
      </section>

      <section className="px-4 lg:px-14 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
        <Label>How we approached it</Label>
        <ol className="flex flex-col">
          {c.approach.map((a, i) => (
            <li key={i} className="flex gap-6 py-5 border-t border-foreground/10">
              <span className="text-2xl leading-none opacity-20 w-10 flex-shrink-0" style={{ fontFamily: "borish" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base lg:text-lg opacity-80 leading-relaxed">{a}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-4 lg:px-14 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
        <Label>What we shipped</Label>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.built.map((b) => (
            <li key={b} className="text-sm opacity-80 border-l-2 border-[#EAB308] pl-4 py-1 lg:text-base">
              {b}
            </li>
          ))}
        </ul>
      </section>

      {c.outcomes.length > 0 && (
        <section className="px-4 lg:px-14 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <Label>Results</Label>
          <ul className="flex flex-col gap-4">
            {c.outcomes.map((o) => (
              <li key={o} className="text-2xl lg:text-3xl leading-snug">
                {o}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Next */}
      <section className="border-t border-foreground/10">
        <Link href={`/work/${next.slug}`} className="group block px-4 lg:px-14 py-16 lg:py-24">
          <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-4 lg:text-[13px]">Next project</p>
          <p
            className="text-[clamp(2.5rem,8vw,110px)] leading-none group-hover:text-[#EAB308] transition-colors"
            style={{ fontFamily: "borish" }}
          >
            {next.client} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-3">→</span>
          </p>
        </Link>
      </section>
    </main>
  );
}
