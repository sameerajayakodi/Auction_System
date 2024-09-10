import React, { useState } from "react";
import AddAuctionModal from "./AddAuctionModal"; // Import the modal
import DeleteConfirmationModal from "./DeleteConfirmationModal"; // Import the delete confirmation modal

const ManageAuctions = () => {
  // Initialize with dummy data
  const [auctions, setAuctions] = useState([
    {
      title: "Auction 1",
      description: "Description for Auction 1",
      startingBid: "100",
      endDate: "2024-10-01T12:00",
    },
    {
      title: "Auction 2",
      description: "Description for Auction 2",
      startingBid: "200",
      endDate: "2024-10-02T12:00",
    },
    {
      title: "Auction 3",
      description: "Description for Auction 3",
      startingBid: "300",
      endDate: "2024-10-03T12:00",
    },
    {
      title: "Auction 4",
      description: "Description for Auction 4",
      startingBid: "400",
      endDate: "2024-10-04T12:00",
    },
    {
      title: "Auction 5",
      description: "Description for Auction 5",
      startingBid: "500",
      endDate: "2024-10-05T12:00",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [deletingIndex, setDeletingIndex] = useState(null);

  const handleAddAuction = (newAuction) => {
    if (editingIndex !== null) {
      // Update the existing auction
      const updatedAuctions = auctions.map((auction, index) =>
        index === editingIndex ? newAuction : auction
      );
      setAuctions(updatedAuctions);
      setEditingIndex(null);
    } else {
      // Add new auction
      setAuctions([...auctions, newAuction]);
    }
    setIsModalOpen(false);
  };

  const handleEditAuction = (index) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteAuction = (index) => {
    setDeletingIndex(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAuction = () => {
    setAuctions(auctions.filter((_, i) => i !== deletingIndex));
    setDeletingIndex(null);
    setIsDeleteModalOpen(false);
  };

  const cancelDeleteAuction = () => {
    setDeletingIndex(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold">Manage Auctions</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-2 mb-6 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Add Auction
      </button>
      <AddAuctionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddAuction}
        auction={editingIndex !== null ? auctions[editingIndex] : null}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDeleteAuction}
        onConfirm={confirmDeleteAuction}
      />
      {/* Display the auctions */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="text-white bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Title
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Description
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Starting Bid
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              End Date
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {auctions.map((auction, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{auction.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {auction.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {auction.startingBid}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{auction.endDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleEditAuction(index)}
                  className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAuction(index)}
                  className="px-4 py-2 ml-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAuctions;
