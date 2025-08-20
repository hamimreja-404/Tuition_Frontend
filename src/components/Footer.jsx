import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#FCEBDD] text-[#2C2C2C] px-10 pt-16 pb-6 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-black mb-3">Arghya Physics</h3>
            <p className="text-sm text-gray-700">
              Master Physics with clarity, practice, and personal mentorship.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="hover:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="hover:underline"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("courses")}
                  className="hover:underline"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="hover:underline"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-gray-700">
              📍 Behala, Kolkata
              <br />
              📞 +91 90000 00000
              <br />
              ✉️ info@arghyaphysics.com
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <a
                  href="https://wa.me/919000000000"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@arghyaphysics.com"
                  className="hover:underline"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Google Map
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600 mt-8 border-t pt-4">
          <p>
            © {new Date().getFullYear()} Arghya Sen’s Physics Tuition. All
            rights reserved.
          </p>
          <p>
            Developed with ❤️ by{" "}
            <a
              href="https://github.com/hamimreja-404"
              className="underline font-medium"
            >
              Hamim Reja
            </a>
          </p>
        </div>
      </footer>
  )
}
