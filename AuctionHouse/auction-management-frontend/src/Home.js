import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaArrowRight, FaBell, FaList, FaLock } from "react-icons/fa";
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
        <div className="absolute flex flex-row items-center w-2/3 h-20 text-center transform -translate-x-1/2 rounded-full shadow-lg bg-stone-300 justify-evenly left-1/2 -bottom-8">
          <span className="px-4 py-1 text-2xl font-bold text-gray-900">
            Next Auction Starts In :
          </span>
          <div className="text-4xl font-bold text-gray-900 font-inter">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>
        </div>
      </div>

      {/* =================================================================================== */}
      <div className="flex items-center justify-center px-6 py-16 text-center bg-white ">
        <div className="container flex justify-between w-full space-x-4 overflow-x-auto scrolling-touch no-scrollbar">
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
      {/* =================================================================================== */}
      {/* About Section */}
      <div>
        <div className="grid items-center text-white bg-[#212121] grid-cols-1mx-auto md:grid-cols-2">
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

      <div className="py-16 bg-gray-200 px-28">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="p-8 py-20 transition duration-300 bg-white border-2 shadow-lg cursor-pointer bg-slate hover:scale-95 rounded-3xl">
              <FaList className="mx-auto mb-4 text-4xl font-bold text-black " />
              <h3 className="mb-4 text-xl font-semibold">Wide Selection</h3>
              <p className="text-gray-600 ">
                We offer a wide variety of auctions, from rare collectibles to
                the latest gadgets.
              </p>
            </div>
            <div className="p-8 py-20 transition duration-300 bg-white border-2 shadow-lg cursor-pointer bg-slate hover:scale-95 rounded-3xl">
              <FaLock className="mx-auto mb-4 text-4xl font-bold text-black" />
              <h3 className="mb-4 text-xl font-semibold">Secure Bidding</h3>
              <p className="text-gray-600 ">
                Our platform ensures a safe and secure bidding experience for
                all users.
              </p>
            </div>
            <div className="p-8 py-20 transition duration-300 bg-white border-2 shadow-lg cursor-pointer bg-slate hover:scale-95 rounded-3xl">
              <FaBell className="mx-auto mb-4 text-4xl font-bold text-black" />
              <h3 className="mb-4 text-xl font-semibold">Real-time Updates</h3>
              <p className="text-gray-600 ">
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

      <div className="px-6 py-16 bg-[#212121]">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-white">
            How It Works
          </h2>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Step 1: Register</h3>
              <p className="text-gray-600">
                Create an account to participate in auctions and track your
                bids.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">
                Step 2: Browse Auctions
              </h3>
              <p className="text-gray-600">
                Find auctions that interest you and place your bids in
                real-time.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">
                Step 3: Win & Collect
              </h3>
              <p className="text-gray-600">
                Win auctions and get notified instantly. Securely pay and
                receive your items.
              </p>
            </div>
          </div>
        </div>
      </div>

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
