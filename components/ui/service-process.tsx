"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServiceProcess } from "@/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

interface ServiceProcessProps {
  steps: ServiceProcess[];
}

export default function ServiceProcessSection({ steps }: ServiceProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sp-section-label",
        { opacity: 0, y: 12 },
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
        ?.querySelectorAll<HTMLElement>(".process-step")
        .forEach((step, i) => {
          gsap.fromTo(
            step,
            { x: i % 2 === 0 ? -40 : 40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power3.out",
              scrollTrigger: {
                trigger: step,
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
      <p className="sp-section-label text-xs tracking-[0.25em] uppercase opacity-40 mb-10">
        Our Process
      </p>

      {/* desktop: horizontal timeline | mobile: vertical stack */}
      <div className="hidden lg:grid gap-0 border-t border-foreground/10" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
        {steps.map((step) => (
          <div
            key={step.step}
            className="process-step border-r border-foreground/10 last:border-r-0 pt-8 pr-8 pb-6"
          >
            <span
              className="block text-[4rem] leading-none opacity-[0.07] mb-4"
              style={{ fontFamily: "borish" }}
            >
              {String(step.step).padStart(2, "0")}
            </span>
            <h4
              className="text-xl mb-3"
              style={{ fontFamily: "borish" }}
            >
              {step.heading}
            </h4>
            <p className="text-sm opacity-55 leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>

      {/* mobile: vertical */}
      <div className="flex flex-col divide-y divide-foreground/10 lg:hidden">
        {steps.map((step) => (
          <div key={step.step} className="process-step py-7 flex gap-6">
            <span
              className="text-[2.5rem] leading-none opacity-[0.1] flex-shrink-0 w-12"
              style={{ fontFamily: "borish" }}
            >
              {String(step.step).padStart(2, "0")}
            </span>
            <div>
              <h4
                className="text-lg mb-2"
                style={{ fontFamily: "borish" }}
              >
                {step.heading}
              </h4>
              <p className="text-sm opacity-55 leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
