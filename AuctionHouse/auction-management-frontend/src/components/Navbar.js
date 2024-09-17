import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 bg-gray-100">
      <div className="container flex items-center justify-between mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">ActionHouse.lk</h2>
        <div className="hidden space-x-4 md:flex">
          <Link
            to="/"
            className="px-3 py-2 text-black rounded hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/auctions"
            className="px-3 py-2 text-black rounded hover:bg-gray-700 hover:text-white"
          >
            Auctions
          </Link>
          <Link
            to="/profile"
            className="px-3 py-2 text-black rounded hover:bg-gray-700 hover:text-white"
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="px-3 py-2 text-black rounded hover:bg-gray-700 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-3 py-2 text-black rounded hover:bg-gray-700 hover:text-white"
          >
            Sign Up
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <Link
          to="/"
          className="block px-3 py-2 text-white rounded hover:bg-gray-700"
        >
          Home
        </Link>
        <Link
          to="/auctions"
          className="block px-3 py-2 text-white rounded hover:bg-gray-700"
        >
          Auctions
        </Link>
        <Link
          to="/profile"
          className="block px-3 py-2 text-white rounded hover:bg-gray-700"
        >
          Profile
        </Link>
        <Link
          to="/login"
          className="block px-3 py-2 text-white rounded hover:bg-gray-700"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="block px-3 py-2 text-white rounded hover:bg-gray-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
