"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DARK_SWAP: Record<string, string> = {
  "#f7f4ee": "#1a1814",
  "#ffffff": "#1c1c1e",
  "#0f0f0d": "#0d0d0d",
};

export default function ScrollColorProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isDark = () => document.documentElement.classList.contains("dark");

    const sections = document.querySelectorAll<HTMLElement>("[data-section-bg]");

    sections.forEach((el) => {
      const lightColor = el.dataset.sectionBg!;
      const darkColor = DARK_SWAP[lightColor] ?? lightColor;

      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 60%",
        onEnter: () => {
          const color = isDark() ? darkColor : lightColor;
          gsap.to("body", { backgroundColor: color, duration: 0.7, ease: "power2.inOut" });
          if (lightColor === "#0f0f0d") {
            document.body.classList.add("section-dark");
          }
        },
        onEnterBack: () => {
          const color = isDark() ? darkColor : lightColor;
          gsap.to("body", { backgroundColor: color, duration: 0.7, ease: "power2.inOut" });
          if (lightColor === "#0f0f0d") {
            document.body.classList.add("section-dark");
          }
        },
        onLeave: () => {
          if (lightColor === "#0f0f0d") {
            document.body.classList.remove("section-dark");
          }
        },
        onLeaveBack: () => {
          if (lightColor === "#0f0f0d") {
            document.body.classList.remove("section-dark");
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
