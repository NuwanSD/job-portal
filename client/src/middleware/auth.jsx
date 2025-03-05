import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const AuthorizeUser = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  return children;
};

export const ProtectRoute = ({ children }) => {
  const userId = useAuthStore.getState().auth.userId;

  if (!userId) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }

  return children;
};
