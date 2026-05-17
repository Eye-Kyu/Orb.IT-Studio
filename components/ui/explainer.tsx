"use client";
import { useEffect, useRef } from "react";
import { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface OrbyProps {
  children: ReactNode;
}

export default function Orby({ children }: OrbyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wordInners =
        containerRef.current?.querySelectorAll<HTMLElement>(".word-inner");
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
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const text = typeof children === "string" ? children.trim() : null;
  const words = text ? text.split(/\s+/) : null;

  return (
    <div
      ref={containerRef}
      className="relative flex-col space-y-12 box-border text-center lg:min-h-[60vh] h-fit w-full landingly-mobile px-4 md:py-8 lg:px-0"
    >
      <p className="text-2xl sm:text-3xl pt-0 mt-0 text-center lg:pt-24 lg:px-20 lg:text-5xl xl:text-6xl font-light lg:leading-normal w-full alternate-heading">
        {words
          ? words.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom mr-[0.2em] last:mr-0"
              >
                <span className="word-inner inline-block">{word}</span>
              </span>
            ))
          : children}
      </p>
    </div>
  );
}
