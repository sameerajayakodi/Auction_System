import axios from "axios";
import React, { useEffect, useState } from "react";

const BidHistory = ({ auctionId }) => {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await axios.get(
          `/api/Bids/getBidsForAuction/${auctionId}`
        );
        setBids(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch bid history.");
        setLoading(false);
      }
    };

    fetchBids();
  }, [auctionId]);

  if (loading) return <div>Loading bid history...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-50">
      <h3 className="mb-4 text-lg font-bold text-center text-gray-800">
        Bid History
      </h3>
      {bids.length > 0 ? (
        <div className="space-y-2">
          {bids.map((bid) => (
            <div
              key={bid.id}
              className="flex justify-between p-2 bg-white rounded-md shadow-sm"
            >
              <span className="font-semibold text-gray-700">{bid.user}</span>
              <span className="text-yellow-500">${bid.amount.toFixed(2)}</span>
              <span className="text-sm text-gray-500">
                {new Date(bid.timestamp).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No bids yet. Be the first to bid!
        </p>
      )}
    </div>
  );
};

export default BidHistory;
