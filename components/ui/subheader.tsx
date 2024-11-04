import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface SubtopicProps {
  children: ReactNode;
}

export default function Subtopic({ children }: SubtopicProps) {
  return (
    <div className="text-4xl w-screen lg:text-nowrap text-left lg:text-7xl font-thinner tracking-tighter leading-tight text-wrap headish lg:mt-0 mt-9 ">
      {children}
    </div>
  );
}
