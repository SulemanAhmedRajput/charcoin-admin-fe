import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Like } from "@mynaui/icons-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ProjectCreationForm from "./causes/add-cause";

const AddCausesSheet = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="[&>button]:left-4 [&>button]:bg-background [&>button]:w-8 [&>button]:h-8 [&>button]:flex [&>button]:justify-center [&>button]:items-center !max-w-3xl overflow-auto p-0 !w-full ">
          <VisuallyHidden>
            <SheetTitle> Vote for your cause</SheetTitle>
          </VisuallyHidden>
          <ProjectCreationForm />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { AddCausesSheet };
