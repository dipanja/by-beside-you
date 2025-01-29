"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx"; // Utility for conditional class names

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-lg p-4 fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          By Beside You Pase Achi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "px-3 py-2 rounded-md transition",
                pathname === href
                  ? "bg-blue-100 text-blue-600"
                  : "hover:bg-gray-50 text-gray-600",
              )}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Donate Button (Always Visible on Desktop) */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Donate Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "absolute top-full right-0  w-1/2  bg-white shadow-md flex flex-col items-center space-y-4 py-4 transition-all duration-300 md:hidden",
          { "translate-x-0": isMenuOpen, "translate-x-full": !isMenuOpen },
          { hidden: !isMenuOpen },
        )}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "px-3 py-2 rounded-md transition text-center",
              pathname === href ? "bg-blue-100 text-blue-600" : "text-black",
            )}
            onClick={toggleMenu}
          >
            {label}
          </Link>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Donate Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
