import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: {
    userId: localStorage.getItem("userId") || "",
    role: localStorage.getItem("role") || "",
    active: !!localStorage.getItem("token"),
  },
  setUser: (userId, role) => {
    localStorage.setItem("userId", userId);
    localStorage.setItem("role", role);

    set((state) => ({
      auth: { ...state.auth, userId, role, active: true },
    }));
  },
  logout: () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    set({ auth: { userId: "", role: "", active: false } });
  },
}));

// import { create } from "zustand";

// export const useAuthStore = create((set) => ({
//   auth: {
//     userId: "",
//     role: "",
//     active: false,
//   },
//   setUser: (userId, role) =>
//     set((state) => ({
//       auth: { ...state.auth, userId, role, active: true }, // Ensure state updates properly
//     })),
// }));

// import { create } from "zustand";

// export const useAuthStore = create((set) => ({
//   auth: {
//     userId: "",
//     userRole: "",
//     active: false,
//   },
//   setUserId: (Id, role) =>
//     set((state) => ({ auth: { ...state.auth, userId: Id, userRole: role } })),
// }));
