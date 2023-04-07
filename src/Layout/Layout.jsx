import React from "react";
import Header from "../Header/Header";
import "./Layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout__container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
