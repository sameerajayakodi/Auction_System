import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddAuctionModal = ({ isOpen, onClose, auction, saveAuctionData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentBid, setCurrentBid] = useState(0);
  const [image, setImage] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (auction) {
      setTitle(auction.title);
      setDescription(auction.description);
      setCurrentBid(auction.currentBid);
      setImage(auction.image);
      setEndDate(auction.endDate);
      setCategory(auction.category);
      setStatus(auction.status);
    } else {
      setTitle("");
      setDescription("");
      setCurrentBid(0);
      setImage("");
      setEndDate("");
      setCategory("");
      setStatus("");
    }
  }, [auction]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (
      !title ||
      !description ||
      !currentBid ||
      !image ||
      !endDate ||
      !category ||
      !status
    ) {
      setError("All fields are required");
      return;
    }

    if (isNaN(currentBid) || currentBid < 0) {
      setError("Current bid must be a non-negative number");
      return;
    }

    if (new Date(endDate) <= new Date()) {
      setError("End date must be in the future");
      return;
    }

    setLoading(true);
    setError(null);

    const auctionData = {
      title,
      description,
      currentBid: parseFloat(currentBid),
      image,
      endDate,
      category,
      status,
    };

    const endpoint = auction
      ? `https://localhost:44377/api/auction/UpdateAuction/${auction.id}`
      : "https://localhost:44377/api/auction";

    try {
      const response = await fetch(endpoint, {
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
      saveAuctionData(result);
      onClose();
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
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          {auction ? "Edit Auction" : "Add New Auction"}
        </h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-semibold" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="col-span-1">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="currentBid"
            >
              Current Bid
            </label>
            <input
              type="number"
              id="currentBid"
              value={currentBid}
              onChange={(e) => setCurrentBid(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="3"
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-semibold" htmlFor="image">
              Select Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="col-span-1">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              type="datetime-local"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="col-span-1">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="category"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="col-span-1">
            <label
              className="block mb-2 text-sm font-semibold"
              htmlFor="status"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex justify-end col-span-2 mt-4 space-x-4">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 text-white bg-blue-500 rounded-lg"
              disabled={loading}
            >
              {loading
                ? auction
                  ? "Updating..."
                  : "Saving..."
                : auction
                ? "Update"
                : "Save"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-white bg-gray-500 rounded-lg"
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
