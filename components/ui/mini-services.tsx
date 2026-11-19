import { ReactNode } from "react";
import Link from "next/link";

interface Mservices {
  children: ReactNode;
  href?: string;
}

const BOX =
  "flex lg:flex-row flex-col h-20 lg:h-28 lg:w-1/4 w-10/12 border rounded-lg transition-colors duration-200";

export default function Miniservices({ children, href }: Mservices) {
  const inner = (
    <p className="flex items-center justify-center text-center m-auto lg:text-2xl text-base font-semibold">
      {children}
    </p>
  );
  if (!href) return <div className={BOX}>{inner}</div>;
  return (
    <Link href={href} className={`${BOX} hover:border-[#EAB308] hover:text-[#EAB308] hover:bg-[#EAB308]/5`}>
      {inner}
    </Link>
  );
}
