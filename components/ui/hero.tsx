import { ReactNode } from "react";

interface LandingpageProps {
  children: ReactNode;
}

export default function Landingpage({ children }: LandingpageProps) {
  return (
    <div className=" landingly h-screen w-screen text-center placecenter">
      <h1 className="text-7xl text-wrap h-screen sm:py-36 w-screen text-center sm:text-red-700  md:text-amber-600 md:text-8xl  lg:text-purple-900 lg:hero lg:text-9xl lg:py-0 ">
        {children}
      </h1>
    </div>
  );
}
