import type { Metadata } from "next";
import AgencyHero from "@/components/ui/agency-hero";
import Mission from "@/components/ui/mission";
import AgencyStats from "@/components/ui/agency-stats";
import Wordloop from "@/components/ui/wordloop";
import Approach from "@/components/ui/approach";
import AgencyValues from "@/components/ui/agency-values";
import MarqueeDemo from "@/components/ui/marquee";
import Intouch from "@/components/ui/intouch";

export const metadata: Metadata = {
  title: "Our Agency",
  description:
    "Meet the Studio Mizan team — passionate engineers, designers, and creatives dedicated to building groundbreaking digital experiences from Nairobi, Kenya.",
  openGraph: {
    title: "Our Agency | Studio Mizan",
    description:
      "Passionate engineers, designers, and creatives dedicated to building groundbreaking digital experiences that make the world a better place.",
    url: "https://studiomizan.com/agency",
  },
  alternates: {
    canonical: "https://studiomizan.com/agency",
  },
};

export default function Agency() {
  return (
    <main className="w-full overflow-x-hidden">
      <AgencyHero />

      <section className="py-0">
        <Mission />
      </section>

      <AgencyStats />

      <Wordloop>OUR APPROACH</Wordloop>

      <section>
        <Approach />
      </section>

      <section>
        <AgencyValues />
      </section>

      <section className="py-8 lg:py-12">
        <MarqueeDemo />
      </section>

      <Intouch />
    </main>
  );
}
