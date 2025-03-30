import { useState } from "react";

/**
 * Utility function to handle toggle switches for nested permissions.
 * @param path - The dot-separated path to the nested permission (e.g., "causes.view").
 * @param setValue - react-hook-form's setValue function to update the form state.
 * @param trigger - react-hook-form's trigger function to revalidate the field.
 * @param initialState - The initial state of the permissions object.
 * @returns An object containing the permissions state and the toggle handler.
 */
export const useTogglePermissions = <T extends Record<string, any>>(
  initialState: T,
  setValue: (field: string, value: any) => void,
  trigger: (field: string) => Promise<void>
) => {
  const [permissions, setPermissions] = useState<T>(initialState);

  const handleToggle = async (path: string) => {
    setPermissions((prev) => {
      // Deep copy to ensure React state updates correctly
      const newPermissions = JSON.parse(JSON.stringify(prev));
      const keys = path.split(".");
      let current: any = newPermissions;

      // Navigate to the nested property
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {}; // Ensure path exists
        current = current[keys[i]];
      }

      // Toggle the value
      current[keys[keys.length - 1]] = !current[keys[keys.length - 1]];

      // Update form state
      setValue(`permissions.${path}`, current[keys[keys.length - 1]]);

      return newPermissions;
    });

    // Revalidate the form after updating permissions
    await trigger(`permissions.${path}`);
  };

  return { permissions, handleToggle };
};