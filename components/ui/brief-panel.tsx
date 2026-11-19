"use client";
import { AnimatePresence, motion } from "framer-motion";
import { estimateBrief, formatWeeks } from "@/lib/brief";
import { getCaseStudiesForService } from "@/lib/work-data";
import Link from "next/link";

const FIT_COLOR: Record<string, string> = {
  great: "#14b8a6",
  phased: "#EAB308",
  tight: "#f97316",
  open: "currentColor",
};

export default function BriefPanel({
  services,
  budget,
  timeline,
}: {
  services: string[];
  budget: string;
  timeline: string;
}) {
  const est = estimateBrief(services, budget, timeline);
  const related = Array.from(
    new Map(
      est.services.flatMap((s) => getCaseStudiesForService(s.slug)).map((c) => [c.slug, c])
    ).values()
  ).slice(0, 2);

  return (
    <section
      aria-live="polite"
      aria-label="Your project brief"
      className="border border-foreground/15 rounded-sm p-5 lg:p-6 flex flex-col gap-5"
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[10px] tracking-[0.22em] uppercase opacity-50 lg:text-[13px]">Your brief, live</p>
        <p className="text-[10px] tracking-[0.18em] uppercase opacity-35 lg:text-[13px]">Indicative · not a quote</p>
      </div>

      {est.services.length === 0 ? (
        <p className="text-sm opacity-55 leading-relaxed lg:text-base">
          Pick the services you need above. We&apos;ll sketch a timeline and the phases we&apos;d go
          through — before you&apos;ve even hit send.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1 lg:text-[13px]">Delivery</p>
              <p className="text-3xl leading-none" style={{ fontFamily: "borish" }}>
                {formatWeeks(est.weeks)}
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-1 lg:text-[13px]">Fit</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={est.fitMessage}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm leading-snug lg:text-base"
                  style={{ color: FIT_COLOR[est.fit] }}
                >
                  {est.fitMessage}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-2 lg:text-[13px]">How we&apos;d run it</p>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs opacity-70 lg:text-sm">
              {est.phases.map((p, i) => (
                <li key={p} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="opacity-40">→</span>}
                  {p}
                </li>
              ))}
            </ol>
          </div>

          {related.length > 0 && (
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-40 mb-2 lg:text-[13px]">Similar work</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-1">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/work/${c.slug}`}
                      target="_blank"
                      className="text-xs underline underline-offset-4 decoration-foreground/30 hover:text-[#EAB308] lg:text-sm"
                    >
                      {c.client}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-[11px] opacity-40 lg:text-[13px]">
            We&apos;ll email you a copy of this brief when you send your message.
          </p>
        </>
      )}
    </section>
  );
}
