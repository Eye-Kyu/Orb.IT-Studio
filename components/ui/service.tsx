/*
"use client";
import "@radix-ui/themes/styles.css";
import Subtopic from "./subheader";
import { Separator, Flex } from "@radix-ui/themes";

export default function Services({ ...props }) {
  <Flex direction="column" gap="4">
    <Separator orientation="horizontal" size="1" />
    <Separator orientation="horizontal" size="2" />
    <Separator orientation="horizontal" size="3" />
    <Separator orientation="horizontal" size="4" />
  </Flex>;

  const Maservices = [
    {
      id: "1",
      Solution: "IT Consulting Services",
    },
    {
      id: "2",
      Solution: "Brand Design",
    },
    {
      id: "3",
      Solution: "Graphic Design",
    },
    {
      id: "4",
      Solution: "Digital Marketing",
    },
    {
      id: "5",
      Solution: "Support & Maintenance",
    },
    {
      id: "6",
      Solution: "Web Design & Development",
    },
    {
      id: "7",
      Solution: "Mobile App Development",
    },
    {
      id: "8",
      Solution: "Search Engine Optimisation",
    },
  ];
  return (
    <div className="services flex-col relative">
      <div className="w-screen block placecenter lg:my-0 my-5">
        <Subtopic>What Do We Do. . .</Subtopic>
      </div>

      <div className="flex flex-col lg:space-y-11 space-y-6">
        <div className="flex-col flex">
          <ul {...props} className="h-auto lg:h-screen flex-col ">
            {Maservices.map((service) => (
              <li
                key={service.id}
                className="cursor-pointer hover:text-teal-700 h-20 justify-center items-center"
              >
                <div className="lg:text-3xl">
                  <Flex direction="column" gap="4">
                    <Separator orientation="horizontal" size="4" />

                    <p className="lg:text-5xl text-2xl">{service.Solution}</p>
                  </Flex>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
*/
"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Subtopic from "./subheader";

export const HoverImageLinks = () => {
  return (
    <div>
      <div className="w-screen block placecenter lg:my-0 my-5">
        <Subtopic>What Do We Do. . .</Subtopic>
      </div>

      <section className="p-4 md:p-8">
        <div className="mx-auto max-w-5xl">
          <Link
            heading="IT Consulting Services"
            subheading="weaving technology’s threads into a seamless fabric, guiding businesses through the digital maze toward clarity, growth, and transformation"
            imgSrc="/static/Consultation.png"
            href="#"
          />
          <Link
            heading="Brand Design"
            subheading="Weaving identity into every thread, branding tells the story that lingers, the mark that’s unforgettable."
            imgSrc="/branding-image.jpg"
            href="#"
          />
          <Link
            heading="Graphic Design"
            subheading="Shaping colors and forms into silent storytellers, graphic design speaks louder than words, leaving an indelible imprint."
            imgSrc="/static/graphic-design.png"
            href="#"
          />
          <Link
            heading="Digital Marketing"
            subheading="Casting a net of creativity and strategy, digital marketing reaches hearts and minds, bringing brands to life across the boundless digital sea."
            imgSrc="/static/digital-marketing.webp"
            href="#"
          />
          <Link
            heading="Support & Maintenance"
            subheading="The silent guardians of technology, IT support stands ready, resolving, restoring, and empowering every click and keystroke."
            imgSrc="/static/IT-Maintenance-Support.avif"
            href="#"
          />
          <Link
            heading="Web Design & Development"
            subheading="Weaving identity into every thread, branding tells the story that lingers, the mark that’s unforgettable."
            imgSrc="/static/web-dev.png"
            href="#"
          />
          <Link
            heading="Mobile App Development"
            subheading="Breathing life into ideas, app development builds bridges between dreams and users, one intuitive touch at a time."
            imgSrc="/static/Web-Design.png"
            href="#"
          />
        </div>
      </section>
    </div>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.055,
            delayChildren: 0.18,
          }}
          className="relative heada z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-teal-600 md:text-6xl mix-blend-difference"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative para z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-100 mix-blend-difference">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-sm object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-teal-400" />
      </motion.div>
    </motion.a>
  );
};
