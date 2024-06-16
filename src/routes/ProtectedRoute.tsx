import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
    const auth = useAuth();
    const status = auth.status;
    const location = useLocation();
  
    if (status !== "authenticated") {
      return <Navigate to="/" />;
    } else if (status === "authenticated" && location.pathname === "/") {
      return <Navigate to="/dashboard" />;
    }
  
    return <Outlet />;
  };
  