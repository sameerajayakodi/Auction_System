import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaArrowRight, FaBell, FaList, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import background from "./images//background.jpg";
import about from "./images/about.png";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const nextAuctionDate = new Date("2024-10-30T00:00:00"); // Replace with your auction date

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
        <div className="relative h-screen">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
            <h1 className="mb-4 text-6xl font-bold">
              Welcome to Auction House
            </h1>
            <p className="mb-8 text-2xl font-semibold">
              Discover unique auctions and place your bids
            </p>
            <Link
              to="/auctions"
              className="flex items-center px-8 py-3 text-xl font-bold text-white transition duration-300 bg-[#7E4EAA] rounded-full hover:bg-purple-900"
            >
              Explore Auctions
              <FaArrowRight className="ml-2" />{" "}
              {/* Adding right arrow icon with margin */}
            </Link>
          </div>
        </div>
        {/* Countdown Timer */}
        <div className="absolute right-0 flex flex-col items-center p-6 py-8 text-center transform -translate-x-1/2 bg-white shadow-2xl rounded-b-3xl top-2 ">
          <span className="text-2xl font-bold text-gray-900">
            Next Auction Starts In
          </span>
          <div className="text-4xl font-bold text-gray-900 font-inter">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>
        </div>
      </div>

      {/* =================================================================================== */}
      <div className="flex items-center justify-center px-6 py-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 ">
        <div className="container flex justify-between w-full space-x-4 overflow-x-auto scrolling-touch bg-white rounded-full shadow-xl no-scrollbar">
          {/* Total Items */}
          <div className="flex flex-col items-center w-1/4 p-4">
            <h3 className="mb-2 text-5xl font-bold ">
              <CountUp start={0} end={1200} duration={3} />+ {/* Total items */}
            </h3>
            <p className="text-lg font-semibold text-gray-700">Total Items</p>
          </div>

          {/* Total Users */}
          <div className="flex flex-col items-center w-1/4 p-4 ">
            <h3 className="mb-2 text-5xl font-bold">
              <CountUp start={0} end={450} duration={3} />+ {/* Total users */}
            </h3>
            <p className="text-lg font-semibold text-gray-700">Total Users</p>
          </div>

          {/* Total Auctions */}
          <div className="flex flex-col items-center w-1/4 p-4 ">
            <h3 className="mb-2 text-5xl font-bold">
              <CountUp start={0} end={90} duration={3} />+{" "}
              {/* Total auctions */}
            </h3>
            <p className="text-lg font-semibold">Total Auctions</p>
          </div>

          {/* Related Auctions */}
          <div className="flex flex-col items-center w-1/4 p-4 ">
            <h3 className="mb-2 text-5xl font-bold ">
              <CountUp start={0} end={50} duration={3} />+{" "}
              {/* Related auctions */}
            </h3>
            <p className="text-lg font-semibold text-gray-700">
              Featured Auctions
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================================*/}

      <div className="px-6 py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <h2 className="mb-12 text-5xl font-bold text-center text-gray-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative p-8 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full shadow-lg left-1/2">
                <svg
                  className="w-10 h-10" // Increased icon size
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12V16M12 12V16M8 12V16M12 4v4m8 2a8 8 0 11-16 0 8 8 0 0116 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 mb-4 text-3xl font-semibold text-gray-800">
                Step 1: Register
              </h3>
              <p className="text-lg text-gray-600">
                {" "}
                {/* Increased paragraph font size */}
                Create an account to participate in auctions and track your
                bids.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-8 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full shadow-lg left-1/2">
                <svg
                  className="w-10 h-10" // Increased icon size
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-4.553a1.5 1.5 0 10-2.121-2.121L12 8.879 6.568 3.447a1.5 1.5 0 00-2.121 2.121L9 10M19 10v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 mb-4 text-3xl font-semibold text-gray-800">
                Step 2: Browse Auctions
              </h3>
              <p className="text-lg text-gray-600">
                {" "}
                {/* Increased paragraph font size */}
                Find auctions that interest you and place your bids in
                real-time.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-8 transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
              <div className="absolute top-0 p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full shadow-lg left-1/2">
                <svg
                  className="w-10 h-10" // Increased icon size
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16v-2m0 0V8m0 6h8m4 4h.01M3 16h.01M12 20v-4m0 0H8m4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="mt-8 mb-4 text-3xl font-semibold text-gray-800">
                Step 3: Win & Collect
              </h3>
              <p className="text-lg text-gray-600">
                {" "}
                {/* Increased paragraph font size */}
                Win auctions and get notified instantly. Securely pay and
                receive your items.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================================== */}
      {/* About Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="grid items-center gap-10 px-10 mx-auto max-w-7xl md:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="mb-6 text-5xl font-extrabold text-gray-800">
              About Us
            </h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Auction House is a leading online auction platform where you can
              find a variety of unique products. From antiques to modern
              gadgets, we provide a safe and secure way to participate in
              auctions worldwide.
            </p>
          </div>

          {/* Icon/Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={about}
              alt="About us illustration"
              className="w-4/5 h-auto transition-transform duration-500 transform rounded-lg shadow-lg hover:scale-105"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100 rounded-full opacity-50 md:w-60 md:h-60"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-50 md:w-60 md:h-60"></div>
      </div>

      <div className="py-16 bg-gradient-to-r from-[#B29CCB] via-[#E0A3C2] to-[#F7D4D3]">
        <div className="container px-8 mx-auto">
          <h2 className="mb-10 text-4xl font-bold text-center text-gray-800">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {/* Card 1 */}
            <div className="relative p-10 py-20 overflow-hidden bg-white cursor-pointer bg-opacity-60 backdrop-blur-md ">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-200 to-gray-50 opacity-10"></div>
              <FaList className="mx-auto mb-6 text-5xl font-bold text-indigo-600" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Wide Selection
              </h3>
              <p className="text-lg text-gray-600">
                We offer a wide variety of auctions, from rare collectibles to
                the latest gadgets.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative p-10 py-20 overflow-hidden bg-white cursor-pointer bg-opacity-60 backdrop-blur-md ">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-200 to-gray-50 opacity-10"></div>
              <FaLock className="mx-auto mb-6 text-5xl font-bold text-blue-600" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Secure Bidding
              </h3>
              <p className="text-lg text-gray-600">
                Our platform ensures a safe and secure bidding experience for
                all users.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative p-10 py-20 overflow-hidden bg-white cursor-pointer bg-opacity-60 ">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-200 to-gray-50 opacity-10"></div>
              <FaBell className="mx-auto mb-6 text-5xl font-bold text-green-600" />
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Real-time Updates
              </h3>
              <p className="text-lg text-gray-600">
                Get real-time notifications and updates on your bids and
                auctions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      {/* ...rest of the content */}
      {/* Testimonials Section */}

      {/* ================================================================================== */}

      {/* ======================================================================================== */}
      <div className="px-6 py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <p className="mb-4 italic text-gray-600">
                "Auction House helped me find a rare collectible I was searching
                for. The bidding process was smooth and secure."
              </p>
              <h3 className="text-xl font-semibold">John Doe</h3>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <p className="mb-4 italic text-gray-600">
                "I love the variety of items available. The real-time updates
                kept me on track with my bids!"
              </p>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
