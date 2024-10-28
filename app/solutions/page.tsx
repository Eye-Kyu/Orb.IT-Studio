import "@radix-ui/themes/styles.css";
import SolutionsLanding from "@/components/ui/solutionslanding";
import Orby from "@/components/ui/explainer";
import Works from "@/components/ui/Works";
import Startproject from "@/components/ui/startproject";

export default function solutions() {
  return (
    <div>
      <SolutionsLanding />
      <Orby>
        {" "}
        We are a creative agency that offers unique ... A Digital Design and
        Tech Studio based in Nairobi. We build brands, create digital
        experiences and shape the stories of Tommorrow.
      </Orby>
      <Works />
      <Startproject />
    </div>
  );
}
