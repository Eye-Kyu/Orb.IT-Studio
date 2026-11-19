import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getServiceBySlug, getRelatedServices, services } from "@/lib/services-data";
import ServiceHero from "@/components/ui/service-hero";
import ServiceProcessSection from "@/components/ui/service-process";
import ServiceSelector from "@/components/ui/service-selector";
import WorkCard from "@/components/ui/work-card";
import { getCaseStudiesForService } from "@/lib/work-data";
import JsonLd from "@/components/ui/json-ld";
import { breadcrumbSchema, serviceSchema, titleCase } from "@/lib/seo";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  const name = titleCase(service.title);
  return {
    title: `${name} in Nairobi, Kenya`,
    description: service.description,
    openGraph: {
      title: `${name} in Nairobi | Studio Mizani`,
      description: service.tagline,
      url: `https://studiomizani.com/solutions/${service.slug}`,
    },
    alternates: {
      canonical: `https://studiomizani.com/solutions/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug, 3);
  const work = getCaseStudiesForService(service.slug).slice(0, 2);

  return (
    <main id="main" className="w-full overflow-x-hidden">
      <JsonLd data={serviceSchema(service.slug)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: titleCase(service.title), path: `/solutions/${service.slug}` },
        ])}
      />
      {/* 1 — Hero */}
      <ServiceHero service={service} />

      {/* 2 — What We Do */}
      <section className="px-4 lg:px-14 py-16 lg:py-24 border-b border-foreground/10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* pull quote */}
          <div className="lg:w-2/5">
            <p
              className="text-3xl lg:text-4xl leading-tight"
              style={{ fontFamily: "borish" }}
            >
              {service.tagline}
            </p>
          </div>

          {/* description + subservices */}
          <div className="lg:w-3/5 flex flex-col gap-7">
            <p className="text-base lg:text-lg leading-relaxed opacity-70">
              {service.description}
            </p>

            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-3 lg:text-[13px]">
                Included
              </p>
              <div className="flex flex-wrap gap-2" id="subservices">
                {service.subservices.map((sub) => (
                  <span
                    key={sub}
                    className="text-xs tracking-wider uppercase border border-foreground/25 rounded-full px-3.5 py-1.5 hover:border-[#EAB308]/60 hover:text-[#EAB308] transition-colors duration-200 cursor-default lg:text-sm"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Process */}
      <div className="border-b border-foreground/10">
        <ServiceProcessSection steps={service.process} />
      </div>

      {/* 3b — Proof: case studies that used this service */}
      {work.length > 0 && (
        <section className="px-4 lg:px-14 py-16 lg:py-24 border-b border-foreground/10">
          <div className="flex items-end justify-between gap-6 mb-10">
            <p className="text-xs tracking-[0.25em] uppercase opacity-40 lg:text-sm">
              {service.title.toLowerCase()} in the wild
            </p>
            <Link href="/work" className="text-xs tracking-[0.22em] uppercase opacity-60 hover:opacity-100 hover:text-[#EAB308] lg:text-sm">
              All work →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {work.map((c, i) => (
              <WorkCard key={c.slug} study={c} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* 4 — Related Services */}
      <section className="px-4 lg:px-14 py-16 lg:py-24 border-b border-foreground/10">
        <p className="text-xs tracking-[0.25em] uppercase opacity-40 mb-8 lg:text-sm">
          Other Services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-foreground/10">
          {related.map((rel, index) => (
            <Link
              key={rel.slug}
              href={`/solutions/${rel.slug}`}
              className="group relative overflow-hidden border border-foreground/10 flex flex-col min-h-[260px] p-6 hover:border-[#EAB308]/60 transition-colors duration-300"
            >
              <span
                className="text-[4rem] leading-none opacity-[0.05] absolute top-3 left-4 pointer-events-none"
                style={{ fontFamily: "borish" }}
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-2xl lg:text-3xl mt-auto mb-2 group-hover:text-[#EAB308] transition-colors duration-300"
                style={{ fontFamily: "borish" }}
              >
                {rel.title}
              </h3>
              <p className="text-xs opacity-45 lg:text-sm">{rel.tagline}</p>
              <span className="text-[10px] tracking-widest uppercase text-[#EAB308] opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-4 lg:text-[13px]">
                View →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5 — Service CTA */}
      <section className="px-4 lg:px-14 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20">
          {/* heading */}
          <div className="lg:w-2/5">
            <p className="text-xs tracking-[0.25em] uppercase opacity-40 mb-4 lg:text-sm">
              Interested?
            </p>
            <h2
              className="text-4xl lg:text-6xl leading-tight"
              style={{ fontFamily: "borish" }}
            >
              Let&apos;s build something with{" "}
              <span className="text-[#EAB308]">{service.title}</span>
            </h2>
          </div>

          {/* selector */}
          <div className="lg:w-3/5">
            <ServiceSelector preSelected={service.slug} />
          </div>
        </div>
      </section>
    </main>
  );
}
