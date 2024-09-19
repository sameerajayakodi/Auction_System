import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import EditUser from "./admin/EditUser";
import ManageAuctions from "./admin/ManageAuctions";
import ManageUsers from "./admin/ManageUsers";
import AuctionDetail from "./AuctionDetail";
import AuctionListing from "./AuctionListing";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import Home from "./Home";
import History from "./profile/History"; // Existing history component
import Password from "./profile/Password"; // Existing password component
import Payment from "./profile/Payment"; // Existing payment component
import Profile from "./profile/Profile";
import ProfileInfo from "./profile/ProfileInfo"; // Create a separate component for profile info

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auctions" element={<AuctionListing />} />
          <Route path="/auctions/:id" element={<AuctionDetail />} />

          {/* Profile route with nested sub-routes */}

          {/* Profile route with nested child routes */}
          <Route path="/profile" element={<Profile />}>
            {/* Redirect /profile to /profile/info */}
            <Route index element={<Navigate to="/profile/info" />} />

            {/* Define other child routes under /profile */}
            <Route path="info" element={<ProfileInfo />} />
            <Route path="password" element={<Password />} />
            <Route path="payment" element={<Payment />} />
            <Route path="history" element={<History />} />
          </Route>

          {/* You can define other routes here, if needed */}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin routes */}
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
