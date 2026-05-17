"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE_LINES = ["THE FUTURE", "HAPPENING TODAY"];

export default function SolutionsLanding() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sl-headline",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".sl-subtext",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".sl-subtext",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="solutions-landingly w-full min-h-screen flex justify-between relative"
    >
      <div className="uppertext tracking-wider pt-7 flex-col items-center justify-center w-full sm:w-2/5">
        {HEADLINE_LINES.map((line, i) => (
          <div key={i} className="overflow-hidden">
            <h2 className="sl-headline lg:text-8xl text-5xl">{line}</h2>
          </div>
        ))}
      </div>

      <div className="lowertext absolute flex-col self-end right-0 mb-24 lg:mb-20 lg:w-1/4 w-full sm:w-2/3 px-4 sm:px-0">
        <p className="sl-subtext text-xl">We are all about taking</p>
        <p className="sl-subtext text-xl">your business to the next level</p>
      </div>
    </div>
  );
}
