import { ReactNode } from "react";

interface LandingpageProps {
  children: ReactNode;
}

export default function Landingpage({ children }: LandingpageProps) {
  return (
    <div className="landingly h-screen w-screen text-center">
      <h1 className="">{children}</h1>
    </div>
  );
}
