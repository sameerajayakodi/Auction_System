import React, { useEffect, useState } from "react";
import ConfirmationModal from "../components/ConfirmationModal";
import profile from "../images/1 (5).jpg"; // Correct profile image path
import cover from "../images/registerImage.jpg"; // Correct cover image path

const ProfileInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    fullName: "Ronald Richards",
    email: "RonaldRich@example.com",
    phone: "(219) 555-0114",
    location: "California",
    bio: "Hi 👋, I'm Ronald, a passionate UX designer with 10 years of experience in creating intuitive and user-centered digital experiences.",
  });

  useEffect(() => {
    // Fetch profile data from backend when the component mounts
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile"); // Replace with actual API endpoint
        const data = await response.json();
        setProfileInfo(data);
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      }
    };

    fetchProfile();
  }, []);

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
      // Save updated profile info to backend (replace API endpoint with the actual one)
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileInfo),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        setIsEditing(false);
      } else {
        // Handle failure (e.g., show an error message)
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
    <div className="flex flex-col ">
      <h2 className="mb-2 text-2xl font-bold">Profile Information</h2>
      <div className="p-6 bg-white border-2 ">
        <div className="relative mb-2">
          <img
            src={cover} // Cover photo
            alt="Cover"
            className="object-cover w-full h-32 rounded-t-lg"
          />
          <div className="absolute bottom-0 left-4">
            <img
              src={profile} // Profile photo
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
        </div>
        <div className="mt-6">
          <label className="text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={profileInfo.bio}
            onChange={handleChange}
            className="w-full p-2 mt-1 border-2"
            readOnly={!isEditing}
          />
        </div>
        <div className="flex justify-end mt-6 space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSaveClick}
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                Save
              </button>
              <button
                onClick={handleCancelClick}
                className="px-4 py-2 text-white bg-gray-500 rounded-md"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditClick}
              className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-900"
            >
              Edit
            </button>
          )}
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      />
    </div>
  );
};

export default ProfileInfo;
