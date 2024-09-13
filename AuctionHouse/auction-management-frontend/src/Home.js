import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [featuredAuctions, setFeaturedAuctions] = useState([]);

  useEffect(() => {
    // Fetch featured auctions from the backend
    axios
      .get("/api/auctions/featured")
      .then((response) => setFeaturedAuctions(response.data))
      .catch((error) =>
        console.error("Error fetching featured auctions:", error)
      );
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Auction House</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for auctions..."
          className="w-full p-4 border border-gray-300 rounded-lg shadow-md"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Featured Auctions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredAuctions.map((auction) => (
          <Link
            to={`/auctions/${auction.id}`}
            key={auction.id}
            className="block p-4 border rounded-lg shadow-lg bg-white hover:bg-gray-100"
          >
            <img
              src={auction.image}
              alt={auction.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold">{auction.title}</h3>
            <p className="text-gray-600">
              Starting Bid: ${auction.startingBid}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
