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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users"); // Replace with your API URL
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleSaveUser = async (updatedUser) => {
    try {
      await fetch(`/api/users/${updatedUser.id}`, {
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
    }
  };

  const handleDeleteUser = (userId) => {
    setUserToDelete(userId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await fetch(`/api/users/${userToDelete}`, { method: "DELETE" });
      setUsers(users.filter((user) => user.id !== userToDelete));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold">Manage Users</h1>
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
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="px-4 py-2 font-semibold text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
