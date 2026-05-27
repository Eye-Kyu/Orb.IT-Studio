"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator, Flex } from "@radix-ui/themes";

gsap.registerPlugin(ScrollTrigger);

const HEADING_LINES = ["LET'S BUILD", "SOMETHING."];

export default function Intouch() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      HEADING_LINES.forEach((_, i) => {
        gsap.fromTo(
          `.it-heading-${i}`,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.3,
            ease: "power4.inOut",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.fromTo(
        ".it-body",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".it-cta",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.5,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      <Flex direction="column" gap="4">
        <Separator color="yellow" orientation="horizontal" size="4" />
      </Flex>

      <div className="relative overflow-hidden px-4 lg:px-14 py-16 lg:py-24">
        {/* ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 w-2/3 h-2/3 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 90% 90%, rgba(241,90,34,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-20">
          {/* heading */}
          <div className="lg:w-1/2">
            {HEADING_LINES.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <h2
                  className={`it-heading-${i} text-[clamp(3rem,9vw,120px)] leading-[0.95] tracking-tight`}
                  style={{ fontFamily: "borish" }}
                >
                  {line}
                </h2>
              </div>
            ))}
          </div>

          {/* right: body + CTAs + email */}
          <div className="it-body lg:w-1/2 flex flex-col gap-8 lg:pb-3">
            <p className="text-base lg:text-lg opacity-55 leading-relaxed max-w-md">
              Have a project in mind? Want to learn more about what Studio Mizan
              can do for you? Reach out — we&apos;d love to hear from you.
            </p>

            {/* CTA links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solutions"
                className="it-cta inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase border-b border-foreground/30 pb-1 hover:border-[#EAB308] hover:text-[#EAB308] transition-colors duration-250"
              >
                Start a Project
                <span className="text-base">→</span>
              </Link>
              <Link
                href="/contact"
                className="it-cta inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase border-b border-foreground/30 pb-1 hover:border-[#EAB308] hover:text-[#EAB308] transition-colors duration-250"
              >
                Send a Message
                <span className="text-base">→</span>
              </Link>
            </div>

            {/* email */}
            <a
              href="mailto:hello@studiomizan.com"
              className="text-sm text-teal-600 hover:text-teal-500 tracking-wide transition-colors duration-200"
            >
              hello@studiomizan.com
            </a>
          </div>
        </div>
      </div>

      <Flex direction="column" gap="4">
        <Separator color="yellow" orientation="horizontal" size="4" />
      </Flex>
    </div>
  );
}
