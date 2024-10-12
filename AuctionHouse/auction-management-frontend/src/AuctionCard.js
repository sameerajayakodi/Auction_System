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

      if (!auctionEnd.isValid()) {
        setTimeRemaining("Invalid date");
        setBadgeColor("bg-gray-500");
        return;
      }

      const diffInMilliseconds = auctionEnd.diff(now);
      const duration = dayjs.duration(diffInMilliseconds);

      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      if (diffInMilliseconds <= 0) {
        setTimeRemaining("Bid Ended");
        setBadgeColor("bg-gray-500");
        return;
      }

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

      const diffInMinutes = duration.asMinutes();
      if (diffInMinutes < 60) {
        setBadgeColor("bg-red-600");
      } else if (diffInMinutes < 1440) {
        setBadgeColor("bg-yellow-500");
      } else {
        setBadgeColor("bg-green-600");
      }
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  const handlePlaceBid = () => {
    navigate(`/auctions/${auction.id}`);
  };

  return (
    <div className="relative w-full max-w-xs p-2 bg-gray-100 rounded-lg group hover:shadow-2xl">
      <div className="relative w-full transition-opacity duration-300 group-hover:opacity-40">
        <img
          src={image}
          alt={title}
          className="object-cover h-full rounded-lg"
        />
        <span
          className={`absolute px-4 py-2 text-xs font-semibold text-white ${badgeColor} rounded-full shadow-md top-2 right-2`}
        >
          {timeRemaining}
        </span>
      </div>

      <div className="px-2 text-center rounded-md bg-opacity-80">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="mb-4 text-xs text-gray-500 ">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-400">
            Current Bid
          </span>
          <span className="px-2 text-xl font-semibold text-white bg-blue-600 rounded-md">
            Rs.{currentBid}
          </span>
        </div>
      </div>

      <button
        onClick={handlePlaceBid}
        className="absolute hidden px-5 py-2 text-sm font-medium text-white transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full group-hover:block group-hover:opacity-100 top-1/2 left-1/2"
      >
        View Deal
      </button>
    </div>
  );
};

export default AuctionCard;
