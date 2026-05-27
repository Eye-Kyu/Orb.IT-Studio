"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Approaches = [
  {
    Method: "CLOUD TO GROUND",
    Description:
      "At Studio Mizan, we view problems as untapped opportunities. This means holding the bigger picture and the fine details in focus simultaneously — seeing the forest and every single tree. We zoom out to find the highest-leverage opportunities, then zoom in to execute with precision.",
  },
  {
    Method: "STRUCTURED PROBLEM SOLVING",
    Description:
      "Complexity doesn't intimidate us — it interests us. We break hard problems into manageable parts, apply proven frameworks, and move methodically toward solutions that last. No guesswork. No shortcuts. Just clear thinking and clean execution.",
  },
  {
    Method: "VISIONING",
    Description:
      "We help you find the balance between ambition and achievability. Not every big idea is right for right now — and not every 'realistic' plan is ambitious enough. We work with you to define where you're going and build the bridge to get there.",
  },
];

export default function Approach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      containerRef.current
        ?.querySelectorAll<HTMLElement>(".approach-row")
        .forEach((row) => {
          gsap.fromTo(
            row,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              ease: "power3.out",
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
    <div ref={containerRef} className="px-4 lg:px-14 py-8 lg:py-16">
      {Approaches.map((item, index) => {
        const isOpen = openIndex === index;
        const num = String(index + 1).padStart(2, "0");

        return (
          <div
            key={index}
            className="approach-row border-t border-foreground/10 last:border-b last:border-b-foreground/10"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full flex items-center gap-6 py-6 lg:py-8 text-left group"
              aria-expanded={isOpen}
            >
              {/* number */}
              <span
                className="text-[2.5rem] lg:text-[3.5rem] leading-none opacity-[0.08] flex-shrink-0 w-14 lg:w-20 transition-opacity duration-300 group-hover:opacity-20"
                style={{ fontFamily: "borish" }}
                aria-hidden
              >
                {num}
              </span>

              {/* title */}
              <span
                className={`flex-1 text-2xl lg:text-4xl leading-tight transition-colors duration-300 ${
                  isOpen ? "text-[#EAB308]" : "group-hover:text-[#EAB308]/70"
                }`}
                style={{ fontFamily: "borish" }}
              >
                {item.Method}
              </span>

              {/* toggle icon */}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`text-2xl leading-none flex-shrink-0 transition-colors duration-300 ${
                  isOpen ? "text-[#EAB308]" : "opacity-40"
                }`}
                aria-hidden
              >
                +
              </motion.span>
            </button>

            {/* expanded description */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 lg:pb-10 pl-20 lg:pl-32 text-base lg:text-lg opacity-55 leading-relaxed max-w-2xl">
                    {item.Description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
