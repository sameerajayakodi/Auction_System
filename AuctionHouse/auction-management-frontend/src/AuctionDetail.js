import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BidHistory from "./BidHistory";
import ChairImage from "./images/yellowChair.jpg"; // Make sure the path is correct

const AuctionDetail = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState("");

  // Mock auction data
  const mockAuctionData = {
    id: id,
    title: "Modern Yellow Chair",
    description:
      "A sleek and modern chair perfect for any living space. Built with premium materials to offer comfort and style.",
    currentBid: 420,
    image: ChairImage,
    endTime: "2 hours",
  };

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setAuction(mockAuctionData);
    }, 1000); // Simulate a delay of 1 second
  }, [id]);

  const placeBid = () => {
    // Simulate placing a bid and updating the current bid
    setTimeout(() => {
      setAuction((prevAuction) => ({
        ...prevAuction,
        currentBid: prevAuction.currentBid + Number(bidAmount),
      }));
      alert("Bid placed successfully!");
      setBidAmount(""); // Clear the bid amount input
    }, 500); // Simulate a delay of 0.5 seconds
  };

  if (!auction) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 md:w-screen">
      <div className="flex flex-col h-full bg-white rounded-none shadow-2xl md:grid md:grid-cols-2 md:h-screen">
        {/* Top Section - Auction Image (will stack on mobile) */}
        <div className="w-full md:h-full">
          <img
            src={auction.image}
            alt={auction.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Bottom Section - Auction Details (stacked on mobile) */}
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
            onClick={placeBid}
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
    </div>
  );
};

export default AuctionDetail;
