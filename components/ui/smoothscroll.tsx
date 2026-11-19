"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

// Keeps ScrollTrigger's scroll position in sync with Lenis virtual scroll.
function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}

function SmoothScroll({ children }: SmoothScrollProps) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Native scrolling for people who've asked for less motion.
  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        syncTouch: true,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
