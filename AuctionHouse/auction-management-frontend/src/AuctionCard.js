import React from "react";
import { FaGavel } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuctionCard = ({ auction }) => {
  const { title, description, currentBid, image, endDate } = auction;
  const navigate = useNavigate();

  const handlePlaceBid = () => {
    navigate(`/auctions/${auction.id}`);
  };

  return (
    <div className="overflow-hidden transition-transform duration-200 ease-in-out transform bg-white shadow-xl hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="object-cover w-full h-52 " />
        <span className="absolute px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-md shadow-lg top-4 left-4">
          Ends in: {endDate}
        </span>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Current Bid</p>
            <p className="text-2xl font-bold text-green-600">${currentBid}</p>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <FaGavel className="text-xl text-blue-500" />
            <span className="text-sm font-medium">Place your bid now</span>
          </div>
        </div>
        <button
          onClick={handlePlaceBid}
          className="w-full px-4 py-3 font-semibold text-white transition-colors duration-300 ease-in-out rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
        >
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default AuctionCard;
