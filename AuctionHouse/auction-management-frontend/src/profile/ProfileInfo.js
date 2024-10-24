import React, { useContext, useState } from "react";
import { UserContext } from "../auth/UserContext";
import ConfirmationModal from "../components/ConfirmationModal";
import profile from "../images/1 (5).jpg";
import cover from "../images/registerImage.jpg";

const ProfileInfo = () => {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileInfo, setProfileInfo] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    location: user?.location || "",
    address: user?.address || "",
  });

  const handleEditClick = () => setIsEditing(true);
  const handleCancelClick = () => setIsEditing(false);

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  const handleModalClose = () => setIsModalOpen(false);

  const createPayload = () => ({
    id: user?.id,
    fullName: profileInfo.fullName || null,
    email: profileInfo.email,
    password: user?.password || "string",
    address: profileInfo.address || null,
    location: profileInfo.location || null,
    phone: profileInfo.phone || "string",
  });

  const handleSaveClick = () => {
    // Basic validation check (you can enhance this further)
    if (!profileInfo.email) {
      setError("Email is required.");
      return;
    }

    setIsModalOpen(true);
  };

  const handleModalConfirm = async () => {
    setLoading(true);
    setError(null);
    const apiUrl = `https://localhost:44377/api/users/UpdateUser/${user?.id}`;

    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createPayload()),
      });

      if (response.ok) {
        const updatedUser = { ...user, ...profileInfo };
        setUser(updatedUser);
        setIsEditing(false);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to save profile data.");
      }
    } catch (error) {
      setError("Failed to save profile data. Please try again later.");
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="mb-2 text-2xl font-bold">Profile Information</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="p-6 bg-white border-2">
        <div className="relative mb-2">
          <img
            src={cover}
            alt="Cover"
            className="object-cover w-full h-32 rounded-t-lg"
          />
          <div className="absolute bottom-0 left-4">
            <img
              src={profile}
              alt="Profile"
              className="w-24 h-24 border-4 border-white rounded-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {["fullName", "email", "phone", "location"].map((field, index) => (
            <div className="col-span-1" key={index}>
              <label className="text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={profileInfo[field]}
                onChange={handleChange}
                className="w-full p-2 mt-1 border-2 rounded-md"
                readOnly={!isEditing}
              />
            </div>
          ))}
          <div className="col-span-2">
            <label className="text-gray-700">Address</label>
            <textarea
              name="address"
              value={profileInfo.address}
              onChange={handleChange}
              className="w-full p-2 mt-1 border-2 rounded-md"
              readOnly={!isEditing}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          {!isEditing ? (
            <button
              className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={handleEditClick}
            >
              Edit
            </button>
          ) : (
            <>
              <button
                className="px-4 py-2 mr-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                onClick={handleSaveClick}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      {isModalOpen && (
        <ConfirmationModal
          onConfirm={handleModalConfirm}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
