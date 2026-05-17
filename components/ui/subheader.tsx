import { ReactNode } from "react";

interface SubtopicProps {
  children: ReactNode;
}

export default function Subtopic({ children }: SubtopicProps) {
  return (
    <div className="textwrap text-3xl sm:text-4xl w-full lg:text-wrap text-left lg:text-6xl font-light tracking-normal leading-relaxed text-wrap headish lg:mt-2 mt-8 px-4 lg:px-3">
      {children}
    </div>
  );
}
