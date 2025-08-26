import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Common/Navbar_";
import Footer from "./components/Common/Footer";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}


export { Layout};
