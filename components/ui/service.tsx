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
      <div className="w-full block placecenter lg:my-0 my-5">
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
import { useMotionValue, motion, useSpring } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Subtopic from "./subheader";

export const HoverImageLinks = () => {
  return (
    <div>
      <div className="w-full block placecenter lg:my-0 my-5">
        <Subtopic>What Do We Do. . .</Subtopic>
      </div>

      <section className="p-4 md:p-8">
        <div className="mx-auto max-w-4xl">
          <Link
            heading="IT Consulting Services"
            subheading="weaving technology’s threads into a seamless fabric, guiding businesses through the digital maze toward clarity, growth, and transformation"
            imgSrc="/static/Consultation.png"
            href="/solutions/it-consulting"
          />
          <Link
            heading="Brand Design"
            subheading="Weaving identity into every thread, branding tells the story that lingers, the mark that’s unforgettable."
            imgSrc="/branding-image.jpg"
            href="/solutions/branding"
          />
          <Link
            heading="Graphic Design"
            subheading="Shaping colors and forms into silent storytellers, graphic design speaks louder than words, leaving an indelible imprint."
            imgSrc="/static/graphic-design.png"
            href="/solutions/graphic-design"
          />
          <Link
            heading="Digital Marketing"
            subheading="Casting a net of creativity and strategy, digital marketing reaches hearts and minds, bringing brands to life across the boundless digital sea."
            imgSrc="/static/digital-marketing.webp"
            href="/solutions/digital-marketing"
          />
          <Link
            heading="Support & Maintenance"
            subheading="The silent guardians of technology, IT support stands ready, resolving, restoring, and empowering every click and keystroke."
            imgSrc="/static/IT-Maintenance-Support.avif"
            href="/solutions/support-maintenance"
          />
          <Link
            heading="Web Design & Development"
            subheading="Weaving identity into every thread, branding tells the story that lingers, the mark that’s unforgettable."
            imgSrc="/static/web-dev.png"
            href="/solutions/web-design"
          />
          <Link
            heading="Mobile App Development"
            subheading="Breathing life into ideas, app development builds bridges between dreams and users, one intuitive touch at a time."
            imgSrc="/static/Web-Design.png"
            href="/solutions/app-development"
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

  const imgX = useMotionValue(0);
  const imgY = useMotionValue(0);

  const springX = useSpring(imgX, { stiffness: 250, damping: 25 });
  const springY = useSpring(imgY, { stiffness: 250, damping: 25 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const rect = ref.current!.getBoundingClientRect();
    imgX.set(e.clientX - rect.left);
    imgY.set(e.clientY - rect.top);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      layout
      className="group relative flex items-center justify-between border-b-[1px] border-neutral-700 py-2 transition-colors duration-500 hover:border-teal-500 md:py-8"
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
          className="relative para block lg:text-5xl font-thin text-gray-800 tracking-tight transition-colors duration-500 group-hover:text-teal-600 md:text-6xl mix-blend-difference"
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

        <motion.div
          variants={{
            initial: { height: 0, opacity: 0 },
            whileHover: { height: "auto", opacity: 1 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="overflow-hidden"
        >
          <span className="relative z-[1] para mt-2 block text-base text-gray-600 mix-blend-darken">
            {subheading}
          </span>
        </motion.div>
      </div>

      <motion.img
        style={{
          top: springY,
          left: springX,
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
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4 flex flex-col items-center gap-1 text-teal-500 shrink-0"
      >
        <ArrowRight size={28} strokeWidth={1.5} />
        <span className="text-xs tracking-widest uppercase">Learn more</span>
      </motion.div>
    </motion.a>
  );
};
