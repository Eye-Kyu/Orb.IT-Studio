import "@radix-ui/themes/styles.css";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface OrbyProps {
  children: ReactNode;
}

export default function Orby({ children }: OrbyProps) {
  return (
    <div className="relative flex-col space-y-12 box-border h-screen w-screen">
      <p className=" text-center  pt-24 px-20 text-6xl font-medium leading-normal w-screen alternate-heading">
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
