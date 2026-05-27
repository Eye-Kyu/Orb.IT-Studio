"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  {
    name: "CRAFT",
    description: "We sweat the details others skip.",
  },
  {
    name: "CLARITY",
    description: "Complex ideas, communicated simply.",
  },
  {
    name: "COURAGE",
    description: "We challenge briefs, not just fulfil them.",
  },
  {
    name: "CARE",
    description: "Every project is treated like it's our own.",
  },
];

export default function AgencyValues() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".av-label",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      containerRef.current
        ?.querySelectorAll<HTMLElement>(".av-row")
        .forEach((row) => {
          gsap.fromTo(
            row,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 0.95,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: row,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="px-4 lg:px-14 py-16 lg:py-24">
      <p className="av-label text-[10px] tracking-[0.25em] uppercase opacity-40 mb-10">
        What We Stand For
      </p>

      <div className="flex flex-col">
        {VALUES.map((value) => (
          <div
            key={value.name}
            className="av-row border-t border-foreground/10 last:border-b last:border-b-foreground/10 flex flex-col lg:flex-row lg:items-baseline gap-3 lg:gap-0 py-6 lg:py-8"
          >
            {/* value name */}
            <h3
              className="text-4xl lg:text-6xl leading-none flex-shrink-0 lg:w-2/5"
              style={{ fontFamily: "borish" }}
            >
              {value.name}
              <span className="text-[#EAB308] ml-2 text-2xl lg:text-3xl align-middle">
                ·
              </span>
            </h3>

            {/* description */}
            <p className="text-base lg:text-xl opacity-50 lg:ml-auto lg:w-1/2 leading-snug">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
