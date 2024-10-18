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
import History from "./profile/History";
import Password from "./profile/Password";
import Payment from "./profile/Payment";
import Profile from "./profile/Profile";
import ProfileInfo from "./profile/ProfileInfo";
import { UserProvider } from "./profile/UserContext"; // Import the context provider

function App() {
  return (
    <UserProvider>
      {" "}
      {/* Wrap the app with UserProvider */}
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auctions" element={<AuctionListing />} />
            <Route path="/auctions/:id" element={<AuctionDetail />} />
            <Route path="/profile" element={<Profile />}>
              <Route index element={<Navigate to="/profile/info" />} />
              <Route path="info" element={<ProfileInfo />} />
              <Route path="password" element={<Password />} />
              <Route path="payment" element={<Payment />} />
              <Route path="history" element={<History />} />
            </Route>
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
    </UserProvider>
  );
}

export default App;
