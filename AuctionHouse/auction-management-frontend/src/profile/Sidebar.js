import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen p-4 bg-gray-100 shadow-md">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">LOGO</h1>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/profile" className="flex items-center">
              <span className="mr-2 text-xl">🏠</span>
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/password" className="flex items-center">
              <span className="mr-2 text-xl">🔒</span>
              Password
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/payment" className="flex items-center">
              <span className="mr-2 text-xl">💳</span>
              Payment
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/history" className="flex items-center">
              <span className="mr-2 text-xl">🕒</span>
              History
            </Link>
          </li>
          <li>
            <Link to="/logout" className="text-blue-600">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
