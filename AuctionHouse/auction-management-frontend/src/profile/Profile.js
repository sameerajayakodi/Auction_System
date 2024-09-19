import React from "react";
import { Link, Outlet } from "react-router-dom";
// Importing icons from react-icons
import { FaCreditCard, FaHistory, FaLock, FaUser } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="flex flex-row h-screen p-4 font-semibold bg-gray-100 w-80 ">
        <nav>
          <ul className="mt-40 space-y-10">
            <li className="mb-4">
              <Link to="/profile/info" className="flex items-center text-lg">
                <FaUser className="mr-2" /> {/* Replacing with FaUser icon */}
                Profile
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/profile/password"
                className="flex items-center text-lg"
              >
                <FaLock className="mr-2" /> {/* Replacing with FaLock icon */}
                Password
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/profile/payment" className="flex items-center text-lg">
                <FaCreditCard className="mr-2" />{" "}
                {/* Replacing with FaCreditCard icon */}
                Payment
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/profile/history" className="flex items-center text-lg">
                <FaHistory className="mr-2" />{" "}
                {/* Replacing with FaHistory icon */}
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
