import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();

  // Determine if the current route is a nested route
  const isNestedRoute =
    location.pathname.includes("/admin/manage-auctions") ||
    location.pathname.includes("/admin/manage-users") ||
    location.pathname.includes("/admin/edit-user");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 h-screen text-white bg-gray-800">
        <div className="p-6 text-xl font-bold">Auction Admin</div>
        <nav className="mt-10">
          <ul>
            <li className="p-4 hover:bg-gray-600">
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-600">
              <Link to="/admin/manage-auctions">Manage Auctions</Link>
            </li>
            <li className="p-4 hover:bg-gray-600">
              <Link to="/admin/manage-users">Manage Users</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 h-screen p-10 bg-gray-100">
        {/* Conditionally render dashboard content */}
        {!isNestedRoute && (
          <>
            <h1 className="mb-6 text-3xl font-bold">Admin Dashboard</h1>

            {/* Related Cards */}
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
              {/* Total Auctions */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold">Total Auctions</h2>
                <p className="text-2xl">24</p>
              </div>

              {/* Total Users */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold">Total Users</h2>
                <p className="text-2xl">120</p>
              </div>

              {/* Recent Transactions */}
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold">Recent Transactions</h2>
                <ul className="mt-4">
                  <li className="text-sm">
                    John Doe placed a bid on Auction #5
                  </li>
                  <li className="text-sm">
                    Jane Smith placed a bid on Auction #12
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
