import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface CenterTexts {
  children: ReactNode;
}

export default function Centertext({ children }: CenterTexts) {
  return (
    <div className="flex justify-center items-center h-auto w-screen lg:w-4/5 lg:text-4xl text-xl lg:text-center text-left text-wrap ">
      <p>{children}</p>
    </div>
  );
}
