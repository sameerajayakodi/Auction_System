import React, { useEffect, useState } from "react";
import AddAuctionModal from "./AddAuctionModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const ManageAuctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [deletingIndex, setDeletingIndex] = useState(null);

  useEffect(() => {
    fetchAuctions();
  }, []);

  const fetchAuctions = async () => {
    try {
      const response = await fetch("https://localhost:44377/api/auction");
      const data = await response.json();
      setAuctions(data);
    } catch (error) {
      console.error("Error fetching auctions:", error);
    }
  };

  const handleAddAuction = async (newAuction) => {
    if (editingIndex !== null) {
      // Update existing auction
      try {
        await fetch(
          `https://localhost:44377/api/auction/UpdateAuction/${auctions[editingIndex].id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newAuction),
          }
        );
        fetchAuctions();
      } catch (error) {
        console.error("Error updating auction:", error);
      }
    } else {
      // Add a new auction
      try {
        await fetch("https://localhost:44377/api/auction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAuction),
        });
        fetchAuctions();
      } catch (error) {
        console.error("Error adding auction:", error);
      }
    }
    setIsModalOpen(false);
    setEditingIndex(null); // Reset editing index after save
  };

  const handleEditAuction = (index) => {
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleDeleteAuction = (index) => {
    setDeletingIndex(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAuction = async () => {
    try {
      await fetch(
        `https://localhost:44377/api/auction/DeleteAuction/${auctions[deletingIndex].id}`,
        {
          method: "DELETE",
        }
      );
      fetchAuctions();
    } catch (error) {
      console.error("Error deleting auction:", error);
    }
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
        onClick={() => {
          setEditingIndex(null); // Reset editing index for new auction
          setIsModalOpen(true);
        }}
        className="px-6 py-2 mb-6 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Add Auction
      </button>
      <AddAuctionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddAuction}
        auction={editingIndex !== null ? auctions[editingIndex] : null} // Pass auction details if editing
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={cancelDeleteAuction}
        onConfirm={confirmDeleteAuction}
      />
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
