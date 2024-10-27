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
      <NavigationMenu>
        <NavigationMenuList className="flex justify-between w-screen px-14">
          <NavigationMenuItem>Kyu.Firm</NavigationMenuItem>
          <NavigationMenuItem>
            <Sheet>
              <SheetTrigger>Open</SheetTrigger>
              <SheetContent className="flex-col space-y-12">
                <SheetHeader>
                  <SheetTitle className="boldentext">
                    <Link href="/solutions"> SOLUTIONS</Link>
                  </SheetTitle>
                  <SheetTitle className="boldentext">
                    <Link href="/agency"> AGENCY</Link>
                  </SheetTitle>
                  <SheetTitle className="boldentext">PLAYGROUND</SheetTitle>
                  <SheetTitle className="boldentext">CONTACT</SheetTitle>
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
