import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";

const Navigation = () => {
  return (
    <div>
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/Cart" className="flex gap-2">
            <ShoppingCartIcon />
            <span>Cart</span>
          </Link>
        </Button>
        <UserButton />
        {/* <Button asChild>
          <Link href="/sign-in" className="flex gap-2">
            <UserIcon />
            <span>sign In</span>
          </Link>
        </Button> */}
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start w-xs md:w-sm p-4 borde-b">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/Cart">
                <ShoppingCartIcon /> Cart
              </Link>
            </Button>
            <SheetDescription>
              <UserButton />
              {/* <Button asChild>
                <Link href="/sign-in" className="flex gap-2">
                  <UserIcon />
                  <span>sign In</span>
                </Link>
              </Button> */}
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Navigation;
