"use client";

import { useFormContext } from "react-hook-form";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Trash2, X } from "lucide-react";
import FormField from "./form-field";

interface ImageUploadSectionProps {
  fieldName: string;
  label: string;
  description: string;
}

export default function ImageUploadSection({
  fieldName,
  label,
  description,
}: ImageUploadSectionProps) {
  const { setValue, getValues } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ensure images exist in state
  const [imageFiles, setImageFiles] = useState<File[]>(() => {
    return getValues(fieldName) || [];
  });

  // Update form values when images change
  useEffect(() => {
    setValue(fieldName, imageFiles.length > 0 ? imageFiles : undefined);
  }, [imageFiles, fieldName, setValue]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const newFiles = Array.from(event.target.files);
      setImageFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDeleteImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <FormField id={fieldName} label={label} description={description}>
      {/* Image Previews */}
      <div className="flex flex-wrap gap-2 mt-4">
        {imageFiles.map((image, index) => {
          const previewUrl = URL.createObjectURL(image);

          return (
            <div key={index} className="relative">
              <img
                src={previewUrl}
                alt={`Uploaded Image ${index + 1}`}
                className="h-20 w-32 object-cover rounded-md"
                onLoad={() => URL.revokeObjectURL(previewUrl)} // Prevent memory leak
              />
              <button
                type="button"
                onClick={() => handleDeleteImage(index)}
                className="absolute top-1 right-1 bg-red-500 rounded-full p-1"
              >
                <X className="h-3 w-3 text-white" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Upload & Delete Buttons */}
      <div className="flex gap-4 mt-4">
        <Button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          size={"lg"}
          className="bg-primary hover:bg-primary/80 text-background flex items-center gap-2"
        >
          <Upload className="h-4 w-4" />
          Upload Images
        </Button>

        <input
          type="file"
          ref={fileInputRef}
          accept="image/png, image/jpeg, image/jpg"
          multiple
          className="hidden"
          onChange={handleImageUpload}
        />

        <Button
          type="button"
          variant="destructive"
          size={"lg"}
          className="bg-red-500 text-foreground size flex items-center gap-2"
          onClick={() => setImageFiles([])}
          disabled={imageFiles.length === 0}
        >
          <Trash2 className="h-4 w-4" />
          Delete All
        </Button>
      </div>
    </FormField>
  );
}
