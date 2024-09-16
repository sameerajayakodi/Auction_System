import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen p-4 bg-gray-100 shadow-md">
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/profile/info" className="flex items-center">
                <span className="mr-2 text-xl">🏠</span>
                Profile
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/profile/password" className="flex items-center">
                <span className="mr-2 text-xl">🔒</span>
                Password
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/profile/payment" className="flex items-center">
                <span className="mr-2 text-xl">💳</span>
                Payment
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/profile/history" className="flex items-center">
                <span className="mr-2 text-xl">🕒</span>
                History
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-grow p-6">
        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
