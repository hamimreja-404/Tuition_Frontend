import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Common/Navbar_";
import Footer from "./components/Common/Footer";
import axios from "axios";
function Layout() {
  useEffect(()=>{
    const trackVisitor = async()=>{
      const hasVisited = localStorage.getItem('hasVisited');
      if (!hasVisited) {
        try {
          axios.post(`${import.meta.env.VITE_API_URL}visit`);
          localStorage.setItem('hasVisited', 'true');
        } catch (error) {
          console.error("Error tracking visitor:", error);
        }
      }
    }
    trackVisitor();
  },[]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}


export { Layout};
