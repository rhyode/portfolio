"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-dark-text hover:text-accent transition-colors duration-300 p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-dark-surface transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-dark-bg">
          <div className="text-xl font-bold text-gradient">TT</div>
          <button
            onClick={closeMenu}
            className="text-dark-text hover:text-accent transition-colors duration-300 p-2"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="text-dark-text hover:text-accent transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-dark-bg/50"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <a
            href="mailto:tanmaytrip59@gmail.com"
            onClick={closeMenu}
            className="block w-full text-center bg-accent hover:bg-accent-hover text-dark-bg font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
