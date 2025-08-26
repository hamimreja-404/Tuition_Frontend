import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';

// --- Footer Component ---
export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "Admission", path: "/admission" },
    { name: "Academics", path: "/academics" },
    { name: "Exams", path: "/exams" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, path: "#" },
    { icon: <Twitter size={20} />, path: "#" },
    { icon: <Instagram size={20} />, path: "#" },
    { icon: <Linkedin size={20} />, path: "#" },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 text-xl font-bold text-white mb-4">
              <BookOpen className="w-7 h-7 text-indigo-400" />
              <span>The Physics Helper</span>
            </a>
            <p className="text-sm text-slate-400">
              Your trusted partner in mastering physics for Class XI, XII, JEE, NEET, and Boards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.path} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-white mb-4">Our Locations</h4>
            <div className="space-y-4 text-sm text-slate-400">
                <div className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-indigo-400"/>
                    <div>
                        <strong>Kolkata:</strong><br/>
                        123, ABC Road, Behala, Kolkata, West Bengal 700034
                    </div>
                </div>
                <div className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-indigo-400"/>
                    <div>
                        <strong>Malda:</strong><br/>
                        456, XYZ Lane, English Bazar, Malda, West Bengal 732101
                    </div>
                </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.path} className="bg-slate-700 p-2 rounded-full text-slate-300 hover:bg-indigo-500 hover:text-white transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500 md:flex md:justify-between">
          <p>&copy; {new Date().getFullYear()} The Physics Helper. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Developed by <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-400 hover:underline">Your Name/Company</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
