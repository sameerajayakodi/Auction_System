import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConfirmationModal from "../src/components/ConfirmationModal"; // Import the modal
import Notification from "../src/components/Notification"; // Import the notification component
import BidHistory from "./BidHistory";
import ChairImage from "./images/yellowChair.jpg"; // Placeholder image if needed

const AuctionDetail = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [notification, setNotification] = useState(""); // Notification state

  // Fetch auction details from the backend
  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await fetch(`https://your-api-url.com/auctions/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch auction details");
        }
        const data = await response.json();
        setAuction(data);
      } catch (error) {
        console.error(error);
        setNotification("Failed to load auction details.");
      }
    };

    fetchAuctionDetails();
  }, [id]);

  const placeBid = async () => {
    try {
      const response = await fetch(
        `https://your-api-url.com/auctions/${id}/bid`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bidAmount: Number(bidAmount) }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to place bid");
      }

      const updatedAuction = await response.json(); // Assume the backend returns the updated auction data
      setAuction(updatedAuction);
      setNotification("Bid placed successfully!");
      setBidAmount(""); // Clear the input field
    } catch (error) {
      console.error(error);
      setNotification("Failed to place bid. Please try again.");
    }
  };

  const handlePlaceBid = () => {
    setIsModalOpen(true); // Open modal when the "Place Bid" button is clicked
  };

  const handleConfirmBid = () => {
    setIsModalOpen(false); // Close modal after confirmation
    placeBid(); // Proceed with placing the bid
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal without placing bid
  };

  const handleNotificationClose = () => {
    setNotification(""); // Close notification
  };

  if (!auction) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 md:w-screen">
      <div className="flex flex-col h-full bg-white rounded-none shadow-2xl md:grid md:grid-cols-2 md:h-screen">
        {/* Top Section - Auction Image */}
        <div className="w-full md:h-full">
          <img
            src={auction.image || ChairImage} // Use placeholder image if auction image is not available
            alt={auction.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Bottom Section - Auction Details */}
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
          <p className="mb-4 text-lg text-center">Ends in: {auction.endTime}</p>

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

          <div className="flex justify-center mb-4 space-x-4">
            <button className="w-1/2 px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700">
              Add to Cart
            </button>
            <button className="w-1/2 px-4 py-2 text-white bg-gray-400 rounded-lg shadow-md hover:bg-gray-500">
              Add to Wishlist
            </button>
          </div>

          <div className="mt-6">
            <BidHistory auctionId={id} />
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmBid}
      />

      {/* Notification */}
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
