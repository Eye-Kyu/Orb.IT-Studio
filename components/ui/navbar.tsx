"use client";

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import MainDock from "./dockmain";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-2 mb-8 fixed top-0 left-0 w-full z-[50]">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="flex justify-between w-full lg:px-14 px-2">
          <NavigationMenuItem className="Logo lg:text-xl text-lg">
            <Link href="#" className="flex items-baseline">
              <span
                className="text-yellow-400 transition-all duration-300 overflow-hidden inline-block whitespace-nowrap"
                style={{
                  maxWidth: scrolled ? "0px" : "80px",
                  opacity: scrolled ? 0 : 1,
                }}
              >
                Studio
              </span>
              <span className="text-4xl">M</span>
              <span
                className="text-2xl transition-all duration-300 overflow-hidden inline-block whitespace-nowrap"
                style={{
                  maxWidth: scrolled ? "0px" : "120px",
                  opacity: scrolled ? 0 : 1,
                }}
              >
                IZANI
              </span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <MainDock />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
