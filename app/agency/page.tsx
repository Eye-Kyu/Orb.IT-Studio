import type { Metadata } from "next";
import AgencyHero from "@/components/ui/agency-hero";
import Mission from "@/components/ui/mission";
import Wordloop from "@/components/ui/wordloop";
import Approach from "@/components/ui/approach";
import AgencyValues from "@/components/ui/agency-values";
import MarqueeDemo from "@/components/ui/marquee";
import Intouch from "@/components/ui/intouch";
import Team from "@/components/ui/team";

export const metadata: Metadata = {
  title: "About — Founder-Led Design & Tech Studio in Nairobi",
  description:
    "Studio Mizani is a founder-led design and tech studio in Nairobi. Work directly with the person who builds your product, backed by a bench of hand-picked specialists.",
  openGraph: {
    title: "Our Agency | Studio Mizani",
    description:
      "A founder-led design and tech studio in Nairobi, backed by a bench of hand-picked specialists.",
    url: "https://studiomizani.com/agency",
  },
  alternates: {
    canonical: "https://studiomizani.com/agency",
  },
};

export default function Agency() {
  return (
    <main id="main" className="w-full overflow-x-hidden">
      <AgencyHero />

      <section className="py-0">
        <Mission />
      </section>

      <Team />

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
