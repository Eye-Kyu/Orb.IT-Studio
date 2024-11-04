import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface SubtopicProps {
  children: ReactNode;
}

export default function Subtopic({ children }: SubtopicProps) {
  return (
    <div className="text-5xl w-screen lg:text-nowrap lg:text-left text-center lg:text-7xl font-thinner tracking-tighter leading-tight text-wrap headish ">
      {children}
    </div>
  );
}
