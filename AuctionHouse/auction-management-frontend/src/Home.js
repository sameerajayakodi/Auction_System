import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import about from "./images/about.png";
import image from "./images/back.jpg";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const nextAuctionDate = new Date("2024-09-22T00:00:00"); // Replace with your auction date

    const interval = setInterval(() => {
      const now = new Date();
      const difference = nextAuctionDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section - Full Background Image */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Welcome to Auction House</h1>
          <p className="mb-8 text-2xl">
            Discover unique auctions and place your bids
          </p>
          <Link
            to="/auctions"
            className="flex items-center px-6 py-3 font-bold text-black transition duration-300 bg-yellow-600 rounded-3xl text-md hover:bg-white hover:text-black"
          >
            Explore Auctions <FaArrowRight className="ml-2" />
          </Link>
        </div>
        {/* Countdown Timer */}
        <div className="absolute flex flex-row items-center w-2/3 h-20 text-center transform -translate-x-1/2 bg-green-500 rounded-full shadow-lg justify-evenly left-1/2 -bottom-8">
          <span className="px-4 py-1 text-4xl font-bold text-white ">
            Next Auction Starts In :
          </span>
          <div className="font-mono text-5xl font-bold">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>
        </div>
      </div>

      {/* About Section */}
      <div>
        <div className="grid items-center text-white bg-[#0A0A0B] grid-cols-1mx-auto md:grid-cols-2">
          {/* Text Content */}
          <div className="px-10 ">
            <h2 className="mb-8 text-4xl font-bold text-left">About Us</h2>
            <p className="text-lg leading-relaxed text-left text-gray-200">
              Auction House is a leading online auction platform where you can
              find a variety of unique products. From antiques to modern
              gadgets, we provide a safe and secure way to participate in
              auctions worldwide.
            </p>
          </div>

          {/* Icon/Image */}
          <div className="flex justify-center p-20 bg-white">
            <img
              src={about}
              alt="About us illustration"
              className="w-3/4 h-auto"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* ...rest of the content */}
    </>
  );
};

export default Home;
