"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { gsap } from "gsap";
import { services } from "@/lib/services-data";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const BUDGET_OPTIONS = [
  "Under KSh 50k",
  "KSh 50k – 150k",
  "KSh 150k – 500k",
  "KSh 500k – 1M",
  "KSh 1M+",
  "Let's discuss",
];

function FloatingLabel({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  return (
    <div
      className="relative"
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        setFocused(false);
        setFilled(!!(e.target as HTMLInputElement).value);
      }}
    >
      <motion.label
        htmlFor={id}
        animate={
          focused || filled
            ? { y: -18, scale: 0.78, color: focused ? "#EAB308" : "#888" }
            : { y: 0, scale: 1, color: "#888" }
        }
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="absolute left-0 top-2 text-sm origin-left pointer-events-none"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        {label}
        {required && <span className="text-[#EAB308] ml-0.5">*</span>}
      </motion.label>
      <div
        style={{
          borderBottom: `1px solid ${focused ? "#EAB308" : "#444"}`,
          transition: "border-color 0.2s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const preServices = searchParams.get("services")?.split(",").filter(Boolean) ?? [];

  const [selected, setSelected] = useState<Set<string>>(new Set(preServices));
  const formRef = useRef<HTMLDivElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [state, setState] = useState<ContactFormState | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    const fd = new FormData(e.currentTarget);
    fd.set("services", Array.from(selected).join(","));
    const result = await submitContactForm(null, fd);
    setState(result);
    setIsPending(false);
  }

  function toggle(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current!.querySelectorAll(".cf-field"),
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.07, delay: 0.4 }
      );
    }, formRef);

    return () => ctx.revert();
  }, []);

  if (state?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-6 py-12"
      >
        <h3
          className="text-[clamp(3rem,8vw,80px)] leading-none"
          style={{ fontFamily: "borish" }}
        >
          THANK YOU.
        </h3>
        <p className="text-base opacity-55 leading-relaxed max-w-sm">
          Your message is in. We'll get back to you within 24 hours — usually sooner.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase border-b border-foreground/30 pb-1 w-fit hover:border-[#EAB308] hover:text-[#EAB308] transition-colors duration-200"
        >
          ← Back to home
        </Link>
      </motion.div>
    );
  }

  return (
    <div ref={formRef}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10"
        noValidate
      >
        {/* row 1: name + email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="cf-field">
            <FloatingLabel id="name" label="Full Name" required>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={isPending}
                className="w-full bg-transparent pt-6 pb-2 text-sm outline-none"
              />
            </FloatingLabel>
          </div>
          <div className="cf-field">
            <FloatingLabel id="email" label="Email Address" required>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isPending}
                className="w-full bg-transparent pt-6 pb-2 text-sm outline-none"
              />
            </FloatingLabel>
          </div>
        </div>

        {/* row 2: company + referral */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="cf-field">
            <FloatingLabel id="company" label="Company / Organisation">
              <input
                id="company"
                name="company"
                type="text"
                disabled={isPending}
                className="w-full bg-transparent pt-6 pb-2 text-sm outline-none"
              />
            </FloatingLabel>
          </div>
          <div className="cf-field">
            <FloatingLabel id="referral" label="How did you hear about us?">
              <input
                id="referral"
                name="referral"
                type="text"
                disabled={isPending}
                className="w-full bg-transparent pt-6 pb-2 text-sm outline-none"
              />
            </FloatingLabel>
          </div>
        </div>

        {/* services pill select */}
        <div className="cf-field flex flex-col gap-3">
          <p className="text-[10px] tracking-[0.22em] uppercase opacity-40">
            Services interested in
          </p>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => {
              const isOn = selected.has(s.slug);
              return (
                <motion.button
                  key={s.slug}
                  type="button"
                  onClick={() => toggle(s.slug)}
                  disabled={isPending}
                  whileTap={{ scale: 0.96 }}
                  animate={isOn ? { scale: [1, 1.04, 1] } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  aria-pressed={isOn}
                  className={`text-[10px] tracking-wider uppercase px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                    isOn
                      ? "bg-[#EAB308] border-[#EAB308] text-white"
                      : "border-foreground/25 text-foreground/60 hover:border-[#EAB308]/60"
                  }`}
                >
                  {isOn && <span className="mr-1">✓</span>}
                  {s.title}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* budget dropdown */}
        <div className="cf-field">
          <label
            htmlFor="budget"
            className="block text-[10px] tracking-[0.22em] uppercase opacity-40 mb-3"
          >
            Budget Range
          </label>
          <div style={{ borderBottom: "1px solid #444" }}>
            <select
              id="budget"
              name="budget"
              disabled={isPending}
              defaultValue=""
              className="w-full bg-transparent pb-2 pt-1 text-sm outline-none appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Select a range
              </option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* message */}
        <div className="cf-field">
          <FloatingLabel id="message" label="Your Message" required>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={isPending}
              className="w-full bg-transparent pt-6 pb-2 text-sm outline-none resize-none"
            />
          </FloatingLabel>
        </div>

        {/* error */}
        <AnimatePresence>
          {state?.error && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-red-500"
            >
              {state.error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* submit */}
        <div className="cf-field">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-3 text-xs tracking-[0.22em] uppercase border border-foreground/30 px-6 py-3 hover:border-[#EAB308] hover:text-[#EAB308] transition-all duration-250 disabled:opacity-40 disabled:pointer-events-none"
          >
            {isPending ? (
              <>
                <span className="w-3 h-3 border border-current rounded-full border-t-transparent animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className="text-base">→</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
