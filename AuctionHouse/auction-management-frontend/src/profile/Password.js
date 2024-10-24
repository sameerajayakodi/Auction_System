import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../auth/UserContext"; // Make sure to import your UserContext
import ConfirmationModal from "../components/ConfirmationModal";

const Password = () => {
  const { userId } = useContext(UserContext); // Use context to get user ID
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Validate password before updating
  const validatePassword = () => {
    if (newPassword !== confirmNewPassword) {
      setError("New password and confirmation do not match.");
      return false;
    }
    if (newPassword.length < 6) {
      setError("New password is too short.");
      return false;
    }
    setError("");
    return true;
  };

  const handleUpdatePassword = () => {
    if (!validatePassword()) return;
    setIsModalOpen(true); // Show confirmation modal before submitting
  };

  // Function to call API to update the password
  const confirmUpdatePassword = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://localhost:44377/api/users/UpdatePassword",
        {
          id: userId, // Use the userId from context
          password: currentPassword,
          newPasswd: newPassword,
        }
      );

      setLoading(false);
      setSuccess("Password updated successfully.");
      setError("");
      setIsModalOpen(false);
    } catch (err) {
      setLoading(false);
      setError("Failed to update password. Please try again.");
      setSuccess("");
      setIsModalOpen(false);
    }
  };

  const cancelUpdatePassword = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 border-2">
      <h2 className="mb-6 text-2xl font-bold">Change Password</h2>
      <div className="p-6 bg-white">
        {error && <div className="mb-4 text-red-600">{error}</div>}
        {success && <div className="mb-4 text-green-600">{success}</div>}

        <div className="mb-4">
          <label className="text-gray-700" htmlFor="current-password">
            Current Password
          </label>
          <input
            id="current-password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 mt-1 border-2"
            aria-describedby="current-password-description"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700" htmlFor="new-password">
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 mt-1 border-2"
            aria-describedby="new-password-description"
          />
          <div id="new-password-description" className="mt-1 text-gray-500">
            {newPassword.length < 6 &&
              "Password must be at least 6 characters long."}
          </div>
        </div>

        <div className="mb-4">
          <label className="text-gray-700" htmlFor="confirm-new-password">
            Confirm New Password
          </label>
          <input
            id="confirm-new-password"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="w-full p-2 mt-1 border-2"
            aria-describedby="confirm-new-password-description"
          />
        </div>

        <button
          onClick={handleUpdatePassword}
          className={`p-2 text-white ${
            loading ? "bg-gray-500" : "bg-gray-600"
          } rounded-md`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={cancelUpdatePassword}
        onConfirm={confirmUpdatePassword}
      />
    </div>
  );
};

export default Password;
