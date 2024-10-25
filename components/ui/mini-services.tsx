import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface Mservices {
  children: ReactNode;
}

export default function Miniservices({ children }: Mservices) {
  return (
    <div className="services flex h-28 w-1/4 border border-black rounded-lg ">
      <p className=" flex items-center justify-center text-center m-auto text-2xl font-semibold">
        {children}
      </p>
    </div>
  );
}
