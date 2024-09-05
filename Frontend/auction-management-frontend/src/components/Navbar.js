import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Auction House</h1>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/auctions"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Auctions
          </Link>
          <Link
            to="/profile"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Login
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
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
          className="block text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
          Home
        </Link>
        <Link
          to="/auctions"
          className="block text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
          Auctions
        </Link>
        <Link
          to="/profile"
          className="block text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
          Profile
        </Link>
        <Link
          to="/login"
          className="block text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
