import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal"; // Import the modal component
import EditUserModal from "./EditUserModal"; // Import the EditUserModal component

Modal.setAppElement("#root");

const EditUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data by ID
    const fetchUser = async () => {
      // Replace with API call
      const mockUser = {
        id: userId,
        fullName: "John Doe", // Use fullName for modal compatibility
        email: "john@example.com",
        role: "User",
      };
      setUser(mockUser);
    };

    fetchUser();
  }, [userId]);

  const handleSave = (updatedUser) => {
    setUser(updatedUser); // Update user data with the modified data from the modal
    setModalOpen(false); // Close the modal
  };

  const handleModalOpen = () => {
    setModalOpen(true); // Open the modal
  };

  const handleRedirect = () => {
    // Save changes and redirect
    navigate("/admin/manage-users");
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold">Edit User</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={user.fullName} // Use fullName for display
            onChange={(e) => setUser({ ...user, fullName: e.target.value })} // Update fullName
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-semibold" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleModalOpen} // Open modal on button click
            className="px-6 py-2 font-semibold text-white bg-blue-500 rounded"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={handleRedirect}
            className="px-6 py-2 font-semibold text-white bg-green-500 rounded"
          >
            Save & Redirect
          </button>
        </div>
      </form>

      {/* Modal for editing user */}
      <EditUserModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)} // Close modal
        user={user}
        onSave={handleSave} // Handle save in the modal
      />
    </div>
  );
};

export default EditUser;
