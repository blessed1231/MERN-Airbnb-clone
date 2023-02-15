import React from 'react';
import Navbar from "./components/Navbar.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="py-4 px-8 flex flex-col min-h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;