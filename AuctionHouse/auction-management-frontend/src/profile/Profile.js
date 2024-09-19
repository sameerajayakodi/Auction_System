import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="flex flex-row h-screen p-4 text-white bg-gray-900 w-80 ">
        <nav>
          <ul className="mt-40 space-y-10">
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
