import "@radix-ui/themes/styles.css";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface OrbyProps {
  children: ReactNode;
}

export default function Orby({ children }: OrbyProps) {
  return (
    <div className="relative flex-col space-y-12 box-border h-auto w-screen landingly-mobile md:h-screen">
      <p className="sm:text-4xl pt-0 mt-0 text-center  lg:pt-24 lg:px-20 lg:text-6xl font-medium lg:leading-normal w-screen alternate-heading">
        {" "}
        {children}
      </p>

      <div className="absolute flex w-full justify-center">
        <Button variant={"outline"} className="full">
          See Our Work
        </Button>
      </div>
    </div>
  );
}
