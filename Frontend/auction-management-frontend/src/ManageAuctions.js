import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axiosConfig"; // Adjust the path

const ManageAuctions = () => {
  const [auctions, setAuctions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all auctions
    const fetchAuctions = async () => {
      try {
        const response = await axios.get("/admin/auctions"); // Adjust the endpoint
        setAuctions(response.data);
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    };

    fetchAuctions();
  }, []);

  const deleteAuction = async (id) => {
    try {
      await axios.delete(`/admin/auctions/${id}`);
      setAuctions(auctions.filter((auction) => auction.id !== id)); // Update state
    } catch (error) {
      console.error("Error deleting auction:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Manage Auctions</h1>
      <button
        onClick={() => navigate("/admin/add-auction")}
        className="p-2 mb-4 text-white bg-blue-500 rounded-lg"
      >
        Add Auction
      </button>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Starting Bid</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((auction) => (
            <tr key={auction.id}>
              <td className="px-4 py-2 border">{auction.title}</td>
              <td className="px-4 py-2 border">${auction.startingBid}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => navigate(`/admin/edit-auction/${auction.id}`)}
                  className="p-2 mr-2 text-white bg-yellow-500 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteAuction(auction.id)}
                  className="p-2 text-white bg-red-500 rounded-lg"
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
