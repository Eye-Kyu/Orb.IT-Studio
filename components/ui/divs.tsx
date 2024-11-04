import "@radix-ui/themes/styles.css";
import Image from "next/image";
import { ReactNode } from "react";

interface Divisions {
  children: ReactNode;
}

export default function Madividi({ children }: Divisions) {
  return (
    <div className="services h-screen lg:flex lg:flex-row flex-col">
      <div className=" half-screen flex lg:w-2/4  lg:leading-12 lg:space-y-12 w-screen">
        <p className="  text-4xl">{children}</p>
      </div>

      <div className="images relative lg:h-72 lg:w-2/4 flex w-screen mt-28 lg:mt-0">
        <Image
          className="branding"
          src="/branding-image.jpg"
          alt="web design"
          width={400}
          height={670}
        />

        <Image
          className="web-design"
          src="/static/Web-Design.png"
          alt="web design"
          width={300}
          height={770}
        />
        <Image
          className="product-design"
          src="/static/Product-Design.jpg"
          alt="web design"
          width={300}
          height={770}
        />
        <Image
          className="graphic-design"
          src="/static/graphic-design.png"
          alt="web design"
          width={300}
          height={770}
        />
        <Image
          className="web-dev"
          src="/static/web-dev.png"
          alt="web design"
          width={300}
          height={770}
        />
      </div>
    </div>
  );
}
