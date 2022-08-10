import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
    const isAuthenticated = false;
    return(
        isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />
    );
}
