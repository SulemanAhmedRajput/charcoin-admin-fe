import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import { cn } from "@/lib/utils";

const CustomSheet = ({
  isOpen,
  setIsOpen,
  children,
  title,
  className,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          className={
            "[&>button]:left-4  [&>button]:bg-[hsl(255, 6%, 14%)] [&>button]:w-6 [&>button]:h-6 [&>button]:flex [&>button]:justify-center [&>button]:items-center !max-w-3xl overflow-auto p-0 !w-full "
          }
        >
          <VisuallyHidden>
            <SheetTitle> {title}</SheetTitle>
          </VisuallyHidden>
          <div className={cn("py-12 px-12 ", className)}>{children}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { CustomSheet };
