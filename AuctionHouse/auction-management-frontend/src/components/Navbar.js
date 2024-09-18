import { HomeIcon, TagIcon, UserIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="py-1 text-xs text-center bg-gray-100">
        FREE Island-wide Delivery for LKR 29000+ Purchases
      </div>
      <nav className="px-6 py-2">
        <div className="container flex items-center justify-between mx-auto">
          <h2 className="text-xl font-bold text-gray-800">ActionHouse.lk</h2>
          <div className="hidden space-x-4 md:flex">
            <Link
              to="/"
              className="flex items-center p-2 text-sm font-semibold text-center text-gray-500 hover:bg-gray-100"
            >
              <HomeIcon className="w-5" />
            </Link>
            <Link
              to="/auctions"
              className="flex items-center p-2 text-sm font-semibold text-gray-500 rounded hover:bg-gray-100 "
            >
              <TagIcon className="w-5 " />
            </Link>
            <Link
              to="/profile"
              className="flex items-center p-2 text-sm font-semibold text-gray-500 rounded hover:bg-gray-100"
            >
              <UserIcon className="w-5" />
            </Link>
            <div className="flex p-2">
              <Link
                to="/login"
                className="flex items-center text-sm font-semibold text-black hover:underline "
              >
                Login / Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
