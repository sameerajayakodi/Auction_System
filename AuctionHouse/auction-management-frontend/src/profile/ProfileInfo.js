import React, { useContext, useState } from "react";
import { UserContext } from "../auth/UserContext"; // Import UserContext
import ConfirmationModal from "../components/ConfirmationModal";
import profile from "../images/1 (5).jpg"; // Profile photo path
import cover from "../images/registerImage.jpg"; // Cover photo path

const ProfileInfo = () => {
  const { user } = useContext(UserContext); // Access user from UserContext
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    fullName: user?.fullName || "", // Use user data from context
    email: user?.email || "",
    phone: user?.phone || "",
    location: user?.location || "",
    address: user?.address || "", // Changed from bio to address
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setIsModalOpen(true);
  };

  const handleModalConfirm = async () => {
    try {
      const userId = user?.id; // Get user ID from the context
      const apiUrl = `https://localhost:44377/api/users/UpdateUser/${userId}`; // API endpoint with user ID

      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileInfo),
      });

      if (response.ok) {
        setIsEditing(false);
      } else {
        console.error("Failed to save profile data");
      }
    } catch (error) {
      console.error("Failed to save profile data:", error);
    }

    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <h2 className="mb-2 text-2xl font-bold">Profile Information</h2>
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
          <div className="col-span-1">
            <label className="text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profileInfo.fullName}
              onChange={handleChange}
              className="w-full p-2 mt-1 border-2 rounded-md"
              readOnly={!isEditing}
            />
          </div>
          <div className="col-span-1">
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profileInfo.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border-2"
              readOnly={!isEditing}
            />
          </div>
          <div className="col-span-1">
            <label className="text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={profileInfo.phone}
              onChange={handleChange}
              className="w-full p-2 mt-1 border-2"
              readOnly={!isEditing}
            />
          </div>
          <div className="col-span-1">
            <label className="text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={profileInfo.location}
              onChange={handleChange}
              className="w-full p-2 mt-1 border-2"
              readOnly={!isEditing}
            />
          </div>
          <div className="col-span-2">
            <label className="text-gray-700">Address</label>
            <textarea
              name="address"
              value={profileInfo.address}
              onChange={handleChange}
              className="w-full p-2 mt-1 border-2"
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
              >
                Save
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
