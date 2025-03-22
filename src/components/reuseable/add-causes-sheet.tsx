import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Like } from "@mynaui/icons-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import AddCauseForm from "../causes/add-cause";

const CustomSheet = ({
  isOpen,
  setIsOpen,
  children,
  title,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="[&>button]:left-4  [&>button]:bg-[hsl(255, 6%, 14%)] [&>button]:w-6 [&>button]:h-6 [&>button]:flex [&>button]:justify-center [&>button]:items-center !max-w-3xl overflow-auto p-0 !w-full ">
          <VisuallyHidden>
            <SheetTitle> {title}</SheetTitle>
          </VisuallyHidden>
          <div className="py-12 px-12">{children}</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { CustomSheet };
