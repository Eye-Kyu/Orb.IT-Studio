"use client";
import Landingpage from "@/components/ui/hero";
import Mission from "@/components/ui/mission";
import Wordloop from "@/components/ui/wordloop";
import Approach from "@/components/ui/approach";
import Intouch from "@/components/ui/intouch";

export default function solutions() {
  return (
    <div className="landingly">
      <Landingpage>OUR STORY</Landingpage>
      <Mission />
      <Wordloop>OUR APPROACH</Wordloop>
      <Approach />
      <Intouch />
    </div>
  );
}
