"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Quote } from "lucide-react";

// Internal MagnetLines component
const MagnetLines = ({
  rows = 9,
  columns = 9,
  containerSize = "80vmin",
  lineColor = "#efefef",
  lineWidth = "1vmin",
  lineHeight = "6vmin",
  baseAngle = -10,
  className = "",
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll("span");

    const onPointerMove = (pointer: { x: number; y: number }) => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r =
          ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty("--rotate", `${r}deg`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className="block origin-center"
      style={
        {
          backgroundColor: lineColor,
          width: lineWidth,
          height: lineHeight,
          "--rotate": `${baseAngle}deg`,
          transform: "rotate(var(--rotate))",
          willChange: "transform",
        } as React.CSSProperties
      }
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`grid place-items-center ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      {spans}
    </div>
  );
};

// Testimonial data
const testimonials = [
  {
    id: 1,
    content:
      "The attention to detail and innovative approach sets them apart. Absolutely outstanding work!",
    author: "Sarah Chen",
    role: "Product Director, Innovatech",
  },
  {
    id: 2,
    content:
      "Their creative solutions transformed our business. The results speak for themselves.",
    author: "Marcus Rodriguez",
    role: "CEO, TechFlow Systems",
  },
  {
    id: 3,
    content:
      "A game-changing partnership that elevated our entire digital presence.",
    author: "Emily Watson",
    role: "Marketing Lead, DigitalFirst",
  },
];

const MagneticTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-[50vh] w-full bg-gray-200-400 text-black overflow-hidden">
      {/* Interactive background */}
      <div className="absolute inset-0 opacity-30">
        <MagnetLines
          containerSize="100%"
          lineColor="#539faf"
          lineWidth="0.5vmin"
          lineHeight="4vmin"
          rows={12}
          columns={12}
          baseAngle={-45}
        />
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="mx-auto mb-4 w-12 h-5 text-black" />

          {/* Testimonial content */}
          <div className="space-y-2">
            <p className="text-base md:text-4xl font-light leading-relaxed">
              {testimonials[activeIndex].content}
            </p>

            <div className="mt-1">
              <p className="font-semibold text-xl">
                {testimonials[activeIndex].author}
              </p>
              <p className="text-black">{testimonials[activeIndex].role}</p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-yellow-600 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagneticTestimonials;
