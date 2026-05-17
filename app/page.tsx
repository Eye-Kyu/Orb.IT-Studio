import type { Metadata } from "next";

import Orby from "@/components/ui/explainer";
import Subtopic from "@/components/ui/subheader";
import MarqueeDemo from "@/components/ui/marquee";
import Madividi from "@/components/ui/divs";
import Centertext from "@/components/ui/centrewriting";
import Miniservices from "@/components/ui/mini-services";
import { HoverImageLinks } from "@/components/ui/service";
import Landingpage from "@/components/ui/hero";
import MagneticTestimonials from "@/components/ui/testimoni";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://studiomizan.com",
  },
};

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Landingpage lines={["MAKE WAVES...", "NOT RIPPLES"]} />

      <section className="py-24 lg:py-40 -mt-[80px] relative">
        <Orby>
          A Digital Design and Tech Studio based in Nairobi. We build brands,
          create digital experiences and shape the stories of Tomorrow.
        </Orby>
      </section>

      <section className="py-16 lg:py-28">
        <Madividi heading="JOIN OUR CREATIVE JOURNEY">
          Discover how <span className="underlining">Studio Mizan</span> can
          transform your projects with our innovative designs. Lets create
          something amazing together!!
        </Madividi>
      </section>

      <section className="py-16 lg:py-24 landingly">
        <HoverImageLinks />
      </section>

      <section className="py-16 lg:py-28">
        <Subtopic>LEAVING LASTING IMPRESSIONS</Subtopic>
        <div className="mt-12 lg:mt-16">
          <MagneticTestimonials />
        </div>
        <div className="mt-12 lg:mt-16 w-full">
          <MarqueeDemo />
        </div>
      </section>

      <section className="py-16 lg:py-28 placecenter flex-col space-y-10">
        <Subtopic>CONNECT WITH US</Subtopic>
        <Centertext>
          Reach out to Studio Mizan for enquiries, collaborations or support. We
          are here to help you achieve your goals.
        </Centertext>
        <div className="flex flex-col lg:flex-row-reverse w-full lg:gap-3 items-center justify-center space-y-3 lg:space-y-0">
          <Miniservices>Design Consultation</Miniservices>
          <Miniservices>Technical Support</Miniservices>
          <Miniservices>Project Collaboration</Miniservices>
        </div>
      </section>
    </div>
  );
}
