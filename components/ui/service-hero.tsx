"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Service } from "@/lib/services-data";

gsap.registerPlugin(ScrollTrigger);

interface ServiceHeroProps {
  service: Service;
}

function splitChars(text: string) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="sh-char inline-block"
      style={{ whiteSpace: char === " " ? "pre" : undefined }}
    >
      {char}
    </span>
  ));
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // breadcrumb
      gsap.fromTo(
        ".sh-breadcrumb",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.1 }
      );

      // character entrance
      gsap.fromTo(
        ".sh-char",
        { yPercent: 120, opacity: 0 },
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
        ".sh-tagline",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.7 }
      );

      // image parallax on scroll
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[85vh] lg:min-h-screen flex flex-col justify-end overflow-hidden bg-background"
    >
      {/* ambient teal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 20%, rgba(1,66,56,0.15) 0%, transparent 65%)",
        }}
      />

      {/* service image — top right */}
      <div
        ref={imgRef}
        className="absolute top-0 right-0 w-2/5 lg:w-1/3 h-full pointer-events-none overflow-hidden"
        style={{ maskImage: "linear-gradient(to left, black 50%, transparent 100%)" }}
      >
        <Image
          src={service.img}
          alt={service.title}
          fill
          priority
          sizes="33vw"
          style={{ objectFit: "cover", opacity: 0.35 }}
        />
      </div>

      {/* content */}
      <div className="relative z-10 px-4 lg:px-14 pb-12 lg:pb-20 pt-32 lg:pt-40 flex flex-col gap-6">
        {/* breadcrumb */}
        <nav className="sh-breadcrumb flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase opacity-40">
          <Link href="/solutions" className="hover:opacity-100 transition-opacity">
            Solutions
          </Link>
          <span>/</span>
          <span className="opacity-100 text-foreground">{service.title}</span>
        </nav>

        {/* title */}
        <div className="overflow-hidden">
          <h1
            className="text-[clamp(2.8rem,11vw,150px)] leading-[1] tracking-tight"
            style={{ fontFamily: "borish" }}
          >
            {splitChars(service.title)}
          </h1>
        </div>

        {/* tagline */}
        <p className="sh-tagline text-lg lg:text-2xl opacity-55 max-w-lg leading-snug">
          {service.tagline}
        </p>
      </div>

      {/* bottom rule */}
      <div className="w-full h-px bg-foreground/10" />
    </div>
  );
}
