import React, { useState } from "react";
import ManageAuctions from "./ManageAuctions";
import AddAuction from "./AddAuction";
import EditAuction from "./EditAuction";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("manage");

  const renderContent = () => {
    switch (activeSection) {
      case "manage":
        return <ManageAuctions />;
      case "add":
        return <AddAuction />;
      case "edit":
        return <EditAuction />;
      default:
        return <ManageAuctions />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 p-4 text-white bg-gray-800">
        <h2 className="mb-6 text-2xl font-bold">Admin Dashboard</h2>
        <ul>
          <li
            className={`p-2 cursor-pointer ${
              activeSection === "manage" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveSection("manage")}
          >
            Manage Auctions
          </li>
          <li
            className={`p-2 cursor-pointer ${
              activeSection === "add" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveSection("add")}
          >
            Add Auction
          </li>
          <li
            className={`p-2 cursor-pointer ${
              activeSection === "edit" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveSection("edit")}
          >
            Edit Auction
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 bg-white">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
