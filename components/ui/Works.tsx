import Image from "next/image";
import { Button } from "./button";

export default function Works() {
  const imageStyle = {
    borderTopRightRadius: "8%",
    borderBottomLeftRadius: "8%",
    border: "1px solid",
  };

  const works = [
    {
      service: "WEB DESIGN",
      description:
        "We build custom, mobile-friendly websites that are fast, functional, and SEO-ready. Our web design and development services in Kenya blend modern design with clean code to deliver high-performing websites tailored to your business goals. Whether you need a company site, portfolio, or e-commerce platform — we’ll help you stand out online.",
      img: (
        <Image
          src="/static/web-dev.png"
          alt="Web design"
          width="470"
          height="550"
          style={imageStyle}
        />
      ),
      subservices: [
        "E-commerce websites",
        "website redesign",
        "website development,",
        "UI/UX design",
        "website perfomance optimization",
      ],
    },
    {
      service: "GRAPHIC DESIGN",
      description:
        "Capture attention with professional graphic design services tailored to your brand. We create eye-catching designs for social media, marketing materials, packaging, and digital campaigns. Every design aligns with your goals and communicates your message clearly. Whether for print or digital, our visuals are crafted to boost engagement and leave a lasting impression.",
      img: (
        <Image
          src="/static/graphic-design.png"
          alt="Graphic Design"
          width="400"
          height="700"
          style={imageStyle}
        />
      ),
      subservices: ["LOGO Design", "Posters and Brochures", "Motion Graphics"],
    },
    {
      service: "BRANDING",
      description:
        "We specialize in creative brand design services that make your business unforgettable. From logo design to brand strategy, we develop cohesive visual identities that resonate with your audience and stand out in crowded markets. Whether you're launching a new venture or refreshing an old brand, we’ll make sure your brand speaks with clarity, style, and purpose.",
      img: (
        <Image
          src="/branding-image.jpg"
          alt="Branding"
          width="400"
          height="700"
          style={imageStyle}
        />
      ),
      subservices: [
        "Brand Identity",
        "Packaging design",
        "Visual identity",
        "Branding consulting",
        "Branding Strategy",
        "Motion Graphics",
      ],
    },
    {
      service: "APP DEVELOPMENT",
      description:
        "Turn ideas into reality with our mobile app development services for iOS and Android. We build scalable, user-friendly apps with modern UI/UX, backend support, and post-launch maintenance. Whether you're a startup or enterprise, our apps are designed to engage users, streamline services, and drive results.",
      img: (
        <Image
          src="/static/Web-Design.png"
          alt="App Development"
          width="400"
          height="700"
          style={imageStyle}
        />
      ),
      subservices: [
        "Android app development",
        "IOS app development",
        "Hybrid app development",
        "Web app development",
        "Software development",
      ],
    },
    {
      service: "IT CONSULTING",
      description:
        "Our expert IT consulting services in Kenya are designed to help businesses grow smarter. We offer cloud solutions, IT strategy, system integration, and digital transformation support. Whether you're a startup or scaling enterprise, we provide tailored technology consulting that improves performance, secures your systems, and accelerates success. Let us turn tech confusion into confident progress.",
      img: (
        <Image
          src="/static/Consultation.png"
          alt="IT Consultation Services"
          width="400"
          height="700"
          style={imageStyle}
        />
      ),
      subservices: ["Consultational Services", "Training and development"],
    },
    {
      service: "DIGITAL MARKETING",
      description:
        "Grow your business online with our results-driven digital marketing services in Kenya. From SEO and content creation to social media management and paid ads, we craft strategies that increase visibility, drive traffic, and convert leads. Data-backed, creative, and always audience-focused — we help you connect and convert where it matters most.",
      img: (
        <Image
          src="/static/digital-marketing.webp"
          alt="Digital Marketing"
          width="400"
          height="700"
          style={imageStyle}
        />
      ),
      subservices: [
        "Social media management",
        "Search engine optimization (SEO)",
        "Email marketing",
        "Paid advertising",
        "Content marketing",
        "Analytics and reporting",
        "Digital analytics and reporting",
        "Email marketing automation",
        "Website analytics and reporting",
      ],
    },
    {
      service: "SUPPORT AND MAINTENANCE",
      description:
        "Keep your website secure, updated, and running smoothly with our website support and maintenance services. We handle plugin updates, backups, bug fixes, and real-time monitoring — so you can focus on business while we handle the tech. Reliable, responsive, and peace-of-mind included.",
      img: (
        <Image
          src="/static/IT-Maintenance-Support.avif"
          alt="Support and Maintenance"
          width="500"
          height="700"
          style={imageStyle}
        />
      ),
      subservices: ["Troubleshooting"],
    },
    /* {
      service: "SEARCH ENGINE OPTIMIZATION (SEO)",
      description:
        "We specialize in Search Engine Optimization (SEO) to help clients enhance their online visibility and attract quality traffic. Our SEO approach combines in-depth keyword research, on-page optimization, content strategy, and technical improvements tailored to each client’s unique goals and industry. We work closely with clients to understand their audience and business objectives, implementing strategies that improve rankings and drive organic growth. From optimizing website structure to creating engaging, keyword-rich content, we ensure every element aligns with search engine best practices. With a commitment to measurable results and continuous improvement, we help brands increase their search presence, attract leads, and achieve long-term success online.",
      img: "",
    },
    */
  ];

  return (
    <div className="container ">
      <div className="row ">
        {works.map((work, index) => (
          <div key={index} className="col-lg-4 col-md-6 flex w-screen">
            <div className="work-item flex flex-col items-center justify-center mt-16 mb-12">
              <div className="work-info flex-col  placecenter ">
                <h3 className="text-5xl lg:text-6xl lg:w-4/5 placecenter mb-5 text-center w-2/3">
                  {work.service}
                </h3>
                <div className="m-services flex flex-col lg:flex-row w-screen">
                  <div className=" flex flex-col h-auto lg:w-3/5 w-screen">
                    <p className="text-left lg:text-right text-lg mx-7 lg:mx-12">
                      {work.description}
                    </p>
                    <section className=" placecenter flex gap-2 flex-wrap relative my-9">
                      {work.subservices &&
                        work.subservices.map((subservice, index) => (
                          <Button
                            className="border-black rounded-2xl hover:bg-yellow-600"
                            variant="outline"
                            size="sm"
                            key={index}
                          >
                            {subservice}
                          </Button>
                        ))}
                    </section>
                  </div>
                  <div className="flex w-screen lg:w-2/5 mb-4">
                    <div>{work.img} </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*

"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
const projects = [
  {
    title: "WEB DESIGN",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "/static/web-dev.png",
    color: "#5196fd",
  },
  {
    title: "GRAPHIC DESIGN",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.",
    src: "/static/graphic-design.png",
    color: "#8f89ff",
  },
  {
    title: "BRANDING",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.",
    src: "/branding-image.jpg",
    color: "#13006c",
  },
  {
    title: "APP DEVELOPMENT",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "/static/Web-Design.png",
    color: "#ed649e",
  },
  {
    title: "IT CONSULTING",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
    src: "/static/Consultation.png",
    color: "#fd521a",
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
    src: "/static/digital-marketing.webp",
    color: "#fd521a",
  },
  {
    title: "SUPPORT AND MAINTENANCE",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
    src: "/static/IT-Maintenance-Support.avif",
    color: "#fd521a",
  },
];
export default function Index(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main ref={container}>
        <>
          {/*   <section className="text-white  h-[70vh]  w-full bg-slate-950  grid place-content-center ">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Stacking Cards Using <br /> Framer-Motion. Scroll down! 👇
            </h1>
          </section>
          */
/*}
        </>

        <section className="text-white   w-full bg-slate-950  ">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.09;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                src={project?.src}
                title={project?.title}
                color={project?.color}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        <footer className="group bg-slate-950 ">
          <h1 className="text-[16vw]  translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear">
            ui-layout
          </h1>
          <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
        </footer>
      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}
export const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-[450px] w-[70%] rounded-md p-10 origin-top`}
      >
        <h2 className="text-2xl text-center font-semibold">{title}</h2>
        <div className={`flex h-full mt-5 gap-10`}>
          <div className={`w-[40%] relative top-[10%]`}>
            <p className="text-sm">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a
                href={"#"}
                target="_blank"
                className="underline cursor-pointer"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div
            className={`relative w-[60%] h-full rounded-lg overflow-hidden `}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image fill src={src} alt="image" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
*/
