import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  HomeIcon,
  TagIcon,
  UserIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="py-1 text-xs text-center bg-gray-100">
        FREE Island-wide Delivery for LKR 29000+ Purchases
      </div>
      <nav className="px-6 py-2 bg-white">
        <div className="container flex items-center justify-between mx-auto">
          <h2 className="text-2xl font-bold text-gray-800">ActionHouse.lk</h2>
          <div className="hidden space-x-4 md:flex">
            <Link
              to="/"
              className="flex items-center p-2 text-sm font-semibold text-center text-gray-500 hover:bg-gray-100 "
            >
              <HomeIcon className="w-6 mr-1" />
            </Link>
            <Link
              to="/auctions"
              className="flex items-center p-2 text-sm font-semibold text-black text-gray-500 rounded hover:bg-gray-100 "
            >
              <TagIcon className="w-6 mr-1" />
            </Link>
            <Link
              to="/profile"
              className="flex items-center p-2 text-sm font-semibold text-black text-gray-500 rounded hover:bg-gray-100"
            >
              <UserIcon className="w-6 mr-1" />
            </Link>
            <div className="flex shadow-sm">
              <Link
                to="/login"
                className="flex items-center px-3 py-2 text-sm font-semibold bg-gray-200 "
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5 mr-1" />
                Login
              </Link>
              <Link
                to="/register"
                className="flex items-center px-2 py-2 text-sm font-semibold text-white bg-gray-600 semitext-black"
              >
                <UserPlusIcon className="w-5 h-5 mr-1" />
                Sign Up
              </Link>
            </div>
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
            className="flex items-center block px-3 py-2 text-white rounded hover:bg-gray-700"
          >
            <HomeIcon className="w-5 h-5 mr-1" />
            Home
          </Link>
          <Link
            to="/auctions"
            className="flex items-center block px-3 py-2 text-white rounded hover:bg-gray-700"
          >
            <TagIcon className="w-5 h-5 mr-1" />
            Auctions
          </Link>
          <Link
            to="/profile"
            className="flex items-center block px-3 py-2 text-white rounded hover:bg-gray-700"
          >
            <UserIcon className="w-5 h-5 mr-1" />
            Profile
          </Link>
          <Link
            to="/login"
            className="flex items-center block px-3 py-2 text-white rounded hover:bg-gray-700"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 mr-1" />
            Login
          </Link>
          <Link
            to="/register"
            className="flex items-center block px-3 py-2 text-white rounded hover:bg-gray-700"
          >
            <UserPlusIcon className="w-5 h-5 mr-1" />
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
