import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
    const { status } = useAuth();
    console.log("routes: status", status);
    const isAuthenticated = status === "authenticated";

    // Define routes accessible only to authenticated users
    const authenticatedRoutes = [
      {
        path: "/",
        element: <ProtectedRoute />, 
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ];
  
    // Define routes accessible only to non-authenticated users
    const unauthenticatedRoutes = [
      {
        path: "/",
        element: <LandingPage />,
      },
    ];
  
    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
      ...(!isAuthenticated ? unauthenticatedRoutes : []),
      ...authenticatedRoutes,
    ]);
  
    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
  };
  
  export default Routes;