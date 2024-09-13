import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard"; // The admin dashboard with sidebar
import EditUser from "./admin/EditUser";
import ManageAuctions from "./admin/ManageAuctions"; // Admin manage auctions page
import ManageUsers from "./admin/ManageUsers";
import AuctionDetail from "./AuctionDetail";
import AuctionListing from "./AuctionListing";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<AuctionListing />} />
          <Route path="/auctions/:id" element={<AuctionDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminDashboard />}>
            <Route path="manage-auctions" element={<ManageAuctions />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="edit-user/:userId" element={<EditUser />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
