import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface SubtopicProps {
  children: ReactNode;
}

export default function Subtopic({ children }: SubtopicProps) {
  return (
    <div className="textwrap text-4xl w-screen  lg:text-wrap text-left lg:text-6xl font-light tracking-normal leading-relaxed text-wrap headish lg:mt-2 mt-11 lg:px-3 ">
      {children}
    </div>
  );
}
