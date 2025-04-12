"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainDock() {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999]">
      <Dock
        className="space-x-8 px-6 py-3 rounded-full bg-yellow-600 shadow-lg border border-black"
        direction="middle"
      >
        <DockIcon
          className={`p-3 rounded-full transition ${
            pathname === "/" ? "bg-white" : "hover:bg-yellow-400"
          }`}
        >
          <Link href="/"> HOME</Link>
        </DockIcon>
        <DockIcon
          className={`p-3 rounded-full transition ${
            pathname === "/solutions" ? "bg-white" : "hover:bg-yellow-400"
          }`}
        >
          <Link href="/solutions"> SOLUTIONS</Link>
        </DockIcon>
        <DockIcon
          className={`p-3 rounded-full transition ${
            pathname === "/agency" ? "bg-white" : "hover:bg-yellow-400"
          }`}
        >
          <Link href="/agency"> AGENCY</Link>
        </DockIcon>
        <DockIcon
          className={`p-3 rounded-full transition ${
            pathname === "/contact" ? "bg-white" : "hover:bg-yellow-400"
          }`}
        >
          <Link href="/contact"> CONTACT</Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
