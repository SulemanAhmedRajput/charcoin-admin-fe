import { create } from "zustand";

interface DialogState {
  openDialog: "causes_detail" | "causes_edit" | "causes_add" | null;

  openDetail: () => void;
  openEdit: () => void;
  openAdd: () => void;
  closeDialog: () => void;

  setOpenDetail: (isOpen: boolean) => void;
  setOpenEdit: (isOpen: boolean) => void;
  setOpenAdd: (isOpen: boolean) => void;
}

const useDialogStore = create<DialogState>((set) => ({
  openDialog: null,

  // Open functions
  openDetail: () => set({ openDialog: "causes_detail" }),
  openEdit: () => set({ openDialog: "causes_edit" }),
  openAdd: () => set({ openDialog: "causes_add" }),
  closeDialog: () => set({ openDialog: null }),

  // Setter functions
  setOpenDetail: (isOpen) =>
    set({ openDialog: isOpen ? "causes_detail" : null }),
  setOpenEdit: (isOpen) => set({ openDialog: isOpen ? "causes_edit" : null }),
  setOpenAdd: (isOpen) => set({ openDialog: isOpen ? "causes_add" : null }),
}));

export default useDialogStore;
