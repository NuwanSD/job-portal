import { create } from "zustand";

const useModalStore = create((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

export default useModalStore;
