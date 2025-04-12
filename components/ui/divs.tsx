import "@radix-ui/themes/styles.css";
import Image from "next/image";
import { ReactNode } from "react";

interface Divisions {
  children: ReactNode;
}

export default function Madividi({ children }: Divisions) {
  return (
    <div className="services h-screen lg:h-[50vh] lg:flex lg:flex-row flex-col w-screen">
      <div className=" half-screen flex lg:w-2/4 w-11/12  ">
        <p className="  text-lg text-wrap lg:text-2xl lg:leading-snug">
          {children}
        </p>
      </div>

      <div className="images relative lg:h-72 lg:w-2/4 flex w-screen mt-20 lg:mt-0">
        <Image
          className="lg:branding branding-mobile"
          src="/branding-image.jpg"
          alt="Branding"
          width={300}
          height={670}
        />

        <Image
          className="lg:web-design web-design-mobile"
          src="/static/Web-Design.png"
          alt="Web Design"
          width={250}
          height={770}
        />
        <Image
          className="lg:product-design product-design-mobile"
          src="/static/Product-Design.jpg"
          alt="Product Design"
          width={250}
          height={770}
        />
        <Image
          className="lg:graphic-design graphic-design-mobile"
          src="/static/graphic-design.png"
          alt="Graphic-Design"
          width={250}
          height={770}
        />
        <Image
          className="lg:web-dev web-dev-mobile "
          src="/static/web-dev.png"
          alt="Web-Dev"
          width={250}
          height={770}
        />
      </div>
    </div>
  );
}
