import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RefreshHandlerComponent({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('Token')) {
            setIsAuthenticated(true);
            if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
                navigate('/home', { replace: false });
            }
        }

        // Optionally return cleanup logic here if needed
    }, [location, setIsAuthenticated, navigate]);

    return null; // This component doesn't need to render anything
}

export default RefreshHandlerComponent;
