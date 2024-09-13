import React from "react";

const Modal = ({
  isOpen,
  onRequestClose,
  title,
  onSave,
  formData,
  setFormData,
  children, // For custom content like confirmation messages
}) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-1/3 p-6 bg-white rounded shadow-lg">
        <button
          onClick={onRequestClose}
          className="absolute text-xl font-bold top-2 right-2"
        >
          &times;
        </button>
        <h2 className="mb-4 text-xl font-bold">{title}</h2>
        {children ? (
          // Render custom content (e.g., confirmation message)
          <div>
            {children}
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={onSave} // Yes button triggers onSave
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={onRequestClose} // No button triggers onRequestClose
                className="px-4 py-2 text-black bg-gray-300 rounded"
              >
                No
              </button>
            </div>
          </div>
        ) : (
          // Render form if no custom content is provided
          <form onSubmit={onSave}>
            <div className="mb-4">
              <label className="block mb-2">Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Current Bid:</label>
              <input
                type="number"
                name="currentBid"
                value={formData.currentBid}
                onChange={handleChange}
                className="w-full p-2 border"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onRequestClose}
                className="px-4 py-2 text-white bg-gray-500 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
