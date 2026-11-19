import Link from "next/link";
import { caseStudies } from "@/lib/work-data";
import WorkCard from "./work-card";

export default function FeaturedWork({ limit = 4 }: { limit?: number }) {
  const featured = caseStudies.filter((c) => c.featured).slice(0, limit);

  return (
    <div className="px-4 lg:px-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase opacity-40 mb-4 lg:text-[13px]">Selected work</p>
          <h2 className="text-[clamp(2.5rem,7vw,96px)] leading-[0.92]" style={{ fontFamily: "borish" }}>
            PROOF, NOT PROMISES.
          </h2>
        </div>
        <Link
          href="/work"
          className="text-xs tracking-[0.22em] uppercase border-b border-foreground/30 pb-1 w-fit hover:border-[#EAB308] hover:text-[#EAB308] transition-colors lg:text-sm"
        >
          All work →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {featured.map((c, i) => (
          <WorkCard key={c.slug} study={c} index={i} />
        ))}
      </div>
    </div>
  );
}
