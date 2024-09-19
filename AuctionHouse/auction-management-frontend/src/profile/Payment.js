import React, { useState } from "react";
import ReactDOM from "react-dom";

const Payment = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardBrand, setCardBrand] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Detect card brand
  const detectCardBrand = (number) => {
    if (number.startsWith("4")) {
      return "Visa";
    } else if (number.startsWith("5")) {
      return "MasterCard";
    } else {
      return "Unknown";
    }
  };

  const handleAddCard = () => {
    if (
      cardNumber === "" ||
      cardName === "" ||
      expiryDate === "" ||
      cvc === ""
    ) {
      setError("All fields are required.");
      return;
    }

    const brand = detectCardBrand(cardNumber);
    setPaymentMethods([
      ...paymentMethods,
      { cardName, cardNumber, expiryDate, cvc, brand },
    ]);
    setSuccess("Card added successfully.");
    setError("");
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setCardNumber("");
    setCardName("");
    setExpiryDate("");
    setCvc("");
    setCardBrand("");
  };

  const handleDeletePaymentMethod = (index) => {
    setPaymentMethods(paymentMethods.filter((_, i) => i !== index));
    setSuccess("Payment method removed successfully.");
  };

  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-bold">Payment Methods</h2>
      <div className="p-6 bg-white border-2">
        {error && <div className="mb-4 text-red-600">{error}</div>}
        {success && <div className="mb-4 text-green-600">{success}</div>}

        <div className="mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-2 mb-4 text-white bg-gray-600 rounded-md"
          >
            Add New Card
          </button>
        </div>

        {paymentMethods.length > 0 ? (
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Available Payment Methods
            </h3>
            <ul>
              {paymentMethods.map((method, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center">
                    {method.brand === "Visa" && (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                        alt="Visa"
                        className="h-6 mr-2"
                      />
                    )}
                    {method.brand === "MasterCard" && (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                        alt="MasterCard"
                        className="h-6 mr-2"
                      />
                    )}
                    <span>
                      {method.cardName} - **** **** ****{" "}
                      {method.cardNumber.slice(-4)}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeletePaymentMethod(index)}
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No payment methods available.</p>
        )}
      </div>

      {/* Modal Form for Adding New Card */}
      {isModalOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-lg font-bold">Add New Card</h3>

              {/* Two-Column Layout */}
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="text-gray-700">Cardholder Name</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                    placeholder="Enter cardholder name"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-gray-700">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                      setCardBrand(detectCardBrand(e.target.value));
                    }}
                    className="w-full p-2 mt-1 border rounded-md"
                    placeholder="Enter card number"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-gray-700">Expiry Date</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-gray-700">CVC</label>
                  <input
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md"
                    placeholder="CVC"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleAddCard}
                  className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-900"
                >
                  Add
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Payment;
