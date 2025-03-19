import { create } from "zustand";

export const useUserDataStore = create((set) => ({
  id: null,
  data: null,
  storeId: (id) => set({ id }),
  storeUserData: (data) => set({ data }),
}));

export default useUserDataStore;
