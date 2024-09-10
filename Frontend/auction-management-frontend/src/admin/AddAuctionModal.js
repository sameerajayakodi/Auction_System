import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const AddAuctionModal = ({ isOpen, onClose, onSave, auction }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startingBid, setStartingBid] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (auction) {
      setTitle(auction.title);
      setDescription(auction.description);
      setStartingBid(auction.startingBid);
      setEndDate(auction.endDate);
    }
  }, [auction]);

  const handleSave = () => {
    onSave({ title, description, startingBid, endDate });
    onClose();
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
            >
              Save
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
