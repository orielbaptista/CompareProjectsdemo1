import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("token");

    if (!token) {
        //redirect to login page if token is not present
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;