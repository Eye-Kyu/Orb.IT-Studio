"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator, Flex } from "@radix-ui/themes";

gsap.registerPlugin(ScrollTrigger);

export default function Startproject() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

      // "NEW PROJECT" wipes in left-to-right
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
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      <div className="min-h-[16rem] h-auto">
        <Flex direction="column" gap="4">
          <Separator color="yellow" orientation="horizontal" size="4" />
        </Flex>
        <div className="project placecenter flex-col mt-9">
          <p className="sp-label">START A</p>
          <h2 className="sp-heading mt-8 lg:mt-16 text-4xl sm:text-5xl text-center lg:text-8xl headish">
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
