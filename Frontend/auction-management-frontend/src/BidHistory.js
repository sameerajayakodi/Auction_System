import axios from "axios";
import React, { useEffect, useState } from "react";

const BidHistory = ({ auctionId }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/auctions/${auctionId}/bids`)
      .then((response) => setBids(response.data))
      .catch((error) => console.error("Error fetching bid history:", error));
  }, [auctionId]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Bid History</h2>
      <ul>
        {bids.map((bid) => (
          <li key={bid.id} className="border-b py-2">
            <p className="text-gray-700">
              ${bid.amount} by {bid.user} on{" "}
              {new Date(bid.timestamp).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BidHistory;
