"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator, Flex } from "@radix-ui/themes";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { target: 4, suffix: "+", label: "Years" },
  { target: 50, suffix: "+", label: "Projects" },
  { target: 7, suffix: "", label: "Services" },
  { target: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function AgencyStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Set final values immediately without animation
      elRefs.current.forEach((el, i) => {
        if (el) el.textContent = `${STATS[i].target}${STATS[i].suffix}`;
      });
      return;
    }

    const ctx = gsap.context(() => {
      STATS.forEach((stat, i) => {
        const el = elRefs.current[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}${stat.suffix}`;
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.fromTo(
        ".as-label",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Flex direction="column" gap="4">
        <Separator color="yellow" orientation="horizontal" size="4" />
      </Flex>

      <div className="grid grid-cols-2 lg:grid-cols-4 px-4 lg:px-14 py-10 lg:py-12 gap-8 lg:gap-0">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col lg:border-r border-foreground/10 lg:last:border-r-0 lg:pr-8 lg:first:pl-0"
          >
            <span
              className="text-[clamp(2.5rem,5vw,64px)] leading-none"
              style={{ fontFamily: "borish" }}
              ref={(el) => {
                elRefs.current[i] = el;
              }}
            >
              0{stat.suffix}
            </span>
            <span className="as-label text-[10px] tracking-[0.25em] uppercase opacity-40 mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <Flex direction="column" gap="4">
        <Separator color="yellow" orientation="horizontal" size="4" />
      </Flex>
    </div>
  );
}
