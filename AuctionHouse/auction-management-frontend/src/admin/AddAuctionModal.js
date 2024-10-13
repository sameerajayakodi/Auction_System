import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddAuctionModal = ({ isOpen, onClose, auction, apiEndpoint }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startingBid, setStartingBid] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false); // to handle loading state
  const [error, setError] = useState(null); // to handle errors

  useEffect(() => {
    if (auction) {
      setTitle(auction.title);
      setDescription(auction.description);
      setStartingBid(auction.startingBid);
      setEndDate(auction.endDate);
    }
  }, [auction]);

  const handleSave = async () => {
    // Validate the data before sending (optional but recommended)
    if (!title || !description || !startingBid || !endDate) {
      setError("All fields are required");
      return;
    }

    setLoading(true); // Start loading
    setError(null); // Clear any previous errors

    const auctionData = { title, description, startingBid, endDate };

    try {
      const response = await fetch(apiEndpoint, {
        method: auction ? "PUT" : "POST", // Use PUT for editing and POST for adding
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(auctionData),
      });

      if (!response.ok) {
        throw new Error("Failed to save auction. Please try again.");
      }

      const result = await response.json();
      console.log("Auction saved successfully:", result);
      onClose(); // Close modal after successful save
    } catch (error) {
      setError(error.message); // Set error message if any issue occurs
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add/Edit Auction"
      className="fixed inset-0 z-50 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          {auction ? "Edit Auction" : "Add New Auction"}
        </h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-semibold" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-lg font-semibold"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-lg font-semibold"
              htmlFor="startingBid"
            >
              Starting Bid
            </label>
            <input
              type="number"
              id="startingBid"
              value={startingBid}
              onChange={(e) => setStartingBid(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-lg font-semibold"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              type="datetime-local"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-white bg-gray-500 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddAuctionModal;
