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
    // Fetch users from an API or use mock data
    const fetchUsers = async () => {
      // Example data
      const mockUsers = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
      ];
      setUsers(mockUsers);
    };

    fetchUsers();
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleSaveUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const handleDeleteUser = (userId) => {
    setUserToDelete(userId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter((user) => user.id !== userToDelete));
    }
    setIsDeleteModalOpen(false);
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
