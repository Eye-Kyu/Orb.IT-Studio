//import Image from "next/image";
//import { Button } from "@/components/ui/button";

import "@radix-ui/themes/styles.css";

import Orby from "@/components/ui/explainer";
import Subtopic from "@/components/ui/subheader";
//import Titros from "@/components/ui/details";
import MarqueeDemo from "@/components/ui/marquee";
import Madividi from "@/components/ui/divs";
import Centertext from "@/components/ui/centrewriting";
import Miniservices from "@/components/ui/mini-services";
import { HoverImageLinks } from "@/components/ui/service";
import Landingpage from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="h-auto w-screen">
      <Landingpage>MAKE WAVES...NOT RIPPLES </Landingpage>

      <Orby>
        A Digital Design and Tech Studio based in Nairobi. We build brands,
        create digital experiences and shape the stories of Tommorrow.
      </Orby>

      <div className="lg:landingly landingly">
        <Subtopic>JOIN OUR CREATIVE JOURNEY</Subtopic>
        <Madividi>
          Discover how <span className="underlining">YOGI.Studio</span> can
          transform your projects with our innovative designs. Lets create
          something amazing together!!
        </Madividi>

        <HoverImageLinks />

        <div className=" flex flex-col w-screen h-92 overflow-x-hidden space-y-12 lg:mt-8">
          <Subtopic>LEAVING LASTING IMPRESSIONS</Subtopic>

          <div className="relative w-8/12 ml-20 h-3/4">
            <MarqueeDemo />
          </div>
        </div>

        <div className="placecenter w-screen  relative flex-col mb-12 space-y-8 mt-12">
          <Subtopic>CONNECT WITH US</Subtopic>
          <Centertext>
            Reach out to Yogi.studio for Enquiries, collabrations or support. We
            are here here to help you achieve your goals.
          </Centertext>
          <div className="lg:flex lg:flex-row-reverse flex-col w-screen lg:gap-3 items-center justify-center lg:space-y-0 space-y-3">
            <Miniservices>Design Consultation</Miniservices>
            <Miniservices>Technical Support</Miniservices>
            <Miniservices>Project Collabration</Miniservices>
          </div>
        </div>
      </div>
    </div>
  );
}
