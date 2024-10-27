import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionCard from "./AuctionCard";
import FilterSidebar from "./FilterSidebar";

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

  // Fetch auction data from backend API
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch("https://localhost:44377/api/auction");
        const data = await response.json();
        setAuctions(data);
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    };

    fetchAuctions();
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
    <div className="">
      {/* Top Bar */}
      <div className="container mx-auto lg:px-20 sm:px-6">
        {/* Header */}
        <div className="flex items-start justify-center py-6">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Search Items..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-4 text-sm border border-gray-300 rounded-full shadow-sm w-96 focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
            <span className="absolute right-0 p-4 text-gray-600 bg-gray-200 border-t border-b border-gray-200 rounded-full">
              {/* Inline SVG for search icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.386a1 1 0 11-1.415 1.415l-3.386-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Filter and Sort Section */}
        <div className="flex items-center justify-between py-2 mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center px-2 py-1 text-sm text-gray-500 bg-transparent border-2"
          >
            <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
            Filters
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort By:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 text-sm text-gray-600 border border-gray-300 focus:ring-2 focus:ring-black"
            >
              <option value="Relevance">Relevance</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Auction Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredAuctions.length > 0 ? (
            filteredAuctions.map((auction) => (
              <Link
                to={`/auctions/${auction.id}`}
                key={auction.id}
                className="block transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
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
