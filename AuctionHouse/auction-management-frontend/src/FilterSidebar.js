import React, { useState } from "react";

const FilterSidebar = ({ onApplyFilters, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 22320]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedEndingSoon, setSelectedEndingSoon] = useState([]);

  // Handle Apply Filters
  const handleApplyFilters = () => {
    onApplyFilters({
      priceRange,
      selectedStatus,
      selectedCategory,
      selectedEndingSoon,
    });
    onClose();
  };

  return (
    <div>
      {/* Sidebar Overlay */}
      <div
        className="fixed inset-0 z-40 transition-opacity bg-gray-800 bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 left-0 z-50 h-full p-6 transition-transform transform translate-x-0 bg-blue-200 shadow-lg w-80">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Filters</h2>
          <button onClick={onClose} className="text-gray-600">
            ✕
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Price</h3>
          <div className="flex items-center justify-between">
            <span>Rs. {priceRange[0]}</span>
            <span>Rs. {priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="22320"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-full mt-2"
          />
          <input
            type="range"
            min="0"
            max="22320"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full mt-2"
          />
        </div>

        {/* Status */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Status</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedStatus.includes("On sale")}
              onChange={(e) =>
                setSelectedStatus(
                  e.target.checked
                    ? [...selectedStatus, "On sale"]
                    : selectedStatus.filter((status) => status !== "On sale")
                )
              }
              className="mr-2"
            />
            On sale
          </label>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Category</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedCategory.includes("Men")}
              onChange={(e) =>
                setSelectedCategory(
                  e.target.checked
                    ? [...selectedCategory, "Men"]
                    : selectedCategory.filter((category) => category !== "Men")
                )
              }
              className="mr-2"
            />
            Men
          </label>
        </div>

        {/* Ending Soon */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Ending Soon</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedEndingSoon.includes("1 day")}
              onChange={(e) =>
                setSelectedEndingSoon(
                  e.target.checked
                    ? [...selectedEndingSoon, "1 day"]
                    : selectedEndingSoon.filter((item) => item !== "1 day")
                )
              }
              className="mr-2"
            />
            Ending within 1 day
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedEndingSoon.includes("2 days")}
              onChange={(e) =>
                setSelectedEndingSoon(
                  e.target.checked
                    ? [...selectedEndingSoon, "2 days"]
                    : selectedEndingSoon.filter((item) => item !== "2 days")
                )
              }
              className="mr-2"
            />
            Ending within 2 days
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedEndingSoon.includes("3 days")}
              onChange={(e) =>
                setSelectedEndingSoon(
                  e.target.checked
                    ? [...selectedEndingSoon, "3 days"]
                    : selectedEndingSoon.filter((item) => item !== "3 days")
                )
              }
              className="mr-2"
            />
            Ending within 3 days
          </label>
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApplyFilters}
          className="px-4 py-2 text-white bg-black rounded-md"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
