"use client";
import Landingpage from "@/components/ui/hero";
import Mission from "@/components/ui/mission";
import Wordloop from "@/components/ui/wordloop";
import Approach from "@/components/ui/approach";
import Intouch from "@/components/ui/intouch";

export default function solutions() {
  return (
    <div className="landingly">
      <div className="lg:w-screen w-2/4">
        <Landingpage>OUR STORY</Landingpage>
      </div>
      <Mission />
      <Wordloop>OUR APPROACH</Wordloop>
      <Approach />
      <Intouch />
    </div>
  );
}
