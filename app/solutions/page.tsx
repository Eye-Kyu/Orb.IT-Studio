import type { Metadata } from "next";
import SolutionsLanding from "@/components/ui/solutionslanding";
import Works from "@/components/ui/Works";
import Startproject from "@/components/ui/startproject";

export const metadata: Metadata = {
  title: "Our Solutions",
  description:
    "Explore Studio Mizan's full range of solutions: web design & development, branding, graphic design, digital marketing, mobile app development, IT consulting, and more.",
  openGraph: {
    title: "Our Solutions | Studio Mizan",
    description:
      "Web design, branding, digital marketing, mobile apps, IT consulting — discover what Studio Mizan can build for you.",
    url: "https://studiomizan.com/solutions",
  },
  alternates: {
    canonical: "https://studiomizan.com/solutions",
  },
};

export default function Solutions() {
  return (
    <div>
      <SolutionsLanding />

      {/* <Orby>
       
        We are a creative agency that offers unique ... A Digital Design and
        Tech Studio based in Nairobi. We build brands, create digital
        experiences and shape the stories of Tommorrow.
      </Orby>
       */}
      <Works />
      <Startproject />
    </div>
  );
}
