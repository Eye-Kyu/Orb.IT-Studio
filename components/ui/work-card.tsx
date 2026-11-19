import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/work-data";

export function WorkCover({ study, priority = false }: { study: CaseStudy; priority?: boolean }) {
  if (study.image) {
    // The screenshot sits like a browser window rising out of a panel in the
    // client's own brand colour, so every project brings its colour to the page.
    return (
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 15% 0%, rgba(255,255,255,0.18) 0%, transparent 55%), ${study.accent}`,
        }}
      >
        <div className="absolute left-[7%] right-[7%] top-[11%] bottom-0 overflow-hidden rounded-t-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out group-hover:-translate-y-2">
          <Image
            src={study.image}
            alt={`${study.client} website`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    );
  }
  return (
    <div
      className="absolute inset-0 flex items-end p-6"
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${study.accent}55 0%, transparent 60%), linear-gradient(160deg, ${study.accent} 0%, #0a0a0a 100%)`,
      }}
    >
      <span
        className="text-white/90 text-[clamp(2rem,5vw,56px)] leading-none"
        style={{ fontFamily: "borish" }}
      >
        {study.client}
      </span>
    </div>
  );
}

export default function WorkCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Link href={`/work/${study.slug}`} className="work-card group flex flex-col gap-4">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-foreground/5">
        <WorkCover study={study} priority={index < 2} />
        <span className="absolute top-3 left-3 text-[10px] tracking-[0.22em] uppercase bg-white/90 text-[#171717] px-2.5 py-1 rounded-full backdrop-blur-sm z-10 lg:text-[13px]">
          {study.sector}
        </span>
      </div>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase opacity-40 mb-1 lg:text-[13px]">
            {String(index + 1).padStart(2, "0")} · {study.client}
          </p>
          <h3 className="text-xl lg:text-2xl leading-tight group-hover:text-[#EAB308] transition-colors duration-200">
            {study.title}
          </h3>
        </div>
        <span
          aria-hidden
          className="text-xl mt-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          ↗
        </span>
      </div>
    </Link>
  );
}
