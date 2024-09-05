import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <div className="flex items-center justify-between">
        <Link to="/admin" className="text-lg text-white">
          Admin Dashboard
        </Link>
        <div>
          <Link to="/admin/auctions" className="mr-4 text-white">
            Manage Auctions
          </Link>
          <Link to="/admin/users" className="text-white">
            Manage Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
