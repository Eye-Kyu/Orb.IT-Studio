"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isTouch = useRef(false);

  const springConfig = { mass: 0.4, stiffness: 150, damping: 18 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      isTouch.current = true;
      return;
    }

    document.documentElement.style.cursor = "none";

    const moveDot = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], .work-card")) {
        setHovered(true);
      }
    };

    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", moveDot);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", moveDot);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [visible, x, y]);

  if (isTouch.current) return null;

  return (
    <>
      {/* dot — no spring, exact position */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-foreground pointer-events-none z-[9999]"
        style={{
          translateX: x,
          translateY: y,
          marginLeft: "-4px",
          marginTop: "-4px",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* ring — spring lag */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-foreground/40 pointer-events-none z-[9998]"
        style={{
          translateX: x,
          translateY: y,
          opacity: visible ? 1 : 0,
          width: hovered ? "56px" : "28px",
          height: hovered ? "56px" : "28px",
          marginLeft: hovered ? "-28px" : "-14px",
          marginTop: hovered ? "-28px" : "-14px",
          backgroundColor: hovered ? "rgba(234,179,8,0.1)" : "transparent",
          borderColor: hovered ? "#EAB308" : undefined,
          transition: "width 0.25s ease, height 0.25s ease, margin 0.25s ease, background-color 0.25s ease, border-color 0.25s ease",
        }}
      />
    </>
  );
}
