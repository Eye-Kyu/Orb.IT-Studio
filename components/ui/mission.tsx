"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MISSION_TEXT =
  "To make the digital world more beautiful, thoughtful, and impactful.";

const BODY =
  "We are a team of passionate engineers, designers, and creatives dedicated to creating groundbreaking digital experiences that make the world a better place.";

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const wordInners =
        containerRef.current?.querySelectorAll<HTMLElement>(".m-word-inner");
      if (!wordInners?.length) return;

      gsap.fromTo(
        wordInners,
        { yPercent: 80, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.035,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            scrub: 0.1,
            toggleActions: "play none none play",
          },
        }
      );

      gsap.fromTo(
        ".m-body",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".m-body",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".m-rule",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".m-rule",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const words = MISSION_TEXT.trim().split(/\s+/);

  return (
    <section
      ref={containerRef}
      className="px-4 lg:px-14 py-16 lg:py-24"
    >
      {/* word-by-word mission statement */}
      <p
        className="text-[clamp(1.8rem,4.5vw,68px)] leading-[1.15] font-light mb-12 lg:mb-16"
        style={{ fontFamily: "borish" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom mr-[0.22em] last:mr-0"
          >
            <span className="m-word-inner inline-block">{word}</span>
          </span>
        ))}
      </p>

      {/* horizontal rule */}
      <div className="m-rule w-full h-px bg-foreground/10 mb-10 lg:mb-14" />

      {/* two-column below */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* left: decorative label */}
        <div className="lg:w-1/3">
          <p className="text-[10px] tracking-[0.25em] uppercase opacity-35">
            Who We Are
          </p>
        </div>

        {/* right: body paragraph */}
        <p className="m-body lg:w-2/3 text-base lg:text-lg opacity-60 leading-relaxed max-w-2xl">
          {BODY}
        </p>
      </div>
    </section>
  );
}
