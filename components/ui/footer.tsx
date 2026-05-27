"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@radix-ui/themes";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Agency", href: "/agency" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/studiomizan" },
  { label: "Instagram", href: "https://www.instagram.com/studiomizan" },
  { label: "TikTok", href: "https://www.tiktok.com/@studiomizan" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ft-brand",
        { clipPath: "inset(0 100% 0 0)", transformOrigin: "left center" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        ".ft-col",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.3,
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        ".ft-bottom",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.7,
          delay: 0.5,
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="w-full">
      <Separator color="yellow" orientation="horizontal" size="4" />

      <div className="px-4 lg:px-14 pt-12 pb-8 lg:pt-16 lg:pb-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0">
          {/* Left — identity */}
          <div className="ft-col lg:w-2/5 flex flex-col gap-6">
            <div className="ft-brand overflow-hidden">
              <h2
                className="text-3xl lg:text-4xl leading-none tracking-tight"
                style={{ fontFamily: "borish" }}
              >
                STUDIO MIZAN
              </h2>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm opacity-50">Nairobi, Kenya</p>
              <p className="text-xs opacity-30">Est. 2020 · Working globally</p>
            </div>

            {/* availability status */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-xs opacity-55">Open to new projects</p>
            </div>

            <a
              href="mailto:hello@studiomizan.com"
              className="text-sm text-teal-600 hover:text-teal-500 transition-colors duration-200 w-fit"
            >
              hello@studiomizan.com
            </a>
          </div>

          {/* Right — nav + socials */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 lg:ml-auto">
            {/* Navigate */}
            <div className="ft-col flex flex-col gap-4">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-35 mb-1">
                Navigate
              </p>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-55 hover:opacity-100 hover:text-[#EAB308] transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Connect */}
            <div className="ft-col flex flex-col gap-4">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-35 mb-1">
                Connect
              </p>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-55 hover:opacity-100 hover:text-[#EAB308] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ft-bottom mt-12 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs opacity-30">
            &copy; {new Date().getFullYear()} Studio Mizan. All rights reserved.
          </p>
          <p className="text-xs opacity-25">Crafted in Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
