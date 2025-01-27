"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg p-4 fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">By Beside You Pase Achi</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-50 text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/about"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-50 text-gray-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/projects"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-50 text-gray-600"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`px-3 py-2 rounded-md transition ${
              pathname === "/contact"
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-50 text-gray-600"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Donate Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Donate Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
