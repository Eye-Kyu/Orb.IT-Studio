import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="pt-2 mb-8">
      <NavigationMenu className="w-screen">
        <NavigationMenuList className="md:flex justify-between w-screen px-14">
          <NavigationMenuItem className="Logo text-2xl">
            YOGI.<span className="text-xl">Studio</span>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Sheet>
              <SheetTrigger className="">Menu</SheetTrigger>
              <SheetContent className="flex-col space-y-12">
                <SheetHeader>
                  <SheetTitle className="boldentext">
                    <Link href="/"> HOME</Link>
                  </SheetTitle>
                  <SheetTitle className="boldentext">
                    <Link href="/solutions"> SOLUTIONS</Link>
                  </SheetTitle>
                  <SheetTitle className="boldentext">
                    <Link href="/agency"> AGENCY</Link>
                  </SheetTitle>
                  <SheetTitle className="boldentext">PLAYGROUND</SheetTitle>

                  <SheetTitle className="boldentext">
                    <Link href="/contact"> CONTACT</Link>
                  </SheetTitle>

                  <Button className="w-2/4 m-auto rounded-md text-1xl">
                    Start Your Project
                  </Button>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
