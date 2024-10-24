import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConfirmationModal from "../src/components/ConfirmationModal";
import Notification from "../src/components/Notification";
import { UserContext } from "./auth/UserContext"; // Import UserContext
import BidHistory from "./BidHistory";
import ChairImage from "./images/yellowChair.jpg";

const AuctionDetail = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext); // Get the user from context
  const [auction, setAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    // Dummy auction data
    const dummyAuction = {
      id: "1",
      title: "Modern Yellow Chair",
      description:
        "A stylish and comfortable yellow chair, perfect for any room.",
      currentBid: 150.0,
      endDate: "2024-11-01T23:59:59",
      image: ChairImage,
    };

    // Set the dummy auction data
    setAuction(dummyAuction);
  }, [id]);

  const placeBid = async () => {
    try {
      const bidData = {
        auctionId: auction.id,
        userId: user.id, // Use user ID from context
        amount: Number(bidAmount),
        timestamp: new Date().toISOString(),
      };

      // Simulate successful bid placement
      console.log("Bid placed:", bidData);
      setNotification("Bid placed successfully!");
      setBidAmount("");
    } catch (error) {
      console.error(error);
      setNotification("Failed to place bid. Please try again.");
    }
  };

  const handlePlaceBid = () => {
    setIsModalOpen(true);
  };

  const handleConfirmBid = () => {
    setIsModalOpen(false);
    placeBid();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNotificationClose = () => {
    setNotification("");
  };

  if (!auction) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 md:w-screen">
      <div className="flex flex-col h-full bg-white rounded-none shadow-2xl md:grid md:grid-cols-2 md:h-screen">
        <div className="w-full md:h-full">
          <img
            src={auction.image || ChairImage}
            alt={auction.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-center w-2/3 p-6 bg-white lg:ml-auto lg:mr-auto ">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
            {auction.title}
          </h2>
          <p className="mb-4 text-center text-gray-600">
            {auction.description}
          </p>
          <p className="mb-4 text-2xl font-semibold text-center text-yellow-500">
            ${auction.currentBid}
          </p>
          <p className="mb-4 text-lg text-center">Ends on: {auction.endDate}</p>

          <div className="flex justify-center mb-4">
            <input
              type="number"
              placeholder="Enter your bid..."
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              className="w-full px-3 py-2 text-center border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            onClick={handlePlaceBid}
            className="w-full px-4 py-2 mb-4 text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600"
          >
            Place Bid
          </button>

          <div className="mt-6">
            <BidHistory auctionId={id} />
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmBid}
      />

      {notification && (
        <Notification
          message={notification}
          onClose={handleNotificationClose}
        />
      )}
    </div>
  );
};

export default AuctionDetail;
