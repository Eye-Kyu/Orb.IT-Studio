"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Wider scatter — cards reach well into the text column (intentional overlap)
const SCATTER = [
  { x: -260, y: -90, rotation: 25, zIndex: 10 },
  { x: 160, y: -70, rotation: -18, zIndex: 10 },
  { x: -180, y: 110, rotation: 22, zIndex: 10 },
  { x: 190, y: 60, rotation: -28, zIndex: 10 },
  { x: -40, y: 160, rotation: 10, zIndex: 10 },
];

// Converge to centred pile in the right image column
const STACK = [
  { x: -20, y: -12, rotation: 14 },
  { x: 14, y: 10, rotation: -10 },
  { x: -6, y: -16, rotation: 6 },
  { x: 10, y: 8, rotation: -16 },
  { x: 0, y: 0, rotation: 0 },
];

interface Divisions {
  heading: string;
  children: ReactNode;
}

export default function Madividi({ heading, children }: Divisions) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards =
        imagesRef.current?.querySelectorAll<HTMLElement>(".gallery-card");
      if (!cards?.length) return;

      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          x: SCATTER[i].x,
          y: SCATTER[i].y,
          rotation: SCATTER[i].rotation,
          zIndex: SCATTER[i].zIndex,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% bottom", // fires when 20% of the component is visible at the bottom
          end: "80% top",      // ends when 80% has scrolled past the top (20% still showing)
          scrub: 1,
        },
      });

      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            x: STACK[i].x,
            y: STACK[i].y,
            rotation: STACK[i].rotation,
            duration: 3,
            ease: "power2.inOut",
          },
          i * 0.05,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full min-h-[70vh] px-4 lg:px-0">
      {/*
        Text column — covers 67% (8/12) of the screen on desktop.
        No explicit z-index so images can overlay it freely.
      */}
      <div className="relative w-full lg:w-8/12 flex flex-col justify-center py-12 lg:py-24 lg:pl-8 lg:pr-4">
        <h2 className="headish text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-8">
          {heading}
        </h2>
        <p className="text-lg lg:text-2xl lg:leading-snug">{children}</p>
      </div>

      {/*
        Image column — absolute on desktop, anchored to the right edge.
        7/12 wide so it starts at ~42% from the left, overlapping the text.
        z-10 puts cards above text; scatter positions extend further left
        into the text zone.  On mobile falls back to normal flow below text.
      */}
      <div
        ref={imagesRef}
        className="relative h-64 mt-16 w-full
                   lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-7/12 lg:mt-0 lg:z-10"
      >
        <Image
          className="gallery-card"
          src="/branding-image.jpg"
          alt="Branding"
          width={300}
          height={670}
          style={{ width: 160, height: 210, objectFit: "cover" }}
        />
        <Image
          className="gallery-card"
          src="/static/Web-Design.png"
          alt="Web Design"
          width={250}
          height={770}
          style={{ width: 160, height: 210, objectFit: "cover" }}
        />
        <Image
          className="gallery-card"
          src="/static/Product-Design.jpg"
          alt="Product Design"
          width={250}
          height={770}
          style={{ width: 160, height: 210, objectFit: "cover" }}
        />
        <Image
          className="gallery-card"
          src="/static/graphic-design.png"
          alt="Graphic Design"
          width={250}
          height={770}
          style={{ width: 160, height: 210, objectFit: "cover" }}
        />
        <Image
          className="gallery-card"
          src="/static/web-dev.png"
          alt="Web Dev"
          width={250}
          height={770}
          style={{ width: 160, height: 210, objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
