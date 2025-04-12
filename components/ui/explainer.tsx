import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface OrbyProps {
  children: ReactNode;
}

export default function Orby({ children }: OrbyProps) {
  return (
    <div className="relative flex-col space-y-12 box-border text-center lg:h-screen h-fit w-screen landingly-mobile md:h-screen sm:pr-12">
      <p className="text-3xl pt-0 mt-0 text-center  lg:pt-24 lg:px-20 lg:text-6xl font-light lg:leading-normal w-screen alternate-heading">
        {" "}
        {children}
      </p>

      {/* 
      <div className="relative lg:absolute flex w-full justify-center">
        <Button variant={"outline"} className="full">
          See Our Work
        </Button>
      </div>
      */}
    </div>
  );
}
