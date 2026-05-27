"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services-data";

interface ServiceSelectorProps {
  preSelected?: string;
}

export default function ServiceSelector({ preSelected }: ServiceSelectorProps) {
  const [selected, setSelected] = useState<Set<string>>(
    preSelected ? new Set([preSelected]) : new Set()
  );

  function toggle(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  }

  const queryString = Array.from(selected).join(",");
  const ctaHref = selected.size > 0 ? `/contact?services=${queryString}` : "#";

  return (
    <div className="w-full">
      <p className="text-xs tracking-[0.25em] uppercase opacity-50 mb-5">
        What do you need?
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {services.map((service) => {
          const isSelected = selected.has(service.slug);
          return (
            <motion.button
              key={service.slug}
              onClick={() => toggle(service.slug)}
              whileTap={{ scale: 0.96 }}
              animate={
                isSelected
                  ? { scale: [1, 1.05, 1] }
                  : { scale: 1 }
              }
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              aria-pressed={isSelected}
              className={`
                relative text-xs lg:text-sm tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-250 cursor-pointer
                ${
                  isSelected
                    ? "bg-[#EAB308] border-[#EAB308] text-white"
                    : "border-foreground/25 text-foreground/70 hover:border-[#EAB308]/60 hover:text-foreground"
                }
              `}
            >
              {isSelected && (
                <motion.span
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mr-1.5 inline-block"
                >
                  ✓
                </motion.span>
              )}
              {service.title}
            </motion.button>
          );
        })}
      </div>

      {/* selected summary + CTA */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <motion.div
          animate={{ opacity: selected.size > 0 ? 1 : 0.3 }}
          className="text-xs tracking-wide opacity-50 flex-1"
        >
          {selected.size > 0 ? (
            <>
              Selected:{" "}
              <span className="opacity-100 text-foreground">
                {Array.from(selected)
                  .map(
                    (slug) =>
                      services.find((s) => s.slug === slug)?.title ?? slug
                  )
                  .join(", ")}
              </span>
            </>
          ) : (
            "Select one or more services above"
          )}
        </motion.div>

        <Link
          href={ctaHref}
          aria-disabled={selected.size === 0}
          tabIndex={selected.size === 0 ? -1 : undefined}
          className={`
            inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-250
            ${
              selected.size > 0
                ? "border-[#EAB308] text-[#EAB308] hover:bg-[#EAB308] hover:text-white"
                : "border-foreground/15 text-foreground/20 pointer-events-none"
            }
          `}
        >
          Get a Quote
          <span className="text-base leading-none">→</span>
        </Link>
      </div>
    </div>
  );
}
