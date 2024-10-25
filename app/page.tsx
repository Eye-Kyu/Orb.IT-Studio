//import Image from "next/image";
//import { Button } from "@/components/ui/button";

import "@radix-ui/themes/styles.css";

import Orby from "@/components/ui/explainer";
import Subtopic from "@/components/ui/subheader";
import Titros from "@/components/ui/details";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Madividi from "@/components/ui/divs";
import Centertext from "@/components/ui/centrewriting";
import Miniservices from "@/components/ui/mini-services";
import Services from "@/components/ui/service";

export default function Home() {
  return (
    <div className="h-auto w-screen">
      <Navbar></Navbar>

      <div className=""></div>

      <div className="landingly h-screen w-screen text-center">
        <h1 className="">MAKE WAVES...NOT RIPPLES </h1>
      </div>

      <Orby>
        A Digital Design and Tech Studio based in Nairobi. We build brands,
        create digital experiences and shape the stories of Tommorrow.
      </Orby>

      <div className="landingly">
        <Subtopic>JOIN OUR CREATIVE JOURNEY</Subtopic>
        <Madividi>
          Discover how <span className="underlining">KYU.Firm</span> can
          transform your projects with our innovative designs. Lets create
          something amazing together!!
        </Madividi>

        <Services />

        <div className=" flex flex-col w-screen h-92 overflow-x-hidden space-y-12">
          <Subtopic>LEAVING LASTING IMPRESSIONS</Subtopic>

          <div className="relative w-8/12 ml-20 h-3/4">
            <Titros />
          </div>
        </div>

        <div className="placecenter w-screen  relative flex-col mb-12 space-y-8 mt-12">
          <Subtopic>CONNECT WITH US</Subtopic>
          <Centertext>
            Reach out to Yogi.studio for Enquiries, collabrations or support. We
            are here here to help you achieve your goals.
          </Centertext>
          <div className="flex w-screen gap-3 items-center justify-center">
            <Miniservices>Design Consultation</Miniservices>
            <Miniservices>Technical Support</Miniservices>
            <Miniservices>Project Collabration</Miniservices>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
