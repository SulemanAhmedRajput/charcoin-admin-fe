import { create } from "zustand";

interface DialogState {
  openDialog: "detail" | "edit" | "add" | null;

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
  openDetail: () => set({ openDialog: "detail" }),
  openEdit: () => set({ openDialog: "edit" }),
  openAdd: () => set({ openDialog: "add" }),
  closeDialog: () => set({ openDialog: null }),

  // Setter functions
  setOpenDetail: (isOpen) => set({ openDialog: isOpen ? "detail" : null }),
  setOpenEdit: (isOpen) => set({ openDialog: isOpen ? "edit" : null }),
  setOpenAdd: (isOpen) => set({ openDialog: isOpen ? "add" : null }),
}));

export default useDialogStore;
