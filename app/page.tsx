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
import FeaturedWork from "@/components/ui/featured-work";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://studiomizani.com",
  },
};

export default function Home() {
  return (
    <main id="main" className="w-full overflow-x-hidden">
      <Landingpage lines={["MAKE WAVES...", "NOT RIPPLES"]} />

      <section className="py-24 lg:py-40 -mt-[80px] relative">
        <Orby>
          A design and tech studio in Nairobi. We build the brands, websites
          and products that make people stop scrolling — and start buying.
        </Orby>
      </section>

      <section className="py-16 lg:py-28">
        <Madividi heading="ONE STUDIO. NO HAND-OFFS.">
          At <span className="underlining">Studio Mizani</span> the person you
          brief is the person who designs and builds. From an export logistics
          platform to a school management system, every project goes from
          sketch to launch in the same hands.
        </Madividi>
      </section>

      <section className="py-16 lg:py-28">
        <FeaturedWork />
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
        <Subtopic>GOT SOMETHING IN MIND?</Subtopic>
        <Centertext>
          Build your brief in two minutes and get an instant timeline estimate.
          A real reply follows within 24 hours, Nairobi time.
        </Centertext>
        <div className="flex flex-col lg:flex-row-reverse w-full lg:gap-3 items-center justify-center space-y-3 lg:space-y-0">
          <Miniservices href="/now">See what&apos;s on the bench</Miniservices>
          <Miniservices href="/work">Browse the work</Miniservices>
          <Miniservices href="/contact">Build your brief →</Miniservices>
        </div>
      </section>
    </main>
  );
}
