import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddAuction from "./AddAuction";
import AuctionDetail from "./AuctionDetail";
import AuctionListing from "./AuctionListing";
import Navbar from "./components/Navbar";
import EditAuction from "./EditAuction";
import Home from "./Home";
import Login from "./Login";
import ManageAuctions from "./ManageAuctions";
import Profile from "./Profile";
import Signup from "./Signup";

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
          <Route path="/signup" element={<Signup />} />

          {/* Admin routes without protection */}
          <Route path="/admin/auctions" element={<ManageAuctions />} />
          <Route path="/admin/add-auction" element={<AddAuction />} />
          <Route path="/admin/edit-auction/:id" element={<EditAuction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
