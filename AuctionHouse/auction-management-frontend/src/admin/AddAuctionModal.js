import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddAuctionModal = ({ isOpen, onClose, auction }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startingBid, setStartingBid] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiEndpoint = "https://localhost:44377/api/auction";

  useEffect(() => {
    if (auction) {
      setTitle(auction.title);
      setDescription(auction.description);
      setStartingBid(auction.startingBid);
      setEndDate(auction.endDate);
    } else {
      setTitle("");
      setDescription("");
      setStartingBid("");
      setEndDate("");
    }
  }, [auction]);

  const handleSave = async () => {
    if (!title || !description || !startingBid || !endDate) {
      setError("All fields are required");
      return;
    }

    if (isNaN(startingBid) || startingBid <= 0) {
      setError("Starting bid must be a positive number");
      return;
    }

    if (new Date(endDate) <= new Date()) {
      setError("End date must be in the future");
      return;
    }

    setLoading(true);
    setError(null);

    const auctionData = { title, description, startingBid, endDate };

    try {
      const response = await fetch(apiEndpoint, {
        method: auction ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(auctionData),
      });

      if (!response.ok) {
        let errorMessage = "Failed to save auction.";
        if (response.status === 400) {
          errorMessage = "Invalid data provided.";
        } else if (response.status === 500) {
          errorMessage = "Server error, please try again later.";
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log("Auction saved successfully:", result);
      onClose(); // Close modal after success
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
