import React, { useState, useEffect } from "react";
import {
  Home,
  Phone,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  User,
  Shield,
} from "lucide-react";

// --- Navigation Bar Component ---
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar items data
  const navItems = [
    {
      name: "Home",
      path: "/home",
      icon: <Home size={18} className="md:hidden mr-2" />,
    },
    {
      name: "Admission",
      path: "/admission",
      submenu: [
        { name: "Classes", path: "/admission#instructions" },
        { name: "Branches", path: "/admission#instructions" },
        { name: "Admission Procedure", path: "/admission#procedure" },
        { name: "Fee Structure", path: "/admission#fee" },
      ],
    },
    {
      name: "Academics",
      path: "/academics",
      submenu: [
        { name: "Answer Key", path: "/academics#examination" },
        { name: "Syllabus", path: "/academics#syllabus" },
      ],
    },
    {
      name: "Exams",
      path: "/exams",
      submenu: [
        { name: "Apply For Upcoming Exams", path: "/academics#examination" },
        { name: "Download Admit", path: "/academics#syllabus" },
        { name: "Download Marksheet", path: "/academics#syllabus" },
      ],
    },
    {
      name: "Contact Us",
      path: "/contact",
      icon: <Phone size={18} className="md:hidden mr-2" />,
    },
  ];

  // Effect to handle scroll detection for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]); // This effect runs whenever 'isOpen' changes

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/50 shadow-md backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Website Name */}
          <a
            href="#"
            className="flex items-center space-x-2 text-2xl font-bold text-slate-800"
          >
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <span className="text-indigo-600">The Physics Helper</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <a
                    href={item.path}
                    className="flex items-center text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}
                  </a>
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.path}
                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Login Buttons for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-slate-600 hover:text-indigo-600 font-medium transition-colors">
              <User size={18} className="mr-2" /> Login
            </button>
            <a
              href="/adminLogin" // <-- URL for the admin login page
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <Shield size={18} className="mr-2" /> Admin Login
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X size={28} className="text-slate-800" />
              ) : (
                <Menu size={28} className="text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <a
            href="#"
            className="flex items-center space-x-2 text-xl font-bold text-slate-800 mb-8"
          >
            <BookOpen className="w-7 h-7 text-indigo-600" />
            <span className="text-indigo-600">The Physics Helper</span>
          </a>
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-slate-200 pb-2">
                <a
                  href={item.path}
                  className="flex items-center text-lg text-slate-700 font-medium py-2"
                >
                  {item.icon} {item.name}
                </a>
                {item.submenu && (
                  <ul className="pl-6 mt-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.name}>
                        <a
                          href={subItem.path}
                          className="block py-2 text-slate-500 hover:text-indigo-600"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* Mobile Login Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
            <button className="w-full flex items-center justify-center text-indigo-600 border border-indigo-600 px-4 py-2 rounded-lg font-semibold transition-colors">
              <User size={18} className="mr-2" /> Login
            </button>
            <a
              href="/adminLogin" // <-- URL for the admin login page
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <Shield size={18} className="mr-2" /> Admin Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
