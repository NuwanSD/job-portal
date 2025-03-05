import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  user_id: null,
  storeUser: (user) => set({ user }),
  storeUserId: (user_id) => set({ user_id }),
}));

export default useUserStore;
