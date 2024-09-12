import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data by ID
    const fetchUser = async () => {
      // Replace with API call
      const mockUser = {
        id: userId,
        name: "John Doe",
        email: "john@example.com",
        role: "User",
      };
      setUser(mockUser);
    };

    fetchUser();
  }, [userId]);

  const handleSave = () => {
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
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
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
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2 font-semibold text-white bg-blue-500 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
