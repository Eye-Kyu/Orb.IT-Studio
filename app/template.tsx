"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

// Module-level flag: the very first page load renders fully visible (good for
// SEO, no-JS and slow devices); only client-side navigations after that animate.
let hasNavigated = false;

// Re-mounts on every navigation, giving each page a short, consistent entrance.
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const [animate] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      initial={animate && !reduce ? { opacity: 0, y: 14 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
