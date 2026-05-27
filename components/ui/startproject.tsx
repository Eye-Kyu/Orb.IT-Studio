"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator, Flex } from "@radix-ui/themes";
import ServiceSelector from "./service-selector";

gsap.registerPlugin(ScrollTrigger);

export default function Startproject() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sp-label",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".sp-heading",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".sp-selector",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sp-selector",
            start: "top 88%",
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

      <div className="px-4 lg:px-14 py-12 lg:py-20">
        {/* service selector */}
        <div className="sp-selector mb-12 lg:mb-20">
          <ServiceSelector />
        </div>

        {/* CTA heading */}
        <div className="project placecenter flex-col">
          <p className="sp-label text-xs tracking-[0.25em] uppercase opacity-50">
            START A
          </p>
          <h2
            className="sp-heading mt-8 lg:mt-16 text-4xl sm:text-5xl text-center lg:text-8xl"
            style={{ fontFamily: "borish" }}
          >
            NEW PROJECT
          </h2>
        </div>
      </div>

      <Flex direction="column" gap="4">
        <Separator color="yellow" orientation="horizontal" size="4" />
      </Flex>
    </div>
  );
}
