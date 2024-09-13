import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../images/whiteLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <img src={whiteLogo} width={200} />
        <div className="hidden space-x-4 md:flex">
          <Link
            to="/"
            className="px-3 py-2 text-white rounded hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/auctions"
            className="px-3 py-2 text-white rounded hover:bg-gray-700"
          >
            Auctions
          </Link>
          <Link
            to="/profile"
            className="px-3 py-2 text-white rounded hover:bg-gray-700"
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="px-3 py-2 text-white rounded hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-3 py-2 text-white rounded hover:bg-gray-700"
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
