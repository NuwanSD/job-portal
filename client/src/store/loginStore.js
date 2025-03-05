import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLogin: !!localStorage.getItem("token"), //Initialize from localStorage

  login: (token) => {
    localStorage.setItem("token", token);
    set({ isLogin: true });
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    set({ isLogin: false });
  },
}));

export default useLoginStore;
