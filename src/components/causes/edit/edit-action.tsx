import { Button } from "@/components/ui/button";
import { Save, Trash2 } from "lucide-react";

export default function FormActions() {
  return (
    <div className="flex justify-between mt-8">
      <Button
        size={"lg"}
        type="submit"
        className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-2"
      >
        Save
        <Save className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        size={"lg"}
        variant="outline"
        className="border-red-400 text-red-400 hover:bg-red-400/10 flex items-center gap-2"
      >
        Delete
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
