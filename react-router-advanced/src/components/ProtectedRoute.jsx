import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component }) {
    const isAuthenticated = localStorage.getItem('authToken') !== null;

    if (!isAuthenticated) return <Navigate to="/login" replace/>

    return Component;
}

export default ProtectedRoute;
