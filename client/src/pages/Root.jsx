import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navabar from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { useAuth } from "../store/auth";

const Root = () => {
    const { serverIssue } = useAuth();
    const location = useLocation();

    const isServiceRoute = location.pathname.startsWith('/services');
    
    return (
        <>
            {!(isServiceRoute && serverIssue) && <Navabar />}
            <Outlet />
            {!(isServiceRoute && serverIssue) && <Footer />}
        </>
    );
};

export default Root;
