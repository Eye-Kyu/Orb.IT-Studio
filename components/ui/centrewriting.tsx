import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface CenterTexts {
  children: ReactNode;
}

export default function Centertext({ children }: CenterTexts) {
  return (
    <div className="flex justify-center items-center h-auto w-4/5 text-4xl text-center ">
      <p>{children}</p>
    </div>
  );
}
