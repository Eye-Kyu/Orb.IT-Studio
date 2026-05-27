"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

const imageStyle = {
  borderTopRightRadius: "8%",
  borderBottomLeftRadius: "8%",
  objectFit: "cover" as const,
};

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      containerRef.current
        ?.querySelectorAll<HTMLElement>(".work-card")
        .forEach((card) => {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-foreground/10">
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const num = String(index + 1).padStart(2, "0");

          return (
            <Link
              key={service.slug}
              href={`/solutions/${service.slug}`}
              className="work-card group relative overflow-hidden border border-foreground/10 flex flex-col min-h-[420px] lg:min-h-[480px] p-6 lg:p-8 transition-colors duration-300 hover:border-[#EAB308]/60"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* service number background */}
              <span
                className="text-[5rem] lg:text-[6rem] leading-none font-bold opacity-[0.06] select-none absolute top-4 left-5 pointer-events-none"
                style={{ fontFamily: "borish" }}
                aria-hidden
              >
                {num}
              </span>

              {/* top row: number label + arrow */}
              <div className="flex items-center justify-between mb-auto z-10">
                <span className="text-xs tracking-[0.2em] uppercase opacity-40">
                  {num}
                </span>
                <motion.span
                  animate={{ x: isHovered ? 0 : -8, opacity: isHovered ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  className="text-[#EAB308] text-xl"
                  aria-hidden
                >
                  →
                </motion.span>
              </div>

              {/* title */}
              <h3
                className="text-3xl lg:text-4xl leading-tight mt-8 mb-3 z-10 transition-colors duration-300 group-hover:text-[#EAB308]"
                style={{ fontFamily: "borish" }}
              >
                {service.title}
              </h3>

              {/* tagline */}
              <p className="text-sm opacity-50 z-10 mb-5 leading-snug">
                {service.tagline}
              </p>

              {/* subservice pills */}
              <div className="flex flex-wrap gap-1.5 z-10 mb-4">
                {service.subservices.slice(0, 3).map((sub) => (
                  <span
                    key={sub}
                    className="text-[10px] tracking-wider uppercase border border-foreground/20 rounded-full px-2.5 py-0.5 opacity-60"
                  >
                    {sub}
                  </span>
                ))}
                {service.subservices.length > 3 && (
                  <span className="text-[10px] tracking-wider uppercase border border-foreground/20 rounded-full px-2.5 py-0.5 opacity-40">
                    +{service.subservices.length - 3} more
                  </span>
                )}
              </div>

              {/* hover image reveal */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    key="img"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-0 pointer-events-none"
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        ...imageStyle,
                        mixBlendMode: "luminosity",
                        opacity: 0.18,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#EAB308]/10 to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* bottom: "View service" */}
              <motion.p
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
                transition={{ duration: 0.2 }}
                className="text-xs tracking-widest uppercase text-[#EAB308] z-10 mt-auto pt-4 border-t border-foreground/10"
              >
                View Service →
              </motion.p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
