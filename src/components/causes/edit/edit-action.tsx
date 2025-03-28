import { Button } from "@/components/ui/button";
import { Save, Trash2 } from "lucide-react";

export default function FormActions() {
  return (
    <div className="flex justify-between mt-8">
      <Button
        size={"lg"}
        type="submit"
        className="bg-primary hover:bg-primary/80 text-background flex items-center gap-2"
      >
        Save
        <Save className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        size={"lg"}
        variant="destructive"
        className="bg-red-500 text-foreground flex items-center gap-2"
      >
        Delete
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
