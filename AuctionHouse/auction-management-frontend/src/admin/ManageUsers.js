import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditUserModal from "./EditUserModal";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch("https://localhost:44377/api/users"); // Replace with your API URL
        const data = await response.json();
        setUsers(data); // Set the users state
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to load users. Please try again later."); // Handle error
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchUsers();
  }, []);

  // Handle edit user action
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  // Save updated user
  const handleSaveUser = async (updatedUser) => {
    setLoading(true);
    try {
      await fetch(`https://localhost:44377/api/users/${updatedUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      setUsers(
        users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      );
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error saving user:", error);
      setError("Failed to save user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle delete user action
  const handleDeleteUser = (userId) => {
    setUserToDelete(userId);
    setIsDeleteModalOpen(true);
  };

  // Confirm delete user
  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      await fetch(`https://localhost:44377/api/users/${userToDelete}`, {
        method: "DELETE",
      });
      setUsers(users.filter((user) => user.id !== userToDelete));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("Failed to delete user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold">Manage Users</h1>

      {/* Error message */}
      {error && <div className="mb-4 text-red-500">{error}</div>}

      {/* Show loading spinner if data is being loaded */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="text-white bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="px-4 py-2 mr-2 font-semibold text-white bg-blue-500 rounded"
                    disabled={loading} // Disable while loading
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="px-4 py-2 font-semibold text-white bg-red-500 rounded"
                    disabled={loading} // Disable while loading
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit User Modal */}
      {selectedUser && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          user={selectedUser}
          onSave={handleSaveUser}
        />
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ManageUsers;
