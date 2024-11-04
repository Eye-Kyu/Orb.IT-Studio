import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";

interface FooterLinksProps {
  children: ReactNode;
}

/*const links = ['Home', 'About', 'Services', 'Contact'];*/

export default function FooterLinks({ children }: FooterLinksProps) {
  return (
    <div className="flex items-center justify-between px-4 py-1 lg:text-lg text-sm">
      {children}
    </div>
  );
}
