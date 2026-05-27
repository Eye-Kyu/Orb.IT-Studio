import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getServiceBySlug, getRelatedServices, services } from "@/lib/services-data";
import ServiceHero from "@/components/ui/service-hero";
import ServiceProcessSection from "@/components/ui/service-process";
import ServiceSelector from "@/components/ui/service-selector";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Studio Mizan`,
      description: service.tagline,
      url: `https://studiomizan.com/solutions/${service.slug}`,
    },
    alternates: {
      canonical: `https://studiomizan.com/solutions/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug, 3);

  return (
    <main className="w-full overflow-x-hidden">
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
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-3">
                Included
              </p>
              <div className="flex flex-wrap gap-2" id="subservices">
                {service.subservices.map((sub) => (
                  <span
                    key={sub}
                    className="text-xs tracking-wider uppercase border border-foreground/25 rounded-full px-3.5 py-1.5 hover:border-[#EAB308]/60 hover:text-[#EAB308] transition-colors duration-200 cursor-default"
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

      {/* 4 — Related Services */}
      <section className="px-4 lg:px-14 py-16 lg:py-24 border-b border-foreground/10">
        <p className="text-xs tracking-[0.25em] uppercase opacity-40 mb-8">
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
              <p className="text-xs opacity-45">{rel.tagline}</p>
              <span className="text-[10px] tracking-widest uppercase text-[#EAB308] opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-4">
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
            <p className="text-xs tracking-[0.25em] uppercase opacity-40 mb-4">
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
