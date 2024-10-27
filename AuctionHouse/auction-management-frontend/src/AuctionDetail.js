import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConfirmationModal from "../src/components/ConfirmationModal";
import Notification from "../src/components/Notification";
import { UserContext } from "./auth/UserContext";
import BidHistory from "./BidHistory";

const AuctionDetail = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [auction, setAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const response = await fetch(
          `https://localhost:44377/api/auction/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch auction data");
        }
        const data = await response.json();
        setAuction(data);
      } catch (error) {
        console.error(error);
        setNotification("Could not load auction details. Please try again.");
      }
    };
    fetchAuction();
  }, [id]);

  const placeBid = async () => {
    try {
      const bidData = {
        auctionId: auction.id,
        userId: user.id,
        amount: Number(bidAmount),
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(
        "https://localhost:44377/api/Bids/CreateBid",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bidData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to place bid.");
      }

      const result = await response.json();
      console.log("Bid placed:", result);

      setNotification("Bid placed successfully!");
      setBidAmount("");
    } catch (error) {
      console.error(error);
      setNotification("Bid placed successfully!");
    }
  };

  const handlePlaceBid = () => {
    if (Number(bidAmount) <= auction.currentBid) {
      setNotification("Your bid must be higher than the current bid.");
    } else {
      setIsModalOpen(true);
    }
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
            src={auction.image}
            alt={auction.title}
            className="object-cover w-50 h-full ml-20"
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
