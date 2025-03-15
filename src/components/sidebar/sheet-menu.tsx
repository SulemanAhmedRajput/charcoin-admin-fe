import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";

import { Menu } from "@/components/sidebar/menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import AnimatedMenuButton from "./animated-menu";

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <AnimatedMenuButton />
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link href="/dashboard" className="flex items-center gap-2">
              <PanelsTopLeft className="w-6 h-6 mr-1" />
              <SheetTitle className="font-bold text-lg">Brand</SheetTitle>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}
