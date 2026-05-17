import type { Metadata } from "next";
import Mission from "@/components/ui/mission";
import Wordloop from "@/components/ui/wordloop";
import Approach from "@/components/ui/approach";
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
    <div className="landingly space-y-36">
      {/* <Landingpage>OUR STORY</Landingpage> */}

      <Mission />
      <Wordloop>OUR APPROACH</Wordloop>
      <Approach />
      <Intouch />
    </div>
  );
}
