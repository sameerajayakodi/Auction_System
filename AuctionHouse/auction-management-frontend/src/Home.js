import React from "react";
import { Link } from "react-router-dom";
import image from "./images/1 (1).jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section - Full Background Image */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://example.com/your-background-image.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="mb-4 text-6xl font-bold">Welcome to Auction House</h1>
          <p className="mb-8 text-2xl">
            Discover unique auctions and place your bids
          </p>
          <Link
            to="/auctions"
            className="px-8 py-3 text-lg font-bold text-black transition duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            Explore Auctions
          </Link>
        </div>
      </div>

      {/* About Section */}

      <div className="px-20 py-16 bg-white">
        <div className="container flex flex-col items-center mx-auto md:flex-row">
          {/* Left Side - Text */}
          <div className="mb-8 md:w-1/2 md:mb-0 md:pr-12">
            <h2 className="mb-8 text-4xl font-bold">About Us</h2>
            <p className="text-xl text-gray-700">
              Auction House is a leading online auction platform where you can
              find a variety of unique products. From antiques to modern
              gadgets, we provide a safe and secure way to participate in
              auctions worldwide.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2">
            <img
              width={500}
              src={image}
              alt="Auction House About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">
            Why Choose Us?
          </h2>
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

      {/* How It Works Section */}
      <div className="px-6 py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">How It Works</h2>
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

      {/* Testimonials Section */}
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

      {/* Newsletter/Call to Action Section */}
      <div className="px-6 py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold">Stay Updated</h2>
          <p className="mb-8 text-xl text-gray-700">
            Subscribe to our newsletter for the latest auctions, deals, and
            updates.
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

      {/* Footer Section */}
      <div className="py-8 text-white bg-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-lg">© 2024 Auction House. All rights reserved.</p>
          <div className="mt-4">
            <Link
              to="/privacy-policy"
              className="mr-4 text-gray-400 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
