"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE_LINES = ["THE FUTURE", "HAPPENING TODAY"];

const STATS = [
  { value: "7", label: "Services" },
  { value: "50+", label: "Projects" },
  { value: "4+", label: "Years" },
];

function splitChars(text: string) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="sl-char inline-block"
      style={{ whiteSpace: char === " " ? "pre" : undefined }}
    >
      {char}
    </span>
  ));
}

export default function SolutionsLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // label fade
      gsap.fromTo(
        ".sl-label",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );

      // character-split headline
      gsap.fromTo(
        ".sl-char",
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power4.out",
          stagger: 0.025,
        }
      );

      // stats strip
      gsap.fromTo(
        ".sl-stat",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".sl-stats",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      // subtext
      gsap.fromTo(
        ".sl-subtext",
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.55,
        }
      );

      // scroll indicator line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 1.4,
            ease: "power2.inOut",
            delay: 1.2,
            repeat: -1,
            yoyo: true,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="solutions-landingly w-full min-h-screen flex flex-col justify-between relative overflow-hidden"
    >
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(1,66,56,0.13) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 20% 80%, rgba(241,90,34,0.07) 0%, transparent 60%)",
        }}
      />

      {/* top section */}
      <div className="flex flex-col px-4 lg:px-14 pt-10 lg:pt-16 flex-1">
        <p className="sl-label text-xs tracking-[0.25em] uppercase font-satoshi opacity-50 mb-8">
          Studio Mizan / Solutions
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-0">
          {/* headline */}
          <div className="flex flex-col">
            {HEADLINE_LINES.map((line, i) => (
              <div key={i} className="overflow-hidden leading-none">
                <h1
                  className="sl-line text-[clamp(3.2rem,10vw,130px)] tracking-tight leading-[1.05]"
                  style={{ fontFamily: "borish" }}
                >
                  {splitChars(line)}
                </h1>
              </div>
            ))}
          </div>

          {/* subtext — right side */}
          <div className="lg:w-1/4 lg:pb-3 space-y-1">
            <p className="sl-subtext text-base lg:text-lg text-muted-foreground leading-snug">
              We take your business
            </p>
            <p className="sl-subtext text-base lg:text-lg text-muted-foreground leading-snug">
              to the next level — and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* bottom strip: stats + scroll indicator */}
      <div className="sl-stats flex items-end justify-between px-4 lg:px-14 pb-10 lg:pb-14 mt-16 lg:mt-0">
        <div className="flex gap-10 lg:gap-16">
          {STATS.map((stat, i) => (
            <div key={i} className="sl-stat flex flex-col">
              <span
                className="text-4xl lg:text-5xl leading-none"
                style={{ fontFamily: "borish" }}
              >
                {stat.value}
              </span>
              <span className="text-xs tracking-widest uppercase opacity-50 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* scroll indicator */}
        <div className="hidden lg:flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 mb-3">
            scroll
          </span>
          <div
            ref={lineRef}
            className="w-px h-12 bg-current"
            style={{ transformOrigin: "top center" }}
          />
        </div>
      </div>
    </div>
  );
}
