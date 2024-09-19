import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Full Image Section */}
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

      {/* Bottom Content Section */}
      <div className="px-6 py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">
            Why Choose Us?
          </h2>

          {/* Three-column feature section */}
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Wide Selection</h3>
              <p className="text-gray-600">
                We offer a wide variety of auctions, from rare collectibles to
                the latest gadgets.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Secure Bidding</h3>
              <p className="text-gray-600">
                Our platform ensures a safe and secure bidding experience for
                all users.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-semibold">Real-time Updates</h3>
              <p className="text-gray-600">
                Get real-time notifications and updates on your bids and
                auctions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="py-8 text-white bg-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            Stay updated! Subscribe to our newsletter for the latest auctions.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-64 p-3 rounded-l-lg"
            />
            <button className="px-6 py-3 font-bold text-black bg-yellow-500 rounded-r-lg hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
