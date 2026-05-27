"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = ["STUDIO", "MIZAN"];

function splitChars(text: string) {
  return text.split("").map((char, i) => (
    <span key={i} className="ah-char inline-block">
      {char}
    </span>
  ));
}

export default function AgencyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // top bar fade
      gsap.fromTo(
        ".ah-topbar",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.05 }
      );

      // character entrance
      gsap.fromTo(
        ".ah-char",
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.018,
          delay: 0.2,
        }
      );

      // tagline
      gsap.fromTo(
        ".ah-tagline",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.85 }
      );

      // bottom rule
      gsap.fromTo(
        ".ah-rule",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.2, ease: "power3.inOut", delay: 0.15 }
      );

      // scroll indicator loop
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 1.4,
            ease: "power2.inOut",
            delay: 1.3,
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
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 75% 25%, rgba(1,66,56,0.14) 0%, transparent 68%), radial-gradient(ellipse 40% 35% at 15% 85%, rgba(241,90,34,0.08) 0%, transparent 60%)",
        }}
      />

      {/* top bar */}
      <div className="ah-topbar flex items-center justify-between px-4 lg:px-14 pt-8 lg:pt-12 text-[10px] tracking-[0.25em] uppercase opacity-40">
        <span>Nairobi, Kenya</span>
        <span>Est. 2020</span>
      </div>

      {/* headline */}
      <div className="flex flex-col px-4 lg:px-14 flex-1 justify-center py-8">
        {HEADLINE.map((line, i) => (
          <div key={i} className="overflow-hidden leading-none">
            <h1
              className="text-[clamp(4.5rem,14vw,180px)] leading-[0.92] tracking-tight"
              style={{ fontFamily: "borish" }}
            >
              {splitChars(line)}
            </h1>
          </div>
        ))}
      </div>

      {/* bottom: tagline + scroll indicator */}
      <div className="px-4 lg:px-14 pb-10 lg:pb-14 flex items-end justify-between">
        <p className="ah-tagline text-base lg:text-lg opacity-50 leading-snug max-w-xs">
          Engineers. Designers.<br />
          Builders of tomorrow.
        </p>

        {/* scroll indicator */}
        <div className="hidden lg:flex flex-col items-center gap-2 opacity-35">
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

      {/* bottom rule */}
      <div className="ah-rule w-full h-px bg-foreground/10" />
    </div>
  );
}
