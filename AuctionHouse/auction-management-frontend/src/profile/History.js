import React, { useEffect, useState } from "react";
import axios from "axios"; // Assuming you're using axios for API calls

const History = () => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace the URL with your actual backend API endpoint
    const fetchHistory = async () => {
      try {
        const response = await axios.get("https://api.example.com/history");
        setTransactionHistory(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch transaction history.");
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-bold">History</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : transactionHistory.length > 0 ? (
        <div className="p-6 bg-white border-2">
          {transactionHistory.map((transaction, index) => (
            <div key={index} className="pb-4 mb-4 border-b">
              <p>
                <strong>Transaction ID:</strong> {transaction.id}
              </p>
              <p>
                <strong>Amount:</strong> ${transaction.amount}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(transaction.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No transaction history available.</p>
      )}
    </div>
  );
};

export default History;
