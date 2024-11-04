import { ReactNode } from "react";

interface LandingpageProps {
  children: ReactNode;
}

export default function Landingpage({ children }: LandingpageProps) {
  return (
    <div className=" landingly lg:h-screen h-3/4 w-screen text-center placecenter">
      <h1 className="text-6xl text-wrap h-screen sm:py-36 w-screen text-center md:text-8xl  lg:hero lg:text-9xl lg:py-0 ">
        {children}
      </h1>
    </div>
  );
}
