import React from "react";
import { useNavigate } from "react-router-dom";

const AuctionCard = ({ auction }) => {
  const { title, description, currentBid, image, endDate } = auction;
  const navigate = useNavigate();

  const handlePlaceBid = () => {
    navigate(`/auctions/${auction.id}`);
  };

  return (
    <div className="w-full h-full py-2 transform border-gray-300 border-y border-x ">
      <div className="relative p-2">
        {/* Image Section */}
        <img src={image} alt={title} className="object-cover w-full h-full" />
        {/* End Date Badge */}
        <span className="absolute px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded-full shadow-md top-2 right-2">
          Ends in: {endDate}
        </span>
      </div>

      {/* Content Section */}
      <div className="px-2 text-center bg-white ">
        {/* Title */}
        <h3 className="font-bold text-gray-800 text-md">{title}</h3>

        {/* Description */}
        <p className="mb-2 text-xs text-gray-500 line-clamp-2">{description}</p>

        {/* Current Bid */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Current Bid:</span>
          <span className="text-xl font-semibold text-green-600">
            ${currentBid}
          </span>
        </div>

        {/* Place Bid Button */}
        <button
          onClick={handlePlaceBid}
          className="px-5 py-2 mb-2 text-sm font-medium text-center text-gray-900 border border-gray-800 rounded-lg hover:text-white hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 me-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-black dark:focus:ring-gray-800"
        >
          Place your bid now
        </button>
      </div>
    </div>
  );
};

export default AuctionCard;
