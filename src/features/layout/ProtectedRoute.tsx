import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {

    const token = sessionStorage.getItem('token');

    if (token === null) {
        return <Navigate to="/login" />
    }

    return children
}

export default ProtectedRoute;