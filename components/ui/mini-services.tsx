import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface Mservices {
  children: ReactNode;
}

export default function Miniservices({ children }: Mservices) {
  return (
    <div className="services lg:flex-row flex-col h-20 lg:h-28 lg:w-1/4 w-1/3 border rounded-lg ">
      <p className=" flex items-center justify-center text-center m-auto lg:text-2xl text-base font-semibold">
        {children}
      </p>
    </div>
  );
}
