import React from "react";
import { Outlet } from "react-router-dom";
import Navabar from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

const Root = () => {
    return (
        <>
            <Navabar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;
