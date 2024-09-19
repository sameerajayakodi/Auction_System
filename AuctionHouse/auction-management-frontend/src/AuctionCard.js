import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
dayjs.extend(duration);

const AuctionCard = ({ auction }) => {
  const { title, description, currentBid, image, endDate } = auction;
  const navigate = useNavigate();

  const [timeRemaining, setTimeRemaining] = useState("");
  const [badgeColor, setBadgeColor] = useState("bg-green-600");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = dayjs();
      const auctionEnd = dayjs(endDate);

      // Check if endDate is valid
      if (!auctionEnd.isValid()) {
        setTimeRemaining("Invalid date");
        setBadgeColor("bg-gray-500"); // Color for invalid date
        return;
      }

      // Calculate the difference
      const diffInMilliseconds = auctionEnd.diff(now);
      const duration = dayjs.duration(diffInMilliseconds);

      // Extract days, hours, minutes, and seconds
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      // Check if auction has ended
      if (diffInMilliseconds <= 0) {
        setTimeRemaining("Bid Ended");
        setBadgeColor("bg-gray-500"); // Color for auction ended
        return;
      }

      // Format time remaining
      let timeString = "";
      if (days > 0) {
        timeString = `Ends in: ${days} day${days > 1 ? "s" : ""}`;
      } else if (hours > 0) {
        timeString = `Ends in: ${hours} hour${hours > 1 ? "s" : ""}`;
      } else if (minutes > 0) {
        timeString = `Ends in: ${minutes} minute${minutes > 1 ? "s" : ""}`;
      } else {
        timeString = `Ends in: ${seconds} second${seconds > 1 ? "s" : ""}`;
      }

      setTimeRemaining(timeString);

      // Set badge color based on remaining time
      const diffInMinutes = duration.asMinutes();
      if (diffInMinutes < 60) {
        setBadgeColor("bg-red-600"); // Less than 1 hour
      } else if (diffInMinutes < 1440) {
        // 24 hours = 1440 minutes
        setBadgeColor("bg-yellow-500"); // Between 1 hour and 1 day
      } else {
        setBadgeColor("bg-green-600"); // More than 1 day
      }
    };

    // Update time every second
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [endDate]);

  const handlePlaceBid = () => {
    navigate(`/auctions/${auction.id}`);
  };

  return (
    <div className="relative w-full h-full p-6 py-2 group">
      <div className="relative p-2 transition-opacity duration-300 border-2 group-hover:opacity-40">
        {/* Image Section */}
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full border "
        />
        {/* End Date Badge */}
        <span
          className={`absolute px-3 py-1 text-xs font-semibold text-white ${badgeColor} rounded-full shadow-md top-2 right-2`}
        >
          {timeRemaining}
        </span>
      </div>

      {/* Content Section */}
      <div className="px-2 text-center transition-opacity duration-300 bg-white group-hover:opacity-50">
        {/* Title */}
        <h3 className="font-bold text-gray-800 text-md">{title}</h3>

        {/* Description */}
        <p className="mb-2 text-xs text-gray-500">{description}</p>

        {/* Current Bid */}
        <div className="flex items-center justify-between bottom">
          <span className="text-sm font-semibold text-gray-400">
            Current Bid
          </span>
          <span className="px-2 text-xl font-semibold text-black bg-gray-200 ">
            Rs.{currentBid}
          </span>
        </div>
      </div>

      {/* Place Bid Button (popup on hover, centered) */}
      <button
        onClick={handlePlaceBid}
        className="absolute hidden px-5 py-2 text-sm font-medium text-white transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-black border border-gray-800 rounded-lg group-hover:block group-hover:opacity-100 top-1/2 left-1/2 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:border-gray-600 dark:focus:ring-gray-800"
      >
        Bid Now
      </button>
    </div>
  );
};

export default AuctionCard;
