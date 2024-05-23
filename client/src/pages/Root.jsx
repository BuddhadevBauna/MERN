import React from "react";
import { Outlet } from "react-router-dom";
import Navabar from "../components/Navbar";

const Root = () => {
    return (
        <>
            <Navabar />
            <Outlet />
        </>
    );
};

export default Root;
