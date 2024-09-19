import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative h-screen">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://example.com/your-background-image.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content on top of the background */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="mb-4 text-6xl font-bold">Welcome to Auction House</h1>
        <p className="mb-8 text-2xl">
          Discover unique auctions and place your bids
        </p>

        {/* Button to go to auction listing */}
        <Link
          to="/auctions"
          className="px-8 py-3 text-lg font-bold text-black transition duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-600"
        >
          Explore Auctions
        </Link>
      </div>
    </div>
  );
};

export default Home;
