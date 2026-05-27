"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import ContactForm from "./contact-form";

const HERO_LINES = ["SAY", "HELLO."];

function splitChars(text: string) {
  return text.split("").map((char, i) => (
    <span key={i} className="ch-char inline-block">
      {char}
    </span>
  ));
}

const NEXT_STEPS = [
  "We read your message",
  "We respond within 24h",
  "We get to work",
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/studiomizan" },
  { label: "Instagram", href: "https://www.instagram.com/studiomizan" },
  { label: "TikTok", href: "https://www.tiktok.com/@studiomizan" },
];

export default function ContactHeroAndLayout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // label
      gsap.fromTo(
        ".ch-label",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out", delay: 0.05 }
      );

      // character entrance
      gsap.fromTo(
        ".ch-char",
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power4.out",
          stagger: 0.022,
          delay: 0.15,
        }
      );

      // rules
      gsap.fromTo(
        ".ch-rule",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.1, ease: "power3.inOut", delay: 0.1, stagger: 0.15 }
      );

      // left info items
      gsap.fromTo(
        ".ch-info-item",
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.55,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* ── Hero ── */}
      <section className="relative px-4 lg:px-14 pt-10 lg:pt-16 pb-8 lg:pb-12 min-h-[50vh] flex flex-col justify-between overflow-hidden">
        {/* ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 70% 20%, rgba(1,66,56,0.12) 0%, transparent 65%), radial-gradient(ellipse 40% 35% at 20% 80%, rgba(241,90,34,0.07) 0%, transparent 60%)",
          }}
        />

        <p className="ch-label text-[10px] tracking-[0.25em] uppercase opacity-40 mb-6">
          Studio Mizan / Contact
        </p>

        <div className="ch-rule w-full h-px bg-foreground/10 mb-8" />

        <div className="flex flex-col">
          {HERO_LINES.map((line, i) => (
            <div key={i} className="overflow-hidden leading-none">
              <h1
                className="text-[clamp(4rem,13vw,160px)] leading-[0.9] tracking-tight"
                style={{ fontFamily: "borish" }}
              >
                {splitChars(line)}
              </h1>
            </div>
          ))}
        </div>

        <div className="ch-rule w-full h-px bg-foreground/10 mt-8" />
      </section>

      {/* ── Two-column ── */}
      <section className="px-4 lg:px-14 py-12 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left: info panel */}
        <aside className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start flex flex-col gap-10">
          {/* reach us */}
          <div className="ch-info-item flex flex-col gap-1">
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-35 mb-2">
              Reach Us
            </p>
            <a
              href="mailto:hello@studiomizan.com"
              className="text-sm text-teal-600 hover:text-teal-500 transition-colors duration-200"
            >
              hello@studiomizan.com
            </a>
          </div>

          {/* location */}
          <div className="ch-info-item flex flex-col gap-1">
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-35 mb-2">
              Where
            </p>
            <p className="text-sm opacity-60">Nairobi, Kenya</p>
            <p className="text-xs opacity-35">Working globally</p>
          </div>

          {/* what happens next */}
          <div className="ch-info-item flex flex-col gap-4">
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-35">
              What Happens Next
            </p>
            {NEXT_STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="text-2xl leading-none opacity-[0.08] flex-shrink-0 w-8"
                  style={{ fontFamily: "borish" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm opacity-55 leading-snug pt-0.5">{step}</p>
              </div>
            ))}
          </div>

          {/* socials */}
          <div className="ch-info-item flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.25em] uppercase opacity-35 mb-1">
              Follow Us
            </p>
            <div className="flex gap-6">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wider uppercase opacity-50 hover:opacity-100 hover:text-[#EAB308] transition-all duration-200"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Right: form */}
        <div className="lg:w-3/5">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
