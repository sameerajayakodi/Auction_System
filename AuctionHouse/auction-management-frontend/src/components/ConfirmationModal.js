// components/ConfirmationModal.js
import React from "react";
import ReactDOM from "react-dom";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg font-bold">Confirm Changes</h3>
        <p className="mt-2">Are you sure you want to save these changes?</p>
        <div className="flex justify-end mt-4 space-x-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-gray-500 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmationModal;
