"use client";

import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Sort } from "@mynaui/icons-react";

type DateSelectorProps = {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
};

export function DateSelector({ date, setDate }: DateSelectorProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="text-lg font-semibold"></span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"newly_secondary"}
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            Display Date: {date ? format(date, "MMMM yyyy") : "Pick a date"}
            <Sort className={`!w-6 !h-6 ml-auto`} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
