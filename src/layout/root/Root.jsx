import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../shared/NavBar";
import Footer from "../../footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
