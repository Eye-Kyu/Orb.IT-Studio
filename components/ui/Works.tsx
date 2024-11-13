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
        "We set ourself apart with a unique blend of artistic design, technical expertise, and a client-focused approach. Viewing web design as an immersive brand experience, We prioritize personalization over templates, ensuring each project reflects the your voice and resonates with your target audiences. By utilizing the latest design trends and technologies, from responsive layouts to interactive features, we create visually stunning, highly functional websites. Our collaborative process, which emphasizes close client engagement, guarantees that each site aligns with brand identity and adapts to evolving business goals. This commitment to quality and user-centric design has positioned Yogi Studio as a leader in crafting memorable digital experiences that effectively connect brands with their audiences.",
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
        "We offer graphic design services that combine creativity, precision, and strategic insight to bring brands to life visually. Our approach centers on crafting designs that not only look stunning but also communicate a brand’s message clearly and effectively. From custom illustrations and typography to layout design and color schemes, we tailor each element to reflect the unique identity of our clients. We prioritize collaboration, working closely with clients to understand their goals and preferences, ensuring each design aligns with their vision and resonates with their target audience. Whether it’s for print, digital, or social media, our graphic design services are crafted to make a memorable impact and support cohesive brand storytelling. Through our dedication to quality, personalization, and client partnership, we help brands stand out with visuals that captivate and connect.",
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
        "We specialize in branding, bringing a unique blend of creativity, strategy, and precision to each project. Our approach to branding is rooted in understanding the essence of a brand and translating it into a powerful, cohesive identity that resonates with target audiences. Rather than relying on templates, we tailor each branding package to reflect the distinct voice, vision, and goals of our clients. From logo design and typography to color schemes and messaging, we ensure every element speaks to the brand’s character and purpose. By collaborating closely with our clients, we build a partnership that shapes the creative process, guaranteeing that the final brand identity aligns with the client’s vision and adapts to future growth. Through this client-focused and strategic approach, we empower brands to stand out, tell their story effectively, and leave a lasting impression in the minds of their audience.",
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
        "We specialize in mobile app development, creating apps that are not only functional but also engaging and user-friendly. Our approach combines cutting-edge technology with thoughtful design, ensuring each app offers an intuitive experience that aligns with our clients’ brand values and objectives. From concept to launch, we work closely with clients to understand their needs, tailoring each app’s features, interface, and flow to provide a seamless user experience. Our team prioritizes performance, security, and scalability, designing apps that are ready to adapt as the brand grows. By focusing on innovation and usability, we build mobile apps that stand out in the market, helping clients connect with their audience in a meaningful, lasting way.",
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
        "We offer IT consulting services designed to help businesses leverage technology for growth and efficiency. We focus on understanding our clients' unique needs and challenges, delivering tailored solutions that align with their goals. From optimizing existing systems to implementing new technologies, we work closely with clients to streamline processes, enhance cybersecurity, and ensure scalability. Our team stays current on industry trends and best practices, providing strategic insights that drive innovation and resilience in an ever-evolving tech landscape. With a commitment to reliability and partnership, we empower businesses to adapt, grow, and succeed with technology that works for them.",
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
        "We provide digital marketing services that drive brand growth and connect businesses with their audience effectively. We develop tailored strategies that combine data-driven insights with creative content, ensuring each campaign reflects our clients' unique goals and brand voice. From social media management and SEO to targeted ads and content creation, we use a multi-channel approach to maximize reach and engagement. By working closely with clients, we adapt our strategies to their evolving needs, delivering results that increase visibility, attract leads, and foster customer loyalty. Through our expertise in digital marketing, we help brands stand out, grow, and achieve lasting success online.",
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
        "We offer support and maintenance services to ensure that our clients’ digital platforms run smoothly and efficiently. We understand that consistent performance and quick resolution of issues are essential for a successful online presence, so we provide proactive monitoring, timely updates, and responsive troubleshooting. Our team works closely with clients to understand their specific needs, offering customized support plans that include everything from software updates to performance optimizations. By staying ahead of potential issues and maintaining open communication, we ensure our clients can focus on their business goals with confidence. With our commitment to reliability and client satisfaction, we keep digital platforms secure, up-to-date, and ready to perform at their best.",
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
    <div className="container">
      <div className="row">
        {works.map((work, index) => (
          <div key={index} className="col-lg-4 col-md-6  w-screen">
            <div className="work-item flex flex-col items-center justify-center mt-16 mb-12">
              <div className="work-info flex-col  placecenter ">
                <h3 className="text-5xl lg:text-7xl lg:w-4/5 placecenter mb-9 text-center w-2/3">
                  {work.service}
                </h3>
                <div className="m-services flex flex-col lg:flex-row w-screen">
                  <div className=" flex flex-col h-auto lg:w-3/5 w-screen">
                    <p className="text-left lg:text-center text-xl mx-7 lg:mx-12">
                      {work.description}
                    </p>
                    <section className=" placecenter flex gap-2 flex-wrap relative my-9">
                      {work.subservices &&
                        work.subservices.map((subservice, index) => (
                          <Button key={index}>{subservice}</Button>
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
