import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionCard from "./AuctionCard";
import FilterSidebar from "./FilterSidebar"; // Import the FilterSidebar component
import pocketWatch from "./images/1 (1).jpg";
import watch from "./images/1 (3).jpg";
import painting from "./images/1 (4).jpg";
import car from "./images/1 (5).jpg";
import antiqueVase from "./images/vase.jpg";

// AuctionListing Component
const AuctionListing = () => {
  const [auctions, setAuctions] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortOption, setSortOption] = useState("Relevance");
  const [appliedFilters, setAppliedFilters] = useState({
    priceRange: [0, 22320],
    selectedStatus: [],
    selectedCategory: [],
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dummy auction data
  useEffect(() => {
    const dummyAuctions = [
      {
        id: 1,
        title: "Antique Vase",
        description: "A rare antique vase from the Ming dynasty.",
        currentBid: 150,
        image: antiqueVase,
        endDate: "2 hours",
        category: "Antiques",
        status: "On sale",
      },
      {
        id: 2,
        title: "Vintage Car",
        description: "A well-preserved vintage car from the 1960s.",
        currentBid: 20000,
        image: car,
        endDate: "1 day",
        category: "Vehicles",
        status: "Ending soon",
      },
      {
        id: 3,
        title: "Rare Painting",
        description: "A masterpiece painting from a renowned artist.",
        currentBid: 3000,
        image: painting,
        endDate: "3 days",
        category: "Art",
        status: "On sale",
      },
      {
        id: 4,
        title: "Luxury Watch",
        description: "A luxurious watch with a sleek design.",
        currentBid: 5000,
        image: watch,
        endDate: "5 hours",
        category: "Accessories",
        status: "Ending soon",
      },
      {
        id: 5,
        title: "Pocket Watch",
        description:
          "A classic vintage pocket watch with intricate engravings.",
        currentBid: 200,
        image: pocketWatch,
        endDate: "3 hours",
        category: "Accessories",
        status: "On sale",
      },
    ];
    setAuctions(dummyAuctions);
  }, []);

  // Filter auctions based on filters and search input
  const filteredAuctions = auctions
    .filter((auction) =>
      auction.title.toLowerCase().includes(filter.toLowerCase())
    )
    .filter((auction) => {
      const [minPrice, maxPrice] = appliedFilters.priceRange;
      const matchesPrice =
        auction.currentBid >= minPrice && auction.currentBid <= maxPrice;
      const matchesStatus =
        appliedFilters.selectedStatus.length === 0 ||
        appliedFilters.selectedStatus.includes(auction.status);
      const matchesCategory =
        appliedFilters.selectedCategory.length === 0 ||
        appliedFilters.selectedCategory.includes(auction.category);
      return matchesPrice && matchesStatus && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOption === "Price: Low to High") {
        return a.currentBid - b.currentBid;
      } else if (sortOption === "Price: High to Low") {
        return b.currentBid - a.currentBid;
      } else {
        return 0; // Relevance, or default sorting (no changes)
      }
    });

  // Handle filter application from the sidebar
  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="py-2 text-sm text-center bg-gray-100">
        FREE Island-wide Delivery for LKR 12500+ Purchases
      </div>
      <div className="container mx-auto lg:px-20 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between py-2">
          <h1 className="text-2xl font-bold text-gray-800">Select Your Item</h1>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search auctions..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg shadow-sm w-80 focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>
        </div>

        {/* Filter and Sort Section */}
        <div className="flex items-center justify-between py-2 mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="px-4 py-2 text-white bg-black rounded-md"
          >
            Filters
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Sort By:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
            >
              <option value="Relevance">Relevance</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-5">
          {filteredAuctions.length > 0 ? (
            filteredAuctions.map((auction) => (
              <Link
                to={`/auctions/${auction.id}`}
                key={auction.id}
                className="block hover:shadow-lg"
              >
                <AuctionCard auction={auction} />
              </Link>
            ))
          ) : (
            <p>No auctions match your search.</p>
          )}
        </div>

        {/* Filter Sidebar */}
        {isSidebarOpen && (
          <FilterSidebar
            onApplyFilters={handleApplyFilters}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AuctionListing;
