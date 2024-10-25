import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface SubtopicProps {
  children: ReactNode;
}

export default function Subtopic({ children }: SubtopicProps) {
  return (
    <div className=" text-8xl font-thinner tracking-tighter leading-tight text-wrap headish ">
      {children}
    </div>
  );
}
