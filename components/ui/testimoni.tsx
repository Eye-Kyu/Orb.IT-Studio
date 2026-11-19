"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  caseStudy?: string; // slug in lib/work-data.ts
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Great work, communication was timely and clear. I am in awe of the results. Highly recommend!",
    author: "Brian Mwangi",
    role: "Founder",
    company: "Mwakie Visuals",
    caseStudy: "mwakie-visuals",
  },
  {
    quote:
      "The Agency Creative has delivered brand design, video, photography, copy, and more — always with enthusiasm, care, and on-time, on-budget execution across all projects.",
    author: "Njoroge Muiruri",
    role: "Creative Executive",
    company: "Kyu.Firm",
  },
  {
    quote:
      "The Agency Creative brought our restaurant brand and website to life by truly understanding our vision. The final result exceeded expectations — professional, on point, and highly recommended.",
    author: "Kaggia Nganga",
    role: "Managing Director",
    company: "Hatespeare",
  },
];

const AUTOPLAY_MS = 8000;
const pad = (n: number) => String(n).padStart(2, "0");

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[index];

  const go = useCallback((i: number) => setIndex((i + total) % total), [total]);

  // Auto-advance, unless the visitor is reading (hover/focus) or prefers less motion.
  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, reduce, go]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") go(index + 1);
    if (e.key === "ArrowLeft") go(index - 1);
  };

  return (
    <section
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!sectionRef.current?.contains(e.relatedTarget as Node)) setPaused(false);
      }}
      onKeyDown={onKeyDown}
      className="relative overflow-hidden bg-[var(--brand-teal)] dark:bg-[#00342c] text-white px-4 lg:px-14"
    >
      {/* warm ember glow — echoes the hero gradient without competing with it */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-40 w-[560px] h-[560px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(241,90,34,0.45) 0%, transparent 65%)" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] relative gap-10 lg:gap-20 py-16 lg:py-24">
        {/* Left rail: label, counter, controls */}
        <div className="flex lg:flex-col justify-between gap-8">
          <div>
            <p className="text-[10px] lg:text-[13px] tracking-[0.25em] uppercase text-white/60 mb-4">
              Kind words
            </p>
            <p className="leading-none tabular-nums" style={{ fontFamily: "borish" }}>
              <span className="text-[clamp(3.5rem,7vw,96px)] text-[#EAB308]">{pad(index + 1)}</span>
              <span className="text-[clamp(1.5rem,2.5vw,36px)] text-white/35"> / {pad(total)}</span>
            </p>
          </div>

          <div className="flex items-end lg:items-start gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/30 flex items-center justify-center text-lg hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-[#004238] transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white/30 flex items-center justify-center text-lg hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-[#004238] transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Quote */}
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-10 -left-2 lg:-top-16 lg:-left-6 text-[clamp(8rem,16vw,220px)] leading-none text-[#EAB308]/30 select-none"
            style={{ fontFamily: "borish" }}
          >
            &ldquo;
          </span>

          <div aria-live="polite" className="relative min-h-[18rem] lg:min-h-[20rem]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}
                className="flex flex-col gap-10"
              >
                <blockquote className="text-[clamp(1.5rem,2.8vw,42px)] leading-[1.25] font-light max-w-4xl">
                  {t.quote}
                </blockquote>

                <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/15">
                  <span
                    aria-hidden
                    className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#EAB308] text-[#004238] flex items-center justify-center text-lg"
                    style={{ fontFamily: "borish" }}
                  >
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-base lg:text-lg">{t.author}</span>
                    <span className="text-xs lg:text-sm tracking-[0.18em] uppercase text-white/60">
                      {t.role} · {t.company}
                    </span>
                  </div>
                  {t.caseStudy && (
                    <Link
                      href={`/work/${t.caseStudy}`}
                      className="ml-auto text-xs lg:text-sm tracking-[0.2em] uppercase border-b pb-1 border-white/40 hover:border-[#EAB308] hover:text-[#EAB308] transition-colors"
                    >
                      See the project →
                    </Link>
                  )}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Progress segments — also act as direct navigation */}
          <div className="flex gap-2 mt-10" role="group" aria-label="Choose testimonial">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.author}
                type="button"
                onClick={() => go(i)}
                aria-label={`Testimonial from ${item.author}`}
                aria-current={i === index}
                className="group relative h-6 flex-1 max-w-[120px] flex items-center"
              >
                <span className="block w-full h-[2px] bg-white/20 overflow-hidden">
                  <span
                    key={i === index ? `active-${index}` : `idle-${i}`}
                    className="block h-full bg-[#EAB308] origin-left"
                    style={{
                      transform: i < index || (i === index && (reduce || paused)) ? "scaleX(1)" : "scaleX(0)",
                      animation:
                        i === index && !reduce && !paused
                          ? `testimonial-progress ${AUTOPLAY_MS}ms linear forwards`
                          : undefined,
                    }}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
