import React from 'react'
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
      const navigate = useNavigate();
    
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleMenu = () => setIsOpen(!isOpen);
    
      const handleNavClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      };
  return (

      <header className="fixed top-0 left-0 w-full z-50 bg-[#FFF9F4] border-b shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-black tracking-tight">
            <span className="inline-block w-5 h-5 mr-2 bg-black rounded"></span>
            Arghya Physics
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            {[
              "home",
              "about",
              "courses",
              "testimonials",
              "fees",
              "contact",
              "Answer Key",
              "Login",
            ].map((id) => (
              <button
                key={id}
                onClick={() => {
                  if (id.toLowerCase() === "login") {
                    navigate("/login"); // go to login page
                    setIsOpen(false);
                  } else if (id.toLowerCase() === "answer key") {
                    navigate("/answerKey"); // create route if needed
                    setIsOpen(false);
                  } else {
                    navigate("/home"); // create route if needed
                    setIsOpen(false);
                  }
                }}
                className="text-gray-700 hover:text-black font-medium capitalize"
              >
                {id}
              </button>
            ))}
          </nav>

          {/* Mobile Icon */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t shadow-md ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 p-4">
            {[
              "home",
              "about",
              "courses",
              "testimonials",
              "fees",
              "contact",
              "Answer Key",
              "Login",
            ].map((id) => (
              <button
                key={id}
                onClick={() => {
                  if (id.toLowerCase() === "login") {
                    navigate("/login"); // go to login page
                    setIsOpen(false);
                  } else if (id.toLowerCase() === "answer key") {
                    navigate("/answerKey"); // create route if needed
                    setIsOpen(false);
                  } else {
                    handleNavClick(id); // scroll for others
                  }
                }}
                className="text-gray-700 hover:text-black font-medium capitalize"
              >
                {id}
              </button>
            ))}
          </nav>
        </div>
      </header>
  )
}
