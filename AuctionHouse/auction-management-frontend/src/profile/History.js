import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../auth/UserContext"; // Assuming you have UserContext

const History = () => {
  const { user } = useContext(UserContext); // Get the current user from context
  const [bidHistory, setBidHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the bid history for the current user
    const fetchHistory = async () => {
      try {
        if (!user || !user.id) {
          throw new Error("User ID is not available");
        }

        // Dynamically set the user ID in the API endpoint
        const response = await axios.get(
          `https://localhost:44377/api/Bids/getBidsForUser/${user.id}`
        );

        setBidHistory(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch bid history.");
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user]); // Run effect when user context changes

  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-bold">Bid History</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : bidHistory.length > 0 ? (
        <div className="p-6 bg-white border-2">
          {bidHistory.map((bid, index) => (
            <div key={index} className="pb-4 mb-4 border-b">
              <p>
                <strong>Bid ID:</strong> {bid.id}
              </p>
              <p>
                <strong>Amount:</strong> ${bid.amount}
              </p>
              <p>
                <strong>Date:</strong> {new Date(bid.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Auction Title:</strong> {bid.auctionTitle}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No bid history available.</p>
      )}
    </div>
  );
};

export default History;
