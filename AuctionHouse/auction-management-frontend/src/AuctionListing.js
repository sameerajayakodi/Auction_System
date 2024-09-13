import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionCard from "./AuctionCard";

// AuctionListing Component
const AuctionListing = () => {
  const [auctions, setAuctions] = useState([]);
  const [filter, setFilter] = useState("");

  // Dummy auction data
  useEffect(() => {
    const dummyAuctions = [
      {
        id: 1,
        title: "Antique Vase",
        description: "A rare antique vase from the Ming dynasty.",
        currentBid: 150,
        image: "https://via.placeholder.com/300",
        endDate: "2 hours",
      },
      {
        id: 2,
        title: "Vintage Car",
        description: "A well-preserved vintage car from the 1960s.",
        currentBid: 20000,
        image: "https://via.placeholder.com/300",
        endDate: "1 day",
      },
      {
        id: 3,
        title: "Rare Painting",
        description: "A masterpiece painting from a renowned artist.",
        currentBid: 3000,
        image: "https://via.placeholder.com/300",
        endDate: "3 days",
      },
      {
        id: 4,
        title: "Luxury Watch",
        description: "A luxurious watch with a sleek design.",
        currentBid: 5000,
        image: "https://via.placeholder.com/300",
        endDate: "5 hours",
      },
    ];
    setAuctions(dummyAuctions);
  }, []);

  // Filter auctions by title
  const filteredAuctions = auctions.filter((auction) =>
    auction.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Active Auctions</h1>

      {/* Search Filter */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Filter by keyword..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-md"
        />
      </div>

      {/* Auction Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAuctions.map((auction) => (
          <Link
            to={`/auctions/${auction.id}`}
            key={auction.id}
            className="block"
          >
            <AuctionCard auction={auction} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuctionListing;
